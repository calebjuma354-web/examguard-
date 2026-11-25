import React, { useState } from 'react';
import { Eye, Radio, ShieldAlert, Cpu, Video, CheckCircle2, AlertOctagon, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LiveMonitoringView: React.FC = () => {
  const { rooms, candidates, rfLogs } = useApp();
  const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0].id);

  const activeRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];
  const roomCandidates = candidates.filter(c => c.roomId === selectedRoomId);
  const roomRfLogs = rfLogs.filter(l => l.roomId === selectedRoomId);

  return (
    <div className="p-6 space-y-6">
      {/* Header Room Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 p-4 border border-slate-800 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Eye className="w-6 h-6" /></div>
          <div>
            <h3 className="text-lg font-bold text-white">Live Examination Room Security Operations</h3>
            <p className="text-xs text-slate-400">Integrated CCTV Feed, RF Spectrum Monitoring & Environmental Telemetry</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <label className="text-xs text-slate-400 font-medium">Select Examination Hall:</label>
          <select
            value={selectedRoomId}
            onChange={(e) => setSelectedRoomId(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            {rooms.map(r => (
              <option key={r.id} value={r.id}>{r.name} ({r.code})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Live Feeds & Sensor Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: CCTV Feeds */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((camIndex) => (
              <div key={camIndex} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden relative group">
                <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-300 flex items-center space-x-2">
                    <Video className="w-3.5 h-3.5 text-blue-400" />
                    <span>CAM-0{camIndex} - Hall View {camIndex === 1 ? '(Front Overview)' : camIndex === 2 ? '(Rear Desk Grid)' : '(Side Aisle)'}</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>1080P • 30FPS</span>
                  </span>
                </div>

                {/* Video Placeholder Container with Realistic Grid */}
                <div className="h-48 bg-slate-900 relative flex items-center justify-center border-b border-slate-800">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Bounding box overlay for AI demonstration */}
                  {camIndex === 1 && (
                    <div className="absolute top-10 right-14 w-24 h-24 border-2 border-rose-500 bg-rose-500/10 rounded flex flex-col justify-between p-1">
                      <span className="text-[8px] bg-rose-600 text-white px-1 font-mono rounded">DESK A-15: RF SPOOF</span>
                      <span className="text-[8px] text-rose-300 font-mono text-right">94% Confidence</span>
                    </div>
                  )}

                  <div className="text-center space-y-2 z-10">
                    <Video className="w-8 h-8 text-slate-700 mx-auto" />
                    <p className="text-xs text-slate-500 font-mono">ENCRYPTED CCTV FEED STREAM</p>
                    <p className="text-[10px] text-slate-600">RTSP://192.168.1.20{camIndex}/stream</p>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950 text-[11px] text-slate-400 flex justify-between items-center">
                  <span>AI Visual Shield: <strong className="text-emerald-400">ACTIVE</strong></span>
                  <span>Latency: <strong className="font-mono text-slate-200">14ms</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Telemetry */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Ambient Temp</span>
              <p className="text-lg font-bold text-slate-200 mt-1">{activeRoom.temp} °C</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Humidity</span>
              <p className="text-lg font-bold text-slate-200 mt-1">{activeRoom.humidity} %</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-center">
              <span className="text-xs text-slate-400">RF Shield Status</span>
              <p className="text-lg font-bold text-rose-400 mt-1">Interference Detected</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Biometric Gate</span>
              <p className="text-lg font-bold text-emerald-400 mt-1">100% Verified</p>
            </div>
          </div>
        </div>

        {/* Right Col: Live Candidates & Active Room Alerts */}
        <div className="space-y-6">
          {/* Active Sensor Alerts in this room */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <h4 className="text-base font-semibold text-white flex items-center justify-between border-b border-slate-800 pb-3">
              <span>Room Alert Log</span>
              <span className="text-xs text-rose-400 font-mono">{roomRfLogs.length} Events</span>
            </h4>

            {roomRfLogs.length > 0 ? (
              <div className="space-y-3">
                {roomRfLogs.map(log => (
                  <div key={log.id} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-rose-400 flex items-center space-x-1">
                        <AlertOctagon className="w-3.5 h-3.5" />
                        <span>CRITICAL RF SPIKE</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{log.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-200">
                      Frequency: <strong className="text-rose-300">{log.frequencyMHz} MHz</strong> (-{Math.abs(log.signalStrengthDbm)} dBm)
                    </p>
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>Est. Dist: {log.estimatedDistanceMeters}m</span>
                      <span className="bg-rose-500 text-white px-1.5 py-0.5 rounded font-bold">DESK: {log.suspectedDesk}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 text-center py-4">No active RF alerts in this room.</p>
            )}
          </div>

          {/* Candidate Roster in Room */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
            <h4 className="text-base font-semibold text-white border-b border-slate-800 pb-3">
              Candidate Seating Status
            </h4>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {roomCandidates.map(c => (
                <div key={c.id} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={c.photoUrl} alt={c.name} className="w-8 h-8 rounded-full border border-slate-700 object-cover" />
                    <div>
                      <p className="text-xs font-medium text-slate-200">{c.name}</p>
                      <p className="text-[10px] text-slate-400">{c.admissionNo} • Seat {c.seatNumber}</p>
                    </div>
                  </div>
                  <div>
                    {c.attendanceStatus === 'flagged' ? (
                      <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded font-bold">FLAGGED</span>
                    ) : (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">Present</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
