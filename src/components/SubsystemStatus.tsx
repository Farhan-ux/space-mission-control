import { subsystems, getStatusColor } from '../data/mission';

export default function SubsystemStatus() {
  return (
    <div className="space-panel h-full flex flex-col">
      <div className="space-header">
        <span className="data-label">Spacecraft Subsystems</span>
        <span className="text-[10px] text-gray-500">8 SYSTEMS</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {subsystems.map((sys, i) => {
          const color = getStatusColor(sys.status);
          return (
            <div key={i} className="px-3 py-2 border-b border-space-border/50 hover:bg-space-panel/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs text-white font-medium">{sys.name}</span>
                  <span className="text-[9px] text-gray-600">{sys.fullName}</span>
                </div>
                <span className="text-[10px] font-bold" style={{ color }}>{sys.health}%</span>
              </div>
              {/* Health bar */}
              <div className="mt-1 h-1 bg-space-border rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${sys.health}%`, backgroundColor: color }} />
              </div>
              <div className="text-[9px] text-gray-500 mt-1">{sys.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}