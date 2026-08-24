import { commsLog } from '../data/mission';

const priorityColors: Record<string, string> = {
  routine: '#00d4ff',
  priority: '#ffd700',
  urgent: '#ff3355',
};

export default function CommsLog() {
  return (
    <div className="space-panel h-full flex flex-col">
      <div className="space-header">
        <span className="data-label">Communications Log</span>
        <span className="text-[10px] text-gray-500">CAPCOM</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {commsLog.map((entry, i) => (
          <div key={i} className="px-3 py-1.5 border-b border-space-border/30">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-gray-600 shrink-0">{entry.time}</span>
              <span className="text-[9px] font-bold shrink-0 w-16" style={{ color: entry.from === 'HOUSTON' ? '#00d4ff' : '#00ff88' }}>
                {entry.from}
              </span>
              <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: priorityColors[entry.priority] }} />
              <span className="text-[11px] text-gray-300 leading-relaxed">{entry.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}