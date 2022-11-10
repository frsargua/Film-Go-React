import { createContext, useEffect, useState } from "react";
import {
  initializeLS,
  saveToLS,
  loadFromLS,
  deleteFromLS,
} from "../utils/local-storage";

function addToWishList(wishlist, movieToAdd) {
  const existingCartItem = wishlist.find(
    (moviesInList) => moviesInList.id === movieToAdd.id
  );

  if (!existingCartItem) {
    return [...wishlist, movieToAdd];
  }

  return wishlist;
}
function removeFromWishList(wishlist, movie) {
  const reducedList = wishlist.filter(
    (moviesInList) => moviesInList.id !== movie.id
  );
  return reducedList;
}

export const WishlistContext = createContext({
  wishlist: [],
  listCount: 0,
});

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [listCount, setListCount] = useState(0);

  function updateList() {
    initializeLS("filmGo-wishlist");
    let listFromLS = loadFromLS("filmGo-wishlist");
    setWishlist(listFromLS);
  }

  useEffect(() => {
    updateList();
  }, []);

  useEffect(() => {
    setListCount(wishlist.length);
  }, [wishlist]);

  const addMovieToWishList = (movie) => {
    setWishlist(addToWishList(wishlist, movie));
    saveToLS("filmGo-wishlist", movie);
  };
  const removeMovieFromWishList = (movie) => {
    setWishlist(removeFromWishList(wishlist, movie));
    deleteFromLS("filmGo-wishlist", movie);
  };

  const value = {
    wishlist,
    addMovieToWishList,
    removeMovieFromWishList,
    listCount,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
