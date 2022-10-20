import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.jsx";
import Hero from "./components/Hero/index.jsx";
import MovieCard from "./components/MovieCard";
import { Container } from "@mui/system";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Hero /> */}
        <Container maxWidth="xl" sx={{ mx: "auto" }}>
          <br></br>
          <br></br>
          {/* <SearchResults /> */}
          <MovieDetails />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
