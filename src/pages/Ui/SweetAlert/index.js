import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Breadcrumb,
  Button,
  BreadcrumbItem,
} from 'reactstrap';

import logosm from '~/assets/images/logo-sm.png';

function SweetAlertPage() {
  const [data, setData] = useState({
    basic: false,
    with_title: false,
    success_msg: false,
    confirm_msg: false,
    success_dlg: false,
    error_dlg: false,
    dynamic_title: '',
    dynamic_description: '',
    confirm_both: false,
    img_header: false,
    img_html: false,
    custom_div: false,
    emailtxt: '',
    emailerr: '',
    step1: false,
    step1_txt: '',
    step2: false,
    step2_txt: '',
    step3: false,
    step3_txt: '',
    step_queue: false,
    final_queue: false,
    current_ip: '219.91.239.22',
    close_timer: false,
    timeralert: null,
  });

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">SweetAlert 2</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>SweetAlert 2</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        {data.timeralert}
        {data.success_dlg && (
          <SweetAlert
            success
            title={data.dynamic_title}
            onConfirm={setData((old) => ({ success_dlg: false, ...old }))}
          >
            {data.dynamic_description}
          </SweetAlert>
        )}

        {data.error_dlg && (
          <SweetAlert
            error
            title={data.dynamic_title}
            onConfirm={() => setData((old) => ({ error_dlg: false, ...old }))}
          >
            {data.dynamic_description}
          </SweetAlert>
        )}

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Examples</h4>
                <p className="text-muted m-b-30 font-14">
                  A beautiful, responsive, customizable and accessible
                  (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
                  dependencies.
                </p>

                <Row className="text-center">
                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>A basic message</p>
                    <Button
                      color="primary"
                      onClick={() => setData({ basic: true })}
                      id="sa-basic"
                    >
                      Click me
                    </Button>
                    {data.basic && (
                      <SweetAlert
                        title="Any fool can use a computer"
                        onConfirm={() => setData({ basic: false })}
                      />
                    )}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>A title with a text under</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ with_title: false, ...old }))
                      }
                      id="sa-title"
                    >
                      Click me
                    </Button>
                    {data.with_title ? (
                      <SweetAlert
                        title="The Internet?"
                        warning
                        onConfirm={() =>
                          setData((old) => ({ with_title: false, ...old }))
                        }
                      >
                        That thing is still around?
                      </SweetAlert>
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>A success message!</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ success_msg: false, ...old }))
                      }
                      id="sa-success"
                    >
                      Click me
                    </Button>
                    {data.success_msg ? (
                      <SweetAlert
                        title="Good job!"
                        success
                        showCancel
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() =>
                          setData((old) => ({ success_msg: false, ...old }))
                        }
                        onCancel={() =>
                          setData((old) => ({ success_msg: false, ...old }))
                        }
                      >
                        You clicked the button!
                      </SweetAlert>
                    ) : null}
                  </Col>

                  {/* <Col xl="3" lg="4" sm="6" className="m-b-30">
                                <p>A warning message, with a function attached to the "Confirm"-button...</p>
                                <Button color="primary">Click me</Button>
                            </Col> */}

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>
                      By passing a parameter, you can execute something else for
                      "Cancel".
                    </p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ confirm_both: false, ...old }))
                      }
                      id="sa-params"
                    >
                      Click me
                    </Button>
                    {data.confirm_both ? (
                      <SweetAlert
                        title="Are you sure?"
                        warning
                        showCancel
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            confirm_both: false,
                            success_dlg: true,
                            dynamic_title: 'Deleted',
                            dynamic_description: 'Your file has been deleted.',
                          }))
                        }
                        onCancel={() =>
                          setData((old) => ({
                            old,
                            confirm_both: false,
                            error_dlg: true,
                            dynamic_title: 'Cancelled',
                            dynamic_description:
                              'Your imaginary file is safe :)',
                          }))
                        }
                      >
                        You won't be able to revert this!
                      </SweetAlert>
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>A message with custom Image Header</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ img_header: false, ...old }))
                      }
                      id="sa-image"
                    >
                      Click me
                    </Button>
                    {data.img_header ? (
                      <SweetAlert
                        title="Sweet!"
                        custom
                        customIcon={logosm}
                        onConfirm={() =>
                          setData((old) => ({ img_header: false, ...old }))
                        }
                      >
                        Modal with a custom image.
                      </SweetAlert>
                    ) : null}
                  </Col>

                  {/* <Col xl="3" lg="4" sm="6" className="m-b-30">
                                <p>A message with auto close timer</p>
                                <Button color="primary">Click me</Button>
                            </Col> */}

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>Custom HTML description and buttons</p>
                    <Button
                      color="primary"
                      className="mb-md-4"
                      onClick={() =>
                        setData((old) => ({ img_html: false, ...old }))
                      }
                      id="custom-html-alert"
                    >
                      Click me
                    </Button>
                    {data.img_html ? (
                      <SweetAlert
                        title={
                          <span>
                            HTML <u>example</u>!
                          </span>
                        }
                        warning
                        onConfirm={() =>
                          setData((old) => ({ img_html: false, ...old }))
                        }
                      >
                        You can use <b>bold</b> text, links and other HTML tags
                      </SweetAlert>
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>A message with custom width, padding and background</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ custom_div: false, ...old }))
                      }
                      id="custom-padding-width-alert"
                    >
                      Click me
                    </Button>
                    {data.custom_div ? (
                      <SweetAlert
                        title="Custom width, padding, background."
                        style={{
                          backgroundColor: '#ebebeb',
                          padding: '3em',
                          borderRadius: '20px',
                        }}
                        onConfirm={() =>
                          setData((old) => ({ custom_div: false, ...old }))
                        }
                      />
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>Ajax request example</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ ajax_div: false, ...old }))
                      }
                      id="ajax-alert"
                    >
                      Click me
                    </Button>
                    {data.ajax_div ? (
                      <SweetAlert
                        showCancel
                        title="Submit email to run ajax request"
                        cancelBtnBsStyle="danger"
                        confirmBtnBsStyle="success"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            ajax_div: false,
                            success_dlg: true,
                            dynamic_title: 'Ajax request finished!',
                            dynamic_description: `Submitted email : ${data.emailtxt}`,
                          }))
                        }
                        onCancel={() =>
                          setData((old) => ({ ajax_div: false, ...old }))
                        }
                      >
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </SweetAlert>
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>Chaining modals (queue) example</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ step1: false, ...old }))
                      }
                      id="chaining-alert"
                    >
                      Click me
                    </Button>
                    {data.step1 ? (
                      <SweetAlert
                        showCancel
                        title="Question 1"
                        cancelBtnBsStyle="danger"
                        confirmBtnText="Next"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            step1: false,
                            step2: true,
                          }))
                        }
                        onCancel={() =>
                          setData((old) => ({ ...old, step1: false }))
                        }
                      >
                        Chaining swal2 modals is easy
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setData((old) => ({
                              ...old,
                              step1_txt: e.target.value,
                            }))
                          }
                        />
                      </SweetAlert>
                    ) : null}

                    {data.step2 ? (
                      <SweetAlert
                        showCancel
                        title="Question 2"
                        cancelBtnBsStyle="danger"
                        confirmBtnText="Next"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            step2: false,
                            step3: true,
                          }))
                        }
                        onCancel={() =>
                          setData((old) => ({ ...old, step2: false }))
                        }
                      >
                        Chaining swal2 modals is easy
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setData((old) => ({
                              ...old,
                              step2_txt: e.target.value,
                            }))
                          }
                        />
                      </SweetAlert>
                    ) : null}

                    {data.step3 ? (
                      <SweetAlert
                        showCancel
                        title="Question 3"
                        cancelBtnBsStyle="danger"
                        confirmBtnText="Next"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            step3: false,
                            final_step: true,
                          }))
                        }
                        onCancel={() =>
                          setData((old) => ({ ...old, step3: false }))
                        }
                      >
                        Chaining swal2 modals is easy
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setData((old) => ({
                              ...old,
                              step3_txt: e.target.value,
                            }))
                          }
                        />
                      </SweetAlert>
                    ) : null}

                    {data.final_step ? (
                      <SweetAlert
                        title="All done!"
                        confirmBtnText="Lovely!"
                        onConfirm={() =>
                          setData((old) => ({ ...old, final_step: false }))
                        }
                      >
                        Your answers : [{data.step1_txt}, {data.step2_txt},{' '}
                        {data.step3_txt}]
                      </SweetAlert>
                    ) : null}
                  </Col>

                  <Col xl="3" lg="4" sm="6" className="m-b-30">
                    <p>Dynamic queue example</p>
                    <Button
                      color="primary"
                      onClick={() =>
                        setData((old) => ({ ...old, step_queue: true }))
                      }
                      id="dynamic-alert"
                    >
                      Click me
                    </Button>
                    {data.step_queue ? (
                      <SweetAlert
                        title="Your public IP"
                        confirmBtnText="Show my public IP"
                        onConfirm={() =>
                          setData((old) => ({
                            ...old,
                            step_queue: false,
                            final_queue: true,
                          }))
                        }
                      >
                        Your public IP will be received via AJAX request
                      </SweetAlert>
                    ) : null}

                    {data.final_queue ? (
                      <SweetAlert
                        confirmBtnText="OK"
                        title=""
                        onConfirm={() =>
                          setData((old) => ({ ...old, final_queue: false }))
                        }
                      >
                        {data.current_ip}
                      </SweetAlert>
                    ) : null}
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

export default withRouter(SweetAlertPage);
