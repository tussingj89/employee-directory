import React, { Component } from 'react';

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