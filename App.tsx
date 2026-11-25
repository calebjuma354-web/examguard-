import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './views/DashboardView';
import { LiveMonitoringView } from './views/LiveMonitoringView';
import { RfDetectionView } from './views/RfDetectionView';
import { AiSecurityView } from './views/AiSecurityView';
import { IncidentsView } from './views/IncidentsView';
import { InstitutionsView } from './views/InstitutionsView';
import { ExaminationsView } from './views/ExaminationsView';
import { PaperSecurityView } from './views/PaperSecurityView';
import { DeviceApiView } from './views/DeviceApiView';
import { GenericPlaceholderView } from './views/GenericPlaceholderView';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'live-monitoring':
        return <LiveMonitoringView />;
      case 'rf-detection':
        return <RfDetectionView />;
      case 'ai-security':
        return <AiSecurityView />;
      case 'incidents':
        return <IncidentsView />;
      case 'institutions':
        return <InstitutionsView />;
      case 'examinations':
        return <ExaminationsView />;
      case 'candidates':
        return <GenericPlaceholderView title="Candidates & Room Allocation" description="Biometric identification, attendance sheets, and seating matrix generation." />;
      case 'invigilators':
        return <GenericPlaceholderView title="Invigilator Roster & Duty Logs" description="Schedule invigilators, confirm shift attendance, and issue security alerts." />;
      case 'paper-security':
        return <PaperSecurityView />;
      case 'devices':
        return <DeviceApiView />;
      case 'reports':
        return <GenericPlaceholderView title="Reports & Analytics" description="Export official PDF security summaries, incident breakdowns, and attendance CSVs." />;
      case 'notifications':
        return <GenericPlaceholderView title="Security Notifications" description="Real-time SMS, Email, and Push security notifications for exam supervisors." />;
      case 'settings':
        return <GenericPlaceholderView title="System Settings & Supabase Config" description="Configure Supabase keys, API rate limits, and PWA offline sync parameters." />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Header />
        <main className="flex-1">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
