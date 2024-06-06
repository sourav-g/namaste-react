import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurentCard with data", () => {
  render(<RestaurentCard info={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  //TODO: Home Work - test HOC : withPromtedLabel()
});
