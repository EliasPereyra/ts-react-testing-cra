import { renderHook } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";

import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Elias" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should fetch", () => {
  const { result } = renderHook(() => useAPI());

  Promise.resolve(result).then(value => value);

  expect(result.current).toEqual({ name: "Elias" });
});
