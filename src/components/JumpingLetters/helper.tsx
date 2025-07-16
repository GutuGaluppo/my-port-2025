import React from "react";
import * as Tone from "tone";

// Initialize audio context (call this once in your app)
const initializeAudio = async () => {
  if (Tone.getContext().state !== "running") {
    await Tone.start();
  }
};

// Create a simple synth for playing tones
const synth = new Tone.Synth().toDestination();

// Function to play a tone based on character
const playToneForChar = async (char: string) => {
  await initializeAudio();

  // Create a simple mapping of characters to musical notes
  const charToNote: { [key: string]: string } = {
    a: "C3",
    b: "D3",
    c: "E3",
    d: "F3",
    e: "G3",
    f: "A3",
    g: "B3",
    h: "C4",
    i: "D4",
    j: "E4",
    k: "F4",
    l: "G4",
    m: "A4",
    n: "B4",
    o: "C3",
    p: "D3",
    q: "E3",
    r: "F3",
    s: "G3",
    t: "A3",
    u: "B3",
    v: "C5",
    w: "D5",
    x: "E5",
    y: "F5",
    z: "G5",
  };

  const note = charToNote[char.toLowerCase()] || "C4"; // Default to C4 if character not found
  synth.triggerAttackRelease(note, "8n");
};

// Function to convert a string into letter divs with data-title attributes
export const stringToLetterDivs = (text: string): React.ReactElement[] => {
  return text.split("").map((char, index) => {
    // Handle special characters that shouldn't have data-title
    const shouldHaveTitle = char !== "," && char !== " ";

    // Convert space to non-breaking space for display
    const displayChar = char === " " ? "\u00A0" : char;

    return (
      <div
        key={index}
        className="letter"
        {...(shouldHaveTitle && { "data-title": char })}
        onMouseEnter={() => playToneForChar(char)}
        style={{ cursor: "pointer" }}
      >
        {displayChar}
      </div>
    );
  });
};
