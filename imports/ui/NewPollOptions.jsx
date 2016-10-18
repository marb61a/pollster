import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import OptionsData from '/imports/api/newPollOptions.js';

export default class NewPollOption extends Component {
    constructor(){
        super();
        this.state = {hidden : true};
    }
    
    removeOptionClasses(){
        let removeOptionClasses = classNames(this.props.className, {
            'remove-option' : true,
            'hidden' : this.hideRemoveOption()
        });
        
        return removeOptionClasses;
    }
    
    hideRemoveOption(){
        if(OptionsData.find().count() <= 2){
            return true;
        }
        
        return false;
    }
    
    deleteOption(e){
        e.preventDefault();
        const id = this.props.option._id;
        OptionsData.remove(id);
    }
    
    render(){
        return(
            <div className="input-option">
            
            </div>  
        );
    }
}