import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./components/hangman-drawing";
import { HangmanWord } from "./components/hangman-word";
import { HangmanKeyboard } from "./components/hangman-keyboard";

export const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Won or Lost</div>
      <HangmanDrawing />
      <HangmanWord />
      <HangmanKeyboard />
    </div>
  );
};
