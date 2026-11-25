import React from 'react';
import { Bot, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AiSecurityView: React.FC = () => {
  const { aiAlerts, verifyAIAlert } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">AI Incident Detection & Computer Vision</h3>
            <p className="text-xs text-slate-400">Real-time object detection, head pose estimation, and unauthorized candidate behavior flags</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
          Human Verification Mode: <strong className="text-emerald-400">ENFORCED</strong>
        </div>
      </div>

      {/* Grid of AI Detection Detections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiAlerts.map((alert) => (
          <div key={alert.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Snapshot image with overlay */}
              <div className="relative h-48 bg-slate-900">
                <img src={alert.snapshotUrl} alt="Detection Snapshot" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-xs px-2.5 py-1 rounded border border-slate-700 text-white font-mono">
                  {alert.timestamp}
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                  {(alert.confidenceScore * 100).toFixed(0)}% AI CONFIDENCE
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">{alert.detectionType}</h4>
                    <p className="text-xs text-slate-400">{alert.cameraName}</p>
                  </div>
                  {alert.isSimulated && (
                    <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">Simulated</span>
                  )}
                </div>

                <div className="text-xs space-y-1 bg-slate-900 p-2.5 rounded border border-slate-800">
                  <p className="text-slate-300">Review Status: 
                    <strong className="ml-1 capitalize text-amber-400">{alert.status.replace('_', ' ')}</strong>
                  </p>
                  {alert.verifiedBy && (
                    <p className="text-slate-400 text-[10px]">Verified by: {alert.verifiedBy}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons for Human Verification */}
            <div className="p-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between gap-2">
              {alert.status === 'pending_review' ? (
                <>
                  <button
                    onClick={() => verifyAIAlert(alert.id, 'verified_cheat')}
                    className="flex-1 bg-rose-600 hover:bg-rose-500 text-white text-xs py-2 px-3 rounded-lg font-medium flex items-center justify-center space-x-1"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Confirm Infraction</span>
                  </button>
                  <button
                    onClick={() => verifyAIAlert(alert.id, 'false_positive')}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2 px-3 rounded-lg font-medium flex items-center justify-center space-x-1"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>False Alert</span>
                  </button>
                </>
              ) : (
                <div className="w-full text-center py-1 text-xs text-slate-400 font-medium">
                  Verification Recorded
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
