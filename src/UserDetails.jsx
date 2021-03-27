import React from 'react'
import UserName from './UserName'
import { UserContext } from './UserContext'



export default class UserDetails extends React.Component {

    static contextType = UserContext;
    ClickMe(value) {
        {
            if (this.props.user !== undefined) {
                value.onClick(this.props.user)
            }
        }
    }
    render() {
        let Data = null;
        console.log(this.context)

        if (this.props.select != undefined) {
            Data = <UserName name={this.props.user[this.props.select]} />
        }
        else  { Data = <>
                <ul class="list-group">
                 <li class="list-group-item list-group-item-primary">{this.context.userD.email}</li>
                 <li class="list-group-item list-group-item-success">{this.context.userD.name}</li>
                 <li class="list-group-item list-group-item-secondary">{this.context.userD.phone}</li>
                 <li class="list-group-item list-group-item-success">{this.context.userD.address.city}</li>
                 <li class="list-group-item list-group-item-success">{this.context.userD.address.suite}</li>
                </ul>
                
            </>
        }
        return <div style={{ border: this.props.border }} onClick={this.ClickMe.bind(this, this.context)}>
            {Data}
        </div>


    }
}

