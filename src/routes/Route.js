import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import Footer from '~/components/Footer';
import SideBar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import { store } from '~/store';

const AuthLayoutContent = ({ children }) => {
  document.body.classList.remove('bg-primary');
  return (
    <>
      <div id="wrapper">
        <TopBar />
        <SideBar />
        <div className="content-page">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

const NonAuthLayoutContent = ({ children }) => {
  return <>{children}</>;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = store.getState().auth.token;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/topics" />;
  }

  const Layout = signed ? AuthLayoutContent : NonAuthLayoutContent;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

AuthLayoutContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

NonAuthLayoutContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
