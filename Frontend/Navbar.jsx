import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar">
      <h2>FreelanceHub</h2>

      <div>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            <span style={{ marginLeft: "10px" }}>Hi, {user.role}</span>
            <Link to="/" style={{ marginLeft: "10px" }}>Home</Link>
          </>
        )}

        {user?.role === "ADMIN" && (
          <Link to="/post" style={{ marginLeft: "10px" }}>
            Post Job
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;