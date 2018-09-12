import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes.jsx'
import './styles/main.scss'
import 'font-awesome/scss/font-awesome'


class Index extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default ReactDOM.render(<Index />, document.getElementById('root'));