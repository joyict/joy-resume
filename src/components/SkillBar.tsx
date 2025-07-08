import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  level: number;
  maxLevel?: number;
  skillName: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ level, maxLevel = 5, skillName, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  
  const fillPercentage = (level / maxLevel) * 100;

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setIsAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [delay, isAnimated]);

  // Click handler for replay animation
  const handleClick = () => {
    setIsClicked(true);
    setIsVisible(false);
    
    // Small delay to show the reset, then animate again
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Reset click state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 1600);
  };

  return (
    <div ref={barRef} className="skill-bar-container">
      <div 
        className="w-full h-3 rounded-full overflow-hidden cursor-pointer relative shadow-inner bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 transition-all duration-300 hover:shadow-lg"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`${skillName} skill level: ${level} out of ${maxLevel}. Click to replay animation.`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Base gradient very light gray background - always visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
        
        {/* Animated accent color overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-joy-primary via-joy-accent to-joy-primary transform origin-left transition-all duration-1500 ease-out ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          } ${isClicked ? 'animate-pulse' : ''}`}
          style={{ 
            width: `${fillPercentage}%`,
            transformOrigin: 'left center'
          }}
        />
        
        {/* Shimmer effect during animation */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-1500 ${
            isVisible && !isAnimated ? 'translate-x-full' : '-translate-x-full'
          }`}
          style={{ 
            width: '30%',
            animationDelay: `${delay}ms`
          }}
        />
        
        {/* Subtle inner glow effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-joy-primary/20 to-joy-accent/20 transition-opacity duration-1500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: `${fillPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;