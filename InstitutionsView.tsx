import React from 'react';
import { Building2, Plus, MapPin, Users, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InstitutionsView: React.FC = () => {
  const { institutions } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center bg-slate-950 p-5 border border-slate-800 rounded-xl">
        <div>
          <h3 className="text-lg font-bold text-white">Registered Educational Institutions & Exam Bodies</h3>
          <p className="text-xs text-slate-400">Multi-tenant management across universities, high schools and national assessment centers</p>
        </div>
        <button className="bg-blue-600 text-white text-xs px-4 py-2.5 rounded-lg font-semibold flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Register Institution</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutions.map(inst => (
          <div key={inst.id} className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-mono font-bold">{inst.code}</span>
                <h4 className="text-base font-bold text-white mt-1">{inst.name}</h4>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Active</span>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{inst.city}, {inst.country}</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{inst.type}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-center text-xs">
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-slate-500 text-[10px]">Active Rooms</span>
                <p className="font-bold text-slate-200">{inst.activeRooms}</p>
              </div>
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-slate-500 text-[10px]">Candidates</span>
                <p className="font-bold text-slate-200">{inst.totalCandidates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
