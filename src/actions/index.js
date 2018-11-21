
export const openMessage = id => ({ type:"OPEN_MESSAGE",
    msgId :id});

const getMessages = messages =>({type:"GET_MESSAGES", messages: [messages]});

const setLabels = labels =>({ type:"SET_LABELS", labels: labels}) ;

const selectLabel = label => ({ type: "SELECT_LABEL", label: label});

const setMessages = (account, label, messages) => ({ type:"SET_MESSAGES", account:account.address, label:label, messages: messages  });

const selectMessage = (selected) => ({ type:"SELECT_MESSGAE" , currentMsg: selected});

const setAccounts = accounts =>{
   return ({ type:"SET_ACCOUNTS", accounts: accounts});
};

const selectAccount = (selected) => ({ type:"SELECT_ACCOUNT", selected: selected});

const hideAddAccount = () => ( {type:"HIDE_ADD_ACCOUNT"});
const showAddAccount = () => ( {type:"SHOW_ADD_ACCOUNT"});

const search = (keyword) => ({type:"SEARCH", keyword: keyword});

const actions = {
    getMessages: getMessages,
    setLabels:setLabels,
    selectLabel: selectLabel,
    setMessages:setMessages,
    selectMessage:selectMessage,
    setAccounts:setAccounts,
    selectAccount:selectAccount,
    hideAddAccount: hideAddAccount,
    showAddAccount: showAddAccount,
    search: search,
};

 
export default actions;
