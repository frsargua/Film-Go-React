import * as React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Chip from "@mui/material/Chip";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { fetchData } from "../../utils";
import { useParams } from "react-router-dom";
import randomColor from "randomcolor";

import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function MovieDetails() {
  let color = randomColor();
  const [open, setOpen] = React.useState(true);
  const [movieData, setMovieData] = React.useState({});

  const { id } = useParams();

  const convertToImdbID = async (tmdb_id) => {
    const ApiToImdbID = `https://api.themoviedb.org/3/movie/${tmdb_id}/external_ids?api_key=7c7537b799513b436eb6bed714d7edcc`;
    const { imdb_id } = await fetchData(ApiToImdbID);
    return imdb_id;
  };

  const getMovieData = async (filmId) => {
    const imdbAPI_MovieDetails = `https://imdb-api.com/en/API/Title/k_voxajyfz/${filmId}/Trailer,Ratings,`;
    const trailerUrl = `https://imdb-api.com/en/API/YouTubeTrailer/k_voxajyfz/${filmId}`;
    const movieData = await fetchData(imdbAPI_MovieDetails);
    const trailerData = await fetchData(trailerUrl);
    return { ...movieData, ...trailerData };
  };

  React.useEffect(() => {
    convertToImdbID(id)
      .then((result) => {
        return getMovieData(result);
      })
      .then((data) => {
        console.log(data);
        setMovieData(data);
      });
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container className="block__section-5">
        <Typography
          variant="h2"
          component="h1"
          textAlign="center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {movieData?.title}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {movieData?.title}
        </Typography>
        <Card>
          <CardContent>
            <Box>
              <Grid container spacing={1} sx={{ width: "100%" }}>
                <Grid
                  item
                  xs={12}
                  md={3}
                  component="img"
                  src={movieData?.image}
                />

                <Grid xs={12} md={9} item sx={{ height: "100%" }}>
                  <Typography
                    component="iframe"
                    sx={{ height: "490px", width: "100%" }}
                    src={`https://www.youtube.com/embed/${movieData?.trailer?.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Plot
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    {movieData.plot}
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Stars
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    {movieData.stars}
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Writer/s
                  </Typography>
                  <Typography variant="body" textAlign="center">
                    {movieData.writers}
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider />
                  <Typography variant="h6" fontWeight="700">
                    Genres
                  </Typography>
                  <Box>
                    {movieData?.genreList?.map((el) => {
                      return (
                        <Chip
                          label={el.key}
                          size="small"
                          sx={{
                            border: `3px solid ${color}`,

                            backgroundColor: "white",
                            width: "fit-content",
                            px: "0.5rem",
                            py: "1.2rem",
                            m: "0.7rem",

                            fontSize: "1.3rem",
                          }}
                        />
                      );
                    })}
                  </Box>
                </Grid>
                <Grid xs={12} item>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <ReadMoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              height: "200px",
                              width: "100%",
                              backgroundColor: "blue",
                            }}
                          ></Box>
                        </Card>
                      </Grid>
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
