import { useEffect } from "react";
import "../styles/CountryDetail.css";

export const CountryDetail = ({ country, onClose }) => {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    area,
  } = country;

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const languagesList = languages ? languages.join(", ") : "No disponible";

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="detail-header">
          <img
            src={flags.svg || flags.png}
            alt={flags.alt || `Bandera de ${name.common}`}
            className="detail-flag"
          />
          <div className="detail-title">
            <h2>{name.common}</h2>
            {name.official !== name.common && (
              <p className="detail-official">{name.official}</p>
            )}
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">🌐 Región</span>
            <span>{region || "—"}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">📍 Subregión</span>
            <span>{subregion || "—"}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">🏙️ Capital</span>
            <span>{capital?.[0] || "—"}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">👥 Población</span>
            <span>{population.toLocaleString("es-CO")}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">📐 Área</span>
            <span>{area ? `${area.toLocaleString("es-CO")} km²` : "—"}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">🗣️ Idiomas</span>
            <span>{languagesList}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
