import React from 'react'
import {UserContext} from './UserContext'


export default class UserName extends React.Component{


    render(){
        console.log(this.props.user)

        
                return <h1 className="list-group-item list-group-item-action list-group-item-info">
                        {this.props.name}
                    </h1>
        
    }
}
