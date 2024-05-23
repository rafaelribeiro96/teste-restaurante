import React from 'react';

const CategoryMenu = ({ categories, category, setCategory }) => (
  <div className="category-menu">
    <div className="category-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={category === cat ? 'active' : ''}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryMenu;
