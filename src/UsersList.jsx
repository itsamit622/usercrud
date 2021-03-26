import React from 'react'
import UserDetails from './UserDetails'





 export default class UsersList extends React.Component{

   

getUserList(){
    let userlist=this.props.users.map((values)=>{
        //let usertag = value.name

        return <UserDetails   key={values.id}  select={"name"} user={values}/>

    })
    return userlist;
}


    render() {
        console.log(this.props.users)

        return <div>
            {this.getUserList()}

        </div>
    }
}