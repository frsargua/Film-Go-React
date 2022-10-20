import { Grid, Typography } from "@mui/material";
import MovieCard from "../../components/MovieCard";

const movies = [
  {
    imgLink: "jQb1UjOdc2DsU4SqDebrVH8dHvC.jpg",
    title: "The Trapped 13: How We Survived The Thai Cave",
    index: 1,
  },
  {
    imgLink: "jQb1UjOdc2DsU4SqDebrVH8dHvC.jpg",
    title: "The Trapped 13: How We Survived The Thai Cave",
    index: 1,
  },
  {
    imgLink: "jQb1UjOdc2DsU4SqDebrVH8dHvC.jpg",
    title: "The Trapped 13: How We Survived The Thai Cave",
    index: 1,
  },
  {
    imgLink: "jQb1UjOdc2DsU4SqDebrVH8dHvC.jpg",
    title: "The Trapped 13: How We Survived The Thai Cave",
    index: 1,
  },
];

export default function SearchResults() {
  return (
    <>
      <Typography variant="h1" fontWeight="400" textAlign="center">
        Top 10 movies in Genre
      </Typography>
      <Grid container spacing={2}>
        {movies.map((el) => (
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <MovieCard
              imgLink={`${el.imgLink}`}
              title={`${el.title}`}
              index={`${el.index}`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
