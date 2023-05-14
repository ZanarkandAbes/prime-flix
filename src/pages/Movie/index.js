import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";

import api from "../../services/api";

import { toast } from "react-toastify";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "b1b7ccdd5a908ba028fbdf93beb2a00f",
          language: "pt-BR",
        }
      }).then((response) => {
        setMovie(response.data);
        setLoading(false);
      }).catch((error) => {
        navigate("/", { replace: true });
        return;
      })
    }

    loadMovie();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    }
  }, [id, navigate])

  const saveMovie = () => {
    const myMovieList = localStorage.getItem("@prime-flix");

    let savedMovies = JSON.parse(myMovieList) || [];

    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id);

    if (hasMovie) {
      toast.warn("ESSE FILME JÁ ESTÁ NA LISTA !");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@prime-flix", JSON.stringify(savedMovies));
    toast.success("FILME SALVO COM SUCESSO !");
  }

  if (loading) {
    return (
      <div className="movie-info-container">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className="movie-info-container">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="area-buttons-container">
        <button onClick={saveMovie} >Salvar</button>
        <button>
          <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}

export default Movie;