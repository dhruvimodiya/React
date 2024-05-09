import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themeMode , setThemeMode] = useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  // change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <h1 className="p-4 bg-pink-600 text-3xl">hello</h1>
      <br />

      <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
