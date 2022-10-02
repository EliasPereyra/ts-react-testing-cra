import Person from "./Person";
import { render, screen } from "@testing-library/react";

test("renders a name", () => {
  render(<Person name="Elias" />);

  const name = screen.getByText(/My name is Elias/);
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent("My name is Elias");
});
