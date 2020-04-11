import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';

import user4 from '~/assets/images/users/user-4.jpg';
import AuthActions from '~/store/ducks/auth';

function Profile() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);

  return (
    <Dropdown
      isOpen={menu}
      toggle={() => setMenu(!menu)}
      className="notification-list list-inline-item nav-pro-img"
      tag="li"
    >
      <DropdownToggle
        className="nav-link arrow-none nav-user waves-effect"
        tag="a"
      >
        <img src={user4} alt="user" className="rounded-circle" />
      </DropdownToggle>
      <DropdownMenu className="profile-dropdown" right>
        <DropdownItem tag="a" href="#">
          <i className="mdi mdi-account-circle m-r-5" /> Profile
        </DropdownItem>
        <DropdownItem tag="a" href="#">
          <i className="mdi mdi-wallet m-r-5" /> My Wallet
        </DropdownItem>
        <DropdownItem tag="a" href="#">
          <Badge color="success" className="mt-1 float-right">
            11
          </Badge>
          <i className="mdi mdi-settings m-r-5" /> Settings
        </DropdownItem>
        <DropdownItem tag="a" href="#">
          <i className="mdi mdi-lock-open-outline m-r-5" /> Lock screen
        </DropdownItem>
        <div className="dropdown-divider" />
        <DropdownItem
          tag="a"
          className="text-danger"
          onClick={() => dispatch(AuthActions.handleLogout())}
        >
          <i className="mdi mdi-power text-danger" /> Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default withRouter(Profile);
