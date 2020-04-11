import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, Alert } from 'reactstrap';

import logosm from '~/assets/images/logo-sm.png';

function ResetPassword() {
  return (
    <div className="wrapper-page">
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20 m-b-10 pb-2">Password Reset Successfully !</h4>
          <Link to="/" className="logo logo-admin">
            <img src={logosm} height="24" alt="logo" />
          </Link>
        </div>
        <div className="account-card-content">
          <br />
          <Alert color="success">
            Your password reset successfully. Now You can
            <Link to="/login">Login</Link>
          </Alert>
        </div>
      </Card>

      <div className="m-t-40 text-center">
        <p>
          Don't have an account ?{' '}
          <Link to="/register" className="font-500 text-primary">
            {' '}
            Signup now{' '}
          </Link>{' '}
        </p>
        <p>
          © {new Date().getFullYear()} Veltrix. Refactored with{' '}
          <i className="mdi mdi-heart text-danger" /> by{' '}
          <a
            href="https://github.com/Manogel"
            target="_blank"
            className="font-500 text-primary"
          >
            Manogel
          </a>
        </p>
      </div>
    </div>
  );
}

export default withRouter(ResetPassword);
