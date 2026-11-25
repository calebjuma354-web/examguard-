import React from 'react';
import { Lock, FileCheck, ShieldCheck, Key } from 'lucide-react';

export const PaperSecurityView: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-slate-950 p-5 border border-slate-800 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-white">Examination Paper Custody & Tamper Audit</h3>
          <p className="text-xs text-slate-400">Cryptographic hash verification of examination papers and secure answer script tracking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-4">
          <h4 className="text-base font-bold text-white flex items-center space-x-2">
            <Lock className="w-5 h-5 text-blue-400" />
            <span>Digital Exam Vault Hashes</span>
          </h4>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-1">
              <p className="font-bold text-slate-200">CS401_Final_2026.pdf.enc</p>
              <p className="font-mono text-[10px] text-slate-400 truncate">SHA-256: 8f4e2b9c71a304e...339a</p>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Vault Sealed & Verified</span>
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-1">
              <p className="font-bold text-slate-200">DB202_Paper_SetB.pdf.enc</p>
              <p className="font-mono text-[10px] text-slate-400 truncate">SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Vault Sealed & Verified</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-4">
          <h4 className="text-base font-bold text-white flex items-center space-x-2">
            <FileCheck className="w-5 h-5 text-indigo-400" />
            <span>Physical Bag Seal Tracking</span>
          </h4>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-200">Tamper Seal #SEAL-9941</p>
                <p className="text-[10px] text-slate-400">Main Hall A3 • Opened 08:55 AM</p>
              </div>
              <span className="text-emerald-400 font-mono text-xs">Verified OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
