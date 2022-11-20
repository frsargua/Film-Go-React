import { createContext, useEffect, useState } from "react";
import { getTrailerId, convertToImdbID } from "../utils/ImdbId-functions";

export const MovieTrailerContext = createContext({
  movieTrailer: "",
  modalState: false,
});

export const MovieTrailerProvider = ({ children }) => {
  const [movieTrailer, setMovieTrailer] = useState("");
  const [modalState, setModalState] = useState(false);

  const updateMovieTrailerLink = async (movieId) => {
    if (movieId == "none") setMovieTrailer("");
    let newId = await convertToImdbID(movieId);
    let { videoId: newLink } = await getTrailerId(newId);
    console.log(newLink);
    setMovieTrailer(newLink);
  };
  const updateModalState = () => {
    setModalState((prev) => !prev);
  };

  const value = {
    movieTrailer,
    updateMovieTrailerLink,
    modalState,
    updateModalState,
  };

  return (
    <MovieTrailerContext.Provider value={value}>
      {children}
    </MovieTrailerContext.Provider>
  );
};
