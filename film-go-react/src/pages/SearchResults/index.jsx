import { Grid, Typography } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils";

export default function SearchResults() {
  const [movies, setMovies] = useState([]);
  const genreId = useParams();

  const getTop10Movies = async (genreId) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=7c7537b799513b436eb6bed714d7edcc&with_genres=${genreId}`;
    const top10Movies = await fetchData(url);
    console.log(genreId);
    console.log(url);
    console.log(top10Movies.results.slice(0, 10));
    setMovies(top10Movies.results.slice(0, 10));
  };

  useEffect(() => {
    getTop10Movies(genreId.id);
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        fontWeight="400"
        textAlign="center"
        gutterBottom
        sx={{ display: { xs: "block", md: "none" } }}
      >
        Top 10 movies in Genre
      </Typography>
      <Typography
        variant="h1"
        fontWeight="400"
        textAlign="center"
        gutterBottom
        sx={{ display: { xs: "none", md: "block" } }}
      >
        Top 10 movies in Genre
      </Typography>
      <Grid container spacing={2}>
        {movies.map((el, index) => (
          <Grid key={index} item xs={12} sm={12} md={4} lg={3}>
            <MovieCard
              imgLink={el.backdrop_path}
              title={el.title}
              index={index}
              id={el.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
