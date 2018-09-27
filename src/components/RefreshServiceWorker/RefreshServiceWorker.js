import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ServiceWorkerActions from '../../actions/serviceWorker'
import './RefreshServiceWorker.css';

class RefreshServiceWorker extends React.Component {

  refreshScreen() {
    window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.serviceWorker.isUpdate && (
            <button
              className="RefreshServiceWorker-btn"
              onClick={this.refreshScreen.bind(this)}
            >
              New content is available, please refresh.
            </button>
          )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  serviceWorker: state.serviceWorker,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceWorkerActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RefreshServiceWorker)
