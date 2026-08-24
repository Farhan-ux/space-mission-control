import { crew } from '../data/mission';

export default function CrewPanel() {
  return (
    <div className="space-panel h-full flex flex-col">
      <div className="space-header">
        <span className="data-label">Crew Status</span>
        <span className="text-[10px] text-gray-500">4 CREW</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {crew.map((c, i) => (
          <div key={i} className="px-3 py-2 border-b border-space-border/50">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white font-medium">{c.name}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-mission-blue/10 text-mission-blue">{c.role}</span>
            </div>
            <div className="mt-1 text-[10px] text-gray-400">{c.activity}</div>
            <div className="text-[9px] text-gray-600 mt-0.5">LOC: {c.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}