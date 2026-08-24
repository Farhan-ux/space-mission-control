import { telemetry, getStatusColor } from '../data/mission';

export default function TelemetryGrid() {
  return (
    <div className="space-panel h-full flex flex-col">
      <div className="space-header">
        <span className="data-label">Orbital Telemetry</span>
        <span className="text-[10px] text-gray-500">REAL-TIME</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        <div className="grid grid-cols-3 gap-1.5">
          {telemetry.map((t, i) => (
            <div key={i} className="bg-space-panel rounded px-2 py-1.5 border border-space-border/50">
              <div className="data-label">{t.name}</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-white font-bold text-sm data-value">{t.value}</span>
                <span className="text-[9px] text-gray-500">{t.unit}</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: getStatusColor(t.status) }} />
                <span className="text-[9px]" style={{ color: getStatusColor(t.status) }}>{t.status.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}