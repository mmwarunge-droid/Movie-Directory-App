import { useState } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  // Create state to store all directors
  // directors → holds the array of director objects
  // setDirectors → function used to update the directors state
  const [directors, setDirectors] = useState([
    {
      id: 1,
      name: "Christopher Nolan",
      description: "Director of mind-bending films",
      movies: [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 }
      ]
    }
  ]);

  return (
    <div className="container">
      <h1>Directors</h1>
      {/* 
        Outlet renders nested routes inside this component.
        We pass directors and setDirectors as context 
        so child components (like DirectorList or DirectorCard)
        can access and modify the data.
      */}
      <Outlet context={{ directors, setDirectors }} />
    </div>
  );
}

export default DirectorContainer;