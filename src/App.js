import { Component } from 'react';
import RecruitForm from './RecruitForm';
import PirateList from './PirateList';

class App extends Component {
  state = {
    pirates: [
      { name: 'Pirate 1', position: 'Swab', bounty: 10 },
      { name: 'Pirate 3', position: 'Swab', bounty: 10 },
      { name: 'Pirate 2', position: 'Swab', bounty: 10 },
      { name: 'Pirate 4', position: 'Swab', bounty: 10 },
    ],
  };

  recruitPirate = (pirate) => {
    const newPirateList = [...this.state.pirates, pirate];
    this.setState({ pirates: newPirateList });
  };

  render() {
    return (
      <div>
        <h1> The Pirates</h1>
        <PirateList pirates={this.state.pirates} />
        <RecruitForm recruitPirate={this.recruitPirate} />
      </div>
    );
  }
}

export default App;
