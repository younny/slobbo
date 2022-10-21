import React from "react"

import "./CategoryFilter.css"

const CategoryFilter = ({ selected, categories, onFilterChange }) => {
  const onSelect = (event) => onFilterChange(event.target.value)

  return (
    <div className="filter-container">
      <div>
        <select
          name="post-category-list"
          id="post-cat-list"
          onChange={onSelect}
          defaultValue={0}
        >
          {categories.map((cat, i) => {
            return (
              <option
                key={i}
                value={cat.id}
                selected={selected == cat.id ? "selected" : ""}
              >
                {cat.name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default CategoryFilter
