import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { Button } from "shared/ui/Button/Button";
import styles from "./Sidebar.module.scss";

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
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>Toggle</Button>
      <div
        className={classNames(styles.switchers, {
          [styles.switcherCollapsed]: collapsed
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
