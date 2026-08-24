import { useState, useEffect } from 'react';
import { missionInfo } from '../data/mission';

export default function MissionHeader() {
  const [met, setMet] = useState(missionInfo.met);

  useEffect(() => {
    const interval = setInterval(() => setMet(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(met / 86400);
  const hours = Math.floor((met % 86400) / 3600);
  const mins = Math.floor((met % 3600) / 60);
  const secs = met % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  const metStr = `${pad(days)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`;

  return (
    <header className="h-9 bg-space-card border-b border-space-border flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-mission-blue font-bold text-sm tracking-wider">{missionInfo.name}</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400 text-[10px]">{missionInfo.spacecraft}</span>
        <span className="text-gray-600">|</span>
        <span className="text-mission-yellow text-[10px]">{missionInfo.phase}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] text-gray-500">MET</span>
        <span className="met-clock text-mission-blue text-sm font-bold">{metStr}</span>
        <span className="text-gray-600">|</span>
        <span className="text-[10px] text-gray-500">DSN: <span className="text-mission-green">{missionInfo.groundStation}</span></span>
        <span className="text-gray-600">|</span>
        <span className="text-[10px] text-gray-500">SIGNAL <span className="text-mission-green">{missionInfo.signalStrength} dBm</span></span>
        <span className="text-gray-600">|</span>
        <span className="text-[10px] text-gray-500">{missionInfo.dataRate}</span>
        <span className="text-gray-600">|</span>
        <span className="text-[10px] text-gray-500">LIGHT DELAY <span className="text-mission-blue">{missionInfo.delay}s</span></span>
        <div className="flex items-center gap-1">
          <div className="status-dot bg-mission-green animate-blink" />
          <span className="text-mission-green text-[10px]">COMMS LOCK</span>
        </div>
      </div>
    </header>
  );
}