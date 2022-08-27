import React from "react";
import ReactDOM from "react-dom";

export default function Popup({
  heading,
  image,
  children,
  btn,
  handleClose,
  ...restprops
}) {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="bg-[#00000080] w-full h-full left-0 top-0 z-10 fixed"
        onClick={handleClose}
      ></div>
      <div className="w-[400px] md:h-[300px] xl:h-[350px] rounded-[8px] bg-primary-white flex flex-col justify-between px-6 py-4 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20 ">
        <h1 className="font-medium mb-2 w-full text-center">{heading}</h1>
        <div className="mb-2">{image}</div>
        {children}
        <div className="flex mt-8">{btn}</div>

        <button onClick={handleClose}>
          <svg
            className="absolute top-2 right-2"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0003 0.916504C5.40866 0.916504 0.916992 5.40817 0.916992 10.9998C0.916992 16.5915 5.40866 21.0832 11.0003 21.0832C16.592 21.0832 21.0837 16.5915 21.0837 10.9998C21.0837 5.40817 16.592 0.916504 11.0003 0.916504ZM11.0003 19.2498C6.41699 19.2498 2.75033 15.5832 2.75033 10.9998C2.75033 6.4165 6.41699 2.74984 11.0003 2.74984C15.5837 2.74984 19.2503 6.4165 19.2503 10.9998C19.2503 15.5832 15.5837 19.2498 11.0003 19.2498ZM12.2837 10.9998L14.392 8.8915C14.7587 8.52484 14.7587 7.97484 14.392 7.60817C14.0253 7.2415 13.4753 7.2415 13.1087 7.60817L11.0003 9.7165L8.89199 7.60817C8.52533 7.2415 7.97533 7.2415 7.60866 7.60817C7.24199 7.97484 7.24199 8.52484 7.60866 8.8915L9.71699 10.9998L7.60866 13.1082C7.24199 13.4748 7.24199 14.0248 7.60866 14.3915C7.79199 14.5748 7.97533 14.6665 8.25033 14.6665C8.52533 14.6665 8.70866 14.5748 8.89199 14.3915L11.0003 12.2832L13.1087 14.3915C13.292 14.5748 13.4753 14.6665 13.7503 14.6665C14.0253 14.6665 14.2087 14.5748 14.392 14.3915C14.7587 14.0248 14.7587 13.4748 14.392 13.1082L12.2837 10.9998Z"
              fill="#515151"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>,
    document.querySelector("body")
  );
}
