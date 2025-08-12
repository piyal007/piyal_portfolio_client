import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const getViewport = () => ({ width: window.innerWidth, height: window.innerHeight });

const getRandomTarget = (margin = 24) => {
  const { width, height } = getViewport();
  return {
    x: Math.random() * (width - margin * 2) + margin,
    y: Math.random() * (height - margin * 2) + margin,
  };
};

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const AnimatedBug = ({ size = 28, color = '#FF3D00' }) => {
  // Inline keyframes once
  return (
    <>
      <style>
        {`
        @keyframes bugLegFront { 0% { transform: rotate(18deg); } 50% { transform: rotate(-12deg); } 100% { transform: rotate(18deg); } }
        @keyframes bugLegBack  { 0% { transform: rotate(-12deg);} 50% { transform: rotate(18deg); } 100% { transform: rotate(-12deg);} }
        @keyframes bugAntenna   { 0% { transform: rotate(6deg); } 50% { transform: rotate(-6deg);} 100% { transform: rotate(6deg);} }
        `}
      </style>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="32" cy="36" rx="14" ry="18" fill={color} opacity="0.95"/>
        {/* Head */}
        <circle cx="32" cy="18" r="8" fill={color} />
        {/* Eyes */}
        <circle cx="29" cy="16" r="2" fill="#111"/>
        <circle cx="35" cy="16" r="2" fill="#111"/>
        {/* Code mark </> */}
        <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <polyline points="26,36 22,34 26,32" />
          <line x1="30" y1="32" x2="34" y2="40" />
          <polyline points="38,32 42,34 38,36" />
        </g>
        {/* Antennae */}
        <g style={{ transformOrigin: '32px 12px', animation: 'bugAntenna 1.2s ease-in-out infinite' }}>
          <path d="M32 12 C28 6, 22 4, 18 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 12 C36 6, 42 4, 46 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </g>
        {/* Legs left (front/mid/back) */}
        <g stroke={color} strokeWidth="3" strokeLinecap="round">
          <g style={{ transformOrigin: '24px 30px', animation: 'bugLegFront 0.35s linear infinite' }}>
            <path d="M24 30 L12 26" />
          </g>
          <g style={{ transformOrigin: '24px 36px', animation: 'bugLegBack 0.35s linear infinite' }}>
            <path d="M24 36 L10 36" />
          </g>
          <g style={{ transformOrigin: '24px 42px', animation: 'bugLegFront 0.35s linear infinite' }}>
            <path d="M24 42 L12 48" />
          </g>
        </g>
        {/* Legs right (front/mid/back) */}
        <g stroke={color} strokeWidth="3" strokeLinecap="round">
          <g style={{ transformOrigin: '40px 30px', animation: 'bugLegBack 0.35s linear infinite' }}>
            <path d="M40 30 L52 26" />
          </g>
          <g style={{ transformOrigin: '40px 36px', animation: 'bugLegFront 0.35s linear infinite' }}>
            <path d="M40 36 L54 36" />
          </g>
          <g style={{ transformOrigin: '40px 42px', animation: 'bugLegBack 0.35s linear infinite' }}>
            <path d="M40 42 L52 48" />
          </g>
        </g>
      </svg>
    </>
  );
};

const BugWalker = ({ speed = 70, size = 28, opacity = 0.9, avoidRadius = 320, showAvoidCircle = true }) => {
  const [pos, setPos] = useState(() => getRandomTarget());
  const [angle, setAngle] = useState(0);
  const x = useMotionValue(pos.x);
  const y = useMotionValue(pos.y);

  const targetRef = useRef(getRandomTarget());
  const lastTsRef = useRef(0);
  const rafRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const lastTargetAtRef = useRef(0);
  const fleeBoostUntilRef = useRef(0);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onResize = () => {
      // Keep the bug within viewport on resize
      const { width, height } = getViewport();
      setPos((p) => ({ x: clamp(p.x, 0, width), y: clamp(p.y, 0, height) }));
      targetRef.current = getRandomTarget();
    };
    const onMouse = (e) => {
      const p = { x: e.clientX, y: e.clientY };
      mouseRef.current = p;
      setMousePos(p);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  useEffect(() => {
    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05); // cap dt
      lastTsRef.current = ts;

      const { width, height } = getViewport();

      let target = targetRef.current;
      let dx = target.x - pos.x;
      let dy = target.y - pos.y;
      let dist = Math.hypot(dx, dy);

      // Mouse avoidance: if too close, flee far in the opposite direction
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mdx = pos.x - mx;
      const mdy = pos.y - my;
      const mdist = Math.hypot(mdx, mdy);
      if (mdist < avoidRadius) {
        // New target much farther in the opposite direction (near edges)
        const ux = mdx / (mdist || 1);
        const uy = mdy / (mdist || 1);
        const fleeDistance = Math.max(getViewport().width, getViewport().height) * 0.75;
        target = {
          x: clamp(pos.x + ux * fleeDistance, 16, width - 16),
          y: clamp(pos.y + uy * fleeDistance, 16, height - 16),
        };
        targetRef.current = target;
        // temporary sprint boost while fleeing
        fleeBoostUntilRef.current = ts + 900;
        dx = target.x - pos.x;
        dy = target.y - pos.y;
        dist = Math.hypot(dx, dy);
      }

      // Pick a new target when close enough with cooldown to avoid jitter
      if (dist < 8 && ts - lastTargetAtRef.current > 400) {
        let next = getRandomTarget(64);
        // ensure next is not too close
        for (let i = 0; i < 3 && Math.hypot(next.x - pos.x, next.y - pos.y) < 120; i++) {
          next = getRandomTarget(64);
        }
        targetRef.current = next;
        lastTargetAtRef.current = ts;
      } else {
        const boost = ts < fleeBoostUntilRef.current ? 2.2 : 1;
        const clampedSpeed = Math.max(40, Math.min(speed, 160)) * boost;
        const vx = (dx / dist) * clampedSpeed;
        const vy = (dy / dist) * clampedSpeed;
        const nx = pos.x + vx * dt;
        const ny = pos.y + vy * dt;
        setPos({ x: nx, y: ny });
        x.set(nx);
        y.set(ny);
        // Adjust rotation: SVG faces up by default → add 90deg to face movement
        setAngle(((Math.atan2(dy, dx) * 180) / Math.PI) + 90);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pos.x, pos.y, speed]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-40 select-none"
      style={{
        left: 0,
        top: 0,
        x,
        y,
        rotate: angle,
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
        opacity,
      }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      <AnimatedBug size={size} />
    </motion.div>
  );
};

export default BugWalker;


