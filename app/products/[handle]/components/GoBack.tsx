"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CgArrowLeft } from "react-icons/cg";

export const GoBack = () => {
  const router = useRouter();
  return (
    <button
      className="flex items-center gap-2 mb-2"
      onClick={() => router.back()}
    >
      <CgArrowLeft size={24} />

      <p>Back</p>
    </button>
  );
};
