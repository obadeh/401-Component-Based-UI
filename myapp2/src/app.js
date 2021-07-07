import React from 'react';
import './app.scss';
import Header from './hedder.js';
import Footer from './fotter.js';
import Counter from './counter.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;