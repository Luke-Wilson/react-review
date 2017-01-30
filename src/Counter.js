import React from 'react'; // this is ES6's version of require. Babel will convert it to ES5.

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

export default Counter; //this is ES6's version of module.exports. Again, Babel will convert it.
