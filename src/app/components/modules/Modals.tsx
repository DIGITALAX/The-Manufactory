"use client";

import Mint from "./Mint";
import { useContext } from "react";
import { ModalContext } from "@/providers";

const Modals = () => {
  const context = useContext(ModalContext);

  return <>{context?.mint && <Mint />}</>;
};

export default Modals;
