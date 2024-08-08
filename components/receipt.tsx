import type { NextPage } from "next";
import styles from "./receipt.module.css";

export type ReceiptType = {
  className?: string;
};

const Receipt: NextPage<ReceiptType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.property1linearIcon, className].join(" ")}
      alt=""
      src="/property-1linear.svg"
    />
  );
};

export default Receipt;
