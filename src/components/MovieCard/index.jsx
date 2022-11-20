import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/Wishlist-context";
import { MovieTrailerContext } from "../../context/MovieTrailer";

export default function MovieCard(props) {
  let { addMovieToWishList, removeMovieFromWishList, wishlist } =
    React.useContext(WishlistContext);
  let { updateModalState, updateMovieTrailerLink } =
    React.useContext(MovieTrailerContext);
  let { imgLink, title, index, id, trailerLink } = props;

  function addToWishList() {
    addMovieToWishList(props);
  }

  function removeFromWishList() {
    removeMovieFromWishList(props);
  }

  function updateMovieTrailerAndModal() {
    updateMovieTrailerLink(id).then(() => {
      updateModalState();
    });
  }

  const inWishlist = wishlist.some((el) => el.id == id);
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
      <Link to={`/details/${id}`}>
        <CardMedia
          component="img"
          height="450px"
          width="300px"
          image={`https://image.tmdb.org/t/p/original${imgLink}`}
          alt="green iguana"
        />
      </Link>

      <IconButton
        id="addToWishList"
        title="${title}"
        movieid={`${id}`}
        size="large"
        color={inWishlist ? "primary" : "warning"}
        onClick={!inWishlist ? addToWishList : removeFromWishList}
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
        onClick={updateMovieTrailerAndModal}
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
          justifyContent: "flex-start",
          width: "100%",
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
            mr: "10px",
          }}
        >
          {index}
        </Typography>
        <Typography variant="h6" textAlign="center" fontWeight="700">
          {title}
        </Typography>
      </Box>
    </Card>
  );
}
