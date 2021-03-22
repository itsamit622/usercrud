import axios from 'axios';
import React from 'react'
import UsersList from './UsersList'
import UsersDetails from './UserDetails'
import "./UserList.css"
import UserName from './UserName'



class App extends React.Component{
  state=  {
    users:[],
    user1:{
      name:"ram",
      email:"demo@gmail.com"
    }
  }
  ClickYou(values){
    console.log("helloji")
    this.state.user1=values
    this.setState(this.state)

}


  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) =>{
      this.state.users=res.data;
      this.setState(this.state)
  })
}
  render(){
  return <div>
    <div className="left">
    <UsersList users={this.state.users} OnClick={this.ClickYou.bind(this)} />
    </div>
    <div className="right">
      <UsersDetails name={this.state.user1.name} email={this.state.user1.email} />
    </div>


    
  </div> 
    
  }
}

export default App;
