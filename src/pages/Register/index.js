import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, Row, Col } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import logosm from '~/assets/images/logo-sm.png';

export default function Register() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event, values) {
    console.log(values);
  }

  return (
    <div className="wrapper-page">
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20 m-b-5">Free Register</h4>
          <p className="text-white-50 mb-4">
            Get your free Veltrix account now.
          </p>
          <Link to="/" className="logo logo-admin">
            <img src={logosm} height="24" alt="logo" />
          </Link>
        </div>
        <div className="account-card-content">
          {success && (
            <Alert color="success">Registration Done Successfully.</Alert>
          )}

          {error && <Alert color="danger">{error}</Alert>}

          <AvForm
            className="form-horizontal m-t-30"
            onValidSubmit={handleSubmit}
          >
            <AvField
              name="username"
              label="Username"
              placeholder="Enter Username"
              type="text"
              required
            />
            <AvField
              name="email"
              label="Email"
              placeholder="Enter Email"
              type="email"
              required
            />
            <AvField
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
              required
            />

            <Row className="form-group m-t-20">
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
                    Register
                  </Button>
                )}
              </Col>
            </Row>

            <Row className="form-group m-t-10 mb-0">
              <Col md="12" className="m-t-20">
                <p className="mb-0">
                  By registering you agree to the Veltrix{' '}
                  <Link to="#" className="text-primary">
                    Terms of Use
                  </Link>
                </p>
              </Col>
            </Row>
          </AvForm>
        </div>
      </Card>

      <div className="m-t-40 text-center">
        <p>
          Already have an account ?
          <Link to="/" className="font-500 text-primary">
            Login
          </Link>
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
