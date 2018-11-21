
const initialState = {
    accounts : [{ address:'0', messages:{'INBOX':[]} , type:"TEST" }],
    select_account : { address:'0', messages:{'INBOX':[]} , type:"TEST"},
    messages : { 'INBOX' :[], 'SENT': []},
    labels : [ 'INBOX' ],
    select_label: 'INBOX',
    currentMsg : {
        subject:"Brunch at the Barn",
        from:"Miss Quinn",
        to:"to Debra Suarez",
        body: "Hey friends,<br/> What do you think about having a brunch on Sunday.<br/><br/> Cheers!.",
        logo: null,
    },
    addAccount: true,
    keyword: "",
};

function simpleReducer(state= initialState, action) {
    if(action.type === "OPEN_MESSAGE"){
        return Object.assign(state, {currentMsg: state.messages[action.msgId]});
    }else if(action.type === "GET_MESSAGES"){
        return {  currentMsg: JSON.parse(action.messages[0]) };
    }else if(action.type === "SET_LABELS"){
        let newState = Object.assign([], state);
        newState.labels = action.labels;
        return newState;

    }else if(action.type === "SELECT_LABEL"){
        let newState = Object.assign([], state);
        newState.select_label = action.label;
        newState.keyword ="";
        return newState;
    }else if(action.type === "SELECT_MESSGAE"){
        let newState = Object.assign([], state);
        newState.currentMsg = action.currentMsg;
        return newState;
    }else if(action.type === "SET_MESSAGES") {
        let newState = Object.assign([], state);
        newState[action.account].messages[action.label] = action.messages;
        return newState;
    }else if(action.type === "SET_ACCOUNTS"){
        let newState = Object.assign([], state);
        newState.accounts = action.accounts;
        action.accounts.forEach(function(account){
            newState[account.address] = { messages : {}}; 
        });
        newState.addAccount = action.accounts.size > 0;
        return newState;
    }else if(action.type === "SELECT_ACCOUNT"){
        let newState = Object.assign([], state);
        newState.select_account = action.selected;
        newState.keyword ="";
        newState.labels = action.selected.labels;
        newState.messages = newState[action.selected.address].messages;
        return newState;
    }else if(action.type === "HIDE_ADD_ACCOUNT"){
        let newState = Object.assign([], state);
        newState.addAccount = false;
        return newState;
    }else if(action.type === "SHOW_ADD_ACCOUNT"){
        let newState = Object.assign([], state);
        newState.addAccount = true;
        return newState;
    }else if(action.type === "SEARCH"){
        let newState = Object.assign([], state);
        newState.keyword = action.keyword;
        action.keyword = action.keyword.toLowerCase();
        newState.messages = Object.assign([], state.messagges);
        newState.messages[state.select_label] = newState[state.select_account.address].messages[state.select_label].filter(function(msg){
            let s = msg.subject + msg.from + msg.to + msg.body;
            s = s.toLowerCase();
            if(s.includes(action.keyword))
                return true;
            else
                return false;
        });
        return newState;
    }else{
        return state;
    }
}

export default simpleReducer;
