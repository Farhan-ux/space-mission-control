# Space Mission Control Dashboard

Real-time space mission control interface for the ARTEMIS-IV lunar mission, built with Next.js 14, TypeScript, and Canvas API.

## Features

- **Animated Orbital View** — Canvas-rendered lunar orbit with spacecraft trail, moon surface, star field, and DSN ground station link
- **Live MET Clock** — Mission Elapsed Time counter ticking in DD:HH:MM:SS format
- **12 Telemetry Parameters** — Altitude, velocity, inclination, eccentricity, period, power, fuel, and more with status indicators
- **8 Subsystem Monitors** — GNC, Propulsion, Power, ECLSS, Thermal, Comms, RCS, and DPS with health percentage bars
- **CAPCOM Comms Log** — Houston/spacecraft radio transcript with priority classification
- **Mission Timeline** — Gantt-style 16-phase mission plan from launch to Earth return
- **Crew Status** — 4-member crew with current activities and locations

## Tech Stack

- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS
- Canvas API (orbital visualization)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.
