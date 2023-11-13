import { useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./components/hangman-drawing";
import { HangmanWord } from "./components/hangman-word";
import { HangmanKeyboard } from "./components/hangman-keyboard";

const fetchWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const App = () => {
  const [wordToGuess, setWordToGuess] = useState(fetchWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    console.log(letter);
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    // console.log();

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);
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
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <HangmanKeyboard />
      </div>
    </div>
  );
};
