import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.jsx";

import SearchResults from "./pages/SearchResults";
import { HashRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter base="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:id" element={<SearchResults />} />
          <Route path="/details" element={<MovieDetails />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
