import React, { useEffect, useState } from "react";
import "./publications.css";

function Publications() {
    const backendPortal = process.env.REACT_APP_BACKEND_PORTAL || "http://localhost:8423";
    const publicationsUrl = `${backendPortal}/publications`;

    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await fetch(publicationsUrl);
                if (!response.ok) throw new Error("Failed to fetch");

                const data = await response.json();
                setPublications(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, [publicationsUrl]);

    if (loading) return <p>Loading publications...</p>;
    if (error) return <p>Error: {error}</p>;

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
