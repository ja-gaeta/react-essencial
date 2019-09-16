import React, { useState } from "react";

const App = () => {
  const [contador, ajustaContador] = useState(0);
  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={() => ajustaContador(contador - 1)}>-</button>
      <button onClick={() => ajustaContador(contador + 1)}>+</button>
    </div>
  );
};

export default App;
