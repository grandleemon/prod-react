import { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  const onThrow = () => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  return <Button onClick={onThrow}>throw error</Button>;
};
