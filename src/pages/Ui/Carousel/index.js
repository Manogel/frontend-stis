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

import Slide from './Types/slide';
import Slidewithcaption from './Types/slidewithcaption';
import Slidewithcontrol from './Types/slidewithcontrol';
import Slidewithfade from './Types/slidewithfade';
import Slidewithindicator from './Types/slidewithindicator';

function Carousel() {
  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Carousel</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Carousel</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Slides only</h4>
                <p className="text-muted m-b-30">
                  Here’s a carousel with slides only. Note the presence of the{' '}
                  <code>.d-block</code>
                  and <code>.img-fluid</code> on carousel images to prevent
                  browser default image alignment.
                </p>
                <Slide />
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">With controls</h4>
                <p className="text-muted m-b-30">
                  Adding in the previous and next controls:
                </p>
                <Slidewithcontrol />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">With indicators</h4>
                <p className="text-muted m-b-30">
                  You can also add the indicators to the carousel, alongside the
                  controls, too.
                </p>
                <Slidewithindicator />
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">With captions</h4>
                <p className="text-muted m-b-30">
                  Add captions to your slides easily with the{' '}
                  <code>.carousel-caption</code> element within any{' '}
                  <code>.carousel-item</code>.
                </p>
                <Slidewithcaption />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Crossfade</h4>
                <p className="text-muted m-b-30">
                  Add <code>.carousel-fade</code> to your carousel to animate
                  slides with a fade transition instead of a slide.
                </p>
                <Slidewithfade />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Carousel);
