import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  loggedInUserRole: "Admin",
  loggedInUserBranch: "Bangalore",
});

export default UserContext;
