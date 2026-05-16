import React from "react";

const Input = ({ className = "", ...rest }) => {
  return (
    <input
      {...rest}
      className={`border-2 border-blue-500 rounded-md p-2 w-full mb-4 ${className}`}
    />
  );
};

export default Input;