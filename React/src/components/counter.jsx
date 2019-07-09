import React, { Component } from "react";

export default class Counter extends Component {
 // state = {
   // count: this.props.value,
   // tags: ['tag1', 'tag2', 'tag3']
  //};

  //constructor(){
  //super();
  // this.getIncrementCount = this.getIncrementCount.bind(this);
  //}

  //renderTags() {
    //if (this.state.tags.length === 0) return <p>There are no tags!</p>
    //return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
  //}

 
  getIncrementCount = () => {
    this.setState({ count: this.props.counter.count + 1 });
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm' onClick={() => this.props.onIncrement(this.props.counter)} >Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  getBadgeClassess() {
    var classess = "badge m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  }

  formatCount() {
    const { value } = this.props.counter;
    console.log("count:" + value);
    return value === 0 ? "Zero" : value;
  }
}
