import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, Col, Row } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import logosm from '~/assets/images/logo-sm.png';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(event, values) {
    console.log(values);
  }

  return (
    <div className="wrapper-page">
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20 mb-4">Forget password ?</h4>
          <Link to="/" className="logo logo-admin">
            <img src={logosm} height="24" alt="logo" />
          </Link>
        </div>
        <div className="account-card-content">
          <AvForm
            className="form-horizontal m-t-30"
            onValidSubmit={handleSubmit}
          >
            <AvField
              name="username"
              label="Email"
              placeholder="Enter Email"
              type="text"
              required
            />

            <Row className="form-group m-t-20 mb-0">
              <Col md="12" className="text-right">
                {loading ? (
                  <Button
                    color="primary"
                    className="w-md waves-effect waves-light"
                  >
                    Loading ...
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    className="w-md waves-effect waves-light"
                    type="submit"
                  >
                    Reset
                  </Button>
                )}
              </Col>
            </Row>
          </AvForm>
        </div>
      </Card>

      <div className="m-t-40 text-center">
        <p>
          Remember It ?{' '}
          <Link to="/" className="font-500 text-primary">
            {' '}
            Sign In here{' '}
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

export default withRouter(ForgotPassword);
