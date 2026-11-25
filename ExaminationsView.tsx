import React from 'react';
import { BookOpen, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ExaminationsView: React.FC = () => {
  const { sessions } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="bg-slate-950 p-5 border border-slate-800 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-white">Examination Timetable & Session Allocation</h3>
          <p className="text-xs text-slate-400">Schedule examination sessions, assign invigilators and room biometric gates</p>
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900 text-xs text-slate-400 uppercase border-b border-slate-800">
            <tr>
              <th className="px-6 py-3">Exam Code</th>
              <th className="px-6 py-3">Course Title</th>
              <th className="px-6 py-3">Schedule</th>
              <th className="px-6 py-3">Assigned Invigilators</th>
              <th className="px-6 py-3">Candidate Count</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {sessions.map(s => (
              <tr key={s.id} className="hover:bg-slate-900/50">
                <td className="px-6 py-4 font-mono text-xs font-bold text-blue-400">{s.code}</td>
                <td className="px-6 py-4 font-medium text-slate-200">{s.title}</td>
                <td className="px-6 py-4 text-xs font-mono text-slate-400">{s.scheduledStart.replace('T', ' ')}</td>
                <td className="px-6 py-4 text-xs text-slate-300">{s.assignedInvigilators.join(', ')}</td>
                <td className="px-6 py-4 text-xs">{s.presentCount} / {s.totalCandidates} Present</td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    s.status === 'in_progress' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {s.status.replace('_', ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
