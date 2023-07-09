import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth;
  };
  return (
    <div>
      <HiChevronLeft
        className="  text-white text-[30px] absolute mx-[4%] mt-[16%] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />

      <HiChevronRight
        className="text-white text-[30px] absolute
        mx-[4%] mt-[16%] cursor-pointer right-0 scroll-smooth"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto scrollbar-none scroll-smooth px-16 py-4 "
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full aspect-[8/3]  rounded-md mr-5 hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
