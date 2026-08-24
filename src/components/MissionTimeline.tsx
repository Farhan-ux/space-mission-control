import { missionTimeline } from '../data/mission';

export default function MissionTimeline() {
  const maxEnd = Math.max(...missionTimeline.map(e => e.start + e.duration));
  const currentMET = 172900; // just after LOI-2 start

  return (
    <div className="space-panel h-full flex flex-col">
      <div className="space-header">
        <span className="data-label">Mission Timeline</span>
        <span className="text-[10px] text-gray-500">T+47h 48m</span>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="relative">
          {/* Time axis */}
          <div className="h-4 border-b border-space-border flex items-end">
            {['0', '12h', '24h', '48h', '72h', '120h', '144h'].map((label, i) => {
              const pct = (i / 6) * 100;
              return (
                <div key={i} className="absolute text-[8px] text-gray-600" style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}>
                  <div className="w-px h-2 bg-space-border" />
                  <div className="mt-0.5">{label}</div>
                </div>
              );
            })}
          </div>
          {/* Events */}
          {missionTimeline.map((event, i) => {
            const left = (event.start / maxEnd) * 100;
            const width = Math.max((event.duration / maxEnd) * 100, 0.5);
            const opacity = event.status === 'completed' ? 0.5 : event.status === 'in-progress' ? 1 : 0.3;
            return (
              <div key={i} className="flex items-center h-5 mt-0.5">
                <span className="text-[8px] text-gray-500 w-24 truncate shrink-0">{event.name}</span>
                <div className="flex-1 relative h-3">
                  <div
                    className="absolute h-full rounded-sm flex items-center px-1"
                    style={{ left: `${left}%`, width: `${width}%`, backgroundColor: event.color, opacity }}
                  />
                </div>
              </div>
            );
          })}
          {/* Current time marker */}
          <div className="absolute top-0 w-px h-full" style={{ left: `${(currentMET / maxEnd) * 100}%`, backgroundColor: '#ff3355' }}>
            <div className="w-2 h-2 bg-mission-red rounded-full -ml-[3px] -mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}