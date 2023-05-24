import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass"))
      .toBe("someClass");
  });

  test("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"]))
      .toBe("someClass class1 class2");
  });

  test("with mods", () => {
    expect(classNames("someClass", {
      scrollable: true,
      hovered: true
    }))
      .toBe("someClass scrollable hovered");
  });

  test("with mod false", () => {
    expect(classNames("someClass", {
      scrollable: true,
      hovered: false
    }))
      .toBe("someClass scrollable");
  });

  test("with mod undefined", () => {
    expect(classNames("someClass", {
      scrollable: undefined,
      hovered: false
    }))
      .toBe("someClass");
  });
});
