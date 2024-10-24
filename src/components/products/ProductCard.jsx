import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const ProductCard = ({ imageSrc, name, id }) => {
  return (
    <div className="border shadow-md flex flex-col items-center gap-2 w-40 px-4 py-2">
      <img src={imageSrc} className="w-24 h-[124px]" />
      <span className="font-bold text-sm">{name}</span>

      <div>
        <Link
          to={`/products/${id}`}
          className="bg-red-500 hover:bg-red-600/70 px-4 py-2 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

//https://github.com/dimdejesus/store
