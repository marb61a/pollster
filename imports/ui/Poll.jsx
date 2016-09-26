import React, { Component, PropTypes } from 'react';

export default class Poll extends Component{
    render(){
        options = this.props.poll.options.map(function(option){
           return <div key="{option.index}">{option.option}</div>; 
        });
        
        return(
            <div className="poll">
                <div className="question">
                    <h3 className="">{this.props.poll.question}</h3>
                </div>
                <div className="panel-body">
                    {options}
                    <div className="poll-footer">
                        Created By {this.props.poll.author} 
                        <span className="badge badge-info pull-right">
                            {this.props.poll.totalVotes}
                        </span>
                    </div>
                </div>
            </div>    
        );
    }
}

Poll.propTypes = {
    polls : PropTypes.object.isRequired
};