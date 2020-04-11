import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Breadcrumb,
  Button,
  CardHeader,
  BreadcrumbItem,
  Collapse,
} from 'reactstrap';

function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Faqs</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Extra Pages</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Faqs</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <Row className="justify-content-center mb-5">
                  <Col lg="5">
                    <div className="text-center faq-title pt-4 pb-4">
                      <div className="pt-3 pb-3">
                        <i className="ti-comments text-primary h3" />
                      </div>
                      <h5>Can't find what you are looking for?</h5>
                      <p className="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages.
                      </p>
                      <Button
                        type="button"
                        color="primary"
                        className="m-t-10 mr-2 waves-effect waves-light"
                      >
                        Email Us
                      </Button>
                      <Button
                        type="button"
                        color="success"
                        className="m-t-10 waves-effect waves-light"
                      >
                        Send us a tweet
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col lg="5">
                    <h5 className="mt-0 font-18 mb-4">
                      <i className="ti-agenda text-primary mr-2" /> General
                      Questions
                    </h5>
                    <div className="accordion" id="accordionExample">
                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq1(!faq1)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              What is Lorem Ipsum?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq1}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq2(!faq2)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Where does it come from?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq2}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq3(!faq3)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Why do we use it?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq3}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq4(!faq4)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Where can I get some?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq4}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>
                  </Col>

                  <Col lg={{ size: 5, offset: 1 }}>
                    <h5 className="mt-0 font-18 mb-4">
                      <i className="ti-bookmark-alt text-primary mr-2" />{' '}
                      Pricing & Plans
                    </h5>
                    <div className="accordion" id="accordionExample2">
                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq5(!faq5)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Where can I get some?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq5}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq8(!faq8)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Why do we use it?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq8}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq6(!faq6)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              Where does it come from?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq6}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="mb-0">
                        <div className="faq collapsed">
                          <CardHeader
                            onClick={() => setFaq7(!faq7)}
                            className="text-dark"
                            id="headingOne"
                          >
                            <h6 className="m-0 faq-question">
                              What is Lorem Ipsum?
                            </h6>
                          </CardHeader>
                        </div>

                        <Collapse isOpen={faq7}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              The new common language will be more simple and
                              regular than the existing European languages. It
                              will be as simple as Occidental; in fact, it will
                              be Occidental.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>
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

export default withRouter(Faq);
