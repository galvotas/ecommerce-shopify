import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/logo.png" alt="logo" width={40} height={40} />
    </Link>
  );
};
