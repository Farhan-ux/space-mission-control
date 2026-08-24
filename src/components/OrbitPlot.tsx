import { useRef, useEffect } from 'react';

export default function OrbitPlot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    let anim: number;
    let stars: { x: number; y: number; r: number; b: number }[] | null = null;
    const draw = () => {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = '#0a0a12';
      ctx.fillRect(0, 0, w, h);

      if (!stars) {
        stars = Array.from({ length: 120 }, () => ({
          x: Math.random() * 2000,
          y: Math.random() * 2000,
          r: Math.random() * 1.2 + 0.3,
          b: Math.random() * 0.5 + 0.3,
        }));
      }
      stars.forEach(s => {
        ctx.fillStyle = `rgba(180,190,220,${s.b})`;
        ctx.beginPath();
        ctx.arc(s.x % w, s.y % h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Moon
      const moonR = Math.min(w, h) * 0.12;
      const moonGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, moonR);
      moonGrad.addColorStop(0, '#c8c8c8');
      moonGrad.addColorStop(0.7, '#888888');
      moonGrad.addColorStop(1, '#333333');
      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, moonR, 0, Math.PI * 2);
      ctx.fill();

      // Orbit path
      const orbitRx = Math.min(w, h) * 0.38;
      const orbitRy = orbitRx * 0.92;
      ctx.strokeStyle = 'rgba(0,212,255,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, orbitRx, orbitRy, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Spacecraft
      angleRef.current += 0.003;
      const scX = cx + Math.cos(angleRef.current) * orbitRx;
      const scY = cy + Math.sin(angleRef.current) * orbitRy;

      // Trail
      ctx.strokeStyle = 'rgba(0,212,255,0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < 40; i++) {
        const a = angleRef.current - i * 0.015;
        const tx = cx + Math.cos(a) * orbitRx;
        const ty = cy + Math.sin(a) * orbitRy;
        if (i === 0) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
      }
      ctx.stroke();

      // Spacecraft dot
      ctx.fillStyle = '#00d4ff';
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(scX, scY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label
      ctx.fillStyle = '#00d4ff';
      ctx.font = '10px JetBrains Mono';
      ctx.fillText('ARTEMIS-IV', scX + 10, scY - 6);
      ctx.fillStyle = '#555';
      ctx.fillText(`ALT 112.4 km`, scX + 10, scY + 6);

      // Ground station line
      const gsX = w * 0.85;
      const gsY = h * 0.9;
      ctx.strokeStyle = 'rgba(0,255,136,0.3)';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.moveTo(gsX, gsY);
      ctx.lineTo(scX, scY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#00ff88';
      ctx.font = '9px JetBrains Mono';
      ctx.fillText('GOLDSTONE', gsX + 5, gsY);

      anim = requestAnimationFrame(draw);
    };
    anim = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(anim); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div className="space-panel h-full relative overflow-hidden">
      <div className="space-header">
        <span className="data-label">Orbital View</span>
        <span className="text-[10px] text-gray-500">LUNAR ORBIT</span>
      </div>
      <div className="orbit-grid absolute inset-0 top-7">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}