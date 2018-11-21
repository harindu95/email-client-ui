import React, {Component} from 'react' ;
import './AddAccountIcon.css';
import {connect} from 'react-redux';
import actions from './actions/index.js';

const mapDispatch = dispatch => {
    return{
        showAddAccount: ()=> dispatch(actions.showAddAccount())
    }  ;
};

class AddAccountIcon_V extends Component{

    render(){
        return(
                <div className="account-icon add-icon" onClick={this.props.showAddAccount}>
                +
                </div>
        );
    }
}

const AddAccountIcon = connect(null, mapDispatch)(AddAccountIcon_V);
export default AddAccountIcon;
