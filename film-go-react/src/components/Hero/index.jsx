import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SvgHeroImage from "../../images/Hero.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

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
      </Box>
    </>
  );
}
