import { rest } from "msw";
import { setupServer } from "msw/node";
import APIComponent from "./APIComponent";
import { render, screen, waitFor } from "@testing-library/react";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Elias" }));
  })
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);

  const result = await waitFor(() => screen.getByRole("contentinfo"));

  expect(result).toHaveTextContent("My name is Elias");
});
