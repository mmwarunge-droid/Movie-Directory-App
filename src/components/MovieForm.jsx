import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function MovieForm() {
  const { director } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: director.movies.length + 1,
      title,
      year
    };

    director.movies.push(newMovie);

    navigate(`/directors/${id}/movies/${newMovie.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Movie</h3>
      <input
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Create Movie</button>
    </form>
  );
}

export default MovieForm;