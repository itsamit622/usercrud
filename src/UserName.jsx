import React from 'react'
import {UserContext} from './UserContext'


export default class UserName extends React.Component{


    render(){
        console.log(this.props.user)

        return <UserContext.Consumer>
        {
            (value)=>{ 
                return <h1>
                        {this.props.name}
                    </h1>
            }
        }
    </UserContext.Consumer> 
    }
}
