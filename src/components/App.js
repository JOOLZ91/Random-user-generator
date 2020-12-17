import React from "react";
import "../App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends React.Component {
  state = {
    users: null,
  };

  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd!!!");
      })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data.results,
        })
      );
  };

  render() {
    const users = this.state.users;
    return (
      <>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </>
    );
  }
}

export default App;
