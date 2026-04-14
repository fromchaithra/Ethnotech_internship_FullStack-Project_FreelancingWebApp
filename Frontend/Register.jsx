import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password,
        role,
      });

      alert("Registered Successfully");

      // ✅ REDIRECT TO LOGIN
      navigate("/login");

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <h2>Register</h2>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <select onChange={e => setRole(e.target.value)}>
          <option value="STUDENT">Student</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button onClick={register}>Register</button>
      </div>
    </>
  );
}

export default Register;