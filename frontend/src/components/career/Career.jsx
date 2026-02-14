import React from "react";
import careersData from "../../data/careers.json";
import "./career.css";

export default function Career() {
  const careers = careersData;

  return (
    <section className="career-section" id="career">
      <h1>Career</h1>
      <div className="career-container">
        <div className="career-articles">
          {careers.map((c, i) => (
            <article key={c.id} className="career-article">
              <div className="career-header">
                <h2 className="career-headline">{c.headline}</h2>
                <div className="career-meta">
                  <h3 className="career-position">{c.position}</h3>
                  <p className="career-org">{c.firm}</p>
                  <p className="career-date">
                    {formatDate(c.start_date)} —{" "}
                    {c.end_date ? formatDate(c.end_date) : "Present"}
                  </p>
                </div>
              </div>

              <p className="career-description">{c.description}</p>

              {c.highlights && c.highlights.length > 0 && (
                <div className="career-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {c.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {i !== careers.length - 1 && (
                <div className="career-divider" />
              )}
            </article>
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
