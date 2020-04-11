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

import KnobChart from '~/components/Charts/Knob/knob';

function Knob() {
  const [value, setValue] = useState(50);
  const [value_cur, setValueCur] = useState(50);
  const [value_prev, setValuePrev] = useState(50);
  const [angle, setAngle] = useState(50);
  const [steps, setSteps] = useState(50);
  const [angleArc, setAngleArc] = useState(50);
  const [ang_offset_arc, setAngOffsetArc] = useState(50);
  const [readonly, setReadonly] = useState(50);

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">Knob Chart</h4>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="#">Veltrix</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Charts</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Knob Chart</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>

      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Examples</h4>
              <p className="text-muted m-b-30">
                Nice, downward compatible, touchable, jQuery dial
              </p>

              <Row className="text-center mb-5">
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20">Disable display input</h5>
                  <KnobChart
                    value={value}
                    height={150}
                    width={150}
                    fgColor="#3c4ccf"
                    displayCustom="false"
                    onChange={setValue}
                  />
                </Col>
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20">Cursor mode</h5>
                  <KnobChart
                    value={value_cur}
                    height={150}
                    width={150}
                    fgColor="#02a499"
                    cursor
                    displayCustom="false"
                    onChange={setValueCur}
                  />
                </Col>
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20">Display previous value</h5>
                  <KnobChart
                    value={value_prev}
                    height={150}
                    width={150}
                    fgColor="#ffbb44"
                    onChange={setValuePrev}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="4" className="text-center mb-5">
                  <h5 className="font-16 m-b-20">Angle offset</h5>
                  <KnobChart
                    value={angle}
                    fgColor="#ec4561"
                    lineCap="round"
                    height={150}
                    width={150}
                    onChange={setAngle}
                  />
                </Col>
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20"> 5-digit values, step 1000</h5>
                  <KnobChart
                    value={steps}
                    fgColor="#2a3142"
                    step="10"
                    height={150}
                    width={150}
                    onChange={setSteps}
                  />
                </Col>
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20">Angle offset and arc</h5>
                  <KnobChart
                    value={angleArc}
                    fgColor="#f06292"
                    angleArc="360"
                    angleOffset="5"
                    cursor
                    height={150}
                    width={150}
                    onChange={setAngleArc}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="4" className="text-center mb-5">
                  <h5 className="font-16 m-b-20">Readonly</h5>
                  <KnobChart
                    value={readonly}
                    fgColor="#38a4f8"
                    thickness="0.12"
                    readOnly
                    height={150}
                    width={150}
                  />
                </Col>
                <Col lg="4" className="text-center">
                  <h5 className="font-16 m-b-20"> Angle offset and arc</h5>
                  <KnobChart
                    value={ang_offset_arc}
                    fgColor="#8d6e63"
                    thickness="0.18"
                    angleArc="300"
                    angleOffset="5"
                    cursor
                    height={150}
                    width={150}
                    onChange={setAngOffsetArc}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Knob);
