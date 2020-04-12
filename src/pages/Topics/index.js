import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  BreadcrumbItem,
  Table,
} from 'reactstrap';

import api from '~/services/api';

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.get('/topics').then((response) => {
      setTopics(response.data);
    });
  }, []);

  const renderListItems = useMemo(
    () =>
      topics?.map((reference) => (
        <tr key={reference.id}>
          <th> {reference.title_br}</th>
          <td>{reference.description_br}</td>
          <td>
            <Button
              type="button"
              color="primary"
              className="waves-effect waves-light"
              onClick={() => {}}
            >
              <i className="far fa-edit" />
            </Button>
          </td>
        </tr>
      )),
    [topics]
  );

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="12">
            <h4 className="page-title">Suas publicações</h4>
            <BreadcrumbItem active>
              Aqui você pode adicionar uma nova publicação ou editar as
              publicações cadastradas
            </BreadcrumbItem>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Button
                type="button"
                color="primary"
                className="waves-effect waves-light m-b-20 "
                onClick={() => {}}
              >
                <i className="fas fa-plus m-r-10" />
                Adicionar nova publicação
              </Button>

              <div className="table-rep-plugin">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th data-priority="1">Introducão</th>
                      <th data-priority="3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>{renderListItems}</tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
