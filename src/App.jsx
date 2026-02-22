import { Routes, Route, BrowserRouter, useInRouterContext } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./components/DirectorContainer";
import DirectorList from "./components/DirectorList";
import DirectorForm from "./components/DirectorForm";
import DirectorCard from "./components/DirectorCard";
import MovieCard from "./components/MovieCard";
import MovieForm from "./components/MovieForm";
import ErrorPage from "./components/ErrorPage";

// This component contains all the route definitions
function AppRoutes () {
    return (
        <>
        {/* Navigation bar will appear on all pages */}
    <NavBar />
    {/* Routes component holds all individual Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>
        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
        </>
    )
}
 // Main App component
export default function App() {
  const inRouter = useInRouterContext();
  return inRouter ? <AppRoutes /> : <BrowserRouter><AppRoutes /></BrowserRouter>;
}
