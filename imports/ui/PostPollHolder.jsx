import React, { Component, PropTypes } from 'react';

import PostPoll from "./PostedPoll.jsx";

export default class PostPollHolder extends Component{
    isReady(){
        
    }
    
    render(){
        return(
            <div>
                {this.isReady()}
            </div>  
        );
    }
}