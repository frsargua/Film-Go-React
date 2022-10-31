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
      sx={{
        border: `3px solid ${color}`,
        backgroundColor: "white",
        width: "fit-content",
        px: "1rem",
        py: "1.4rem",
        mx: "1rem",
        my: "1rem",
        boxShadow: "0 0 3px 5px #a6a4a4",
        fontSize: "1.3rem",
      }}
      onClick={handleClick}
    />
  );
}
