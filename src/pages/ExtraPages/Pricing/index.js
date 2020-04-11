import React from 'react';
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

function Pricing() {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Pricing</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Extra Pages</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Pricing</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xl="3" md="6">
            <Card className="pricing-box">
              <CardBody>
                <div className="mb-4 pt-3 pb-3">
                  <div className="pricing-icon float-left">
                    <i className="ion ion-ios-airplane" />
                  </div>
                  <div className="text-right">
                    <h5 className="mt-0">Starter</h5>
                    <p className="text-muted">Sed ut neque unde</p>
                  </div>
                </div>
                <div className="pricing-features mb-4">
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Live
                    Support
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Unlimited
                    User
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> No Time
                    Tracking
                  </p>
                  <p>
                    <i className="mdi mdi-close text-primary mr-2" /> Free Setup
                  </p>
                </div>
                <div className="text-center pt-3 pb-3">
                  <h2>
                    <sup>
                      <small>$</small>
                    </sup>
                    19/<span className="font-16">Per month</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  >
                    Sign up Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6">
            <Card className="pricing-box">
              <CardBody>
                <div className="mb-4 pt-3 pb-3">
                  <div className="pricing-icon float-left">
                    <i className="ion ion-ios-trophy" />
                  </div>
                  <div className="text-right">
                    <h5 className="mt-0">Professional</h5>
                    <p className="text-muted">Sed ut neque unde</p>
                  </div>
                </div>
                <div className="pricing-features mb-4">
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Live
                    Support
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Unlimited
                    User
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> No Time
                    Tracking
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Setup
                  </p>
                </div>
                <div className="text-center pt-3 pb-3">
                  <h2>
                    <sup>
                      <small>$</small>
                    </sup>
                    29/<span className="font-16">Per month</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  >
                    Sign up Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6">
            <Card className="pricing-box">
              <CardBody>
                <div className="mb-4 pt-3 pb-3">
                  <div className="pricing-icon float-left">
                    <i className="ion ion-ios-umbrella" />
                  </div>
                  <div className="text-right">
                    <h5 className="mt-0">Enterprise</h5>
                    <p className="text-muted">Sed ut neque unde</p>
                  </div>
                </div>
                <div className="pricing-features mb-4">
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Live
                    Support
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Unlimited
                    User
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> No Time
                    Tracking
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Setup
                  </p>
                </div>
                <div className="text-center pt-3 pb-3">
                  <h2>
                    <sup>
                      <small>$</small>
                    </sup>
                    39/<span className="font-16">Per month</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  >
                    Sign up Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6">
            <Card className="pricing-box">
              <CardBody>
                <div className="mb-4 pt-3 pb-3">
                  <div className="pricing-icon float-left">
                    <i className="ion ion-ios-cube" />
                  </div>
                  <div className="text-right">
                    <h5 className="mt-0">Unlimited</h5>
                    <p className="text-muted">Sed ut neque unde</p>
                  </div>
                </div>
                <div className="pricing-features mb-4">
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Live
                    Support
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Unlimited
                    User
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> No Time
                    Tracking
                  </p>
                  <p>
                    <i className="mdi mdi-check text-primary mr-2" /> Free Setup
                  </p>
                </div>
                <div className="text-center pt-3 pb-3">
                  <h2>
                    <sup>
                      <small>$</small>
                    </sup>
                    49/<span className="font-16">Per month</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  >
                    Sign up Now
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Pricing);
