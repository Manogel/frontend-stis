import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  BreadcrumbItem,
  Table,
} from 'reactstrap';

import api from '~/services/api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const renderListItems = useMemo(
    () =>
      users?.map((reference) => (
        <tr key={reference.id}>
          <th> {reference.name}</th>
          <td>{reference.age}</td>
          <td>{reference.genre}</td>
        </tr>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users]
  );

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="12">
            <h4 className="page-title">Seus usuários</h4>
            <BreadcrumbItem active>
              Aqui você pode visualizar os usuários cadastrados no aplicativo
            </BreadcrumbItem>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="table-rep-plugin">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th data-priority="1">Idade</th>
                      <th data-priority="3">Sexo</th>
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
