import React, { useEffect, useRef, useState } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  petalType: number;
}

export const SakuraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of petals proportional to screen width, capped at 32 for ultra smooth performance
    const petalCount = Math.min(Math.floor(width / 45), 32);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 1.2 - 0.4,
        speedY: Math.random() * 1.2 + 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.45 + 0.25,
        petalType: Math.floor(Math.random() * 3)
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      // Petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.5, -p.size / 2, p.size, p.size);
      ctx.bezierCurveTo(p.size / 2, p.size * 1.2, 0, p.size / 2, 0, 0);

      // Gradient fill with hot pink and sakura pink
      const grad = ctx.createLinearGradient(0, -p.size, p.size, p.size);
      grad.addColorStop(0, '#FF6FB5');
      grad.addColorStop(0.6, '#FF2E93');
      grad.addColorStop(1, '#C41E7A');

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(255, 46, 147, 0.4)';
      ctx.shadowBlur = 8;
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.7;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-10"
          style={{ mixBlendMode: 'screen' }}
        />
      )}
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        title={isActive ? 'Pause ambient falling petals' : 'Play ambient petals'}
        aria-label="Toggle Sakura Petals"
        className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full glass-card text-xs flex items-center gap-2 border border-[#2A2B45] hover:border-[#FF2E93] text-[#C4C4D6] hover:text-white transition-all shadow-lg group"
      >
        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#FF2E93] animate-pulse' : 'bg-gray-500'}`} />
        <span className="hidden sm:inline font-mono text-[11px] text-[#C4C4D6] group-hover:text-white">
          Sakura: {isActive ? 'Active' : 'Off'}
        </span>
      </button>
    </>
  );
};
