import React, { Component } from 'react';
import {connect} from 'react-redux' ;

import Labels from './Labels.js';
import AccountLabel from './AccountLabel.js';

import './LabelColumn.css';

const mapStateToProps = (state) => {
    return {account: state.select_account};  
};

class LabelColumn_V extends Component{

    render(){
        return(
                <div className="label-col column" key={this.props.key}>
                <AccountLabel type={this.props.account.type} name={this.props.account.address}/>
                    <Labels />
                </div>
        );
    }
}

const LabelColumn = connect(mapStateToProps)(LabelColumn_V);
export default LabelColumn;
