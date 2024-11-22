/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <div>
      <button className="w-2/3 flex flex-col gap-2">
        <div>
          <NavLink to='/' className={({ isActive }) =>
            `btn w-48 ${isActive ? 'bg-purple-700 text-white' : ''}`
          }>
            All Products
          </NavLink>
        </div>
        {categories.map(category => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `btn w-48 ${isActive ? 'bg-purple-700 text-white' : ''}`
            }
          >
            {category.category}

          </NavLink>

        ))}

      </button>
    </div>
  );
};

export default Categories;