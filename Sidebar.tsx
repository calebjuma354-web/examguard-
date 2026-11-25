import React from 'react';
import { 
  Shield, LayoutDashboard, Building2, BookOpen, Users, 
  Eye, Radio, Bot, ShieldAlert, FileText, Cpu, BarChart3, Bell, Settings, UserCheck, Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, user, isOffline } = useApp();

  const menuItems = [
    { id: 'dashboard', label: 'Main Dashboard', icon: LayoutDashboard },
    { id: 'live-monitoring', label: 'Live Monitoring', icon: Eye, badge: 'LIVE' },
    { id: 'rf-detection', label: 'RF & Device Detection', icon: Radio },
    { id: 'ai-security', label: 'AI Incident Vision', icon: Bot },
    { id: 'incidents', label: 'Incident Management', icon: ShieldAlert },
    { id: 'institutions', label: 'Institutions', icon: Building2 },
    { id: 'examinations', label: 'Examinations', icon: BookOpen },
    { id: 'candidates', label: 'Candidates & Room Allocation', icon: Users },
    { id: 'invigilators', label: 'Invigilator Roster', icon: UserCheck },
    { id: 'paper-security', label: 'Paper Security & Audit', icon: Lock },
    { id: 'devices', label: 'Hardware Devices API', icon: Cpu },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'notifications', label: 'Security Notifications', icon: Bell },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col h-screen sticky top-0">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-white tracking-wider">EXAMGUARD</h1>
          <p className="text-[10px] text-blue-400 font-medium tracking-tight">SECURE EXAM MONITORING</p>
        </div>
      </div>

      {/* Offline Status indicator */}
      {isOffline && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-center justify-between text-xs text-amber-400">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Offline Mode Active</span>
          </span>
          <span className="text-[9px] bg-amber-500/20 px-1.5 py-0.5 rounded font-mono">PWA Queued</span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[9px] bg-rose-500 text-white font-bold px-1.5 py-0.5 rounded animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User profile footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center space-x-3">
          <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border border-slate-700" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-200 truncate">{user.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user.role.replace('_', ' ')}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
