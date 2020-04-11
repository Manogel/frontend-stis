import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function Notification() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="notification-list list-inline-item mr-1"
        tag="li"
      >
        <DropdownToggle className="nav-link arrow-none waves-effect" tag="a">
          <i className="mdi mdi-bell-outline noti-icon" />
          <span className="badge badge-pill badge-danger noti-icon-badge">
            3
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg" right>
          <h6 className="dropdown-item-text"> Notifications (258) </h6>
          <Scrollbars style={{ height: '230px' }}>
            <DropdownItem tag="a" htef="#" className="notify-item active">
              <div className="notify-icon bg-success">
                <i className="mdi mdi-cart-outline" />
              </div>
              <p className="notify-details">
                Your order is placed
                <span className="text-muted">
                  Dummy text of the printing and typesetting industry.
                </span>
              </p>
            </DropdownItem>
            <DropdownItem tag="a" htef="#" className="notify-item">
              <div className="notify-icon  bg-warning">
                <i className="mdi mdi-message-text-outline" />
              </div>
              <p className="notify-details">
                New Message received
                <span className="text-muted">You have 87 unread messages</span>
              </p>
            </DropdownItem>
            <DropdownItem tag="a" htef="#" className="notify-item">
              <div className="notify-icon bg-info">
                <i className="mdi mdi-glass-cocktail" />
              </div>
              <p className="notify-details">
                Your item is shipped
                <span className="text-muted">
                  It is a long established fact that a reader will
                </span>
              </p>
            </DropdownItem>
            <DropdownItem tag="a" htef="#" className="notify-item">
              <div className="notify-icon bg-primary">
                <i className="mdi mdi-cart-outline" />
              </div>
              <p className="notify-details">
                Your order is placed
                <span className="text-muted">
                  Dummy text of the printing and typesetting industry.
                </span>
              </p>
            </DropdownItem>
            <DropdownItem tag="a" htef="#" className="notify-item">
              <div className="notify-icon bg-danger">
                <i className="mdi mdi-message-text-outline" />
              </div>
              <p className="notify-details">
                New Message received
                <span className="text-muted">You have 87 unread messages</span>
              </p>
            </DropdownItem>
          </Scrollbars>
          <DropdownItem
            tag="a"
            htef="#"
            className="text-center text-primary notify-all"
          >
            View all <i className="fi-arrow-right" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
