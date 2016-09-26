import React, { Component, PropTypes } from 'react';

export default class Polls extends Component{
    render(){
        return(
            <div className="polls">
                {this.props.polls.map((poll) => {
                    return <div key={poll._id}>{ poll.question }</div>;
                })}
            </div>  
        );
    }
}

App.propTypes = {
    polls : PropTypes.array.isRequired    
};

