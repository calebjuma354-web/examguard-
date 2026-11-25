import React from 'react';
import { Radio, AlertTriangle, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RfDetectionView: React.FC = () => {
  const { rfLogs, devices } = useApp();

  return (
    <div className="p-6 space-y-6">
      {/* Module Title Banner */}
      <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">RF & Electronic Device Spectrum Analyzer</h3>
            <p className="text-xs text-slate-400">Detecting unauthorised mobile signals, micro-earpieces, Bluetooth & Wi-Fi transmission frequencies</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
            <span className="text-slate-400">Hardware Nodes: </span>
            <strong className="text-emerald-400 font-mono">ESP32 / SDR Active</strong>
          </div>
        </div>
      </div>

      {/* Sensor Signal Log Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
          <h4 className="text-base font-semibold text-white">Live Spectrum Intercept Logs</h4>
          <span className="text-xs text-slate-400">Auto-refreshing every 500ms</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-xs text-slate-400 uppercase border-b border-slate-800">
              <tr>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Room / Sensor</th>
                <th className="px-6 py-3">Frequency (MHz)</th>
                <th className="px-6 py-3">Signal Power (dBm)</th>
                <th className="px-6 py-3">Est. Proximity</th>
                <th className="px-6 py-3">Suspected Desk</th>
                <th className="px-6 py-3">Threat Level</th>
                <th className="px-6 py-3">Data Origin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {rfLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/50">
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{log.timestamp}</td>
                  <td className="px-6 py-4 font-medium text-slate-200">
                    Main Hall A3 <br/>
                    <span className="text-[10px] text-slate-500 font-mono">{log.sensorId}</span>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-blue-400">{log.frequencyMHz} MHz</td>
                  <td className="px-6 py-4 font-mono text-xs">{log.signalStrengthDbm} dBm</td>
                  <td className="px-6 py-4 text-xs font-mono">{log.estimatedDistanceMeters} meters</td>
                  <td className="px-6 py-4">
                    {log.suspectedDesk ? (
                      <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded text-xs font-mono font-bold">
                        {log.suspectedDesk}
                      </span>
                    ) : (
                      <span className="text-slate-500 text-xs">Scanning...</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                      log.threatLevel === 'critical' ? 'bg-rose-500 text-white' :
                      log.threatLevel === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {log.threatLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {log.isSimulated ? (
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">Simulated</span>
                    ) : (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">Hardware Live</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hardware Integration Architecture Box */}
      <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-4">
        <h4 className="text-base font-semibold text-white flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          <span>Hardware & Sensor Integration Architecture</span>
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          EXAMGUARD connects directly to physical RF monitoring nodes via WebSocket or REST API endpoints. Supports ESP32 Wi-Fi/Bluetooth sniffers, HackRF One SDR wideband receivers, and analog RF power meters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
            <strong className="text-blue-400 block mb-1">ESP32 Sensor Payload</strong>
            <code className="text-[10px] text-slate-300 font-mono block bg-slate-950 p-2 rounded">
              {`{ "device_id": "ESP32_RF_01", "freq": 2437.5, "rssi": -42 }`}
            </code>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
            <strong className="text-blue-400 block mb-1">SDR Receiver Endpoint</strong>
            <code className="text-[10px] text-slate-300 font-mono block bg-slate-950 p-2 rounded">
              POST /api/v1/telemetry/rf-scan
            </code>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
            <strong className="text-blue-400 block mb-1">Safety Guardrail</strong>
            <p className="text-slate-400 text-[11px]">RF readings flag desks for manual human invigilator inspection. System does not automate punishment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
