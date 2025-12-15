import React, { useState } from 'react';
import { PatientDashboard } from './components/PatientDashboard';
import { PlanComparisons } from './components/PlanComparisons';
import { PatientData } from './types';
import { Activity, FileText, LayoutDashboard } from 'lucide-react';

// Updated with real data from screenshots
const patientData: PatientData = {
  name: "Paciente Corredor (Datos Reales)",
  gender: 'male',
  age: 32,
  height: 160,
  weight: 63,
  targetWeight: 59,
  activityLevel: 'athlete',
  telemetry: {
    avgDailySteps: 20921, // From "Media diaria" screenshot
    avgDailyCalories: 2654, // From "Media total" screenshot
    avgRestingCalories: 1690, // From "Promedio en reposo"
    avgActiveCalories: 963, // From "Media activ"
    weeklyRunDistance: 85, // From "Media semanal"
    monthlyRunVolume: 368 // From "Media mensual" approx
  }
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'plan'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Activity className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">SportsNutriPro</h1>
              <p className="text-xs text-slate-400">Análisis con Datos Reales (Garmin/Connect)</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex flex-col items-end">
              <span className="text-slate-300 font-medium">{patientData.name}</span>
              <span className="text-slate-500 text-xs">Obj: {patientData.targetWeight}kg | Actual: {patientData.weight}kg</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-slate-900/50 p-1 rounded-xl mb-8 w-fit border border-slate-800">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <LayoutDashboard size={18} className="mr-2" />
            Métricas
          </button>
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'plan' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <FileText size={18} className="mr-2" />
            Estrategia
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'dashboard' && (
            <PatientDashboard patient={patientData} />
          )}

          {activeTab === 'plan' && (
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-2">Evaluación de la Estrategia</h2>
                <p className="text-slate-400 mb-6">
                  Comparativa basada en los nuevos datos de volumen semanal (85km) y actividad diaria (21k pasos).
                </p>
                <PlanComparisons />
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;