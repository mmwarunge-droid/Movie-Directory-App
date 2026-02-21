import { useParams, Link, Outlet, useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find(d => d.id === Number(id));

  if (!director) return <ErrorPage message="Director Not Found" />;

  return (
    <div className="card">
      <h2>{director.name}</h2>

      <Link to="movies/new">
        <button>Add Movie</button>
      </Link>

      {director.movies.map(movie => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}

      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;