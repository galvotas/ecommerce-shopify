import React from "react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h3 className="text-white">Stoofed</h3>
        </div>
        <p className="text-white text-center">
          All rights reserved. Stoofed 2024
        </p>
      </Container>
    </footer>
  );
};
