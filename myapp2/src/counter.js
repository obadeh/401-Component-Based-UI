
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      // initial state
      this.state = {
        count: 0,
        numState:'',
      }
     
    }
  
    handleClick = e => {
      e.preventDefault();
      let count = this.state.count + 1
      if(count>0){ this.state.numState='positive' }
      if(count===0){this.state.numState='zero'}

      this.setState({ count });
    }
    handleClick2 = e => {
      e.preventDefault();
      let count = this.state.count - 1
      
      if(count<0){ this.state.numState='negative'}
      if(count===0){this.state.numState='zero'}

      this.setState({ count });
    }
  
    render() {
      return (
        <section>
          <h3>{this.state.count}</h3>
          <h2>{this.state.numState}</h2>
          <button onClick={this.handleClick}>increment the counter</button>
          <button onClick={this.handleClick2}>decrement the counter</button>
        </section>
      )
    }
  }

  export default Counter;