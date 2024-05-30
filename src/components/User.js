import React from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component {
  constructor(props) {
    super(props); //* why required ??

    this.state = {
      userInfo: {
        name: "",
        location: "",
        bio: "",
        avatar_url: "",
      },
    };
  }

  //* What happens when we mark it as async here ?

  async componentDidMount() {
    let user = await fetch("https://api.github.com/users/sourav-g");
    user = await user.json();
    this.setState({
      userInfo: user,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <UserContext.Consumer>
        {({ userInfo, setUserInfo }) => (
          <div className="user">
            <div>
              LoggedInUser :
              <span className="text-lg font-bold">
                {userInfo.loggedInUser} - {userInfo.loggedInUserRole} -{" "}
                {userInfo.loggedInUserBranch}
              </span>
            </div>
            <div className="my-2">
              <label>Change UserName:</label>
              <input
                type="text"
                className="border-blue border-2 rounded-lg shadow-lg px-2"
                onChange={(e) => {
                  //console.log(e.target.value);
                  setUserInfo({ ...userInfo, loggedInUser: e.target.value });
                }}
              />
            </div>
            <br></br>
            <br></br>
            <div className="user-details">
              <h2>Name : {name}</h2>
              <p>{location}</p>
              <p>{bio}</p>
            </div>
            <div className="user-image">
              <img src={avatar_url}></img>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
