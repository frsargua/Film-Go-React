import * as React from "react";
import Chip from "@mui/material/Chip";
import randomColor from "randomcolor";

export default function GenreBadge({ genre }) {
  let color = randomColor();

  const handleClick = () => {
    console.info("You clicked the Chip.");
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
