import React, { Component } from 'react';
import Routes from './routes';
import './scss/sb-admin-2.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';

// import GlobalStyle from './styles/global';
// import Theme from './styles/theme';

class App extends Component {
  componentWillUnmount() {
    document.querySelector('body').className = '';
  }

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
