import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessageLabel from './MessageLabel.js';

import './Messages.css';

const mapStateToProps = state =>{
    if(state.messages[state.select_label] == undefined)
        return{messages: [], selected: {}};
    return {messages: state.messages[state.select_label], selected: state.currentMsg};
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
        let selected = this.props.selected ;
        return(
                <div className="messages column" key={this.props.key} style={style}>

                {
                    this.props.messages.map(
                        function(msg, index){
                            return <MessageLabel key={msg.id} msg={msg} selected={selected} />;
                        }                                                       )
                }

                </div>
        );
    }
}

const Messages = connect(mapStateToProps)(Messages_C);

export default Messages;
