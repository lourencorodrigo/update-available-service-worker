import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ServiceWorkerActions from './actions/serviceWorker';
import RefreshServiceWorker from './components/RefreshServiceWorker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RefreshServiceWorker />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  serviceWorker: state.serviceWorker,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceWorkerActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
