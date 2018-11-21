import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from './actions/index.js';
import './TopBar.css';

const mapDispatch = dispatch =>{
    return {
        search: (keyword) => dispatch(actions.search(keyword))
    };
};

const mapState = state =>{
    return {keyword: state.keyword};
};

class TopBar_V extends Component{

    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.props.search(event.target.value);
    }

    render(){
        return(

                <div className="top-bar">
                <span className="compose-btn">Compose</span>
                <input className="search" name="" type="text" placeholder="Search" onChange={this.handleInput} value={this.props.keyword}/> 
                </div>

        );
    }

}

const TopBar = connect(mapState,mapDispatch)(TopBar_V);

export default TopBar;
