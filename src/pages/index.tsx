import type { NextPage } from 'next';
import MissionHeader from '../components/MissionHeader';
import OrbitPlot from '../components/OrbitPlot';
import TelemetryGrid from '../components/TelemetryGrid';
import SubsystemStatus from '../components/SubsystemStatus';
import CommsLog from '../components/CommsLog';
import MissionTimeline from '../components/MissionTimeline';
import CrewPanel from '../components/CrewPanel';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-space-bg overflow-hidden">
      <MissionHeader />
      <div className="flex flex-1 min-h-0 p-1.5 gap-1.5">
        {/* Left: Orbit Plot */}
        <div className="flex-[3] min-w-0">
          <OrbitPlot />
        </div>
        {/* Center: Telemetry + Timeline */}
        <div className="flex-[3] min-w-0 flex flex-col gap-1.5">
          <div className="flex-[3] min-h-0">
            <TelemetryGrid />
          </div>
          <div className="flex-[2] min-h-0">
            <MissionTimeline />
          </div>
        </div>
        {/* Right: Subsystems + Comms + Crew */}
        <div className="w-72 shrink-0 flex flex-col gap-1.5">
          <div className="flex-1 min-h-0">
            <SubsystemStatus />
          </div>
          <div className="flex-1 min-h-0">
            <CommsLog />
          </div>
          <div className="flex-1 min-h-0">
            <CrewPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;