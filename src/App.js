import React, { Component } from 'react';

import Accounts from './Accounts.js';
import LabelColumn from './LabelColumn.js';
import Messages from './Messages.js';
import MessageView from './MessageView.js';
import TopBar from './TopBar.js';
import AddAccount from './AddAccount.js';


import './App.css';
import Util from './Util.js';

import SplitPane from 'react-split-pane';

class App extends Component {
    render() {
        Util.accountFetch();
    return (
            <div className="App">
            <TopBar />
            <AddAccount />
            <div className="container">
            <SplitPane split="vertical" minSize={0} defaultSize="46px">
            <Accounts />
            <SplitPane split="vertical" minSize={50} defaultSize="15%">
            <LabelColumn/>
            <SplitPane split="vertical" minSize={50} defaultSize="40%">
            <Messages />
            <SplitPane split="vertical" minSize={50} defaultSize="100%">
            <MessageView />
            </SplitPane>
        </SplitPane>
            </SplitPane>
            </SplitPane>
            </div>

      </div>
    );
  }
}

export default App;
