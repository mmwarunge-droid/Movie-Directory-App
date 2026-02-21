import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const { directors, setDirectors } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newDirector = {
      id: directors.length + 1,
      name,
      movies: []
    };

    setDirectors([...directors, newDirector]);
    navigate(`/directors/${newDirector.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Director</h2>
      <input
        type="text"
        placeholder="Director Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default DirectorForm;