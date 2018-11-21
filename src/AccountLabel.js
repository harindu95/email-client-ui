import React, { Component } from 'react';

import './AccountLabel.css' ;

class AccountLabel extends Component{

    render(){
        let Type = this.props.type.charAt(0).toUpperCase() + this.props.type.substr(1).toLowerCase();
        return(
                <div className="account-label" >
                <div className =" account-type" >{Type} </div>
                <div className =" account-name" >{this.props.name} </div>

                </div>
        );
    }
}

export default AccountLabel;
