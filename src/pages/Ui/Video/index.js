import React from 'react';
import Iframe from 'react-iframe';
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

function Video() {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Video</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Video</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">
                  Responsive embed video 16:9
                </h4>
                <p className="text-muted m-b-30">
                  Aspect ratios can be customized with modifier class.
                </p>

                <Iframe
                  url="https://www.youtube.com/embed/1y_kfWUCFDQ"
                  width="100%"
                  height="420px"
                  position="relative"
                />
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">
                  Responsive embed video 21:9
                </h4>
                <p className="text-muted m-b-30">
                  Aspect ratios can be customized with modifier class.
                </p>

                <Iframe
                  url="https://www.youtube.com/embed/1y_kfWUCFDQ"
                  width="100%"
                  height="320px"
                  position="relative"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">
                  Responsive embed video 4:3
                </h4>
                <p className="text-muted m-b-30">
                  Aspect ratios can be customized with modifier class.
                </p>
                <Iframe
                  url="https://www.youtube.com/embed/1y_kfWUCFDQ"
                  width="100%"
                  height="560px"
                  position="relative"
                />
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">
                  Responsive embed video 1:1
                </h4>
                <p className="text-muted m-b-30">
                  Aspect ratios can be customized with modifier class.
                </p>

                <Iframe
                  url="https://www.youtube.com/embed/1y_kfWUCFDQ"
                  width="100%"
                  height="740px"
                  position="relative"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Video);
