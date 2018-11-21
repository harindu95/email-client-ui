import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Accounts.css';
import AccountIcon from './AccountIcon.js';
import AddAccountIcon from './AddAccountIcon.js';


const mapStateToProps = state => {
    return {accounts: state.accounts};  
};

class Accounts_V extends Component{

    render(){
        return (

                <div className="accounts column" key={this.props.key}>
                {
                    this.props.accounts.map(function(account){
                   ;
                        return <AccountIcon account={account} key={account.address}/> ;
                    })}
                <AddAccountIcon />
                </div>
        );
    }
}

const Accounts = connect(mapStateToProps)(Accounts_V);
export default Accounts;
