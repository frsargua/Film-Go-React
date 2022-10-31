import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import GenreBadge from "../GenreBadge";
import genres from "../__mock/genres";
import { fetchData } from "../../utils";

export default function Genres() {
  const [genrePair, setGenrePair] = useState([]);

  const apiUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=7c7537b799513b436eb6bed714d7edcc&language=en-US";

  async function getGenrePairs() {
    const genresData = await fetchData(apiUrl);
    setGenrePair(genresData.genres);
  }
  useEffect(() => {
    getGenrePairs();
  }, []);

  useEffect(() => {
    console.log(genrePair);
  }, [genrePair]);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        zIndex: "999",
      }}
    >
      {genres().map((el, i) => (
        <GenreBadge key={i} genre={el} genrePair={genrePair} />
      ))}
    </Container>
  );
}
