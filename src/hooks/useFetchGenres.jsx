import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useFetchGenres() {
  const [movieGenres, setMovieGenres] = useState({});
  const [tvGenres, setTVGenres] = useState({});

  const { data: movieData } = useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=31d6afcc99f364c40d22f14b2fe5bc6e"
  );
  const { data: tvData } = useFetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=31d6afcc99f364c40d22f14b2fe5bc6e"
  );

  useEffect(() => {
    if (movieData && movieData.genres) {
      const genreMap = movieData.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setMovieGenres(genreMap);
    }
  }, [movieData]);

  useEffect(() => {
    if (tvData && tvData.genres) {
      const genreMap = tvData.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setTVGenres(genreMap);
    }
  }, [tvData]);

  return { movieGenres, tvGenres };
}
