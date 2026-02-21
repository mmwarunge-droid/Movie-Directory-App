function ErrorPage({ message }) {
  return (
    <div className="container">
      <h1>404</h1>
      <p>{message || "Page Not Found"}</p>
    </div>
  );
}

export default ErrorPage;