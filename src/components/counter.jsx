import React, { Component } from "react";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/500",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  increment = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const {onIncrement, counter, onDecrement, onDelete} = this.props;
    return (
      <div className="row">
        {/* {this.props.children} */}
        {/* <p>{this.state.count}</p> */}
        <div className="col-1">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        </div>
        {/* <img src={this.state.imageUrl} /> */}
        {/* <span>{this.formatCount()}</span> */}
        <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          style={this.styles}
          className="btn btn-success m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          style={this.styles}
          disabled = {counter.value <= 0}
          className="btn btn-default m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          style={this.styles}
          className="btn btn-danger m-2"
        >
          x
        </button>
        {/* <ul>{this.renderTags()}</ul> */}
        
        </div>
        
      </div>
    );
  }

  delete() {}

  getBadgeClasses() {
    const {counter} = this.props;
    let classes = "badge badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {counter} = this.props;

    return counter.value === 0 ? "zero" : counter.value;
    //or use object destructuring like this
    //const { count } = this.state;
    //return count === 0 ? "Zero" : count;
  }

  renderTags() {
    return this.state.tags.length > 0 ? (
      this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    ) : (
      <p>There are no tags</p>
    );
  }
}

export default Counter;
