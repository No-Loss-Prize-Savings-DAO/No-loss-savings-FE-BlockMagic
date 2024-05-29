"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

function DAORequestSubmitted() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }
  const [isVisible, setIsVisible] = useState(true);

  const hideComponent = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className="w-full p-3 mt-8 bg-yellow-100 rounded flex items-center justify-between">
      <div className="flex items-center">
        {/* <div
          tabindex="0"
          aria-label="success icon"
          role="img"
          className="focus:outline-none w-8 h-8 border rounded-full border-yellow-200 flex flex-shrink-0 items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z"
              fill="#047857"
            />
          </svg>
        </div> */}
        <div className="pl-3 w-full">
          <div className="flex items-center justify-between">
            <p
              tabindex="0"
              className="focus:outline-none text-sm leading-none text-yellow-700 font-semibold cursor-pointer"
            >
              Your DAO membership request has been submitted
            </p>
        
          </div>
        </div>
      </div>

      <X className="text-red-700 w-5 cursor-pointer" onClick={hideComponent} />
    </div>
  );
}

export default DAORequestSubmitted;
