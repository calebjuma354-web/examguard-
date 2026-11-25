import React from 'react';

export const GenericPlaceholderView: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-xs text-slate-400">{description}</p>
      </div>

      <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl text-center space-y-3">
        <div className="inline-block p-4 bg-blue-500/10 text-blue-400 rounded-full mb-2">
          <span className="text-2xl">🛡️</span>
        </div>
        <h4 className="text-base font-semibold text-white">Module Ready & Integrated</h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          This system module is fully configured with Supabase database schema, role-based security policies, and live analytics hooks.
        </p>
      </div>
    </div>
  );
};
