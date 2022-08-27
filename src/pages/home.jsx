import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Page,
  Navbar,
  BtnBlockSquare,
  Input,
  BtnWhiteSquare,
} from "../components";

const Data = [
  {
    id: 1,
    vehicleNo: "ET78-K-1234",
    driverName: "Bruce Wayne",
    checkIn: "11:00",
    checkOut: "16:06",
  },
  {
    id: 2,
    vehicleNo: "TP78-K-1234",
    driverName: "Reed Richard",
    checkIn: "13:40",
    checkOut: "19:32",
  },
  {
    id: 3,
    vehicleNo: "GH78-K-1234",
    driverName: "Tony Stark",
    checkIn: "18:03",
    checkOut: "22:40",
  },
];

export default function Home() {
  const [data, setData] = useState(Data);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      id: data[data.length - 1].id + 1,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setData((prevState) => [...prevState, formData]);
  };

  console.log(formData);
  console.log(data);

  return (
    <Page active="Home">
      <Navbar />
      <div className="ml-32 mr-[49px]">
        <div className="flex justify-between items-center">
          <span>
            <h2 className="text-secondary-dark text-h2 font-semibold text-left ">
              Garage Occupancy
            </h2>
            <h3 className="text-secondary-dark text-h3 font-semibold text-left ">
              {data.length} / 30
            </h3>
          </span>
          <BtnBlockSquare
            children="Add new vehicle"
            onClick={() => setShowModal(true)}
          />

          {showModal &&
            ReactDOM.createPortal(
              <React.Fragment>
                <div
                  className="bg-[#00000080] w-full h-full left-0 top-0 z-10 fixed"
                  onClick={() => setShowModal(false)}
                ></div>
                <div className="w-[450px] md:h-[400px] xl:h-[500px] rounded-[8px] bg-primary-white flex flex-col justify-between px-6 py-4 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20 ">
                  <h1 className="font-medium mb-2 w-full text-center text-h3">
                    Add a Vehicle
                  </h1>

                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <Input
                      label="Vehicle Number"
                      name="vehicleNo"
                      type="text"
                      placeholder="Enter Vehicle Number"
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Driver Name"
                      name="driverName"
                      type="text"
                      placeholder="Enter Driver Name"
                      onChange={handleChange}
                      required
                    />

                    <div className="flex flex-col xl:mt-6 md:mt-3 w-full">
                      <label
                        htmlFor="Checkin Time"
                        className="after:ml-0.5 after:text-red-500 block sxl:text-tablet-h5 text-p font-medium text-gray-400 font-montserrat"
                      >
                        Checkin Time
                      </label>
                      <input
                        name="checkIn"
                        type="time"
                        onChange={handleChange}
                        className="py-1 mt-4 border-none font-semibold focus:outline-none focus:text-black rounded-md w-[43%] h-10 text-black sm:text-sm"
                        required
                      />
                    </div>

                    <div className="flex flex-col xl:mt-6 md:mt-3 w-full">
                      <label
                        htmlFor="Checkout Time"
                        className="after:ml-0.5 after:text-red-500 block sxl:text-tablet-h5 text-p font-medium text-gray-400 font-montserrat"
                      >
                        Checkout Time
                      </label>
                      <input
                        name="checkOut"
                        type="time"
                        onChange={handleChange}
                        className="py-1 mt-4 border-none font-semibold focus:outline-none focus:text-black rounded-md w-[43%] h-10 text-black sm:text-sm"
                        required
                      />
                    </div>
                    <div className="flex justify-center items-center gap-4 my-3">
                      <BtnWhiteSquare
                        children="Cancel"
                        onClick={() => setShowModal(false)}
                      />
                      <BtnBlockSquare children="Add" type="submit" />
                    </div>
                  </form>

                  <button onClick={() => setShowModal(false)}>
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
            )}
        </div>
        <div className="mt-8 mb-4">
          <div className="grid grid-cols-5 xl:text-h2 md:text-tablet-p1 font-medium xl:px-3 md:px-2">
            <h1 className="justify-self-start">Ticket No.</h1>
            <h1 className="justify-self-start">Vehicle No.</h1>
            <h1 className="justify-self-start">Driver Name</h1>
            <h1 className="justify-self-start">Checkin Time</h1>
            <h1 className="justify-self-start">Checkout Time</h1>
          </div>
          {data.map((value, index) => {
            return (
              <div key={index} className="my-4">
                <div className="grid grid-cols-5 bg-tertiary-yellow mt-4 py-3 px-6 text-primary-white xl:text-h3 md:text-tablet-p1 font-medium rounded-lg">
                  <h1 className="justify-self-start">{`114${index + 1}`}</h1>
                  <h1 className="justify-self-start">{value.vehicleNo}</h1>
                  <h1 className="justify-self-start">{value.driverName}</h1>
                  <h1 className="justify-self-center w-full ml-4">
                    {value.checkIn}
                  </h1>
                  <h1 className="justify-self-center w-full ml-6">
                    {value.checkOut}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
