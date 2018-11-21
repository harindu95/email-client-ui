import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from './actions/index.js';
import './AddAccount.css';
import Util from './Util.js';

const mapDispatch = dispatch =>{
    return {
        hide: () => dispatch(actions.hideAddAccount())
    };
};

const mapState = state =>{
    return {
        show: state.addAccount
    };
};

class AddAccount_V extends Component{

    constructor(props){
        super(props);
        this.state = {
            address:"" ,
            type: "GMAIL"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    handleChange(event){
          this.setState({address: event.target.value});
    }

    handleType(event){
        this.setState({type: event.target.value});
    }

    handleSubmit(event){
        this.props.hide();
        var myWindow = window.open("about:blank",'Auth',);


        fetch("http://localhost:8888/account/",{
            method: "POST",
            body: JSON.stringify({
                address: this.state.address,
                type: this.state.type
            })
        }).then((response) => {
            return response.json();
        }).then((res) => {
            console.log(res);
            if(res.url !== undefined){
                myWindow.location.href = res.url;
            }
        });
    }

    render(){
        if(this.props.show)
        return(
            <div className="add-account modal" >
                <div className="dialog">
                <div className="header"> <h1> New Account </h1> </div>
                <div className="dialog-body">
                <li>
                    <span>Address </span>
                <input type="text" value={this.state.address} onChange={this.handleChange} />
                </li>
                <li>
                <span>Type </span>
                <select onChange={this.handleType}>
                <option value="GMAIL"> GMail </option>
                <option value="OUTLOOK"> Outlook </option>
                </select>
                </li>
                <input className="submit-btn" type="submit" value="Add account" onClick={this.handleSubmit}/>
                <button className="cancel-btn" onClick={this.props.hide}> Cancel</button>

                </div>
                </div>
            </div>
        );
        else
            return <div> </div>;
    }

}

const AddAccount = connect(mapState, mapDispatch)(AddAccount_V);
export default AddAccount;
