import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myMovieList = localStorage.getItem("@prime-flix");
    setMovies(JSON.parse(myMovieList) || []);
  }, [])

  const deleteMovie = (movieId) => {
    let filteredMovies = movies.filter((movie) => movie.id !== movieId);

    setMovies(filteredMovies);
    localStorage.setItem("@prime-flix", JSON.stringify(filteredMovies));
    toast.success("FILME REMOVIDO COM SUCESSO!");
  }

  return (
    <div className="my-movies-container">
      <h1>Meus filmes</h1>
      {movies.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default Favorites;
