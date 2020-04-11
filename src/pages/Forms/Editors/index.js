import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import ReactQuill from 'react-quill';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

function Editors() {
  const [text, setText] = useState('Hello World');

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Form Editors</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Forms</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Form Editors</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">react-draft-wysiwyg</h4>
                <p className="text-muted m-b-30">
                  A Wysiwyg editor built using ReactJS and DraftJS
                  libraries.Configurable toolbar with option to add/remove
                  controls.Option to add custom controls to the toolbar.Option
                  to change styles and icons in the toolbar.Option to show
                  toolbar only when editor is focused. etc
                </p>

                <Form method="post">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Quilljs Editors</h4>
                <p className="text-muted m-b-30">
                  You can pass a Quill Delta, instead of an HTML string, as the
                  value and defaultValue properties. Deltas have a number of
                  advantages over HTML strings, so you might want use them
                  instead. Be aware, however, that comparing Deltas for changes
                  is more expensive than comparing HTML strings, so it might be
                  worth to profile your usage patterns.
                </p>
                <ReactQuill value={text} onChange={setText} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Editors);
