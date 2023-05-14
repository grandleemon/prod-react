import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProdiver from "./theme/ThemeProdiver";

render(
  <BrowserRouter>
    <ThemeProdiver>
      <App/>
    </ThemeProdiver>
  </BrowserRouter>,
  document.getElementById("root")
)