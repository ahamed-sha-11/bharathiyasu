import React, { useEffect, useState } from "react";
import "./career.css";

export default function Career() {
  const backend =
    process.env.REACT_APP_BACKEND_PORTAL || "http://localhost:8423";
  const careersUrl = `${backend}/careers`;

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch(careersUrl);
        if (!res.ok) throw new Error("Failed to fetch careers");
        const data = await res.json();
        setCareers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, [careersUrl]);

  if (loading) return <p>Loading career…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="career-section" id="career">
      <h1>Career</h1>
      <div className="career-container">
        <div className="career-timeline">
          {careers.map((c, i) => (
            <div key={c.id} className="career-item">
              <h3>{c.position}</h3>
              <p className="career-org">
                {c.firm.split(",")[0]}, <em>{c.firm.split(",")[1]}</em>
              </p>
              <p className="career-date">
                {formatDate(c.start_date)} —{" "}
                {c.end_date ? formatDate(c.end_date) : "Present"}
              </p>

              {i !== careers.length - 1 && (
                <div className="career-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}
