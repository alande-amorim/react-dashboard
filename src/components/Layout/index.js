import React, { Component } from 'react';

import SideBar from '../Sidebar';
import TopBar from '../TopBar';
import Footer from '../Footer';

class Layout extends Component {
  render() {
    return (
      <div id="wrapper" className="d-flex">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">{this.props.children}</div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
