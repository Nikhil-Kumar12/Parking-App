import React from "react";

export default function BtnBlockSmall({ children, ...restProps }) {
  return (
    <button
      {...restProps}
      // className="hover:border-2 hover:border-primary-light hover:border-solid text-center bg-primary-light rounded-[10px] md:w-[300px] xl:w-354 h-14 text-primary-white"
      className="rounded-full ... bg-tertiary-yellow w-32 ml-8 p-2 text-white"
    >
      {children}
    </button>
  );
}
