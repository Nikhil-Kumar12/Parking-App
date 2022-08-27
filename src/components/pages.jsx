import React from "react";
import { Sidebar } from "../components";

export default function Page({ active, children, ...restProps }) {
  return (
    <div className="box-border min-h-screen flex bg-primary-light">
      <Sidebar active={active} />
      <div
        {...restProps}
        className="w-full md:ew-top md:border-r-[15px] border-r-tertiary-yellow md:px-2 pt-3 border-r-solid md:border-t-[15px] border-t-tertiary-yellow border-t-solid"
      >
        {children}
      </div>
    </div>
  );
}
