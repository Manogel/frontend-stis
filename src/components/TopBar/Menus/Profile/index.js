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
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt="user"
          className="rounded-circle"
        />
      </DropdownToggle>
      <DropdownMenu className="profile-dropdown" right>
        <DropdownItem tag="a" href="#">
          <i className="mdi mdi-account-circle m-r-5" /> Perfil
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
