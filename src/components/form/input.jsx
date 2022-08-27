import React from "react";

export default function Input({ label, children, ...restprops }) {
  return (
    <div className="flex flex-col mt-6">
      <label
        htmlFor={label}
        // className="text-mobile-h5 md:text-tablet-h4 lg:text-h5 font-semibold text-primary-white mb-2"
        className="after:ml-0.5 after:text-red-500 block text-p font-medium text-gray-400"
      >
        {label}
      </label>
      <input
        id={label}
        {...restprops}
        // className="pl-2 rounded-[10px] outline-primary-light font-semibold md:w-[300px] xl:w-354 h-14 md:h-14 xl:h-16 bg-primary-white border-1 lg:border-2 border-primary-light border-solid"
        className="mt-1 py-1 bg-transparent border-b border-black shadow-sm font-semibold focus:outline-none focus:border-tertiary-yellow w-full sm:text-sm"
      />
    </div>
  );
}
