🎬 Movie Directory App

A React-based movie directory application that allows users to explore famous directors and their iconic movies. The app demonstrates nested routing, dynamic routes, and form handling using React and React Router.

## Overview

The Movie Directory App allows users to:

View a homepage introduction

Navigate between pages using a navigation bar

Browse a list of directors

View individual director details

Add new directors

Add new movies under specific directors

View individual movie details

Handle invalid routes gracefully with an error page

This project focuses heavily on nested routes and dynamic routing using React Router.

🚀 Live Features
🏠 Home Page

Welcoming introduction to the app.

## About Page

Provides details about the application.

🎥 Directors Section

View a list of directors

Click a director to see details

Add a new director

Add movies to a director

View specific movie details

## Error Handling

Displays a custom error page for unknown routes.

🛠️ Built With

React

React Router DOM (v6+)

Vite

Vitest

React Testing Library

## Project Structure

src/
│
├── components/
│ ├── NavBar.jsx
│ ├── DirectorContainer.jsx
│ ├── DirectorList.jsx
│ ├── DirectorForm.jsx
│ ├── DirectorCard.jsx
│ ├── MovieCard.jsx
│ ├── MovieForm.jsx
│ └── ErrorPage.jsx
│
├── pages/
│ ├── Home.jsx
│ └── About.jsx
│
├── **tests**/
│ └── App.test.jsx
│
├── App.jsx
└── main.jsx

## Routing Architecture

This project uses nested routing with React Router:

/ → Home

/about → About

/directors → Director List

/directors/new → Add Director

/directors/:id → Director Details

/directors/:id/movies/new → Add Movie

/directors/:id/movies/:movieId → Movie Details

- → Error Page

## Installation & Setup

1️⃣ Clone the repository
git clone <your-repo-url>
cd Movie-Directory-App
2️⃣ Install dependencies
npm install
3️⃣ Install React Router (if not installed)
npm install react-router-dom
4️⃣ Start development server
npm run dev

Open:

http://localhost:5173

### Running Tests

This project uses Vitest and React Testing Library.

Run tests with:

npm test

Tests include:

App rendering without crashing

Handling invalid routes gracefully

### Example Test Structure

render(
<MemoryRouter>
<App />
</MemoryRouter>
);

We wrap the app with MemoryRouter in tests to provide router context.

### Learning Objectives

This project demonstrates:

Nested routing with React Router v6

Dynamic route parameters

Outlet usage

Navigation with NavLink

Form handling in React

Component composition

Basic unit testing with Vitest

### Future Improvements

Add backend integration (Express / JSON Server)

Persist data using local storage or database

Add edit & delete functionality

Add search and filtering

Improve UI styling (Tailwind or Bootstrap)

#### Author

Mark Warunge

#### License

This project is open-source and available for educational purposes.
