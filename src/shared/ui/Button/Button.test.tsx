import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe("Test Button", () => {
  test("render button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("render button with theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
