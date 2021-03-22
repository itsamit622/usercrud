import React from 'react'
import UserName from './UserName'



export default class UserDetails extends React.Component{

    render() {

        return <div >
            
            <UserName name={this.props.name} />
            <h1 className="userN"> {this.props.email}</h1>
            
            
        </div>
    }
}