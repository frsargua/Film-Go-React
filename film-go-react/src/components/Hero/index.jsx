import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SvgHeroImage from "../../images/Hero.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CardMovie from "../CardMovie/index.jsx";
import { styled, alpha } from "@mui/material/styles";

const top100Films = () => [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
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
                    mb: "16rem",
                    backgroundColor: "pureLight.main",
                  }}
                />
              )}
            />
          </Box>
        </Container>

        <MovieBox sx={{ top: "5%", left: "5%" }}>
          <CardMovie emoji="https://i.guim.co.uk/img/media/995e7ddb413a63a59aeb0834ada322522f467443/0_1064_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f9e045243f717258eef8964d06a2989e" />
        </MovieBox>
        <MovieBox sx={{ top: "20%", left: "35%" }}>
          <CardMovie emoji="https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg" />
        </MovieBox>
        <MovieBox sx={{ top: "10%", right: "20%" }}>
          <CardMovie emoji="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/220px-Avatar_The_Way_of_Water_poster.jpg" />
        </MovieBox>
        <MovieBox sx={{ top: "50%", left: "20%" }}>
          <CardMovie emoji="https://imageio.forbes.com/specials-images/imageserve/5d8255d46de3150009a4611a/-Rambo--First-Blood-Part-II-/0x0.jpg?format=jpg&crop=625,625,x0,y38,safe&width=960" />
        </MovieBox>
        <MovieBox sx={{ bottom: "15%", right: "5%" }}>
          <CardMovie emoji="https://imageio.forbes.com/specials-images/imageserve/5d8255d46de3150009a4611a/-Rambo--First-Blood-Part-II-/0x0.jpg?format=jpg&crop=625,625,x0,y38,safe&width=960" />
        </MovieBox>
      </Box>
    </>
  );
}
