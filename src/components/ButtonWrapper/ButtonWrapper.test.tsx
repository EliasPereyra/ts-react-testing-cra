import ButtonWrapper from "./ButtonWrapper";
import { render, screen, fireEvent } from "@testing-library/react";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add item" />);

  const buttonElement = screen.getByText("Add item");
  fireEvent.click(buttonElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});
