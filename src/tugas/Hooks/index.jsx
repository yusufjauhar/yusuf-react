import React from "react";
import NavbarInews from "./news.jsx/navbar";
import Counter from "./pembahasan/counter";
import { useState } from "react";
import Contoh from "./news.jsx/contoh";

const Hooks = () => {
  return (
    <div>
      <NavbarInews />
    </div>
  );
};

export default Hooks;
// function Hooks() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Anda menekan sebanyak {count} kali</p>
//       <button onClick={() => setCount(count + 1)}>Klik saya</button>
//     </div>
//   );
// }

// export default Hooks;
