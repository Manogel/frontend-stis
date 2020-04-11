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

import BarChart from '~/components/Charts/Chartjs/barchart';
import DountChart from '~/components/Charts/Chartjs/dountchart';
import LineChart from '~/components/Charts/Chartjs/linechart';
import PieChart from '~/components/Charts/Chartjs/piechart';
import PolarChart from '~/components/Charts/Chartjs/polarchart';
import RadarChart from '~/components/Charts/Chartjs/radarchart';

function Chartjs() {
  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">Chartjs</h4>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="#">Veltrix</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Charts</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Chartjs</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Line Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">86541</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">2541</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">102030</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <LineChart />
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Bar Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">2541</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">84845</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">12001</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <BarChart />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Pie Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">2536</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">69421</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">89854</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <PieChart />
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Donut Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">9595</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">36524</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">62541</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <DountChart />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Polar Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">4852</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">3652</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">85412</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <PolarChart />
            </CardBody>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Radar Chart</h4>

              <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                <li className="list-inline-item">
                  <h5 className="mb-0">694</h5>
                  <p className="text-muted">Activated</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">55210</h5>
                  <p className="text-muted">Pending</p>
                </li>
                <li className="list-inline-item">
                  <h5 className="mb-0">489498</h5>
                  <p className="text-muted">Deactivated</p>
                </li>
              </ul>

              <RadarChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Chartjs);
