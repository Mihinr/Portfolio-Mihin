import { useState, useEffect } from 'react';

function TypingText({ 
  text, 
  typingSpeed = 75, 
  pauseDuration = 1500, 
  showCursor = true,
  className = "",
  cursorClassName = "",
  textColors = [],
  variableSpeed = null
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = Array.isArray(text) ? text[currentIndex] : text;
    
    const speed = variableSpeed 
      ? Math.floor(Math.random() * (variableSpeed.max - variableSpeed.min + 1)) + variableSpeed.min
      : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Only delete if we have multiple texts to cycle through
          if (Array.isArray(text) && text.length > 1) {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          }
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          if (Array.isArray(text)) {
            setCurrentIndex((currentIndex + 1) % text.length);
          }
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, text, typingSpeed, pauseDuration, variableSpeed]);

  const currentColor = textColors[currentIndex] || textColors[0] || '#b9ff1c';

  return (
    <span className={className} style={{ color: currentColor }}>
      {displayText}
      {showCursor && (
        <span className={`inline-block w-0.5 h-6 bg-current ml-1 animate-pulse ${cursorClassName}`} style={{ color: currentColor }}>
          |
        </span>
      )}
    </span>
  );
}

export default TypingText;

