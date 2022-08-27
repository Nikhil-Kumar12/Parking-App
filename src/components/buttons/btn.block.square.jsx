import React from "react";

export default function BtnBlockSquare({ styles, children, ...restProps }) {
  return (
    <button
      {...restProps}
      className={`w-[185px] bg-tertiary-yellow text-primary-white font-semibold text-h3 font-montserrat p-2 rounded-[5px] shadow-[0px_13px_10px_-8px_rgba(241,150,300,0.427)] ${styles}`}
    >
      {children}
    </button>
  );
}
