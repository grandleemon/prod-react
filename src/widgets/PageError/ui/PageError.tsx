import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t("Something went wrong")}</p>
      <Button onClick={refreshPage}>
        {t("Refresh page")}
      </Button>
    </div>
  );
};
