import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <p className="fs-4 mb-3">Oops! The page you're looking for doesn't exist.</p>
      <h1 className="display-1 text fw-bold">♥╣[-_-]╠♥</h1>
      <br></br>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;

