import React, { Component, PropTypes } from 'react';

export default class VoteOption extends Component{
    vote(option){
        const pollId = FlowRouter.getParam('id');
        const optionId = option.id;
    }
    
    renderOptions(){
        let options = this.props.options;    
    }
    
    render(){
        return(
            <div>
                {this.renderOptions()}
            </div>    
        ); 
    }
}

Option.propTypes = {
  options: PropTypes.array.isRequired,
};