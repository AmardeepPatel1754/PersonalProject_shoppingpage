import React from "react";

const Filter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "Electronics", "Accessories", "Fashion"];
  
  return (
    <div className="mb-4">
      <label className="mr-2 font-bold">Filter by Category:</label>
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;