
import React, { Component } from 'react';
import {connect } from 'react-redux';
import './AccountIcon.css';
import actions from './actions/index.js' ;
import Util from './Util.js';

const mapDispatch = dispatch => {
    return {
        selectAccount: ({selected}) => dispatch(actions.selectAccount(selected))
    };
};

class AccountIcon_V extends Component{

    constructor(props){
        super(props);
        let letter = props.account.address.charAt(0).toUpperCase();
        this.state = { account: props.account, letter:letter };
        this.state.logoColor = Util.accountColor(props.account.address);
    }

    render(){
        let style = {
            backgroundColor: '#' + this.state.logoColor
        };

        return(
                <div className="account-icon" onClick={() =>this.props.selectAccount({selected: this.props.account})} style={style}>                {this.state.letter}
                </div>
        );
    }
}


const AccountIcon = connect(null, mapDispatch)(AccountIcon_V);
export default AccountIcon;
