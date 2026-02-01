import React, { useState } from "react";
import "./publications.css";

function Publications() {
    const backendPortal = process.env.REACT_APP_BACKEND_PORTAL || "";
    const publicationsUrl = '${backendPortal}/api/publications';
    const [publications] = useState([
        {
            id: 1,
            paper_title: "Pleasure and reality in Edith Wharton’s the Fullness of Life",
            journal_name: "Journal of Xi’an University of Architecture & Technology",
            publication_date: "2020-08-01",
            volume: "Vol.VIII Issue-VIII",
            impact_factor: "3.70",
            issn: "1006-7930",
            page_start: 1222,
            page_end: 1227,
            indexed_in: "Scopus"
        },
    ]);

    



    return (
        <div className="publications-container">
            <h2>Publications</h2>
            <ul className="publications-list">
                {publications.map((pub) => (
                    <li key={pub.id} className="publication-item">
                        <h3>{pub.paper_title}</h3>
                        <p><strong>Journal:</strong> {pub.journal_name}</p>
                        <p><strong>Publication Date:</strong> {pub.publication_date}</p>
                        <p><strong>Volume:</strong> {pub.volume}</p>
                        <p><strong>Impact Factor:</strong> {pub.impact_factor}</p>
                        <p><strong>ISSN:</strong> {pub.issn}</p>
                        <p><strong>Pages:</strong> {pub.page_start} - {pub.page_end}</p>
                        <p><strong>Indexed In:</strong> {pub.indexed_in}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Publications;
