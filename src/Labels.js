import React, { Component } from 'react';
import './Labels.css' ;
import {connect} from 'react-redux';
import actions from './actions/index.js';

const mapState = state => {
    return {labels: state.labels, size:state.labels.size};
};

const mapDispatch = dispatch =>{
    return  {
        selectLabel: ({selected}) => dispatch(actions.selectLabel(selected)) 
    };
};

class Label extends Component{


    handleClick(label){
        this.props.selectLabel({selected: label });
    }

    render(){
        const _this = this;
        return(
                <div className="labels" >
                {
                    this.props.labels.map(function(item){
                        let formatted = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
                    return (
                            <div className="label" key={item}
                        onClick = {()=>_this.handleClick(item)}>
                            {formatted}
                            </div>
                    );
                    } ) }

                </div>
        );
    }
}


const Labels = connect(mapState, mapDispatch)(Label) ;

export default Labels;
