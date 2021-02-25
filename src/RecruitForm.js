import { Component } from 'react';

class RecruitForm extends Component {
  state = {
    name: '',
    position: '',
    bounty: 0,
  };

  recruit = (e) => {
    e.preventDefault();
    this.props.recruitPirate(this.state);
  };

  render() {
    return (
      <div>
        <h2>Pirate Recruitment Form</h2>
        <form>
          <div>
            <label>
              Name:
              <input
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                type="text"
              ></input>
            </label>
          </div>
          <div>
            <label>
              Position:
              <input name="position" 
              onChange={(e) => this.setState({ position: e.target.value })}
              type="text"></input>
            </label>
          </div>
          <div>
            <label>
              Bounty:
              <input name="bounty" 
              onChange={(e) => this.setState({ bounty: e.target.value })}
              type="number"></input>
            </label>
          </div>
          <div>
            <button onClick={this.recruit}>Recruit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecruitForm;
