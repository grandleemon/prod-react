import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("class")).toBe("class");
  });

  test("with additional class", () => {
    const expected = "class other-class";
    expect(classNames("class", {}, ["other-class"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "class other-class hovered";
    expect(
      classNames(
        "class",
        {
          hovered: true,
          scrollable: false,
        },
        ["other-class"],
      ),
    ).toBe(expected);
  });

  test("with undefined mod", () => {
    const expected = "class other-class hovered";
    expect(
      classNames(
        "class",
        {
          hovered: true,
          scrollable: undefined,
        },
        ["other-class"],
      ),
    ).toBe(expected);
  });
});
