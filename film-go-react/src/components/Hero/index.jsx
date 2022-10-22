import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SvgHeroImage from "../../images/Hero.svg";
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

  async function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const navigate = useNavigate();
  async function searchMovieData(event) {
    if (event.keyCode === 13) {
      navigate("/details");
    } else {
      const movieTitle = event.target.defaultValue;
      const processChange = await debounce(async () => {
        getData().then((data) => {
          console.log(data);
          // setFilmTitles(data.results.slice(0.5));
        });
      });
      console.log(processChange());
      // let topFiveResults = filmData.results.slice(0, 5);
      // setFilmTitles(topFiveResults);
    }
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${SvgHeroImage}')`,
          aspectRatio: "900 / 500",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              mt="3rem"
              color="white"
              fontWeight="700"
              textAlign="center"
              gutterBottom
              sx={{ zIndex: 2 }}
            >
              Let's watch something...
            </Typography>
            <Autocomplete
              fullWidth
              freeSolo
              onKeyUp={searchMovieData}
              options={filmTitles?.map((option) => option.title)}
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
              display: { md: "none", lg: "block" },
            }}
          >
            <CardMovie emoji={`${el.url}`} size={`${el.size}`} />
          </MovieBox>
        ))}
      </Box>
    </>
  );
}
