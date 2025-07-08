import React, { useState, useEffect } from 'react';

interface AnimationStep {
  targetText: string;
  action: 'type' | 'delete' | 'replace';
  duration?: number;
  pauseAfter?: number;
}

interface TypingEffectProps {
  animationSteps: AnimationStep[];
  primaryClass: string;
  secondaryClass: string;
  initialDelay?: number;
  defaultTypingSpeed?: number;
  defaultDeletingSpeed?: number;
  showCursor?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  animationSteps,
  primaryClass,
  secondaryClass,
  initialDelay = 2000,
  defaultTypingSpeed = 150,
  defaultDeletingSpeed = 100,
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runAnimation = async () => {
      // Initial delay
      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, initialDelay);
      });

      // Execute each animation step
      for (let stepIndex = 0; stepIndex < animationSteps.length; stepIndex++) {
        const step = animationSteps[stepIndex];
        setCurrentStepIndex(stepIndex);

        if (step.action === 'type') {
          await typeText(step.targetText, step.duration || defaultTypingSpeed);
        } else if (step.action === 'delete') {
          await deleteText(step.targetText, step.duration || defaultDeletingSpeed);
        } else if (step.action === 'replace') {
          await replaceText(step.targetText, step.duration || defaultTypingSpeed);
        }

        // Pause after step if specified
        if (step.pauseAfter) {
          await new Promise(resolve => {
            timeoutId = setTimeout(resolve, step.pauseAfter);
          });
        }
      }

      // Animation complete
      setIsAnimationComplete(true);
      if (showCursor) {
        setCursorVisible(false);
      }
    };

    const typeText = async (targetText: string, speed: number) => {
      const currentLength = displayText.length;
      for (let i = currentLength; i <= targetText.length; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(targetText.slice(0, i));
            resolve(void 0);
          }, speed);
        });
      }
    };

    const deleteText = async (targetText: string, speed: number) => {
      const currentLength = displayText.length;
      for (let i = currentLength; i >= targetText.length; i--) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(displayText.slice(0, i));
            resolve(void 0);
          }, speed);
        });
      }
    };

    const replaceText = async (targetText: string, speed: number) => {
      // Find common prefix
      let commonPrefixLength = 0;
      const minLength = Math.min(displayText.length, targetText.length);
      
      for (let i = 0; i < minLength; i++) {
        if (displayText[i].toLowerCase() === targetText[i].toLowerCase()) {
          commonPrefixLength = i + 1;
        } else {
          break;
        }
      }

      // Delete non-common suffix
      for (let i = displayText.length; i >= commonPrefixLength; i--) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(prev => prev.slice(0, i));
            resolve(void 0);
          }, speed / 2); // Faster deletion
        });
      }

      // Type the rest of the target text
      for (let i = commonPrefixLength; i <= targetText.length; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(targetText.slice(0, i));
            resolve(void 0);
          }, speed);
        });
      }
    };

    runAnimation();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [animationSteps, initialDelay, defaultTypingSpeed, defaultDeletingSpeed, showCursor]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor || !cursorVisible) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor, cursorVisible]);

  const renderFinalText = () => {
    const finalText = animationSteps[animationSteps.length - 1]?.targetText || displayText;
    
    // Check if it's a name format (assuming "FirstName LastName")
    if (finalText.includes(' ')) {
      const nameParts = finalText.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      return (
        <span>
          <span className={primaryClass}>{firstName}</span>
          <span className={secondaryClass}>{lastName ? `.${lastName}` : ''}</span>
        </span>
      );
    }

    return <span className={primaryClass}>{finalText}</span>;
  };

  if (isAnimationComplete) {
    return renderFinalText();
  }

  return (
    <span className={primaryClass}>
      {displayText}
      {showCursor && cursorVisible && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingEffect;