import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index.jsx";

import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
