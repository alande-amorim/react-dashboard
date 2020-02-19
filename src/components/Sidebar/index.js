/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const menuItems = [
  {
    type: 'link',
    title: 'Dashboard',
    icon: 'fas fa-fw fa-tachometer-alt',
    link: '/',
  },
  {
    type: 'separator',
    title: 'Interface',
  },
  {
    type: 'menu',
    title: 'Components',
    icon: 'fas fa-fw fa-cog',
    items: [
      {
        title: 'Buttons',
        link: '/buttons',
      },
      {
        title: 'Form',
        link: '/form',
      },
    ],
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedMenu: null,
    };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({
      expandedMenu: e.target,
    });
  };

  renderLink = item => {
    return (
      <li className="nav-item" key={item.title}>
        <a className="nav-link" href={item.link}>
          <i className={item.icon} />
          <span>{item.title}</span>
        </a>
      </li>
    );
  };

  renderSeparator = item => {
    return (
      <>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">{item.title}</div>
      </>
    );
  };

  renderMenu = item => {
    return (
      <li className="nav-item" key={item.title}>
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          onClick={this.handleClick}
        >
          <i className="fas fa-fw fa-cog" />
          <span>{item.title}</span>
        </a>
        <div className="collapse show">
          <div className="bg-white py-2 collapse-inner">
            {item.items.map(subitem => {
              return (
                <a
                  key={subitem.link}
                  className="collapse-item"
                  href={subitem.link}
                >
                  {subitem.title}
                </a>
              );
            })}
          </div>
        </div>
      </li>
    );
  };

  render() {
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />

        {menuItems.map((item, i) => {
          return (
            <>
              {{
                link: this.renderLink,
                separator: this.renderSeparator,
                menu: this.renderMenu,
              }[item.type](item)}
            </>
          );
        })}

        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    );
  }
}

export default Sidebar;
