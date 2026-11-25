import React from 'react';
import { Building2, Eye, Users, Radio, ShieldAlert, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const DashboardView: React.FC = () => {
  const { institutions, rooms, sessions, candidates, devices, incidents } = useApp();

  const activityData = [
    { time: '08:00', totalSensors: 42, rfAlerts: 0, aiDetections: 1 },
    { time: '09:00', totalSensors: 45, rfAlerts: 1, aiDetections: 2 },
    { time: '10:00', totalSensors: 48, rfAlerts: 3, aiDetections: 4 },
    { time: '11:00', totalSensors: 48, rfAlerts: 2, aiDetections: 1 },
    { time: '12:00', totalSensors: 44, rfAlerts: 0, aiDetections: 0 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Top Banner Alert if active incident */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 rounded-xl p-5 flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">System Operational Status</span>
          <h3 className="text-xl font-bold text-white">Central Examination Security Operations Active</h3>
          <p className="text-xs text-slate-400">Monitoring 4 Institutions, 60+ Examination Rooms, and Real-Time RF Spectrum Frequency Bands.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <span className="text-xs text-slate-400">Active Monitoring Nodes</span>
            <p className="text-lg font-bold text-emerald-400">99.8% Online</p>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-medium">Institutions Connected</span>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Building2 className="w-5 h-5" /></div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-white">{institutions.length}</span>
            <span className="text-xs text-emerald-400 font-medium">+1 this month</span>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-medium">Active Exam Sessions</span>
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><Eye className="w-5 h-5" /></div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-white">{sessions.filter(s => s.status === 'in_progress').length}</span>
            <span className="text-xs text-slate-400">{sessions.length} total scheduled</span>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-medium">Candidates In Rooms</span>
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg"><Users className="w-5 h-5" /></div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-white">{candidates.filter(c => c.attendanceStatus === 'present').length}</span>
            <span className="text-xs text-rose-400">1 Flagged Desk</span>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-medium">Active Incidents</span>
            <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg"><ShieldAlert className="w-5 h-5" /></div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-white">{incidents.length}</span>
            <span className="text-xs text-rose-400 font-medium">1 Critical RF Transmission</span>
          </div>
        </div>
      </div>

      {/* Analytics Chart & Live Sensor Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Security Signal Activity Chart */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-base font-semibold text-white">Live Threat Detection Activity Spectrum</h4>
              <p className="text-xs text-slate-400">Real-time RF frequency spikes and computer vision alerts</p>
            </div>
            <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">Today</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="rfColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="aiColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }} />
                <Area type="monotone" dataKey="rfAlerts" stroke="#ef4444" fillOpacity={1} fill="url(#rfColor)" name="RF Signals" />
                <Area type="monotone" dataKey="aiDetections" stroke="#3b82f6" fillOpacity={1} fill="url(#aiColor)" name="AI Detections" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Connected Hardware Device Health */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <h4 className="text-base font-semibold text-white">Hardware & Sensor Nodes</h4>
            <span className="text-xs text-emerald-400 flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Hardware API Active</span>
            </span>
          </div>
          <div className="space-y-3">
            {devices.map((dev) => (
              <div key={dev.id} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">{dev.name}</p>
                    <p className="text-[10px] text-slate-400">{dev.hardwareType} • {dev.ipAddress}</p>
                  </div>
                </div>
                <div className="text-right">
                  {dev.isSimulated ? (
                    <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">Simulated</span>
                  ) : (
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Hardware Live</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
