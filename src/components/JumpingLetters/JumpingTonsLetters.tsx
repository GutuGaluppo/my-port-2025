import { useEffect, useRef } from "react";
import { stringToLetterDivs } from "./helper";
import "./styles.scss";

const JumpingTonsLetters = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll<HTMLElement>(".letter");
    if (!letters) {
      return undefined;
    }

    const setColor = (
      el: HTMLElement,
      r: number,
      g: number,
      b: number,
    ): void => {
      el.style.color = `rgb(${r},${g},${b})`;
    };

    const cleanups = Array.from(letters, (letter) => {
      const handleMouseEnter = () => {
        letter.classList.add("isJumping");

        setColor(letter, 225, 204, 143);

        window.setTimeout(() => {
          letter.classList.remove("isJumping");
        }, 2000);

        window.setTimeout(() => {
          setColor(letter, 159, 145, 91);
        }, 4000);
      };

      letter.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        letter.removeEventListener("mouseenter", handleMouseEnter);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const line1 = "Music • Coding";
  const line2 = "Bike • Tattoo";
  const line3 = "Family & Friends";

  return (
    <div className="box" ref={containerRef}>
      <div className="inner">
        <div className="word-group">{stringToLetterDivs(line1)}</div>
        <br />

        <div className="word-group">{stringToLetterDivs(line2)}</div>
        <br />

        <div className="word-group">{stringToLetterDivs(line3)}</div>
      </div>
    </div>
  );
};

export default JumpingTonsLetters;
