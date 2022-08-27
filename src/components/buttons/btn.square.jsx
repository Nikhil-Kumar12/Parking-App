import React from "react";

export default function BtnSquare({ children, ...restProps }) {
  return (
    <button
      {...restProps}
      className="box-border	rounded ... bg-white w-32 text-mobile-s p-2 text-primary-dark border border-black font-[700]"
    >
      {children}
    </button>
  );
}
