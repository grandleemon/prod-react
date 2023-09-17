import { classNames } from "shared/lib/classNames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(styles["lds-ripple"], {}, [className])}>
    <div />
    <div />
  </div>
);
