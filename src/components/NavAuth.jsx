import { Link } from "react-router-dom";

export const NavAuth = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
} 