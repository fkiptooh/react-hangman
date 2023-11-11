export const HangmanWord = () => {
    const word = "text";
    const guessedLetters = ["t", "x", "v"];
    return (
      <div
        style={{
          display: "flex",
          gap: ".25rem",
          fontSize: "6rem",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        {word.split("").map((letter, index) => (
          <span
            key={index}
            style={{
              borderBottom: ".1em solid black",
            }}
          >
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
};
