import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

test("handles onClick", () => {
  render(<Counter />);

  const buttonElement = screen.getByText("Add one");
  const pElement = screen.getByRole("contentinfo");
  fireEvent.click(buttonElement);

  expect(pElement).toHaveTextContent("Count is 1");
});
