import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
