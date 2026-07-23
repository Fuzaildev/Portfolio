import { useEffect, useState } from "react";

export function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600, gap = 400 } = {}
) {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;
    let wordIndex = 0;
    let charIndex = 0;
    let timeoutId;

    const typeStep = () => {
      if (cancelled) return;
      const word = words[wordIndex % words.length];

      if (charIndex <= word.length) {
        setText(word.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(typeStep, typeSpeed);
      } else {
        timeoutId = setTimeout(deleteStep, pause);
      }
    };

    const deleteStep = () => {
      if (cancelled) return;
      const word = words[wordIndex % words.length];

      if (charIndex > 0) {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        timeoutId = setTimeout(deleteStep, deleteSpeed);
      } else {
        wordIndex += 1;
        timeoutId = setTimeout(() => {
          charIndex = 0;
          typeStep();
        }, gap);
      }
    };

    timeoutId = setTimeout(typeStep, typeSpeed);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [words, typeSpeed, deleteSpeed, pause, gap]);

  return text;
}
