import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logoLight from '~/assets/images/logo-light.png';
import logoSmall from '~/assets/images/logo-sm.png';
import LayoutActions from '~/store/ducks/layout';

import NotificationMenu from './Menus/Notification';
import ProfileMenu from './Menus/Profile';

export default function TopBar() {
  const dispatch = useDispatch();
  const is_large_state = useSelector((state) => state.layout.is_large_state);

  function sidebarToggle() {
    document.body.classList.toggle('enlarged');
    dispatch(LayoutActions.isLarge(!is_large_state));
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Link to="/" className="logo">
            <span>
              <img src={logoLight} alt="" height="18" />
            </span>
            <i>
              <img src={logoSmall} alt="" height="22" />
            </i>
          </Link>
        </div>
        <nav className="navbar-custom">
          <ul className="navbar-right list-inline float-right mb-0">
            <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
              <form role="search" className="app-search">
                <div className="form-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar.."
                  />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </li>

            <NotificationMenu />
            <ProfileMenu />
          </ul>
          <ul className="list-inline menu-left mb-0">
            <li className="float-left">
              <button
                type="button"
                onClick={sidebarToggle}
                className="button-menu-mobile open-left waves-effect"
              >
                <i className="mdi mdi-menu" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
