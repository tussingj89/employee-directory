import React, { Component } from 'react';

// creates the header component that appears at the top of the screen
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Use the search boxes below to narrow your results.</p>
      </div>
    )
  }
}