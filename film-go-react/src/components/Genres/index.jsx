import { Container } from "@mui/system";
import GenreBadge from "../GenreBadge";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
];

export default function Genres() {
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
      {genres.map((el, i) => (
        <GenreBadge key={i} genre={el}></GenreBadge>
      ))}
    </Container>
  );
}
