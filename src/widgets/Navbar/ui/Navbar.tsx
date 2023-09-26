import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t("Main Page")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("About Page")}
        </AppLink>
      </div>
    </div>
  );
}
