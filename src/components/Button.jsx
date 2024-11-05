import clsx from "clsx";
import React from "react";

const Button = ({ name, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, "py-2 px-3 border rounded-md")}
      data-testid="button"
    >
      {name}
    </button>
  );
};

export default Button;
