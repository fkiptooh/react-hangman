const HEAD = () => {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "100px",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    />
  );
};

const BODY = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px",
      }}
    />
  );
};
const RIGHT_ARM = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );
};

const LEFT_ARM = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );
};

const RIGHT_LEG = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210PX",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );
};

const LEFT_LEG = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210PX",
        right: 0,
        rotate: "300deg",
        transformOrigin: "right bottom",
      }}
    />
  );
};
const BODY_PARTS = [
  HEAD(),
  BODY(),
  RIGHT_ARM(),
  LEFT_ARM(),
  RIGHT_LEG(),
  LEFT_LEG(),
];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          position: "absolute",
          top: 0,
          right: 0,
          background: "black",
        }}
      />
      <div
        style={{
          marginLeft: "120px",
          width: "200px",
          background: "black",
          height: "10px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};
