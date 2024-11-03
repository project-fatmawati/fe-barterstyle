import React from 'react';

function Sidebar() {
  return (
<aside className="bg-gray-100 px-5">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Search here..."
          className="flex-grow px-4 py-2 border rounded-md"
        />
      </div>
      <h2 className="text-2xl font-bold mt-4">Categories</h2>
      <ul className='text-xl p-3'>
        <li>
          <input type="checkbox" id="allCategories"/>
          <label htmlFor="allCategories">All Categories</label>
        </li>
        <li>
          <input type="checkbox" id="fashion" />
          <label htmlFor="fashion">Fashion</label>
        </li>
        <li>
          <input type="checkbox" id="fashion" />
          <label htmlFor="fashion">Fashion</label>
        </li>
        <li>
          <input type="checkbox" id="fashion" />
          <label htmlFor="fashion">Fashion</label>
        </li>
        <li>
          <input type="checkbox" id="fashion" />
          <label htmlFor="fashion">Fashion</label>
        </li>
        {/* Tambahkan item kategori lainnya di sini */}
      </ul>
    </aside>
  );
}

export default Sidebar;