import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function PostJob() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [budget, setBudget] = useState("");

  // ✅ FIX BLANK PAGE
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role !== "ADMIN") {
      alert("Only Admin can post jobs");
      navigate("/");
    }
  }, []);

  const submit = async () => {
    await axios.post("http://localhost:8080/api/jobs", {
      title,
      description: desc,
      budget,
    });

    alert("Job Posted");

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="form">
        <h2>Post Job</h2>

        {/* ✅ BACK BUTTON */}
        <button onClick={() => navigate("/")}>⬅ Back</button>

        <input
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={e => setDesc(e.target.value)}
        />

        <input
          placeholder="Budget"
          onChange={e => setBudget(e.target.value)}
        />

        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default PostJob;