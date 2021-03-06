import React, { useState } from 'react';
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import smimg3 from '~/assets/images/small/img-3.jpg';
import smimg4 from '~/assets/images/small/img-4.jpg';
import user1 from '~/assets/images/users/user-1.jpg';
import user2 from '~/assets/images/users/user-2.jpg';
import user3 from '~/assets/images/users/user-3.jpg';
import user4 from '~/assets/images/users/user-4.jpg';
import user6 from '~/assets/images/users/user-6.jpg';

function Read() {
  const [folder_menu, setFolderMenu] = useState(false);
  const [tag_menu, setTagMenu] = useState(false);
  const [more_menu, setMoreMenu] = useState(false);

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Email Read</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Email</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Email Read</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card className="email-leftbar">
              <Link
                to="email-compose"
                className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light"
              >
                Compose
              </Link>

              <div className="mail-list m-t-20">
                <Link to="#" className="active">
                  Inbox <span className="ml-1">(18)</span>
                </Link>
                <Link to="#">Starred</Link>
                <Link to="#">Important</Link>
                <Link to="#">Draft</Link>
                <Link to="#">Sent Mail</Link>
                <Link to="#">Trash</Link>
              </div>
              <h6 className="m-t-30">Labels</h6>
              <div className="mail-list m-t-20">
                <Link to="#">
                  <span className="mdi mdi-arrow-right-drop-circle text-info float-right" />
                  Theme Support
                </Link>
                <Link to="#">
                  <span className="mdi mdi-arrow-right-drop-circle text-warning float-right" />
                  Freelance
                </Link>
                <Link to="#">
                  <span className="mdi mdi-arrow-right-drop-circle text-primary float-right" />
                  Social
                </Link>
                <Link to="#">
                  <span className="mdi mdi-arrow-right-drop-circle text-danger float-right" />
                  Friends
                </Link>
                <Link to="#">
                  <span className="mdi mdi-arrow-right-drop-circle text-success float-right" />
                  Family
                </Link>
              </div>
              <h6 className="m-t-30">Chat</h6>
              <div className="m-t-20">
                <Link to="#" className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src={user2}
                    alt="veltrix"
                    height="36"
                  />
                  <div className="media-body chat-user-box">
                    <p className="user-title m-0">Scott Median</p>
                    <p className="text-muted">Hello</p>
                  </div>
                </Link>
                <Link to="#" className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src={user3}
                    alt="veltrix"
                    height="36"
                  />
                  <div className="media-body chat-user-box">
                    <p className="user-title m-0">Julian Rosa</p>
                    <p className="text-muted">What about our next..</p>
                  </div>
                </Link>
                <Link to="#" className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src={user4}
                    alt="veltrix"
                    height="36"
                  />
                  <div className="media-body chat-user-box">
                    <p className="user-title m-0">David Medina</p>
                    <p className="text-muted">Yeah everything is fine</p>
                  </div>
                </Link>
                <Link to="#" className="media">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src={user6}
                    alt="veltrix"
                    height="36"
                  />
                  <div className="media-body chat-user-box">
                    <p className="user-title m-0">Jay Baker</p>
                    <p className="text-muted">Wow that's great</p>
                  </div>
                </Link>
              </div>
            </Card>

            <div className="email-rightbar mb-3">
              <Card>
                <div className="btn-toolbar p-3" role="toolbar">
                  <div className="btn-group mo-mb-2">
                    <Button
                      type="button"
                      color="primary"
                      className="waves-light waves-effect"
                    >
                      <i className="fa fa-inbox" />
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      className="waves-light waves-effect"
                    >
                      <i className="fa fa-exclamation-circle" />
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      className="waves-light waves-effect"
                    >
                      <i className="far fa-trash-alt" />
                    </Button>
                  </div>
                  <div className="btn-group ml-1 mo-mb-2">
                    <Dropdown
                      isOpen={folder_menu}
                      toggle={() => setFolderMenu(!folder_menu)}
                    >
                      <DropdownToggle
                        color="primary"
                        className="waves-light waves-effect"
                        caret
                      >
                        <i className="fa fa-folder" />
                        {'  '}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="#">
                          Updates
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Social
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Team Manage
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="btn-group ml-1 mo-mb-2">
                    <Dropdown
                      isOpen={tag_menu}
                      toggle={() => setTagMenu(!tag_menu)}
                    >
                      <DropdownToggle
                        color="primary"
                        className="waves-light waves-effect"
                        caret
                      >
                        <i className="fa fa-tag" />
                        {'  '}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="#">
                          Updates
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Social
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Team Manage
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="btn-group ml-1 mo-mb-2">
                    <Dropdown
                      isOpen={more_menu}
                      toggle={() => setMoreMenu(!more_menu)}
                    >
                      <DropdownToggle
                        color="primary"
                        className="waves-light waves-effect"
                        caret
                      >
                        More{'  '}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="#">
                          Mark as Unread
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Mark as Important
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Add to Tasks
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Add Star
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                          Mute
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <CardBody>
                  <div className="media m-b-30">
                    <img
                      className="d-flex mr-3 rounded-circle thumb-md"
                      src={user1}
                      alt="veltrix"
                    />
                    <div className="media-body">
                      <h4 className="font-14 m-0">Humberto D. Champion</h4>
                      <small className="text-muted">support@domain.com</small>
                    </div>
                  </div>
                  <h4 className="mt-0 font-16">This Week's Top Stories</h4>
                  <p>Dear Lorem Ipsum,</p>
                  <p>
                    Praesent dui ex, dapibus eget mauris ut, finibus vestibulum
                    enim. Quisque arcu leo, facilisis in fringilla id, luctus in
                    tortor. Nunc vestibulum est quis orci varius viverra.
                    Curabitur dictum volutpat massa vulputate molestie. In at
                    felis ac velit maximus convallis.
                  </p>
                  <p>
                    Sed elementum turpis eu lorem interdum, sed porttitor eros
                    commodo. Nam eu venenatis tortor, id lacinia diam. Sed
                    aliquam in dui et porta. Sed bibendum orci non tincidunt
                    ultrices. Vivamus fringilla, mi lacinia dapibus condimentum,
                    ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet
                    lorem.
                  </p>
                  <p>Sincerly,</p>
                  <hr />
                  <Row>
                    <Col xl="2" md="6">
                      <Card>
                        <img
                          className="card-img-top img-fluid"
                          src={smimg3}
                          alt="veltrix"
                        />
                        <div className="p-t-10 p-b-10 text-center">
                          <Link className="font-500">Download</Link>
                        </div>
                      </Card>
                    </Col>
                    <Col xl="2" md="6">
                      <Card>
                        <img
                          className="card-img-top img-fluid"
                          src={smimg4}
                          alt="veltrix"
                        />
                        <div className="p-t-10 p-b-10 text-center">
                          <Link className="font-500">Download</Link>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Link
                    to="/email-compose"
                    className="btn btn-secondary waves-effect m-t-30"
                  >
                    <i className="mdi mdi-reply" /> Reply
                  </Link>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Read);
