import axios from "axios";
import { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../request";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeLeft"></div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
