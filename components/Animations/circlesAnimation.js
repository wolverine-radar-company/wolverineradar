import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CirclesAnimation = () => {
  const circlesRef = useRef([]);
  const dotsRef = useRef([]);
  const containerRef = useRef(null); // Ref for the container

  useEffect(() => {
    const loadAnimations = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center', // Adjust the start point to trigger the animation at the right time
          toggleActions: 'play none none none',
        }
      });

      // Draw circles from the center point
      circlesRef.current.forEach((circle, index) => {
        tl.fromTo(circle, { scale: 0 }, { scale: 1, delay: index * 0.2 });
      });

      // Pulse animation for the red dots
      dotsRef.current.forEach((dot) => {
        tl.to(dot, { scale: 1.5, repeat: -1, yoyo: true, duration: 0.5, ease: 'power1.inOut' });
      });
    };

    loadAnimations();
  }, []);

  const numCircles = 5; // Number of circles
  const radius = 100; // Set radius

  // Positions for the red dots
  const dotPositions = [
    { angle: 225, distance: 40 },
  ];

  return (
    <div ref={containerRef} className="relative w-64 h-64">
      {[...Array(numCircles)].map((_, i) => (
        <div
          key={i}
          ref={el => circlesRef.current[i] = el}
          className="absolute border border-white rounded-full"
          style={{
            width: `${(i + 1) * radius / numCircles * 2}px`,
            height: `${(i + 1) * radius / numCircles * 2}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent'
          }}
        />
      ))}
      {dotPositions.map((pos, i) => {
        const top = 50 + pos.distance * Math.sin((pos.angle * Math.PI) / 180);
        const left = 50 + pos.distance * Math.cos((pos.angle * Math.PI) / 180);

        return (
          <div
            key={i}
            ref={el => dotsRef.current[i] = el}
            className="absolute w-4 h-4 bg-red-500 rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </div>
  );
};

export default CirclesAnimation;
