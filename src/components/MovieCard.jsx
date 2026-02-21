import { useParams, useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  const movie = director.movies.find(
    m => m.id === Number(movieId)
  );

  if (!movie) return <ErrorPage message="Movie Not Found" />;

  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
    </div>
  );
}

export default MovieCard;