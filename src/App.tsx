import { useState } from 'react';
import { FitnessProvider } from './context/FitnessContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { StepsTracker } from './components/StepsTracker';
import { WorkoutLogger } from './components/WorkoutLogger';
import { NutritionTracker } from './components/NutritionTracker';
import { ProgressCharts } from './components/ProgressCharts';
import { TabName } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard':   return <Dashboard onNavigate={setActiveTab} />;
      case 'steps':       return <StepsTracker />;
      case 'workouts':    return <WorkoutLogger />;
      case 'nutrition':   return <NutritionTracker />;
      case 'progress':    return <ProgressCharts />;
    }
  };

  return (
    <FitnessProvider>
      <Layout activeTab={activeTab} onTabChange={setActiveTab}>
        {renderTab()}
      </Layout>
    </FitnessProvider>
  );
}
