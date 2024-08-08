import type { NextPage } from "next";
import styles from "./timer-start.module.css";

export type TimerStartType = {
  className?: string;
};

const TimerStart: NextPage<TimerStartType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.property1linearIcon, className].join(" ")}
      alt=""
      src="/property-1linear1.svg"
    />
  );
};

export default TimerStart;
