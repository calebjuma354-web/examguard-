import React from 'react';
import { Bell, Wifi, WifiOff, ShieldCheck, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const { isOffline, toggleHardwareMode, activeTab } = useApp();

  return (
    <header className="h-16 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold text-white capitalize">{activeTab.replace('-', ' ')}</h2>
        <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full border border-slate-700 flex items-center space-x-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>System Health: Nominal</span>
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Hardware / Connectivity Toggle */}
        <button
          onClick={toggleHardwareMode}
          className={`flex items-center space-x-2 text-xs px-3 py-1.5 rounded-lg border transition-all ${
            isOffline
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          }`}
          title="Toggle Hardware Connectivity Simulation"
        >
          {isOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
          <span>{isOffline ? 'Mode: Offline PWA' : 'Mode: Live Hardware Socket'}</span>
        </button>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search candidate, room, desk..."
            className="bg-slate-900 border border-slate-800 text-xs rounded-lg pl-9 pr-4 py-2 text-slate-200 focus:outline-none focus:border-blue-500 w-56"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};
