import React from "react"

import "./CategoryFilter.css"

const CategoryFilter = ({ categories, onFilterChange }) => {
  const onSelect = (event) => onFilterChange(event.target.value)

  return (
    <div className="filter-container">
      <div>
        <select
          name="post-category-list"
          id="post-cat-list"
          onChange={onSelect}
        >
          {categories.map((cat, i) => {
            return (
              <option key={i} value={cat.id}>
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
