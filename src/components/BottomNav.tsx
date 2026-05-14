import { TabName } from '../types';

interface BottomNavProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

interface NavItem {
  id: TabName;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Home', icon: '⊞' },
  { id: 'steps', label: 'Steps', icon: '👟' },
  { id: 'workouts', label: 'Workout', icon: '💪' },
  { id: 'nutrition', label: 'Nutrition', icon: '🥗' },
  { id: 'progress', label: 'Progress', icon: '📈' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md
                    bg-dark-800/95 backdrop-blur border-t border-dark-600 px-2 py-2 z-50">
      <div className="flex justify-around">
        {NAV_ITEMS.map(item => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150
                          ${active ? 'text-purple-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className={`text-xl transition-transform duration-150 ${active ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-medium ${active ? 'text-purple-400' : 'text-slate-500'}`}>
                {item.label}
              </span>
              {active && (
                <span className="w-1 h-1 rounded-full bg-purple-400 absolute bottom-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
