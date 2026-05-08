import { useEffect, useRef } from "react";
import "./styles.scss";

const JumpingLettersFunc = () => {
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

  return (
    <div className="box" ref={containerRef}>
      <div className="inner">
        <div className="letter" data-title="&ldquo;">
          &ldquo;
        </div>
        <div className="letter" data-title="C">
          C
        </div>
        <div className="letter" data-title="o">
          o
        </div>
        <div className="letter" data-title="i">
          i
        </div>
        <div className="letter" data-title="n">
          n
        </div>
        <div className="letter" data-title="g">
          g
        </div>
        <div className="letter">,</div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="M">
          M
        </div>
        <div className="letter" data-title="u">
          u
        </div>
        <div className="letter" data-title="s">
          s
        </div>
        <div className="letter" data-title="i">
          i
        </div>
        <div className="letter" data-title="c">
          c
        </div>
        <div className="letter">,</div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <br />
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="m">
          m
        </div>
        <div className="letter" data-title="y">
          y
        </div>
        <div className="letter" data-title="&nbsp;">
          &nbsp;
        </div>
        <div className="letter" data-title="f">
          f
        </div>
        <div className="letter" data-title="r">
          r
        </div>
        <div className="letter" data-title="i">
          i
        </div>
        <div className="letter" data-title="e">
          e
        </div>
        <div className="letter" data-title="n">
          n
        </div>
        <div className="letter" data-title="d">
          d
        </div>
        <div className="letter" data-title="&rdquo;">
          &rdquo;
        </div>
        <br />
      </div>
    </div>
  );
};

export default JumpingLettersFunc;
