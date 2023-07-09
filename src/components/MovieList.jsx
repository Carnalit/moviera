import React, { useState, useEffect, Fragment } from "react";
import GlobalApi from "../services/GlobalApi";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  return (
    <div>
      <div className="flex overflow-x-auto scrollbar-none scroll-smooth p-4 gap-2 md:gap-4">
        {movieList.map((item) => (
          <Fragment key={item.id}>
            <HrMovieCard movie={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
