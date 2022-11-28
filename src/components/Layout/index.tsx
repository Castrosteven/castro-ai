import React, { ReactNode } from "react";
import { Navbar } from "../Navbar";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
