import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {onDelete, onDecrement, counters, onReset, onIncrement} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>

        {counters.map(counter => (
          <Counter 
          key={counter.id} 
          onDelete={onDelete} 
          onIncrement = {onIncrement}
          onDecrement = {onDecrement}
          counter={counter}>
            <h1>Title</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
