const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import "@testing-library/jest-dom";

it("should load Header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            loggedInUser: "Sourav",
            loggedInUserRole: "Business User",
            loggedInUserBranch: "Siliguri",
          }}
        >
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "LogOut" });

  expect(button).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart"); //* exact text

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); //* regex

  expect(cartItems).toBeInTheDocument();
});

it("Should change LogOut to LogIn on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByRole("button", { name: "LogOut" });

  fireEvent.click(logoutButton);

  const loginButton = screen.getByRole("button", { name: "LogIn" });

  expect(loginButton).toBeInTheDocument();
});
