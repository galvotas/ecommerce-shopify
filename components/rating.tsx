import React from "react";
import { RxStarFilled } from "react-icons/rx";

export const FiveStars = ({ isLarge }: { isLarge?: boolean }) => {
  return (
    <div className="flex gap-[0.5]">
      {[...Array(5)].map((_, index) => (
        <RxStarFilled
          key={`star-${index}`}
          color="orange"
          className={isLarge ? "w-12 h-12" : "w-4 h-4"}
        />
      ))}
    </div>
  );
};

export const FourStars = () => {
  return (
    <div className="flex gap-[0.5]">
      {[...Array(4)].map((_, index) => (
        <RxStarFilled
          key={`star-${index}`}
          color="orange"
          className="w-4 h-4"
        />
      ))}
    </div>
  );
};
