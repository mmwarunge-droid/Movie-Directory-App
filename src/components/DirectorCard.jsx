import { useParams, Link, Outlet, useOutletContext } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function DirectorCard() {
  // Get the dynamic id from the URL
  const { id } = useParams();
   // Get shared data (directors array) from the parent route using Outlet context
  const { directors } = useOutletContext();

  // Find the director whose id matches the URL parameter
  // Convert id to Number because URL params are strings
  const director = directors.find(d => d.id === Number(id));

  // If no matching director is found, show an error page
  if (!director) return <ErrorPage message="Director Not Found" />;

  return (
    <div className="card">
      <h2>{director.name}</h2> {/* Display director name */}

    <p>{director.description}</p> {/* Display director description */}

    {/* Link to add a new movie for this director */}
      <Link to="movies/new">
        <button>Add Movie</button>
      </Link>

    {/* Loop through the director's movies and display each one */}
      {director.movies.map(movie => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
      {/* Render nested routes (MovieForm or MovieCard will appear here) */}
      {/* Pass the current director as context to child routes */}
      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;