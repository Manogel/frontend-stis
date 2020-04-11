import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Alert, Button, Col, Row, Card } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import logosm from '~/assets/images/logo-sm.png';
import AuthActions from '~/store/ducks/auth';

function Login() {
  const dispatch = useDispatch();
  const errorAuth = useSelector((state) => state.auth.error);
  const userLogged = useSelector((state) => state.auth.token);

  function handleSubmit(event, values) {
    const { email, password } = values;
    dispatch(
      AuthActions.handleLoginRequest({
        email,
        password,
      })
    );
  }

  return (
    <div className="wrapper-page">
      <Card className="overflow-hidden account-card mx-3">
        <div className="bg-primary p-4 text-white text-center position-relative">
          <h4 className="font-20 m-b-5">Bem vindo de volta!</h4>
          <p className="text-white-50 mb-4">Faça login para continuar.</p>
          <Link to="/" className="logo logo-admin">
            <img src={logosm} height="24" alt="logo" />
          </Link>
        </div>
        <div className="account-card-content">
          {userLogged && (
            <Alert color="success">Your Login is successfull.</Alert>
          )}

          {errorAuth && <Alert color="danger">Login failure</Alert>}

          <AvForm
            className="form-horizontal m-t-30"
            onValidSubmit={handleSubmit}
          >
            <AvField
              name="email"
              label="Email"
              placeholder="Seu email"
              type="text"
              required
              validate={{
                required: { value: true, errorMessage: 'Insira seu email' },
                email: {
                  value: true,
                  errorMessage: 'Entre com um email válido',
                },
              }}
            />
            <AvField
              name="password"
              label="Senha"
              placeholder="Sua senha secreta"
              type="password"
              required
              validate={{
                required: { value: true, errorMessage: 'Insira sua senha' },
              }}
            />

            <Row className="form-group m-t-20">
              <Col sm="6" />
              <Col sm="6" className="text-right">
                <Button
                  color="primary"
                  className="w-md waves-effect waves-light"
                  type="submit"
                >
                  Log In
                </Button>
              </Col>
            </Row>
            <Row className="form-group m-t-10 mb-0">
              <Col md="12" className="m-t-20">
                <Link to="/forget-password">
                  <i className="mdi mdi-lock" /> Forgot your password?
                </Link>
              </Col>
            </Row>
          </AvForm>
        </div>
      </Card>

      <div className="m-t-40 text-center">
        <p>
          Don't have an account ?
          <Link to="/register" className="font-500 text-primary">
            Sign up now
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

export default withRouter(Login);
