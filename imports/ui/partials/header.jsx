import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {open: false};
    }
    
    classes(path){
        let menuClass = classNames(this.props.className, {
            'nav-item': true,
            'open': this.state.open,
            'active': ActiveRoute.path(path)
        });
        
        return menuClass;
    }
    
    showMenu(){
        if(this.state.open)
            this.setState({open:false});
        else
            this.setState({open:true});
    }
    
    render(){
        return(
            <div className="header">
                <nav className="flex-nav">
                    <div className="header-section">
                        <div className="nav-item header-logo">
                            <h1>Cool Polls</h1>
                        </div>
                        <div className="nav-item">
                            <a href="/" ><i className="fa fa-home"></i> Home</a>    
                        </div>
                        <div className="nav-item">
                            <a href="/polls" ><i className="fa fa-list"></i> Polls</a>
                        </div>
                        <div className="nav-item">
                            <a href="/newPoll" ><i className="fa fa-plus-circle"></i> New Poll</a>
                        </div>
                    </div>
                </nav>
            </div>    
        );
    }
}