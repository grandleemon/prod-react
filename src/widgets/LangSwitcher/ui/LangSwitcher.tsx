import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={handleChangeLanguage}
    >
      {`${i18n.language === "en" ? "RU" : "EN"}`}
    </Button>
  );
}
