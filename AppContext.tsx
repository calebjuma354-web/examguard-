import React, { createContext, useContext, useState } from 'react';
import { User, Institution, Room, Candidate, ExamSession, Device, RFSignalLog, AIAlert, IncidentReport } from '../types';
import { CURRENT_USER, MOCK_INSTITUTIONS, MOCK_ROOMS, MOCK_SESSIONS, MOCK_CANDIDATES, MOCK_DEVICES, MOCK_RF_LOGS, MOCK_AI_ALERTS, MOCK_INCIDENTS } from '../mockData';

interface AppContextType {
  user: User;
  setUser: (u: User) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  institutions: Institution[];
  rooms: Room[];
  sessions: ExamSession[];
  candidates: Candidate[];
  devices: Device[];
  rfLogs: RFSignalLog[];
  aiAlerts: AIAlert[];
  incidents: IncidentReport[];
  isOffline: boolean;
  setIsOffline: (val: boolean) => void;
  addIncident: (inc: Omit<IncidentReport, 'id' | 'ticketNo' | 'timestamp'>) => void;
  verifyAIAlert: (id: string, status: 'verified_cheat' | 'false_positive' | 'dismissed') => void;
  toggleHardwareMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(CURRENT_USER);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [institutions] = useState<Institution[]>(MOCK_INSTITUTIONS);
  const [rooms] = useState<Room[]>(MOCK_ROOMS);
  const [sessions] = useState<ExamSession[]>(MOCK_SESSIONS);
  const [candidates] = useState<Candidate[]>(MOCK_CANDIDATES);
  const [devices] = useState<Device[]>(MOCK_DEVICES);
  const [rfLogs, setRfLogs] = useState<RFSignalLog[]>(MOCK_RF_LOGS);
  const [aiAlerts, setAiAlerts] = useState<AIAlert[]>(MOCK_AI_ALERTS);
  const [incidents, setIncidents] = useState<IncidentReport[]>(MOCK_INCIDENTS);
  const [isOffline, setIsOffline] = useState<boolean>(false);

  const addIncident = (incData: Omit<IncidentReport, 'id' | 'ticketNo' | 'timestamp'>) => {
    const newInc: IncidentReport = {
      ...incData,
      id: `inc-${Date.now()}`,
      ticketNo: `INC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };
    setIncidents(prev => [newInc, ...prev]);
  };

  const verifyAIAlert = (id: string, status: 'verified_cheat' | 'false_positive' | 'dismissed') => {
    setAiAlerts(prev => prev.map(a => a.id === id ? { ...a, status, verifiedBy: user.name } : a));
  };

  const toggleHardwareMode = () => {
    setIsOffline(!isOffline);
  };

  return (
    <AppContext.Provider value={{
      user, setUser, activeTab, setActiveTab,
      institutions, rooms, sessions, candidates, devices, rfLogs, aiAlerts, incidents,
      isOffline, setIsOffline, addIncident, verifyAIAlert, toggleHardwareMode
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
