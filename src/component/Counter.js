import React, { Component } from 'react';


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count += 1});
    }

    decrement = () => {
        this.setState({ count: this.state.count -= 1 });
    }
    render() {
        return (
            <div className="form-control">
                <button onClick={this.decrement}>- Eksi</button>
                {this.state.count}
                
                <button onClick={this.increment}>Arti +</button> 
                {this.count}
                
               


                
            

            </div>
        );
    }
}

export default Counter;
