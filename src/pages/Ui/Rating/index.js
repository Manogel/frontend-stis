import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Rating from 'react-rating';
import RatingTooltip from 'react-rating-tooltip';
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

function RatingPage() {
  const [tooltipContent] = useState([
    'Rate 1',
    'Rate 2',
    'Rate 3',
    'Rate 4',
    'Rate 5',
  ]);
  const [tooltipContentMore] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]);
  const [tooltipContentHalf] = useState(['6', '7', '8', '9', '10']);
  const [tooltipContentMiddle] = useState([
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]);
  const [tooltipContentStep] = useState(['2', '4', '6', '8', '10']);
  const [isdefault, setDefault] = useState('');
  const [half, setHalf] = useState('');
  const [customize, setCustomize] = useState('');

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Rating</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Rating</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Default rating</h5>
                      <RatingTooltip
                        max={5}
                        onChange={setDefault}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />{' '}
                      <span>{isdefault}</span>
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Disabled rating</h5>
                      <Rating
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                        readonly
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">
                        Readonly rating with a value
                      </h5>
                      <Rating
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                        readonly
                        initialRating={3}
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">
                        Customized heart rating
                      </h5>
                      <RatingTooltip
                        max={5}
                        onChange={setCustomize}
                        ActiveComponent={
                          <i className="mdi mdi-heart text-danger" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-heart-outline text-danger" />
                        }
                      />
                      <span>{customize}</span>
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Handle events</h5>
                      <Rating
                        onChange={(rate) => alert(`Rating : ${rate}`)}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Customize tooltips</h5>
                      <RatingTooltip
                        max={5}
                        tooltipContent={tooltipContent}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Default rating</h5>
                      <RatingTooltip
                        max={8}
                        tooltipContent={tooltipContentMore}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">
                        Set start rate to 5 [6..10]
                      </h5>
                      <RatingTooltip
                        max={5}
                        tooltipContent={tooltipContentHalf}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">
                        Set start and stop rate [2..10]
                      </h5>
                      <RatingTooltip
                        max={11}
                        tooltipContent={tooltipContentMiddle}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">
                        Set start and stop rate [2..10] with step 2
                      </h5>
                      <RatingTooltip
                        max={5}
                        tooltipContent={tooltipContentStep}
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Custom icons</h5>
                      <Rating
                        stop={5}
                        emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                        fullSymbol={[
                          'mdi mdi-battery-20 fa-2x text-primary',
                          'mdi mdi-battery-50 fa-2x text-primary',
                          'mdi mdi-battery-70 fa-2x text-primary',
                          'mdi mdi-battery-90 fa-2x text-primary',
                        ]}
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Fractional rating</h5>
                      <Rating
                        ActiveComponent={
                          <i className="mdi mdi-star text-primary" style={{}} />
                        }
                        InActiveComponent={
                          <i className="mdi mdi-star-outline text-muted" />
                        }
                        fractions={6}
                      />
                    </div>
                  </Col>

                  <Col xl="3" md="4" sm="6">
                    <div className="p-4 text-center">
                      <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                      <Rating fractions={2} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(RatingPage);
