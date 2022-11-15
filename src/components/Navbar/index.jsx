import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { WishlistContext } from "../../context/Wishlist-context";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50vw",
    maxWidth: "500px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let { listCount, wishlist, removeMovieFromWishList } =
    React.useContext(WishlistContext);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {wishlist?.length ? (
        wishlist.map((el) => (
          <MenuItem>
            <Typography
              component="img"
              src={`https://image.tmdb.org/t/p/original${el.imgLink}`}
              sx={{ width: "100px" }}
            />
            <Box
              component="div"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "150px",
                my: 2,
                p: 1.5,
              }}
            >
              {el.title}
            </Box>

            <IconButton
              onClick={() => {
                removeMovieFromWishList(el);
              }}
            >
              <ClearIcon />
            </IconButton>
          </MenuItem>
        ))
      ) : (
        <Typography variant="h5" sx={{ mx: 2 }}>
          <TheaterComedyIcon sx={{ mr: 2, my: "auto" }} />
          Add more movies!
        </Typography>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="pureBlack">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              fontWeight="800"
              component="div"
              sx={{
                display: { xs: "block", sm: "block" },
                pr: { xs: "1rem" },
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Film-Go
              </Link>
            </Typography>
          </Toolbar>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={listCount} color="error">
                <BookmarksIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <BookmarksIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
