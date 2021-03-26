import React, { useContext } from 'react'
import UserName from './UserName'
import {UserContext} from './UserContext'



export default class UserDetails extends React.Component {
    
    render() {
        console.log(UserContext.value)
        let data = null;
        if (this.props.select !== undefined && this.props.user[this.props.select]) {
            if (this.props.select === "name") {
                data = <UserName user={this.props.user} />
            } else {
                data = <h1> {this.props.user[this.props.select]} </h1>
            }

        } else { data= <UserContext.Consumer>{
                 (value)=>{ 
                return <div>
                         <UserName user={value.userD} />
                         <h1>{value.userD.username}</h1>
                          <h1>{value.userD.phone}</h1>
                          <h1>{value.userD.email}</h1>
                          

                    </div>
            }
        }
            </UserContext.Consumer>
        }
        console.log(data)
        return <div >
            {data}
        </div>
    }
}

