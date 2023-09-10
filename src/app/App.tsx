import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true }, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
