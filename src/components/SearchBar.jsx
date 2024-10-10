import React from "react";

const SearchBar = ({ query, setQuery, stockChecked, setStockChecked }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type Here"
        className="border-2 rounded-lg p-2 to-blue-900 padding"
      />
      <div>
        <input
          type="checkbox"
          checked={stockChecked}
          onChange={(e) => setStockChecked(e.target.checked)}
        />
        Only show products in stock
      </div>
    </div>
  );
};

export default SearchBar;

//to run the code: type npm run dev
