import "../styles/PopulationFilter.css";

export const PopulationFilter = ({
  minPop,
  maxPop,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div className="population-filter">
      <p style={{ color: "gray", fontSize: "0.85rem" }}>
        ** Filtro de población pendiente **
      </p>
    </div>
  );
};
