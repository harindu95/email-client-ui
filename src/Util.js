
import store from './store/index.js';
import actions from './actions/index.js';

function accountFetch(){

      fetch("http://localhost:8888/accounts/").then(function(data){
    return data.json();
}).then(function(accounts) {
    store.dispatch(actions.setAccounts(accounts));
    accounts.map(function(account){
        account.labels.map(function(label){
            fetch("http://localhost:8888/"+account.address+"/messages/" + label).then(function(response){
                return response.json();
            }).then(function(messages){
                store.dispatch(actions.setMessages(account, label, messages)); 
            }).then(function(){
                store.dispatch(actions.selectAccount(account));
            });
            
        });
    });
});

}

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x0A0F0A0)
        .toString(16)
        .toUpperCase();

    return "000000".substring(0, 6 - c.length) + c;
}

function accountIconColor(address){
    let hash = hashCode(address);
    var c = (hash & 0x08080F0)
        .toString(16)
        .toUpperCase();

    return "000000".substring(0, 6 - c.length) + c;
}

const Util = {
    accountFetch: accountFetch,
    logoColor: (str) => intToRGB(hashCode(str)),
    accountColor: accountIconColor,
};

export default Util;
