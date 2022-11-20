import { fetchData } from "./index";

export const convertToImdbID = async (tmdb_id) => {
  const ApiToImdbID = `https://api.themoviedb.org/3/movie/${tmdb_id}/external_ids?api_key=7c7537b799513b436eb6bed714d7edcc`;
  const { imdb_id } = await fetchData(ApiToImdbID);
  return imdb_id;
};

export const getMovieData = async (filmId) => {
  const imdbAPI_MovieDetails = `https://imdb-api.com/en/API/Title/k_voxajyfz/${filmId}/Trailer,Ratings,`;
  const trailerUrl = `https://imdb-api.com/en/API/YouTubeTrailer/k_voxajyfz/${filmId}`;
  const movieData = await fetchData(imdbAPI_MovieDetails);
  const trailerData = await fetchData(trailerUrl);
  return { ...movieData, ...trailerData };
};

export const getTrailerId = async (filmId) => {
  const trailerUrl = `https://imdb-api.com/en/API/YouTubeTrailer/k_voxajyfz/${filmId}`;
  const trailerData = await fetchData(trailerUrl);
  return trailerData;
};
