"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Constellation background: jaringan node yang melayang dan terhubung garis,
 * kursor menarik & menautkan node terdekat. Fixed full-viewport, satu layer
 * dengan aurora/grid di belakang konten. Theme-aware, DPR-aware, dan render
 * satu frame statis saat reduced-motion.
 */
export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    let linkDist = 130;
    const mouse = { x: -9999, y: -9999, active: false };

    const isLight = () =>
      document.documentElement.classList.contains("light");

    function palette() {
      return isLight()
        ? { dot: "79,70,229", line: "15,18,28", link: "124,92,255", lineA: 0.16, linkA: 0.4 }
        : { dot: "34,211,238", line: "34,211,238", link: "124,92,255", lineA: 0.32, linkA: 0.5 };
    }
    let pal = palette();

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      linkDist = Math.min(150, Math.max(90, Math.min(w, h) / 6));
      const count = Math.max(28, Math.min(120, Math.round((w * h) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
      }));
    }

    function frame(animate: boolean) {
      ctx!.clearRect(0, 0, w, h);

      if (animate) {
        for (const n of nodes) {
          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy) || 1;
            if (d < 170) {
              n.vx += (dx / d) * 0.02;
              n.vy += (dy / d) * 0.02;
            }
          }
          n.x += n.vx;
          n.y += n.vy;
          n.vx *= 0.99;
          n.vy *= 0.99;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }
      }

      ctx!.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDist) {
            ctx!.strokeStyle = `rgba(${pal.line},${(1 - d / linkDist) * pal.lineA})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
        if (mouse.active) {
          const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dm < 190) {
            ctx!.strokeStyle = `rgba(${pal.link},${(1 - dm / 190) * pal.linkA})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${pal.dot},0.85)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function tick() {
      frame(true);
      raf = requestAnimationFrame(tick);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      resize();
      if (reduce) frame(false);
    };
    const themeObserver = new MutationObserver(() => {
      pal = palette();
    });

    resize();
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("resize", onResize);

    if (reduce) {
      frame(false);
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full transition-opacity duration-500"
      style={{ opacity: "var(--particles-opacity)" }}
    />
  );
}