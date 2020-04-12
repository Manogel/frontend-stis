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
  Modal,
  ModalBody,
  FormGroup,
} from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import api from '~/services/api';

export default function Topics() {
  const [modal, setModal] = useState(false);
  const [references, setReferences] = useState([]);
  const [editable, setEditable] = useState();

  useEffect(() => {
    api.get('/references').then((response) => {
      setReferences(response.data);
    });
  }, []);

  async function handleDeleteItem(item) {
    if (window.confirm('Deseja mesmo excluir este item?')) {
      const { id } = item;

      await api.delete(`/references/${id}`);

      setReferences(references.filter(({ id: idRef }) => idRef !== id));
    }
  }
  async function handleSubmit(event, values) {
    setEditable(null);
    const { title, description } = values;

    if (editable?.id) {
      const { data } = await api.put(`/references/${editable.id}`, {
        title,
        description,
      });

      setReferences(references.map((ref) => (ref.id === data.id ? data : ref)));
    } else {
      const { data } = await api.post('/references', { title, description });
      setReferences([...references, data]);
    }

    setModal(false);
  }

  function openModal(item) {
    setEditable(item);
    setModal(true);
  }

  const renderListItems = useMemo(
    () =>
      references?.map((reference) => (
        <tr key={reference.id}>
          <th> {reference.title}</th>
          <td>{reference.description}</td>
          <td>
            <Button
              type="button"
              color="primary"
              className="waves-effect waves-light m-r-10"
              onClick={() => openModal(reference)}
            >
              <i className="far fa-edit" />
            </Button>

            <Button
              type="button"
              color="danger"
              className="waves-effect waves-light"
              onClick={() => handleDeleteItem(reference)}
            >
              <i className="far fa-trash-alt" />
            </Button>
          </td>
        </tr>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [references]
  );

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="12">
            <h4 className="page-title">Suas referências</h4>
            <BreadcrumbItem active>
              Aqui você pode adicionar uma nova referência, remover ou editar as
              referencias cadastradas
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
                onClick={() => openModal({})}
              >
                <i className="fas fa-plus m-r-10" />
                Adicionar nova referência
              </Button>

              <div className="table-rep-plugin">
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th data-priority="1">Descrição</th>
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

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            Nova Referência
          </h5>
          <button
            type="button"
            onClick={() => setModal(false)}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <ModalBody>
          <AvForm onValidSubmit={handleSubmit} model={editable}>
            <AvField
              name="title"
              label="Titulo"
              placeholder="Titulo"
              type="text"
              errorMessage="Titulo é obrigatótio!"
              validate={{ required: { value: true } }}
            />
            <AvField
              name="description"
              label="Descrição"
              placeholder="Descrição"
              type="text"
              errorMessage="Descrição é obrigatótio!"
              validate={{ required: { value: true } }}
            />

            <FormGroup className="mb-0">
              <div className="d-flex justify-content-end">
                <Button type="submit" color="primary" className="mr-1">
                  Salvar
                </Button>{' '}
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </Button>
              </div>
            </FormGroup>
          </AvForm>
        </ModalBody>
      </Modal>
    </Container>
  );
}
