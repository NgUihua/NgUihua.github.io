import React, { Component } from 'react';

class HeaderInner extends Component {
  render() {
    return (
      <div className='header-inner'>
        <div className='brand-wrapper' >
          <div className='meta' >
            <div className='logo-title' >
              <a>IIssNan's Note</a>
            </div>
            <p className='subtitle' >Quick notes</p>
          </div>
        </div>
        <div className=' nav-wrapper'>
          <ul className='menu'>
            <li className='menu-item' >
              <a><i className='menu-item-icon fa fa-fw fa-home'></i>首页</a>
            </li>
            <li className='menu-item' >
              <a><i className='menu-item-icon fa fa-fw fa-archive'></i>归档</a>
            </li>
            <li className='menu-item' >
              <a><i className='menu-item-icon fa fa-fw fa-tags'></i>标签</a>
            </li>
            <li className='menu-item' >
              <a><i className='menu-item-icon fa fa-fw fa-user'></i>关于</a>
            </li>
            <li className='menu-item' >
              <a><i className='menu-item-icon fa fa-fw fa-search'></i>搜索</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderInner;