import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurentLayout from "../RestaurentLayout";
import { MOCK_DATA } from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the RestaurentLayout component with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurentLayout />
      </BrowserRouter>
    );
  });
});
