import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center my-5 ml-32">
      <div className="text-h1 font-semibold">
        <p>Parking App</p>
      </div>

      <div className="flex justify-end items-center mr-12">
        <div className="relative">
          <img
            src="bell.svg"
            alt="bell"
            className="w-6 h-6 mr-4 cursor-pointer mt-1.5"
          />
        </div>
        <div className="flex justify-center items-center mt-1.5">
          <div className="w-10 h-10 bg-white rounded-full drop-shadow-sm flex justify-center items-center mr-2">
            <img src="/Natasha.svg" alt="user" className="w-8 h-8" />
          </div>
          <span className="mr-2 cursor-pointer text-h3 flex">
            <p className="mr-1 font-[Montserrat] font-semibold">Natasha</p>
            <p className="mr-1 font-[Montserrat] font-semibold">Romnoff</p>
          </span>
        </div>
        <svg
          className="w-5 h-5 fill-black cursor-pointer mt-1.5"
          viewBox="0 0 25 24"
        >
          <path d="M18.7312 9.7L12.7312 15.7C12.5312 15.9 12.3313 16 12.0312 16C11.7312 16 11.5312 15.9 11.3313 15.7L5.33125 9.7C4.93125 9.3 4.93125 8.7 5.33125 8.3C5.73125 7.9 6.33125 7.9 6.73125 8.3L12.0312 13.6L17.3313 8.3C17.7312 7.9 18.3313 7.9 18.7312 8.3C19.1312 8.7 19.1312 9.3 18.7312 9.7Z" />
        </svg>
      </div>
    </div>
  );
}
