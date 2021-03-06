import React from 'react';
import {connect} from 'react-redux';

import './MessageView.css';

import Util from './Util.js';

const  mapStateToProps = state => {
    let logoColor = '#' + Util.logoColor(state.currentMsg.from);
    if(state.currentMsg.logo == null){
        let letter = state.currentMsg.from.trim().charAt(0).toUpperCase();
        
        let t  = Object.assign(state.currentMsg, {logo:letter});
        return {msg: t,
                logoColor:{
                    backgroundColor: logoColor,
                    color: "white",
                },
               };
    }
    return {
        msg: state.currentMsg,
        logoColor:{
            backgroundColor: logoColor,
            color: "white",
        } ,
    };
};

const ConnectedView = ({msg, logoColor})=> (
        <div className="message-view column" >
        <div className="title-bar"> {msg.subject}
        </div>
        <div className="message">
        <div className="header">
        <div className="logo" style={logoColor}>{msg.logo} </div>
        <span className="sender">{msg.from}</span>
        <span className="reciever">{msg.to}</span>
        </div>
        <div className="body-container" >
        <iframe className="body" dangerouslySetInnerHTML = {{__html: msg.body}} srcDoc={msg.body}/>
        </div>
        </div>
        </div>

);

const MessageView = connect(mapStateToProps)(ConnectedView);

export default MessageView;
