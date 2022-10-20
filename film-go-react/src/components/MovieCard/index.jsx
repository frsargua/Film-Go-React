import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
export default function MovieCard({ imgLink, title, index, id, trailerLink }) {
  const bgColor = "rgba(255, 141, 0, 0.59)";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "345px",
        m: "auto",
        position: "relative",
        overflow: "auto",
        borderRadius: "15px",
      }}
    >
      <CardMedia
        component="img"
        height="450px"
        width="300px"
        image={`https://image.tmdb.org/t/p/original/${imgLink}`}
        alt="green iguana"
      />

      <IconButton
        id="addToWishList"
        title="${title}"
        movieID={`${id}`}
        size="large"
        color="warning"
        sx={{
          p: "0.5rem",
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
      >
        <FavoriteIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        id="play"
        trailer={`https://www.youtube.com/embed/${trailerLink}`}
        size="large"
        color="warning"
        sx={{
          p: "0.5rem",
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      >
        <PlayCircleIcon sx={{ fontSize: "2rem" }} />
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "black",
          color: "white",
          display: "flex",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="800"
          sx={{
            background: "white",
            color: "black",
            p: "1rem",
            borderBottomRightRadius: "10px",
            m: "auto",
            mr: "10px",
          }}
        >
          {index}
        </Typography>
        <Typography variant="h6" fontWeight="700" sx={{ m: "auto" }}>
          {title}
        </Typography>
      </Box>
    </Card>
  );
}