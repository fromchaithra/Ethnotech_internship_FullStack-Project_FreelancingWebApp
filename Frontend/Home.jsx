import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Home() {
  const [jobs, setJobs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    API.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />

      <h1 className="title">Available Jobs</h1>

      <div className="grid">
        {jobs.map(job => (
          <div className="card" key={job.id}>
  <h3>{job.title}</h3>

  <p>{job.description}</p>

  <p className="price">₹{job.budget}</p>

  <hr style={{ margin: "10px 0", opacity: 0.2 }} />

  {user?.role === "STUDENT" ? (
    <button onClick={() => alert("Applied Successfully")}>
      🚀 Apply Now
    </button>
  ) : (
    <p style={{ color: "gray", fontSize: "13px" }}>
      Login as Student to Apply
    </p>
  )}
</div>
        ))}
      </div>
    </div>
  );
}

export default Home;