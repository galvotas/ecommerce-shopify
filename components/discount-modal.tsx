"use client";

import React, { useState, useEffect } from "react";
import { X, Gift, PartyPopper } from "lucide-react";

const DiscountModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Special Offer!</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {!isRevealed ? (
          <>
            <p className="mb-4">Choose a gift box to reveal your discount:</p>
            <div className="flex justify-around">
              {[1, 2, 3].map((box) => (
                <button
                  key={box}
                  onClick={() => handleReveal()}
                  className={`transform transition-transform duration-200 hover:scale-110`}
                >
                  <Gift
                    size={64}
                    className="text-blue-500 hover:animate-wiggle"
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <PartyPopper size={64} className="mx-auto text-yellow-500 mb-4" />
            <p className="text-2xl font-bold mb-2">Congratulations!</p>
            <p className="text-xl">You've won a</p>
            <p className="text-3xl font-bold text-green-600 my-2">
              15% Discount
            </p>
            <p>Use code: LUCKY15 at checkout</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountModal;
