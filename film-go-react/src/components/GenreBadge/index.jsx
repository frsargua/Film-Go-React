import * as React from "react";
import Chip from "@mui/material/Chip";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";

export default function GenreBadge({ genre, genrePair }) {
  let color = randomColor();

  const navigate = useNavigate();

  const handleClick = async () => {
    await genrePair.forEach((el) => {
      console.log(el);
      if (genre === el.name) {
        navigate(`/search/${el.id}`);
      }
    });
  };

  return (
    <Chip
      label={genre}
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
      onClick={handleClick}
    />
  );
}
