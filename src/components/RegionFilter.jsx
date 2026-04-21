import "../styles/RegionFilter.css";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="region-filter">
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="region-select"
      >
        <option value="">🌐 Todas las regiones</option>
        {REGIONS.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};
