import React, { useState } from 'react';
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

import WizardFormFirstPageRoot from './First';
import WizardFormFourPageRoot from './Four';
import WizardFormSecondPageRoot from './Second';
import WizardFormThirdPageRoot from './Third';

function Wizard() {
  const [pageRoot, setPageRoot] = useState(1);

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Form Wizard</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Forms</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Form Wizard</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row className="form-wizard">
          <Col sm="12">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Form Wizard</h4>
                <p className="text-muted m-b-30 font-14">
                  A powerful React wizard plugin that supports accessibility
                </p>

                {pageRoot === 1 && (
                  <WizardFormFirstPageRoot
                    onSubmit={() => setPageRoot(pageRoot + 1)}
                  />
                )}
                {pageRoot === 2 && (
                  <WizardFormSecondPageRoot
                    previousPage={() => setPageRoot(pageRoot - 1)}
                    onSubmit={() => setPageRoot(pageRoot + 1)}
                  />
                )}
                {pageRoot === 3 && (
                  <WizardFormThirdPageRoot
                    previousPage={() => setPageRoot(pageRoot - 1)}
                    onSubmit={() => setPageRoot(pageRoot + 1)}
                  />
                )}
                {pageRoot === 4 && (
                  <WizardFormFourPageRoot
                    previousPage={() => setPageRoot(pageRoot - 1)}
                    onSubmit={(v) => console.log(v)}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Wizard);
