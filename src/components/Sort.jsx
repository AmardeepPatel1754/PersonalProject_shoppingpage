import React from "react";

const Sort = ({ selectedSort, onSelectSort }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-bold">Sort by:</label>
      <select value={selectedSort} onChange={(e) => onSelectSort(e.target.value)}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;