import React, { useEffect } from "react";
import { stringToLetterDivs } from "./helper";
import "./styles.scss";

// Usage examples:
const JumpingTonsLetters = (): React.ReactElement => {
  useEffect(() => {
    fillLists();
  });

  function fillLists(): void {
    const letters: NodeListOf<HTMLElement> =
      document.querySelectorAll(".letter");
    const random = (max: number, min: number): number =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(letters);

    let scl: number[] = [];
    let avoColorList: number[][] = [];

    letters.forEach(() => {
      scl.push(random(10, 20));
      avoColorList.push([random(30, 60), random(0, 10), random(200, 30)]);
    });

    const setColor = (
      el: HTMLElement,
      r: number,
      g: number,
      b: number,
    ): void => {
      el.style.color = `rgb(${r},${g},${b})`;
    };

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        letter.classList.add("isJumping");

        setColor(letter, 225, 204, 143);

        setTimeout(() => {
          letter.classList.remove("isJumping");
        }, 2000);

        setTimeout(() => {
          setColor(letter, 159, 145, 91);
        }, 4000);
      });
    });
  }
  const line1 = "Music • Coding";
  const line2 = "Bike • Tattoo";
  const line3 = "Family & Friends";

  return (
    <div className="box">
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
