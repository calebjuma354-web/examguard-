import React, { useState } from 'react';
import { ShieldAlert, Plus, Filter, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const IncidentsView: React.FC = () => {
  const { incidents, addIncident, user } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState<any>('RF Detection');
  const [severity, setSeverity] = useState<any>('high');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addIncident({
      institutionId: 'inst-1',
      roomId: 'rm-101',
      category,
      severity,
      description,
      invigilatorId: user.name,
      status: 'open',
      evidenceUrls: [],
    });
    setShowModal(false);
    setDescription('');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-950 p-5 border border-slate-800 rounded-xl">
        <div>
          <h3 className="text-lg font-bold text-white">Security Incident Log & Case Management</h3>
          <p className="text-xs text-slate-400">Formal examination infraction records, chain of custody, and investigation tracking</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center space-x-2 shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Incident</span>
        </button>
      </div>

      {/* Incidents Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs text-slate-400 uppercase border-b border-slate-800">
              <tr>
                <th className="px-6 py-3">Ticket ID</th>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Severity</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Reporting Officer</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {incidents.map((inc) => (
                <tr key={inc.id} className="hover:bg-slate-900/50">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-blue-400">{inc.ticketNo}</td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{inc.timestamp}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-200">{inc.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      inc.severity === 'critical' ? 'bg-rose-500 text-white' :
                      inc.severity === 'high' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {inc.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs max-w-xs truncate">{inc.description}</td>
                  <td className="px-6 py-4 text-xs text-slate-300">{inc.invigilatorId}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded uppercase font-semibold">
                      {inc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-6 space-y-4">
            <h4 className="text-base font-bold text-white">Log Official Security Incident</h4>
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200"
                >
                  <option value="RF Detection">RF & Device Detection</option>
                  <option value="Visual Cheating">Visual Impersonation / Cheating</option>
                  <option value="Unauthorized Material">Unauthorized Paper Material</option>
                  <option value="Biometric Mismatch">Biometric Mismatch</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Severity Level</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Incident Summary & Evidence Notes</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe observed behavior, candidate seat, and hardware sensor readings..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold"
                >
                  Save Incident Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
