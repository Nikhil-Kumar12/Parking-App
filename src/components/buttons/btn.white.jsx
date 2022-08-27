import React from "react";

export default function BtnWhite({ children, image, ...restProps }) {
  return (
    <button
      {...restProps}
      // className="hover:border-2 hover:border-primary-light hover:border-solid text-center bg-primary-light rounded-[10px] md:w-[300px] xl:w-354 h-14 text-primary-white"
      className="flex justify-center items-center w-64 p-2 rounded-full ... border-2 border-tertiary-yellow"
    >
      {image} {children} 
    </button>
  );
}
