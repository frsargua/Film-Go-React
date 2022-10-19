import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.jsx";
import Hero from "./components/Hero/index.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
