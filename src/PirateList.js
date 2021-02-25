import React, { Component } from 'react';

export default class PirateList extends Component {
  render() {
    return (
      <div>
        <h2>List of Pirates</h2>

        <ul>
          {this.props.pirates.map((pirate) => (
            <li key={pirate.name}>
              {pirate.name}, {pirate.position} (${pirate.bounty}){' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
