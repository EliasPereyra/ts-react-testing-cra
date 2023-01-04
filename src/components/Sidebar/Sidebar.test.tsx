import Sidebar from "./Sidebar/Sidebar";
import { render, screen } from "@testing-library/react";

test("renders a name", () => {
  const items = [
    {
      name: "testing",
      href: "/test",
    },
  ];
  render(<Sidebar items={items} />);

  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", "/test");
});
