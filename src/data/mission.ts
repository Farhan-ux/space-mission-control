export interface TelemetryPoint {
  name: string;
  value: string;
  unit: string;
  status: 'nominal' | 'caution' | 'warning' | 'critical';
  history: number[];
}

export interface Subsystem {
  name: string;
  fullName: string;
  status: 'nominal' | 'degraded' | 'off' | 'critical';
  health: number;
  details: string;
}

export interface CommsEntry {
  time: string;
  from: string;
  message: string;
  priority: 'routine' | 'priority' | 'urgent';
}

export interface MissionEvent {
  name: string;
  start: number;
  duration: number;
  color: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface CrewMember {
  name: string;
  role: string;
  activity: string;
  location: string;
}

export const missionInfo = {
  name: 'ARTEMIS-IV',
  phase: 'Lunar Orbit Insertion',
  spacecraft: 'Orion MPCV-214',
  launchDate: '2024-11-15T06:42:00Z',
  met: 172800, // seconds (MET = 2 days)
  groundStation: 'GOLDSTONE DSN',
  commStatus: 'locked',
  signalStrength: -82,
  dataRate: '2.1 Mbps',
  delay: 1.28,
};

export const telemetry: TelemetryPoint[] = [
  { name: 'ALTITUDE', value: '112.4', unit: 'km', status: 'nominal', history: [112.0, 112.1, 112.3, 112.2, 112.4, 112.4, 112.3, 112.5] },
  { name: 'VELOCITY', value: '1,634', unit: 'm/s', status: 'nominal', history: [1640, 1638, 1636, 1635, 1634, 1634, 1633, 1634] },
  { name: 'INCLINATION', value: '28.5', unit: 'deg', status: 'nominal', history: [28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5] },
  { name: 'ECCENTRICITY', value: '0.0032', unit: '', status: 'nominal', history: [0.0045, 0.0041, 0.0038, 0.0036, 0.0035, 0.0034, 0.0033, 0.0032] },
  { name: 'ARG PERIAPSIS', value: '245.8', unit: 'deg', status: 'nominal', history: [246.2, 246.0, 245.9, 245.9, 245.8, 245.8, 245.8, 245.8] },
  { name: 'RAAN', value: '178.3', unit: 'deg', status: 'nominal', history: [178.3, 178.3, 178.3, 178.3, 178.3, 178.3, 178.3, 178.3] },
  { name: 'PERIOD', value: '7,248', unit: 's', status: 'nominal', history: [7260, 7256, 7254, 7252, 7250, 7249, 7248, 7248] },
  { name: 'SOLAR PANEL', value: '14.2', unit: 'kW', status: 'nominal', history: [14.1, 14.2, 14.3, 14.2, 14.1, 14.0, 14.2, 14.2] },
  { name: 'BATTERY', value: '94.2', unit: '%', status: 'nominal', history: [98, 96, 95, 94, 93, 94, 95, 94] },
  { name: 'FUEL REMAIN', value: '42.8', unit: '%', status: 'caution', history: [48, 47, 46, 45, 44, 44, 43, 43] },
  { name: 'HULL TEMP', value: '-142', unit: '°C', status: 'nominal', history: [-140, -141, -142, -143, -142, -141, -140, -142] },
  { name: 'CABIN PRESS', value: '14.69', unit: 'psi', status: 'nominal', history: [14.70, 14.69, 14.69, 14.68, 14.69, 14.69, 14.70, 14.69] },
];

export const subsystems: Subsystem[] = [
  { name: 'GNC', fullName: 'Guidance, Nav & Control', status: 'nominal', health: 98, details: 'Star tracker locked, IMU calibrated' },
  { name: 'PROP', fullName: 'Propulsion', status: 'nominal', health: 95, details: 'OMS pods nominal, RCS hot' },
  { name: 'PWR', fullName: 'Electrical Power', status: 'nominal', health: 97, details: 'Solar arrays tracking, batteries cycling' },
  { name: 'ECLSS', fullName: 'Life Support', status: 'nominal', health: 99, details: 'O2 at 21.1%, CO2 at 0.04%, temp 22°C' },
  { name: 'THERM', fullName: 'Thermal Control', status: 'nominal', health: 94, details: 'Radiator panels deployed, heat rejection nominal' },
  { name: 'COM', fullName: 'Communications', status: 'nominal', health: 100, details: 'DSN locked at Goldstone, 2.1 Mbps' },
  { name: 'RCS', fullName: 'Reaction Control', status: 'degraded', health: 78, details: 'Thruster B2 showing 15% degradation' },
  { name: 'DPS', fullName: 'Data Processing', status: 'nominal', health: 96, details: 'All computers nominal, backup hot' },
];

export const commsLog: CommsEntry[] = [
  { time: 'T+47:32:15', from: 'HOUSTON', message: 'Artemis-IV, Houston. LOI-2 burn targeting confirmed. You are GO for ΔV at T+48:00:00.', priority: 'priority' },
  { time: 'T+47:33:02', from: 'ARTEMIS', message: 'Houston, Artemis. LOI-2 GO confirmed. Flight computer is in auto-sequence. CDR standing by on abort monitor.', priority: 'priority' },
  { time: 'T+47:45:10', from: 'HOUSTON', message: 'Artemis, Houston. Updated PDL uploaded. Check your burn parameters on OBC 1 page 4.', priority: 'routine' },
  { time: 'T+47:46:30', from: 'ARTEMIS', message: 'Houston, Artemis. PDL verified. Burn parameters match. ΔV 82.4 m/s, duration 3m 12s.', priority: 'routine' },
  { time: 'T+47:55:00', from: 'HOUSTON', message: 'Artemis, Houston. T-5 minutes to LOI-2. Confirm seat configuration and harness locks.', priority: 'priority' },
  { time: 'T+47:56:15', from: 'ARTEMIS', message: 'Houston, Artemis. All crew seated, harnesses locked. PLT confirms GNC auto-sequence active.', priority: 'routine' },
  { time: 'T+47:58:00', from: 'HOUSTON', message: 'Artemis, Houston. T-2 minutes. Pressure in OMS tanks nominal. You are GO for ignition.', priority: 'urgent' },
  { time: 'T+48:00:05', from: 'ARTEMIS', message: 'Houston, Artemis. LOI-2 ignition confirmed. Thrust is nominal. Acceleration 0.43 m/s².', priority: 'urgent' },
  { time: 'T+48:01:30', from: 'HOUSTON', message: 'Artemis, Houston. Tracking confirms nominal trajectory. Burn looking good.', priority: 'priority' },
  { time: 'T+48:03:20', from: 'ARTEMIS', message: 'Houston, Artemis. LOI-2 cutoff confirmed. ΔV achieved 82.6 m/s. Orbit is stable.', priority: 'urgent' },
];

export const missionTimeline: MissionEvent[] = [
  { name: 'Launch', start: 0, duration: 600, color: '#ff6b35', status: 'completed' },
  { name: 'Orbit Insertion', start: 5400, duration: 300, color: '#ffd700', status: 'completed' },
  { name: 'TLI Burn', start: 10800, duration: 360, color: '#ff6b35', status: 'completed' },
  { name: 'Coast Phase', start: 11160, duration: 100000, color: '#00d4ff', status: 'completed' },
  { name: 'LOI-1', start: 120000, duration: 400, color: '#ffd700', status: 'completed' },
  { name: 'Lunar Orbit', start: 120400, duration: 45000, color: '#a855f7', status: 'in-progress' },
  { name: 'LOI-2', start: 172800, duration: 200, color: '#ffd700', status: 'in-progress' },
  { name: 'Orbit Trim', start: 175000, duration: 120, color: '#00ff88', status: 'upcoming' },
  { name: 'Landing Prep', start: 180000, duration: 7200, color: '#ff3355', status: 'upcoming' },
  { name: 'Lunar Landing', start: 190000, duration: 1800, color: '#ff3355', status: 'upcoming' },
  { name: 'Surface Ops', start: 192000, duration: 200000, color: '#00ff88', status: 'upcoming' },
  { name: 'Ascent', start: 392000, duration: 2400, color: '#ff6b35', status: 'upcoming' },
  { name: 'TEI Burn', start: 410000, duration: 300, color: '#ffd700', status: 'upcoming' },
  { name: 'Earth Return', start: 410300, duration: 100000, color: '#00d4ff', status: 'upcoming' },
  { name: 'Entry & Landing', start: 510000, duration: 3600, color: '#ff3355', status: 'upcoming' },
];

export const crew: CrewMember[] = [
  { name: 'CDR Sarah Chen', role: 'Commander', activity: 'LOI-2 Burn Monitor', location: 'Left Seat' },
  { name: 'PLT James Wright', role: 'Pilot', activity: 'GNC System Monitor', location: 'Right Seat' },
  { name: 'MS-1 David Kim', role: 'Mission Spec 1', activity: 'ECLSS Monitoring', location: 'Mid-Deck' },
  { name: 'MS-2 Ana Petrova', role: 'Mission Spec 2', activity: 'Photography / Science', location: 'Lower Deck' },
];

export function getStatusColor(status: string): string {
  switch (status) {
    case 'nominal': return '#00ff88';
    case 'caution': return '#ffd700';
    case 'degraded': return '#ff6b35';
    case 'warning': return '#ff6b35';
    case 'critical': return '#ff3355';
    case 'off': return '#4a5568';
    default: return '#00d4ff';
  }
}
