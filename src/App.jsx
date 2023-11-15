import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/main/Main";
function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") === "light");
  useEffect(() => {
    localStorage.setItem("mode", mode ? "light" : "dark");
  }, [mode]);
  function changeMode() {
    setMode((prev) => !prev);
  }

  return (
    <div className={`app ${mode ? "light-mode" : "dark-mode"}`}>
      <Header changeMode={changeMode} mode={mode} />
      <Main mode={mode} />
    </div>
  );
}

export default App;
