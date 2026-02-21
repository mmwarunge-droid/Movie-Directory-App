import { Link, useOutletContext } from "react-router-dom";

function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <>
      <Link to="new">
        <button>Add Director</button>
      </Link>

      {directors.map((director) => (
        <div key={director.id} className="card">
          <Link to={`${director.id}`}>
            <h3>{director.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}

export default DirectorList;