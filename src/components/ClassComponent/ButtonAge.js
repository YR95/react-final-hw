import { Component } from 'react';
export default class ButtonAge extends Component {
  state = { counter: 1 };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}