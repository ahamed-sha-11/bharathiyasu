import React from "react";
import publicationsData from "../../data/publications.json";
import "./publications.css";

function Publications() {
    const publications = publicationsData;

    return (
        <section className="publications-section" id="publications">
            <h1>Publications</h1>
            <div className="publications-container">
                <ul className="publications-list">
                    {publications.map((pub) => (
                        <li key={pub.id} className="publication-item">
                            <h3>{pub.paper_title}</h3>
                            <p><strong>Journal:</strong> {pub.journal_name}</p>
                            <p><strong>Publication Date:</strong> {pub.publication_date}</p>
                            <p><strong>Volume:</strong> {pub.volume}</p>
                            <p><strong>Impact Factor:</strong> {pub.impact_factor ?? "N/A"}</p>
                            <p><strong>ISSN:</strong> {pub.issn ?? "N/A"}</p>
                            <p><strong>Pages:</strong> {pub.page_start} – {pub.page_end}</p>
                            <p><strong>Indexed In:</strong> {pub.indexed_in ?? "N/A"}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Publications;
