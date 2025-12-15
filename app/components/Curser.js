'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Curser() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

   
    if (!dot || !ring) return;

    // move listener - use direct event coords for GSAP
    const onMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 1.12, ease: 'elastic.out(1, 0.3)' });
      // ring slightly lags behind
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 1.28, ease: 'elastic.out(1, 0.3)' });
    };

    // hover handlers for interactive elements
    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.6, duration: 1.25, ease: 'elastic.out(1, 0.3)', background: 'rgba(255, 201, 71, 0.12)', borderColor: '#FFC947' });
      gsap.to(dot, { scale: 0.85, duration: 1.2 });
    };
    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: .90, duration: 1.25,  ease: 'power2.out', background: 'rgba(33, 97, 209, 0.06)', borderColor: '#215FD1' });
      gsap.to(dot, { scale: 0.9, duration: 1.2 });
    };

    // add listeners
    window.addEventListener('mousemove', onMove);

    // target interactive items: links, buttons, inputs — school site માટે મુખ્ય interactive elements
    const interactiveSelectors = 'a, button, input, .btn, .hover-target';
    const interactives = document.querySelectorAll(interactiveSelectors);
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    // cleanup
    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '2px solid #215FD1', // school blue
          background: 'rgba(33, 97, 209, 0.06)', // subtle fill
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />

      {/* inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#FFC947', // golden accent
          boxShadow: '0 0 8px rgba(255,201,71,0.25)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
        }}
      />
    </>
  );
}

