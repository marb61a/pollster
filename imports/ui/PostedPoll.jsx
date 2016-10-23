import React, { Component, PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import VoteOption from "./VoteOption.jsx";
import Option from "./Option.jsx";

export default class PostedPoll extends TrackerReact(Component){
    renderOptions(){
        if(this.hasVoted()){
            
        } else {
            
        }
    }
    
    hasVoted(){
        
    }
    
    render(){
        return(
        <div className=" poll ">
            <div className="question">
                <h3 className="">{this.props.poll.question}</h3>
            </div>
            <div className="panel-body">
                {this.renderOptions()}
            </div>
        </div>    
        );
    }
}