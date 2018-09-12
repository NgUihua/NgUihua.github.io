import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes.jsx'
import './styles/main.scss'
import 'font-awesome/scss/font-awesome'
import { sw } from './util/util'


class Index extends Component {
  componentWillMount() {
    sw()
  }
  render() {
    return (
      <Routes />
    );
  }
}

export default ReactDOM.render(<Index />, document.getElementById('root'));