import React from 'react'
import UserDetails from './UserDetails'
import UserName from './UserName'




 export default class UsersList extends React.Component{

    Clickme(values){
        console.log(values)
        this.props.OnClick(values)
        
    }

getUserList(){
    let userlist=this.props.users.map((values)=>{
        //let usertag = value.name

        return <h3 key={values.id} onClick={()=>{
            this.Clickme(values) }}><UserDetails  name={values.name}  /></h3>

    })
    return userlist;
}


    render() {
        console.log(this.props)

        return <div>
            {this.getUserList()}

        </div>
    }
}