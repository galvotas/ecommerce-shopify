import React from "react";

export const SaleButton = () => {
  return (
    <div className="relative py-2 px-4 bg-black w-[80%] mx-auto rounded mt-4">
      <div className="absolute w-3 h-3 bg-black top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-45"></div>
      <p className="text-sm font-bold text-center text-white">
        HALLOWEEN SALE <span className="font-normal">UP TO</span>{" "}
        <span className="text-[#FCF95A] font-black">65%</span>
      </p>
    </div>
  );
};
