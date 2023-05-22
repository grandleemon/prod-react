import { classNames } from "shared/lib/classNames/classNames";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div
        className={classNames(styles.switchers, {
          [styles.switcherCollapsed]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
