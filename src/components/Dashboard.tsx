import { useFitness } from '../context/FitnessContext';
import { TabName } from '../types';

interface Props {
  onNavigate: (tab: TabName) => void;
}

function CircleProgress({
  value, max, size = 100, strokeWidth = 8, gradient,
}: { value: number; max: number; size?: number; strokeWidth?: number; gradient: string }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);
  return (
    <svg width={size} height={size} className="progress-ring">
      <circle cx={size / 2} cy={size / 2} r={r} className="progress-ring-track" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        className="progress-ring-fill"
        strokeWidth={strokeWidth}
        stroke={`url(#${gradient})`}
        strokeDasharray={circ}
        strokeDashoffset={offset}
      />
      <defs>
        {gradient === 'grad-purple' && (
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        )}
        {gradient === 'grad-green' && (
          <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        )}
        {gradient === 'grad-orange' && (
          <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
}

export function Dashboard({ onNavigate }: Props) {
  const {
    todaySteps, todayStepGoal,
    todayCalories, todayCaloriesGoal,
    todayWater, todayWaterGoal,
    streak, activeToday,
    data,
  } = useFitness();

  const todayWorkouts = data.workouts.filter(w => w.date === new Date().toISOString().slice(0, 10));
  const needsRest = streak >= 6;
  const stepPct = Math.round((todaySteps / todayStepGoal) * 100);
  const calPct = Math.round((todayCalories / todayCaloriesGoal) * 100);
  const waterPct = Math.round((todayWater / todayWaterGoal) * 100);

  return (
    <div className="space-y-4 pt-2">
      {/* Rest day banner */}
      {needsRest && (
        <div className="card border-amber-500/40 bg-amber-500/10 flex items-center gap-3">
          <span className="text-2xl">😴</span>
          <div>
            <p className="text-amber-400 font-semibold text-sm">Rest Day Recommended</p>
            <p className="text-slate-400 text-xs">{streak} day streak — your body needs recovery!</p>
          </div>
        </div>
      )}

      {/* Streak banner */}
      {streak > 0 && (
        <div className="card border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-pink-500/10 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Current Streak</p>
            <p className="text-2xl font-bold text-white">{streak} <span className="text-base font-normal text-slate-400">days</span></p>
          </div>
          <span className="text-4xl">{'🔥'.repeat(Math.min(streak, 5))}</span>
        </div>
      )}

      {/* Today's summary rings */}
      <div className="card">
        <h2 className="text-sm font-semibold text-slate-400 mb-4">Today's Summary</h2>
        <div className="flex justify-around">
          {/* Steps */}
          <button onClick={() => onNavigate('steps')} className="flex flex-col items-center gap-2 group">
            <div className="progress-ring-container">
              <CircleProgress value={todaySteps} max={todayStepGoal} gradient="grad-purple" />
              <div className="absolute flex flex-col items-center">
                <span className="text-xs font-bold text-white">{stepPct}%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-purple-400">Steps</p>
              <p className="text-xs text-slate-400">{todaySteps.toLocaleString()}</p>
            </div>
          </button>

          {/* Calories */}
          <button onClick={() => onNavigate('nutrition')} className="flex flex-col items-center gap-2 group">
            <div className="progress-ring-container">
              <CircleProgress value={todayCalories} max={todayCaloriesGoal} gradient="grad-orange" />
              <div className="absolute flex flex-col items-center">
                <span className="text-xs font-bold text-white">{calPct}%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-orange-400">Calories</p>
              <p className="text-xs text-slate-400">{todayCalories} kcal</p>
            </div>
          </button>

          {/* Water */}
          <button onClick={() => onNavigate('nutrition')} className="flex flex-col items-center gap-2 group">
            <div className="progress-ring-container">
              <CircleProgress value={todayWater} max={todayWaterGoal} gradient="grad-green" />
              <div className="absolute flex flex-col items-center">
                <span className="text-xs font-bold text-white">{waterPct}%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-emerald-400">Water</p>
              <p className="text-xs text-slate-400">{todayWater}/{todayWaterGoal} gl</p>
            </div>
          </button>
        </div>
      </div>

      {/* Steps goal bar */}
      <button onClick={() => onNavigate('steps')} className="card w-full text-left hover:border-purple-500/50 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-white">👟 Step Goal</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${todaySteps >= todayStepGoal ? 'bg-emerald-500/20 text-emerald-400' : 'bg-dark-600 text-slate-400'}`}>
            {todaySteps >= todayStepGoal ? 'Done!' : `${(todayStepGoal - todaySteps).toLocaleString()} left`}
          </span>
        </div>
        <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
            style={{ width: `${Math.min(stepPct, 100)}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-1.5">{todaySteps.toLocaleString()} / {todayStepGoal.toLocaleString()} steps</p>
      </button>

      {/* Today's workouts */}
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-white">💪 Today's Workouts</span>
          <button onClick={() => onNavigate('workouts')} className="text-xs text-purple-400">+ Add</button>
        </div>
        {todayWorkouts.length === 0 ? (
          <p className="text-slate-500 text-xs text-center py-2">No workouts logged yet</p>
        ) : (
          <div className="space-y-2">
            {todayWorkouts.slice(0, 3).map(w => (
              <div key={w.id} className="flex items-center justify-between bg-dark-700 rounded-xl px-3 py-2">
                <span className="text-sm capitalize text-white">{w.type}</span>
                <span className="text-xs text-slate-400">{w.durationMinutes} min</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => onNavigate('progress')}
          className="card hover:border-blue-500/50 transition-colors text-left">
          <span className="text-2xl">📈</span>
          <p className="text-sm font-semibold text-white mt-1">Weight</p>
          <p className="text-xs text-slate-400">Track progress</p>
        </button>
        <button onClick={() => onNavigate('workouts')}
          className="card hover:border-purple-500/50 transition-colors text-left">
          <span className="text-2xl">🏃</span>
          <p className="text-sm font-semibold text-white mt-1">Workout</p>
          <p className="text-xs text-slate-400">Log activity</p>
        </button>
      </div>

      {/* Active today indicator */}
      <div className={`card text-center border ${activeToday ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-dark-600'}`}>
        <p className="text-sm font-medium">
          {activeToday ? '✅ Active today' : '⏳ Not active yet — hit your step goal or log a workout!'}
        </p>
      </div>
    </div>
  );
}
