import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SvgHeroImage from "../../images/Hero.svg";
import SvgHeroImageSmallScreen from "../../images/hero-phone.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CardMovie from "../CardMovie/index.jsx";
import { styled } from "@mui/material/styles";
import Genres from "../Genres";
import { useNavigate } from "react-router-dom";
import movieTitles from "../__mock/movieTitles";

export default function Hero() {
  const [filmTitles, setFilmTitles] = useState([]);
  const MovieBox = styled("div")(() => ({
    position: "absolute",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 0,
  }));

  async function getData() {
    let title = "avatar";
    const data = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_voxajyfz/${title}`
    );
    return data.json();
  }

  function debounce(func, delay = 1000) {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const updateDebounceRequest = debounce(async (title) => {
    const data = await getData(title);
    let shortenedData = data?.results.slice(0, 4);
    setFilmTitles(shortenedData);
  });

  const navigate = useNavigate();

  function navigateToPage(movideId) {
    navigate(`/details/${movideId}`);
  }

  async function searchMovieData(event) {
    const { title: movieTitle } = event.target.defaultValue;
    updateDebounceRequest(movieTitle);
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: `url('${SvgHeroImageSmallScreen}')`,
            md: `url('${SvgHeroImage}')`,
          },
          aspectRatio: { xs: "960/540", md: "900 / 500" },
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              mt="3rem"
              color="white"
              fontWeight="700"
              textAlign="center"
              gutterBottom
              sx={{ zIndex: 2, display: { xs: "none", md: "block" } }}
            >
              Let's watch something...
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              mt="3rem"
              color="white"
              fontWeight="700"
              textAlign="center"
              gutterBottom
              sx={{
                zIndex: 2,
                display: { xs: "block", md: "none" },
                mt: "10rem",
              }}
            >
              Let's watch something...
            </Typography>
            <Autocomplete
              fullWidth
              freeSolo
              onKeyUp={searchMovieData}
              onChange={(value) => {
                if (value?.id) {
                  navigate(value.id);
                }
              }}
              getOptionLabel={(option) => option?.title || ""}
              options={filmTitles?.map((option) => {
                return { title: option.title, id: option.id };
              })}
              renderOption={(props, option) => {
                let { title, id } = option;
                return (
                  <li
                    {...props}
                    onClick={() => {
                      navigateToPage(id);
                    }}
                    movieid={id}
                  >
                    {title}&nbsp;&nbsp;&nbsp;
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="search"
                  fullWidth
                  color="pureLight"
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    mb: "3rem",
                    backgroundColor: "pureLight.main",
                    zIndex: 999,
                  }}
                />
              )}
            />
            <Genres />
          </Box>
        </Container>
        {movieTitles().map((el, i) => (
          <MovieBox
            key={i}
            sx={{
              top: `${el.top}`,
              left: `${el.left}`,
              display: { xs: el.smallSize, md: "block" },
            }}
          >
            <CardMovie emoji={`${el.url}`} size={`${el.size}`} />
          </MovieBox>
        ))}
      </Box>
    </>
  );
}
