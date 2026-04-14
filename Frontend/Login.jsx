import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login Successful");

      // ✅ REDIRECT TO HOME
      navigate("/");

    } catch (err) {
      alert("Invalid Login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default Login;