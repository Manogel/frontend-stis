import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

function Modals() {
  const [modal_standard, setModalStandard] = useState(false);
  const [modal_large, setModalLarge] = useState(false);
  const [modal_small, setModalSmall] = useState(false);
  const [modal_center, setModalCenter] = useState(false);

  useEffect(() => {
    document.body.classList.add('no_padding');
  }, [modal_standard, modal_large, modal_small, modal_center]);

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Modals</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Modals</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Modals Examples</h4>
                <p className="text-muted m-b-30 font-14">
                  Modals are streamlined, but flexible dialog prompts powered by
                  JavaScript. They support a number of use cases from user
                  notification to completely custom content and feature a
                  handful of helpful subcomponents, sizes, and more.
                </p>

                <div
                  className="modal bs-example-modal"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title mt-0">Modal title</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ModalBody>
                        <p>One fine body&hellip;</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button type="button" color="primary">
                          Save changes
                        </Button>
                        <Button type="button" color="secondary">
                          Close
                        </Button>
                      </ModalFooter>
                    </div>
                  </div>
                </div>

                <Row>
                  <Col sm="6" md="3" className="m-t-30">
                    <div className=" text-center">
                      <p className="text-muted">Standard Modal</p>
                      <Button
                        type="button"
                        color="primary"
                        className="waves-effect waves-light"
                        onClick={() => setModalStandard(!modal_standard)}
                      >
                        Standard Modal
                      </Button>
                    </div>
                    <Modal
                      isOpen={modal_standard}
                      toggle={() => setModalStandard(!modal_standard)}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myModalLabel">
                          Modal Heading
                        </h5>
                        <button
                          type="button"
                          onClick={() => setModalStandard(false)}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ModalBody>
                        <h5>Overflowing text to show scroll behavior</h5>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          type="button"
                          color="secondary"
                          onClick={() => setModalStandard(!modal_standard)}
                          className="waves-effect"
                        >
                          Close
                        </Button>
                        <Button
                          type="button"
                          color="primary"
                          className="waves-effect waves-light"
                        >
                          Save changes
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Col>

                  <Col sm="6" md="3" className="m-t-30">
                    <div className="text-center">
                      <p className="text-muted">Large modal</p>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setModalLarge(!modal_large)}
                        className="waves-effect waves-light"
                      >
                        Large modal
                      </Button>
                    </div>
                    <Modal
                      className="modal-lg"
                      isOpen={modal_large}
                      toggle={() => setModalLarge(!modal_large)}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myLargeModalLabel">
                          Large Modal
                        </h5>
                        <button
                          onClick={() => setModalLarge(false)}
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ModalBody>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </ModalBody>
                    </Modal>
                  </Col>

                  <Col sm="6" md="3" className="m-t-30">
                    <div className="text-center">
                      <p className="text-muted">Small modal</p>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setModalSmall(!modal_small)}
                        className="waves-effect waves-light"
                      >
                        Small modal
                      </Button>
                    </div>

                    <Modal
                      className="modal-sm"
                      isOpen={modal_small}
                      toggle={() => setModalSmall(!modal_small)}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title mt-0" id="mySmallModalLabel">
                          Small Modal
                        </h5>
                        <button
                          onClick={() => setModalSmall(false)}
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ModalBody>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </ModalBody>
                    </Modal>
                  </Col>

                  <Col sm="6" md="3" className="m-t-30">
                    <div className="text-center">
                      <p className="text-muted">Center modal</p>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setModalCenter(!modal_center)}
                        className="waves-effect waves-light"
                      >
                        Center modal
                      </Button>
                    </div>

                    <Modal
                      isOpen={modal_center}
                      toggle={() => setModalCenter(!modal_center)}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title mt-0">Center Modal</h5>
                        <button
                          type="button"
                          onClick={() => setModalCenter(false)}
                          className="close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ModalBody>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </ModalBody>
                    </Modal>
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

export default withRouter(Modals);
