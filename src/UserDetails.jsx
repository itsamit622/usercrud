import React, { useContext } from 'react'
import UserName from './UserName'
import {UserContext} from './UserContext'



export default class UserDetails extends React.Component {
    

    ClickMe(value){
        {
            if(this.props.user !==undefined){
                value.onClick(this.props.user)
            }
        }
    }
    render(){
    let Data =null;
        return <UserContext.Consumer>

            {
            (value)=>{ 
                if(this.props.select != undefined){
                    Data = <UserName name={this.props.user[this.props.select]} />
                }
                else {
                    Data= <>
                                <UserName name={value.userD.name} />
                                <h2>{value.userD.email}</h2>
                                <h2>{value.userD.address.city}</h2>
                    </>
                }
                return <div className="userN" style={{ border: this.props.border }} onClick={this.ClickMe.bind(this,value)}>
                {Data}
                
            </div>

            }
        }
        </UserContext.Consumer>
    }
}

