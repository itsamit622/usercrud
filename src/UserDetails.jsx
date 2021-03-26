import React from 'react'
import UserName from './UserName'
import {UserContext} from './UserContext'



export default class UserDetails extends React.Component {
    
   static contextType = UserContext ;
    ClickMe(value){
        {
            if(this.props.user !==undefined){
                value.onClick(this.props.user)
            }
        }
    }
    render(){
    let Data =null;
    console.log(this.context)
        
                if(this.props.select != undefined){
                    Data = <UserName name={this.props.user[this.props.select]} />
                }
                else {
                    Data= <>
                                <UserName name={this.context.userD.name} />
                                <h2>{this.context.userD.email}</h2>
                                <h2>{this.context.userD.address.city}</h2>
                    </>
                }
return <div className="userN" style={{ border: this.props.border }} onClick={this.ClickMe.bind(this,this.context)}>
                {Data}    
            </div>
            
        
    }
}

