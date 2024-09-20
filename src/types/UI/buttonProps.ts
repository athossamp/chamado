import React from "react";

export type ButtonProps = {
  nome: React.ReactNode | string;
  theme: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
};
