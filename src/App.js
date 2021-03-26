import axios from "axios";
import React from "react";
import UsersList from "./UsersList";
import UsersDetails from "./UserDetails";
import "./UserList.css";
import {UserContext} from './UserContext'

class App extends React.Component {
  state = {
    users: [],
    user1: {
      name: "ram",
      email: "demo@gmail.com",
      address:{}
    },
  };
  ClickYou=(values)=> {
    console.log("helloji");
    this.state.user1 = values;
    this.setState(this.state);
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      this.state.users = res.data;
      this.setState(this.state);
    });
  }

  render() {
    console.log(this.state.users);
    console.log("USERCONTEXT",UserContext)
    return <UserContext.Provider value={{onClick:this.ClickYou ,userD: this.state.user1}} > <div>
        <div className="left">
          <UsersList
            users={this.state.users}
            
          />
        </div>
        <div className="right">
          <UsersDetails  />
        </div>
      </div>
      </UserContext.Provider>
    
  }
}

export default App;
