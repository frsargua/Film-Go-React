import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import GenreBadge from "../GenreBadge";
import genres from "../__mock/genres";

export default function Genres() {
  const [genrePair, setGenrePair] = useState([]);

  useEffect(() => {});

  const apiUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=7c7537b799513b436eb6bed714d7edcc&language=en-US";

  async function fetchData(apiUrl) {
    const data = await fetch(apiUrl);
    return data.json();
  }

  async function getGenrePairs() {
    const genresData = await fetchData(apiUrl);
    return genresData.genres;
  }
  useEffect(async () => {
    let dataGenre = await getGenrePairs();
    setGenrePair(dataGenre);
  }, []);
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
