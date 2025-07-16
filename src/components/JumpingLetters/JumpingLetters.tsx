import React, { useEffect } from "react";
import "./styles.scss";

const JumpingLettersFunc: React.FC = () => {
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

  return (
    <div className="box">
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
