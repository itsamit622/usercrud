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
    return <UserContext.Provider value={{onClick:this.ClickYou ,userD: this.state.user1}} > <div className="classn">

<div class="jumbotron container">
  <h1 class="display-4">Hello, React</h1>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  
  <button type="button" class="btn btn-outline-primary">Primary </button>
        <button type="button" class="btn btn-success"> Success</button>

 </div>
     
      
       <div className="container">
       <div className="row">
        <div className="col">
          <UsersList
            users={this.state.users}
            
          />
        </div>
        <div className="col">
          <UsersDetails  />
        </div>
      </div>
      </div>
      </div>
      </UserContext.Provider>
    
  }
}

export default App;
