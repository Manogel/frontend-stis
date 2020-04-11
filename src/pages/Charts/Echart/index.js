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

import BubbleChart from '~/components/Charts/Echart/bubblechart';
import CandlestickChart from '~/components/Charts/Echart/candlestickchart';
import DoughnutChart from '~/components/Charts/Echart/doughnutchart';
import GaugeChart from '~/components/Charts/Echart/gaugechart';
import LineBarChart from '~/components/Charts/Echart/linebarchart';
import LineChart from '~/components/Charts/Echart/linechart';
import PieChart from '~/components/Charts/Echart/piechart';
import ScatterChart from '~/components/Charts/Echart/scatterchart';

function Echart() {
  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">E - Chart</h4>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="#">Veltrix</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Charts</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>E - Chart</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Line Chart</h4>
              <LineChart />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Mix Line-Bar</h4>
              <LineBarChart />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Doughnut Chart</h4>
              <DoughnutChart />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
              <PieChart />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Scatter Chart</h4>
              <ScatterChart />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Bubble Chart</h4>
              <BubbleChart />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Candlestick Chart</h4>
              <CandlestickChart />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title mb-4">Gauge Chart</h4>
              <GaugeChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Echart);
