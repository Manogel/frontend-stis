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

import user10 from '~/assets/images/users/user-10.jpg';
import user2 from '~/assets/images/users/user-2.jpg';
import user3 from '~/assets/images/users/user-3.jpg';
import user4 from '~/assets/images/users/user-4.jpg';
import user5 from '~/assets/images/users/user-5.jpg';
import user6 from '~/assets/images/users/user-6.jpg';
import user7 from '~/assets/images/users/user-7.jpg';
import user8 from '~/assets/images/users/user-8.jpg';
import user9 from '~/assets/images/users/user-9.jpg';

function Directory() {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Directory</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Extra Pages</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Directory</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user2}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Jerome A. Hebert
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Jerome@veltrix.com</p>
                <div className="clearfix" />
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user3}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Adam V. Acker
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Adam@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user4}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Stanley M. Dyke
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Stanley@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user5}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Ben J. Mathison
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Ben@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...
                  <Link to="#" className="text-primary">
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user6}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  John V. Bailey
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">John@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user7}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Antonio J. Thomas
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Antonio@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user8}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Jerome A. Hebert
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Jerome@veltrix.com</p>
                <div className="clearfix" />
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user9}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Adam V. Acker
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Adam@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" md="6">
            <Card className="directory-card">
              <CardBody>
                <div className="float-left mr-4">
                  <img
                    src={user10}
                    alt=""
                    className="img-fluid img-thumbnail rounded-circle thumb-lg"
                  />
                </div>
                <ul className="list-unstyled social-links float-right">
                  <li>
                    <Link to="#" className="btn-primary">
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn-info">
                      <i className="mdi mdi-twitter" />
                    </Link>
                  </li>
                </ul>
                <h5 className="text-primary font-18 mt-0 mb-1">
                  Stanley M. Dyke
                </h5>
                <p className="font-12 mb-2">Creative Director</p>
                <p className="mb-4">Stanley@veltrix.com</p>
                <hr />
                <p className="mb-0">
                  <b>Intro : </b>At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis atque corrupti quos dolores
                  et...{' '}
                  <Link to="#" className="text-primary">
                    {' '}
                    Read More
                  </Link>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Directory);
