import React, { useState, useEffect } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

function SessionTimeout() {
  const [timeralert, setTimerAlert] = useState(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function tick() {
      setInterval(() => {
        setSeconds((old) => old + 1);
      }, 1000);
    }

    setTimeout(() => {
      setTimeout(() => {
        if (window.location.pathname === '/ui-session-timeout') {
          window.location = '/';
        }
      }, 10000);

      tick();
      setTimerAlert(true);
    }, 10000);
  }, []);

  return (
    <>
      {timeralert && (
        <SweetAlert
          showCancel
          confirmBtnText="Stay Connected"
          cancelBtnText="Logout"
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          title="Your Session is About to Expire!"
          onCancel={() => {
            window.location = '/';
          }}
          onConfirm={() => setTimerAlert(null)}
        >
          Redirecting in 10s seconds.
          <br />
        </SweetAlert>
      )}
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Session Timeout</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Session Timeout</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h5 className="mt-0 header-title">Bootstrap-session-timeout</h5>
                <p className="text-muted m-b-30">
                  Session timeout and keep-alive control with a nice Bootstrap
                  warning dialog.
                </p>

                <div>
                  <p>
                    After a set amount of idle time, a Bootstrap warning dialog
                    is shown to the user with the option to either log out, or
                    stay connected. If "Logout" button is selected, the page is
                    redirected to a logout URL. If "Stay Connected" is selected
                    the dialog closes and the session is kept alive. If no
                    option is selected after another set amount of idle time,
                    the page is automatically redirected to a set timeout URL.
                  </p>

                  <p>
                    Idle time is defined as no mouse, keyboard or touch event
                    activity registered by the browser.
                  </p>

                  <p className="mb-0">
                    As long as the user is active, the (optional) keep-alive URL
                    keeps getting pinged and the session stays alive. If you
                    have no need to keep the server-side session alive via the
                    keep-alive URL, you can also use this plugin as a simple
                    lock mechanism that redirects to your lock-session or
                    log-out URL after a set amount of idle time.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(SessionTimeout);
