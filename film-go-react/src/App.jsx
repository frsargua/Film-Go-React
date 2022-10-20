import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.jsx";
import Hero from "./components/Hero/index.jsx";
import MovieCard from "./components/MovieCard";
import { Container } from "@mui/system";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Container sx={{ overflow: "visible" }}>
          <MovieCard
            imgLink={"jQb1UjOdc2DsU4SqDebrVH8dHvC.jpg"}
            title={"The Trapped 13: How We Survived The Thai Cave"}
            index={1}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
