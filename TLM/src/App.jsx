import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import Wattles from "./components/Wattles";
import V from "./components/V";
import Vathulu from "./components/Vathulu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Vowels />
      {/* <V/> */}
      <div className="block">

        <div className="left">
          <Consonants />
        </div>

        <div className="right">
          <Vathulu/>
        </div>

      </div>
    </>
  );
}

export default App;
