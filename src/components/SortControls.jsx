import "../styles/SortControls.css";

export const SortControls = ({
  sortBy,
  sortOrder,
  onSortChange,
  onOrderChange,
}) => {
  return (
    <div className="sort-controls">
      <p style={{ color: "gray", fontSize: "0.85rem" }}>
        Ordenamiento pendiente
      </p>
    </div>
  );
};
