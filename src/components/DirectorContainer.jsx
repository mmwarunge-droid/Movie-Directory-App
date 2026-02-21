import { useState } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([
    {
      id: 1,
      name: "Christopher Nolan",
      movies: [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 }
      ]
    }
  ]);

  return (
    <div className="container">
      <h1>Directors</h1>
      <Outlet context={{ directors, setDirectors }} />
    </div>
  );
}

export default DirectorContainer;