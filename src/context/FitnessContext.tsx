import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FitnessData, Workout, WorkoutType, WeightEntry } from '../types';
import { today, computeStreak } from '../utils/dateUtils';

const DEFAULT_DATA: FitnessData = {
  stepGoal: 10000,
  stepsByDate: {},
  workouts: [],
  nutritionByDate: {},
  weightEntries: [],
};

interface FitnessContextType {
  data: FitnessData;
  // Steps
  setStepsForToday: (count: number) => void;
  setStepGoal: (goal: number) => void;
  // Workouts
  addWorkout: (type: WorkoutType, durationMinutes: number, notes?: string, caloriesBurned?: number) => void;
  deleteWorkout: (id: string) => void;
  // Nutrition
  setCaloriesForToday: (calories: number) => void;
  setCaloriesGoal: (goal: number) => void;
  setWaterForToday: (glasses: number) => void;
  setWaterGoal: (goal: number) => void;
  // Weight
  addWeightEntry: (weightKg: number, date?: string) => void;
  removeWeightEntry: (date: string) => void;
  // Computed
  todaySteps: number;
  todayStepGoal: number;
  todayCalories: number;
  todayCaloriesGoal: number;
  todayWater: number;
  todayWaterGoal: number;
  streak: number;
  activeToday: boolean;
}

const FitnessContext = createContext<FitnessContextType | null>(null);

export function FitnessProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useLocalStorage<FitnessData>('fitnez-data', DEFAULT_DATA);

  const todayStr = today();

  // Steps helpers
  const setStepsForToday = useCallback((count: number) => {
    setData(prev => ({
      ...prev,
      stepsByDate: {
        ...prev.stepsByDate,
        [todayStr]: {
          date: todayStr,
          count,
          goal: prev.stepsByDate[todayStr]?.goal ?? prev.stepGoal,
        },
      },
    }));
  }, [setData, todayStr]);

  const setStepGoal = useCallback((goal: number) => {
    setData(prev => ({ ...prev, stepGoal: goal }));
  }, [setData]);

  // Workouts
  const addWorkout = useCallback((
    type: WorkoutType,
    durationMinutes: number,
    notes?: string,
    caloriesBurned?: number,
  ) => {
    const workout: Workout = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: todayStr,
      type,
      durationMinutes,
      notes,
      caloriesBurned,
    };
    setData(prev => ({ ...prev, workouts: [workout, ...prev.workouts] }));
  }, [setData, todayStr]);

  const deleteWorkout = useCallback((id: string) => {
    setData(prev => ({ ...prev, workouts: prev.workouts.filter(w => w.id !== id) }));
  }, [setData]);

  // Nutrition
  const getTodayNutrition = useCallback((prev: FitnessData) => {
    return prev.nutritionByDate[todayStr] ?? {
      date: todayStr,
      caloriesConsumed: 0,
      caloriesGoal: 2000,
      waterGlasses: 0,
      waterGoal: 8,
    };
  }, [todayStr]);

  const setCaloriesForToday = useCallback((calories: number) => {
    setData(prev => ({
      ...prev,
      nutritionByDate: {
        ...prev.nutritionByDate,
        [todayStr]: { ...getTodayNutrition(prev), caloriesConsumed: calories },
      },
    }));
  }, [setData, todayStr, getTodayNutrition]);

  const setCaloriesGoal = useCallback((goal: number) => {
    setData(prev => ({
      ...prev,
      nutritionByDate: {
        ...prev.nutritionByDate,
        [todayStr]: { ...getTodayNutrition(prev), caloriesGoal: goal },
      },
    }));
  }, [setData, todayStr, getTodayNutrition]);

  const setWaterForToday = useCallback((glasses: number) => {
    setData(prev => ({
      ...prev,
      nutritionByDate: {
        ...prev.nutritionByDate,
        [todayStr]: { ...getTodayNutrition(prev), waterGlasses: glasses },
      },
    }));
  }, [setData, todayStr, getTodayNutrition]);

  const setWaterGoal = useCallback((goal: number) => {
    setData(prev => ({
      ...prev,
      nutritionByDate: {
        ...prev.nutritionByDate,
        [todayStr]: { ...getTodayNutrition(prev), waterGoal: goal },
      },
    }));
  }, [setData, todayStr, getTodayNutrition]);

  // Weight
  const addWeightEntry = useCallback((weightKg: number, date?: string) => {
    const entryDate = date ?? todayStr;
    const entry: WeightEntry = { date: entryDate, weightKg };
    setData(prev => {
      const filtered = prev.weightEntries.filter(e => e.date !== entryDate);
      return {
        ...prev,
        weightEntries: [...filtered, entry].sort((a, b) => a.date.localeCompare(b.date)),
      };
    });
  }, [setData, todayStr]);

  const removeWeightEntry = useCallback((date: string) => {
    setData(prev => ({
      ...prev,
      weightEntries: prev.weightEntries.filter(e => e.date !== date),
    }));
  }, [setData]);

  // Computed values
  const todayStepData = data.stepsByDate[todayStr];
  const todaySteps = todayStepData?.count ?? 0;
  const todayStepGoal = todayStepData?.goal ?? data.stepGoal;

  const todayNutrition = data.nutritionByDate[todayStr];
  const todayCalories = todayNutrition?.caloriesConsumed ?? 0;
  const todayCaloriesGoal = todayNutrition?.caloriesGoal ?? 2000;
  const todayWater = todayNutrition?.waterGlasses ?? 0;
  const todayWaterGoal = todayNutrition?.waterGoal ?? 8;

  // A day is "active" if steps >= goal OR there is a workout logged
  const workoutDates = new Set(data.workouts.map(w => w.date));
  const activeDates = new Set<string>();
  Object.values(data.stepsByDate).forEach(s => {
    if (s.count >= s.goal) activeDates.add(s.date);
  });
  workoutDates.forEach(d => activeDates.add(d));

  const streak = computeStreak(activeDates);
  const activeToday = activeDates.has(todayStr);

  const value: FitnessContextType = {
    data,
    setStepsForToday,
    setStepGoal,
    addWorkout,
    deleteWorkout,
    setCaloriesForToday,
    setCaloriesGoal,
    setWaterForToday,
    setWaterGoal,
    addWeightEntry,
    removeWeightEntry,
    todaySteps,
    todayStepGoal,
    todayCalories,
    todayCaloriesGoal,
    todayWater,
    todayWaterGoal,
    streak,
    activeToday,
  };

  return <FitnessContext.Provider value={value}>{children}</FitnessContext.Provider>;
}

export function useFitness(): FitnessContextType {
  const ctx = useContext(FitnessContext);
  if (!ctx) throw new Error('useFitness must be used inside FitnessProvider');
  return ctx;
}
