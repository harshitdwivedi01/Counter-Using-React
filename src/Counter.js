import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            Defaultvalue: 0
        }
    }
    handleIncrement() {
        this.setState({
            Defaultvalue: this.state.Defaultvalue + 1
        })
    }
    handleDecrement() {
        this.setState({
            Defaultvalue: this.state.Defaultvalue - 1
        })
    }
    render() {
        return (
            <>
                <h3>Hii,Come and Let's Play with this Counter Game</h3>
                <button className='btn btn-danger' onClick={() => this.handleDecrement()}>-</button>
                <span className='btnValue'>  {this.state.Defaultvalue}  </span>
                <button className='btn btn-success' onClick={() => this.handleIncrement()}>+</button>
            </>
        )
    }
}
export default Counter

