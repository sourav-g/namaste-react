import React from "react";

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

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <div className="user-details">
          <h2>Name : {name}</h2>
          <p>{location}</p>
          <p>{bio}</p>
        </div>
        <div className="user-image">
          <img src={avatar_url}></img>
        </div>
      </div>
    );
  }
}

export default User;
