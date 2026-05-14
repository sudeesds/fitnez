export type WorkoutType =
  | 'running'
  | 'cycling'
  | 'swimming'
  | 'strength'
  | 'yoga'
  | 'hiit'
  | 'walking'
  | 'other';

export interface DaySteps {
  date: string; // ISO date string YYYY-MM-DD
  count: number;
  goal: number;
}

export interface Workout {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  type: WorkoutType;
  durationMinutes: number;
  notes?: string;
  caloriesBurned?: number;
}

export interface NutritionEntry {
  date: string; // ISO date string YYYY-MM-DD
  caloriesConsumed: number;
  caloriesGoal: number;
  waterGlasses: number;
  waterGoal: number;
}

export interface WeightEntry {
  date: string; // ISO date string YYYY-MM-DD
  weightKg: number;
}

export interface FitnessData {
  stepGoal: number;
  stepsByDate: Record<string, DaySteps>;
  workouts: Workout[];
  nutritionByDate: Record<string, NutritionEntry>;
  weightEntries: WeightEntry[];
}

export type TabName = 'dashboard' | 'steps' | 'workouts' | 'nutrition' | 'progress';
