import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            color: this.props.value
        }
        // ...define initial state with a key of 'color' set to the 'value' prop
    }
    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        //console.log(this.props)
        return (
            <div
                className="cell"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}>
            </div>
        )
    }
}