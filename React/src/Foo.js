import React, { Component } from 'react';

export default class Foo extends Component {

  render() {
    return (<div>
      <div> Welcome <span>{this.props.nam}</span></div>
      <div>Emp <span>{this.props.empId}</span></div>
    </div>)

  }
}