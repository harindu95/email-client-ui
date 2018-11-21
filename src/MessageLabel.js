import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MessageLabel.css';
import actions from './actions/index.js';
import Util from './Util.js';

const mapDispatch = dispatch => {
    return {
        selectMessage: ({selected}) => dispatch(actions.selectMessage(selected))
    };
};

class MessageLblView extends Component{

    constructor(props){
        super(props);
        this.state = { msg: props.msg};
        this.state.msg.snippet = this.state.msg.snippet.substr(0,40) + " ....";
        if(this.state.msg.logo == null){
            let index = this.state.msg.from.trim().search("[A-Za-z]");
            let letter = this.state.msg.from.trim().charAt(index).toUpperCase();
                
            this.state.msg.logo = letter;
        }
        this.state.msg.logoColor = Util.logoColor(this.state.msg.from);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.props.selectMessage({selected: this.state.msg});
    }




    render(){
        
        let style = {
            backgroundColor: '#' + this.state.msg.logoColor
        };

        return(
                <div className="message-label" onClick={this.handleClick}>

                <div className="logo" style={style}> {this.state.msg.logo} </div>
                <span className="sender">
                {this.state.msg.from}
                    </span>
                <span className="title">
                {this.state.msg.subject}
                    </span>
                <span className="snippet" dangerouslySetInnerHTML = {{__html: this.state.msg.snippet}}>
                </span>
                </div>

        );
    }
}

const MessageLabel = connect(null, mapDispatch)(MessageLblView);
export default MessageLabel;
