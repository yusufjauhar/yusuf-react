import React from "react";
import { useState } from "react";

function Contoh() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
}

export default Contoh;
