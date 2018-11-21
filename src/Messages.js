import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessageLabel from './MessageLabel.js';

import './Messages.css';

const mapStateToProps = state =>{
    if(state.messages[state.select_label] == undefined)
        return{messages: []};
    return {messages: state.messages[state.select_label] };
};

class Messages_C extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let height =  window.innerHeight;
        height = (height - 50);
        let style = {
            maxHeight: height
        };
        return(
                <div className="messages column" key={this.props.key} style={style}>
                {
                    this.props.messages.map( function(msg, index){
                        return <MessageLabel key={msg.id} msg={msg} />;
                    })
                }
                </div>
        );
    }
}

const Messages = connect(mapStateToProps)(Messages_C);

export default Messages;
