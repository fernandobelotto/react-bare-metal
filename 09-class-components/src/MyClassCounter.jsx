import { Component } from 'react';

export class MyClassCounter extends Component {

    state = {
        counter: 0
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1})
    }
    
    decrement = () => {
        this.setState({ counter: this.state.counter - 1})
    }

    reset = () => {
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>aumentar</button>
                <button onClick={this.decrement}>diminuir</button>
                <button onClick={this.reset}>resetar</button>
            </div>
        )
    }
}