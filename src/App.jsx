import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") === "light");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem("mode", mode ? "light" : "dark");
  }, [mode]);

  function changeMode() {
    setMode((prev) => !prev);
  }

  function handleDivClick() {
    setClicked(true);
  }

  return (
    <div
      
      className={`app ${mode ? "light-mode" : "dark-mode"}`}
    >
      <Header changeMode={changeMode} mode={mode} />
      <Main 
      onClick={handleDivClick}
      mode={mode} clicked={clicked} />
    </div>
  );
}

export default App;
