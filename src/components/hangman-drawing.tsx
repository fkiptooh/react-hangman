export const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
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
