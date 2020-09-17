import { ReactComponent } from '*.svg';
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Car extends React.Component {
  render() {
    this.brand = "Ford"
  }

  present() {
    return <h2>My car it's a {this.brand}</h2>
  }
}


ReactDOM.render(<Car />, document.getElementById('root'));

