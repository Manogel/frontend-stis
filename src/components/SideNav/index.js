import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function SideNav({ location }) {
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? 'mm-active' : '';

  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu" id="menu">
          <li className="menu-title">Menu</li>
          <li>
            <Link
              to="topics"
              className={`waves-effect ${activeRoute('topics')}`}
            >
              <i className="ti-write" />
              <span> Publicações </span>
            </Link>
          </li>
          <li>
            <Link
              to="references"
              className={`waves-effect ${activeRoute('references')}`}
            >
              <i className="ti-bookmark-alt" />
              <span> Referências </span>
            </Link>
          </li>

          <li>
            <Link to="users" className={`waves-effect ${activeRoute('users')}`}>
              <i className="ti-user" />
              <span> Usuários </span>
            </Link>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('ui-')}`}>
              <i className="ti-package" />
              <span>
                UI Elements
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('/ui-alerts')}>
                <Link to="ui-alerts">Alerts</Link>
              </li>
              <li className={activeRoute('ui-buttons')}>
                <Link to="ui-buttons">Buttons</Link>
              </li>
              <li className={activeRoute('ui-cards')}>
                <Link to="ui-cards">Cards</Link>
              </li>
              <li className={activeRoute('ui-carousel')}>
                <Link to="ui-carousel">Carousel</Link>
              </li>
              <li className={activeRoute('ui-dropdowns')}>
                <Link to="ui-dropdowns">Dropdowns</Link>
              </li>
              <li className={activeRoute('ui-grid')}>
                <Link to="ui-grid">Grid</Link>
              </li>
              <li className={activeRoute('ui-images')}>
                <Link to="ui-images">Images</Link>
              </li>
              <li className={activeRoute('ui-lightbox')}>
                <Link to="ui-lightbox">Lightbox</Link>
              </li>
              <li className={activeRoute('ui-modals')}>
                <Link to="ui-modals">Modals</Link>
              </li>
              <li className={activeRoute('ui-rangeslider')}>
                <Link to="ui-rangeslider">Range Slider</Link>
              </li>
              <li className={activeRoute('ui-session-timeout')}>
                <Link to="ui-session-timeout">Session Timeout</Link>
              </li>
              <li className={activeRoute('ui-progressbars')}>
                <Link to="ui-progressbars">Progress Bars</Link>
              </li>
              <li className={activeRoute('ui-sweet-alert')}>
                <Link to="ui-sweet-alert">Sweet-Alert</Link>
              </li>
              <li className={activeRoute('ui-tabs-accordions')}>
                <Link to="ui-tabs-accordions">Tabs & Accordions</Link>
              </li>
              <li className={activeRoute('ui-typography')}>
                <Link to="ui-typography">Typography</Link>
              </li>
              <li className={activeRoute('ui-video')}>
                <Link to="ui-video">Video</Link>
              </li>
              <li className={activeRoute('ui-general')}>
                <Link to="ui-general">General</Link>
              </li>
              <li className={activeRoute('ui-colors')}>
                <Link to="ui-colors">Colors</Link>
              </li>
              <li className={activeRoute('ui-rating')}>
                <Link to="ui-rating">Rating</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('form-')}`}>
              <i className="ti-receipt" />
              <span>
                Forms
                <span className="badge badge-pill badge-success float-right">
                  9
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('form-elements')}>
                <Link to="form-elements">Form Elements</Link>
              </li>
              <li className={activeRoute('form-validation')}>
                <Link to="form-validation">Form Validation</Link>
              </li>
              <li className={activeRoute('form-advanced')}>
                <Link to="form-advanced">Form Advanced</Link>
              </li>
              <li className={activeRoute('form-editors')}>
                <Link to="form-editors">Form Editors</Link>
              </li>
              <li className={activeRoute('form-uploads')}>
                <Link to="form-uploads">Form File Upload</Link>
              </li>
              <li className={activeRoute('form-xeditable')}>
                <Link to="form-xeditable">Form Xeditable</Link>
              </li>
              <li className={activeRoute('form-repeater')}>
                <Link to="form-repeater">Form Repeater</Link>
              </li>
              <li className={activeRoute('form-wizard')}>
                <Link to="form-wizard">Form Wizard</Link>
              </li>
              <li className={activeRoute('form-mask')}>
                <Link to="form-mask">Form Mask</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('charts-')}`}>
              <i className="ti-pie-chart" />
              <span>
                Charts
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('charts-apex')}>
                <Link to="charts-apex">Apex Chart</Link>
              </li>
              <li className={activeRoute('charts-chartist')}>
                <Link to="charts-chartist">Chartist Chart</Link>
              </li>
              <li className={activeRoute('charts-chartjs')}>
                <Link to="charts-chartjs">Chartjs Chart</Link>
              </li>
              <li className={activeRoute('charts-knob')}>
                <Link to="charts-knob">Knob Chart</Link>
              </li>
              <li className={activeRoute('charts-echart')}>
                <Link to="charts-echart">E - Chart</Link>
              </li>
              <li className={activeRoute('charts-sparkline')}>
                <Link to="charts-sparkline">Sparkline Chart</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('tables-')}`}>
              <i className="ti-view-grid" />
              <span>
                Tables
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('tables-basic')}>
                <Link to="tables-basic">Basic Tables</Link>
              </li>
              <li className={activeRoute('tables-datatable')}>
                <Link to="tables-datatable">Data Table</Link>
              </li>
              <li className={activeRoute('tables-responsive')}>
                <Link to="tables-responsive">Responsive Table</Link>
              </li>
              <li className={activeRoute('tables-editable')}>
                <Link to="tables-editable">Editable Table</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('icons-')}`}>
              <i className="ti-face-smile" />
              <span>
                Icons
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('icons-material')}>
                <Link to="icons-material">Material Design</Link>
              </li>
              <li className={activeRoute('icons-fontawesome')}>
                <Link to="icons-fontawesome">Font Awesome</Link>
              </li>
              <li className={activeRoute('icons-ion')}>
                <Link to="icons-ion">Ion Icons</Link>
              </li>
              <li className={activeRoute('icons-themify')}>
                <Link to="icons-themify">Themify Icons</Link>
              </li>
              <li className={activeRoute('icons-dripicons')}>
                <Link to="icons-dripicons">Dripicons</Link>
              </li>
              <li className={activeRoute('icons-typicons')}>
                <Link to="icons-typicons">Typicons Icons</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('maps-')}`}>
              <i className="ti-location-pin" />
              <span>
                Maps
                <span className="badge badge-pill badge-danger float-right">
                  2
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('maps-google')}>
                <Link to="maps-google"> Google Map</Link>
              </li>
              <li className={activeRoute('maps-vector')}>
                <Link to="maps-vector"> Vector Map</Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">Extras</li>

          <li>
            <Link to="/#" className={`waves-effect ${activeRoute('pages-')}`}>
              <i className="ti-support" />
              <span>
                Extra Pages
                <span className="float-right menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </span>
            </Link>
            <ul className="submenu">
              <li className={activeRoute('pages-login')}>
                <Link to="pages-login">Login</Link>
              </li>
              <li className={activeRoute('pages-register')}>
                <Link to="pages-register">Register</Link>
              </li>
              <li className={activeRoute('pages-forgot')}>
                <Link to="pages-forgot">Recover Password</Link>
              </li>
              <li className={activeRoute('pages-timeline')}>
                <Link to="pages-timeline">Timeline</Link>
              </li>
              <li className={activeRoute('pages-invoice')}>
                <Link to="pages-invoice">Invoice</Link>
              </li>
              <li className={activeRoute('pages-directory')}>
                <Link to="pages-directory">Directory</Link>
              </li>
              <li className={activeRoute('pages-404')}>
                <Link to="pages-404">Error 404</Link>
              </li>
              <li className={activeRoute('pages-500')}>
                <Link to="pages-500">Error 500</Link>
              </li>
              <li className={activeRoute('pages-pricing')}>
                <Link to="pages-pricing">Pricing</Link>
              </li>
              <li className={activeRoute('pages-gallery')}>
                <Link to="pages-gallery">Gallery</Link>
              </li>
              <li className={activeRoute('pages-maintenance')}>
                <Link to="pages-maintenance">Maintenance</Link>
              </li>
              <li className={activeRoute('pages-comingsoon')}>
                <Link to="pages-comingsoon">Coming Soon</Link>
              </li>
              <li className={activeRoute('pages-faq')}>
                <Link to="pages-faq">Faq</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default withRouter(SideNav);
