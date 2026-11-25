import React from 'react';
import { Cpu, Terminal, Wifi, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DeviceApiView: React.FC = () => {
  const { devices } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="bg-slate-950 p-5 border border-slate-800 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-white">Hardware Device Management & REST/WebSocket Endpoints</h3>
          <p className="text-xs text-slate-400">Configure ESP32 nodes, SDR receivers, CCTV cameras, and environmental telemetry</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
          <h4 className="text-base font-bold text-white">Registered Physical Nodes</h4>
          <div className="space-y-3">
            {devices.map(dev => (
              <div key={dev.id} className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-slate-200">{dev.name}</p>
                  <p className="text-slate-500 font-mono text-[10px]">{dev.hardwareType} • IP: {dev.ipAddress}</p>
                </div>
                <div>
                  {dev.isSimulated ? (
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">Simulated</span>
                  ) : (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">Online</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-4">
          <h4 className="text-base font-bold text-white flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>ESP32 / Microcontroller C++ Code Snippet</span>
          </h4>
          <pre className="bg-slate-900 p-4 rounded-lg text-[10px] text-emerald-400 font-mono overflow-x-auto leading-relaxed border border-slate-800">
{`#include <WiFi.h>
#include <HTTPClient.h>

const char* server = "https://api.examguard.io/v1/rf-telemetry";
const char* deviceToken = "Bearer EXAMGUARD_NODE_KEY_9981";

void sendRFReading(float freqMHz, int rssi) {
  HTTPClient http;
  http.begin(server);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", deviceToken);
  
  String body = "{\"freq\":" + String(freqMHz) + 
                ",\"rssi\":" + String(rssi) + 
                ",\"room_id\":\"rm-101\"}";
  int code = http.POST(body);
  http.end();
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};
