import React from "react";

export default function BtnWhiteSquare({ styles, children, ...restProps }) {
  return (
    <button
      {...restProps}
      className={`w-[165px] xl:h-[] xl:w-[185px] bg-white text-black font-semibold text-h3 border-2 border-tertiary-yellow font-montserrat p-1.5 rounded-[5px] shadow-[0px_13px_10px_-8px_rgba(241,150,300,0.427)] ${styles}`}
    >
      {children}
    </button>
  );
}
