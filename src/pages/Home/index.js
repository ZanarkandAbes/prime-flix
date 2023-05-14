import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./index.css";

// URL: /movie/now_playing?api_key=b1b7ccdd5a908ba028fbdf93beb2a00f&language=pt-BR

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadMovies = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b1b7ccdd5a908ba028fbdf93beb2a00f",
          language: "pt-BR",
          page: 1,
        }
      })
      setMovies(response.data.results.slice(0, 10))
      setLoading(false);
    }

    loadMovies();

  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="home-container">
      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></img>
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;