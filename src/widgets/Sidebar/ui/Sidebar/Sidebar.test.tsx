import { fireEvent, screen } from "@testing-library/react";
import {
  renderWithTranslation
} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Test Sidebar", () => {
  test("render sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
