import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
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
      <h1>{t("Unexpected error")}</h1>
      <Button onClick={refreshPage}>{t("Refresh page")}</Button>
    </div>
  );
};
