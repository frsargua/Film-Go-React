import * as React from "react";
import { MovieTrailerContext } from "../../context/MovieTrailer";
import { convertToImdbID } from "../../utils/ImdbId-functions";

export function PopUpWindow() {
  let { movieTrailer, modalState, updateModalState, updateMovieTrailerLink } =
    React.useContext(MovieTrailerContext);

  function closeModal() {
    updateMovieTrailerLink("none").then(() => updateModalState());
  }

  return (
    <div className="videoPopUp">
      <div className={`${modalState && "show"}  video-container`}>
        <span onClick={closeModal} className="close">
          X
        </span>
        <iframe
          id="trailerVideo"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movieTrailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PopUpWindow;
