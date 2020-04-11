import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Progress,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

function Progressbars() {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Progress Bars</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Progress Bars</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Default Examples</h4>
                <p className="text-muted m-b-30">
                  Progress components are built with two HTML elements, some CSS
                  to set the width, and a few attributes.
                </p>

                <div className="">
                  <div className="m-b-30">
                    <Progress color="primary" value={25} />
                  </div>
                  <div className="m-b-30">
                    <Progress color="primary" value={50} />
                  </div>
                  <div className="m-b-30">
                    <Progress color="primary" value={75} />
                  </div>
                  <div>
                    <Progress color="primary" value={100} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Backgrounds</h4>
                <p className="text-muted m-b-30">
                  Use background utility className to change the appearance of
                  individual progress bars.
                </p>

                <div className="">
                  <div className="m-b-30">
                    <Progress color="success" value={25} />
                  </div>
                  <div className="m-b-30">
                    <Progress color="info" value={50} />
                  </div>
                  <div className="m-b-30">
                    <Progress color="warning" value={75} />
                  </div>
                  <div>
                    <Progress color="danger" value={100} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Labels Example</h4>
                <p className="text-muted m-b-30">
                  Add labels to your progress bars by placing text within the{' '}
                  <code className="highlighter-rouge">Progress</code>.
                </p>

                <div className="">
                  <div>
                    <Progress color="primary" value={25}>
                      25%
                    </Progress>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Multiple bars</h4>
                <p className="text-muted m-b-30">
                  Include multiple progress bars in a progress component if you
                  need.
                </p>

                <div className="">
                  <Progress multi>
                    <Progress bar color="primary" value={15} />
                    <Progress bar color="success" value={30} />
                    <Progress bar color="info" value={20} />
                  </Progress>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Height</h4>
                <p className="text-muted m-b-30">
                  We only set a{' '}
                  <code className="highlighter-rouge">height</code> value on the{' '}
                  <code className="highlighter-rouge">Progress</code>
                </p>

                <div className="">
                  <div className="m-b-10">
                    <Progress value={25} style={{ height: '3px' }} />
                  </div>
                  <div>
                    <Progress value={25} style={{ height: '24px' }} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Animated stripes</h4>
                <p className="text-muted m-b-30">
                  The striped gradient can also be animated. Add attribute{' '}
                  <code className="highlighter-rouge">animated</code> to{' '}
                  <code className="highlighter-rouge">Progress</code> to animate
                  the stripes right to left via CSS3 animations.
                </p>

                <div className="">
                  <div>
                    <Progress animated color="primary" value="75" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Striped</h4>
                <p className="text-muted m-b-30">
                  Add{' '}
                  <code className="highlighter-rouge">
                    .progress-bar-striped
                  </code>
                  to any{' '}
                  <code className="highlighter-rouge">.progress-bar</code> to
                  apply a stripe via CSS gradient over the progress bar’s
                  background color.
                </p>

                <div className="">
                  <div className="m-b-15">
                    <Progress striped color="primary" value={10} />
                  </div>
                  <div className="m-b-15">
                    <Progress striped color="success" value={25} />
                  </div>
                  <div className="m-b-15">
                    <Progress striped color="info" value={50} />
                  </div>
                  <div className="m-b-15">
                    <Progress striped color="warning" value={75} />
                  </div>
                  <div>
                    <Progress striped color="danger" value={100} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Progressbars);
