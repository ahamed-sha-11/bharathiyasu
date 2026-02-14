import React from "react";
import careersData from "../../data/careers.json";
import "./career.css";

export default function Career() {
  const careers = careersData;

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
