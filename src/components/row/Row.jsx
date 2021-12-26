import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(`http://api.themoviedb.org/3${fetchUrl}`);
      setMovies(res.data.results);
    };
    getMovies();
  }, [movies, fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__poster--large"}`}
            src={
              base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
