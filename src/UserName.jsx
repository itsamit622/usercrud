import React from 'react'


export default class UserName extends React.Component{


    render(){

        return <div className="userN">
            <h1 > {this.props.name}</h1>
        </div>
    }
}