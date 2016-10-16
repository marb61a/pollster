import React, {Component, PropTypes} from 'react';

import NewPollOption from './NewPollOptions.jsx'
import OptionsData from '/imports/api/newPollOptions.js';

export default class NewPoll extends Component{
    getOptions(){
        if(OptionsData.find().count() < 2){
            this.addOption("", 0);
            this.addOption("", 1);
        }
        
        return OptionsData.find({}, {sort: {index: 1}}).fetch();
    }
    
    addOption(option, index, e){
        OptionsData.insert({
            option : option,
            index : index
        });
    }
    
    addNewPoll(e){
        
    }
    
    render(){
        const options = this.getOptions().map((option) => {
            return <NewPollOption option={option} key={option.index}/>;
        });
        
        return(
            <div>
                <div>
                    <h1 className="new-poll-title">Create New Poll</h1>
                </div>
                <div>
                </div>
            </div>    
        );
    }
}