/* eslint-disable no-new */
import React, { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MetisMenu from 'metismenujs';

import SideNav from '../SideNav';

function SideBar({ location }) {
  const is_large_state = useSelector((state) => state.layout.is_large_state);

  useEffect(() => {
    function activateParentDropdown(item) {
      item.classList.add('mm-active');
      const parent = item.parentElement;

      if (parent) {
        parent.classList.add('mm-active');
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.add('mm-show');
          const parent3 = parent2.parentElement;

          if (parent3) {
            parent3.classList.add('mm-active');
            parent3.childNodes[0].classList.add('mm-active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add('active');
            }
          }
        }
      }
    }

    new MetisMenu('#menu', {});

    let matchingMenuItem = null;
    const ul = document.getElementById('menu');
    const items = ul.getElementsByTagName('a');
    for (let i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (is_large_state) {
      new MetisMenu('#menu', {});
    }
  }, [is_large_state]);

  return (
    <div className="left side-menu">
      {is_large_state ? (
        <SideNav />
      ) : (
        <PerfectScrollbar>
          <SideNav />
        </PerfectScrollbar>
      )}

      <div className="clearfix" />
    </div>
  );
}

export default withRouter(SideBar);
