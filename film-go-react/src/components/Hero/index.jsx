import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SvgHeroImage from "../../images/Hero.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CardMovie from "../CardMovie/index.jsx";
import { styled } from "@mui/material/styles";
import Genres from "../Genres";

const top100Films = () => [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const movieTitles = [
  {
    url: "https://i.guim.co.uk/img/media/995e7ddb413a63a59aeb0834ada322522f467443/0_1064_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f9e045243f717258eef8964d06a2989e",
    top: "5%",
    left: "5%",
    size: "150px",
  },
  {
    url: "https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg",
    top: "20%",
    left: "35%",
    size: "130px",
  },
  {
    url: "https://imageio.forbes.com/specials-images/imageserve/5d8255d46de3150009a4611a/-Rambo--First-Blood-Part-II-/0x0.jpg?format=jpg&crop=625,625,x0,y38,safe&width=960",
    top: "50%",
    left: "20%",
    size: "90px",
  },
  {
    url: "https://i0.wp.com/runpee.com/wp-content/uploads/2022/06/minions-the-rise-of-gru_square.jpg?fit=300%2C300&ssl=1",
    top: "5%",
    left: "55%",
    size: "180px",
  },
  {
    url: "https://pyxis.nymag.com/v1/imgs/b73/d51/f4991a746cedf9801c8c6a1b656d5c579b-scream.rsquare.w700.jpg",
    top: "55%",
    left: "70%",
    size: "80px",
  },
  {
    url: "https://dci832c741skk.cloudfront.net/assets/files/28989/the-lost-city.800x600.jpg",
    top: "15%",
    left: "80%",
    size: "200px",
  },
];

export default function Hero() {
  const MovieBox = styled("div")(() => ({
    position: "absolute",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 0,
  }));

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
              id="free-solo-demo"
              freeSolo
              options={top100Films().map((option) => option.title)}
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
        {movieTitles.map((el, i) => (
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
