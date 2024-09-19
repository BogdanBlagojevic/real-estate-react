import React, { useState } from "react";
import Button from "./Button";

const PropertySearchForm = () => {
  const [activeStatus, setActiveStatus] = useState("all");

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mb-8 z-50">
      {/* Status Buttons */}
      <div className="mb-4 flex space-x-2">
        {["all", "for rent", "sale"].map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeStatus === status
                ? "bg-w-2 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {status === "all"
              ? "All Status"
              : status === "for rent"
              ? "For Rent"
              : "Sale"}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <div className="p-6 rounded-2xl shadow-md border border-w-2 w-full">
        <form className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="mb-1 font-medium">
              Naziv:
            </label>
            <input
              id="name"
              type="text"
              className="border text-w-5 border-gray-300 rounded-lg p-2 lg:w-full"
              placeholder="Unesite naziv"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="location" className="mb-1 font-medium">
              Lokacija:
            </label>
            <input
              id="location"
              type="text"
              className="border  text-w-5 border-gray-300 rounded-lg p-2 lg:w-full"
              placeholder="Unesite lokaciju"
            />
          </div>

          <div className="flex  flex-col flex-1">
            <label htmlFor="rooms" className="mb-1 font-medium">
              Broj soba:
            </label>
            <input
              id="rooms"
              type="number"
              className="border  text-w-5 border-gray-300 rounded-lg p-2 lg:w-full"
              placeholder="Unesite broj soba"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="bathrooms" className="mb-1 font-medium">
              Broj kupatila:
            </label>
            <input
              id="bathrooms"
              type="number"
              className="border  text-w-5 border-gray-300 rounded-lg p-2 lg:w-full"
              placeholder="Unesite broj kupatila"
            />
          </div>
          <Button type="submit" className="mt-6">
            Pretraži
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PropertySearchForm;
