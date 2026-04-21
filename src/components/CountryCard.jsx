import "../styles/CountryCard.css";

export const CountryCard = ({ country, onClick }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <article className="country-card" onClick={onClick}>
      <div className="card-flag-wrapper">
        <img
          src={flags.svg || flags.png}
          alt={flags.alt || `Bandera de ${name.common}`}
          className="card-flag"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h2 className="card-name">{name.common}</h2>
        <ul className="card-info">
          <li>
            <span className="label">Región:</span>
            <span>{region || "—"}</span>
          </li>
          <li>
            <span className="label">Capital:</span>
            <span>{capital?.[0] || "—"}</span>
          </li>
          <li>
            <span className="label">Población:</span>
            <span>{population.toLocaleString("es-CO")}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};
