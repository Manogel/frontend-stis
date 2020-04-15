import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';

import api from '~/services/api';
import history from '~/services/history';

export default function DetailTopic() {
  const { id } = useParams();

  const [description_br, setDescriptionBr] = useState('');
  const [loading, setLoading] = useState(!!id);
  const [description_en, setDescriptionEn] = useState('');
  const [previousData, setPreviousData] = useState({});
  const [files, setFiles] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (id) {
      api.get(`topics/${id}`).then((response) => {
        const { files: f, ...rest } = response.data;
        setFiles((old) => [...f, ...old]);
        setPreviousData(rest);
        setDescriptionBr(rest.description_br);
        setDescriptionEn(rest.description_en);
        setLoading(false);
      });
    }
  }, [id]);

  async function handleSubmit(e, values) {
    const { title_br, title_en, introduction_br, introduction_en } = values;

    try {
      const response = await api.postOrPut('/topics', id, {
        title_br,
        title_en,
        introduction_br,
        introduction_en,
        description_br,
        description_en,
      });

      alert('Sucesso ao cadastrar', 'Sua postagem foi salva');
      const { id: idTopic } = response.data;

      history.replace(`/topics/${idTopic}`);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmitFile(e, values) {
    const {
      index,
      id: idFile,
      url,
      description_br: dscrFileBr,
      description_en: dscrFileEn,
    } = values;

    const idx = index || 0;
    try {
      const { data } = await api.postOrPut('/files', idFile, {
        url,
        description_br: dscrFileBr,
        description_en: dscrFileEn,
        topic_id: id,
      });

      setFiles(files.map((f, i) => (i === idx ? data : f)));

      alert('Sucesso ao cadastrar!', 'Imagem anexada com sucesso!');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFile(idFile, idx) {
    if (idFile && window.confirm('Deseja mesmo excluir esta postagem?')) {
      try {
        await api.delete(`/files/${idFile}`);

        setFiles(files.filter((f) => f.id !== idFile));
      } catch (err) {
        console.log(err);
      }
    } else {
      setFiles(files.filter((f, i) => i !== idx));
    }
  }

  return (
    <Container fluid>
      <div className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">
              {id ? 'Editar postagem' : 'Nova postagem'}
            </h4>
          </Col>
        </Row>
      </div>

      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              {!loading && (
                <AvForm
                  className="outer-repeater"
                  onValidSubmit={handleSubmit}
                  model={previousData}
                >
                  <div data-repeater-list="outer-group" className="outer">
                    <div data-repeater-item className="outer">
                      <div className="form-group">
                        <AvField
                          label="Título (PT):"
                          type="text"
                          name="title_br"
                          placeholder="Título em português"
                          required
                          validate={{
                            required: {
                              value: true,
                              errorMessage: 'Campo obrigatório',
                            },
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <Label for="title_en">Título (EN):</Label>
                        <AvField
                          name="title_en"
                          type="text"
                          placeholder="Título em inglês"
                        />
                      </div>

                      <FormGroup>
                        <Label for="introduction_br">Introdução (PT):</Label>
                        <AvField
                          type="textarea"
                          name="introduction_br"
                          className="form-control"
                          rows="3"
                          placeholder="Introdução ao conteúdo em protuguês"
                          required
                          validate={{
                            required: {
                              value: true,
                              errorMessage: 'Campo obrigatório',
                            },
                          }}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="introduction_en">Introdução (EN):</Label>
                        <AvField
                          type="textarea"
                          name="introduction_en"
                          className="form-control"
                          rows="3"
                          placeholder="Introdução ao conteúdo em inglês"
                        />
                      </FormGroup>
                      <FormGroup>
                        <ReactQuill
                          value={description_br}
                          onChange={setDescriptionBr}
                        />
                      </FormGroup>
                      <FormGroup>
                        <ReactQuill
                          value={description_en}
                          onChange={setDescriptionEn}
                        />
                      </FormGroup>

                      <Button type="submit" color="primary">
                        {id ? 'Atualizar postagem' : 'Publicar postagem'}
                      </Button>
                    </div>
                  </div>
                </AvForm>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title m-b-20">Imagens</h4>
              {!id && (
                <span className="activity-text d-block m-t-10 text-warning ">
                  Você so pode anexar imagens após a publicação da postagem
                </span>
              )}
              {id && (
                <>
                  <table style={{ width: '100%' }}>
                    <tbody>
                      {files.map((item, idx) => (
                        <tr key={idx}>
                          <td>
                            <AvForm
                              className="repeater"
                              onValidSubmit={handleSubmitFile}
                              model={item}
                            >
                              <div data-repeater-list="group-a">
                                <Row data-repeater-item>
                                  <Col lg="2" className="form-group">
                                    <AvField
                                      name="id"
                                      value={item?.id}
                                      className="d-none"
                                    />
                                    <AvField
                                      name="index"
                                      type="number"
                                      value={idx}
                                      className="d-none"
                                    />
                                    <AvField
                                      label="URL da imagem"
                                      name="url"
                                      type="text"
                                      placeholder="URL da imagem"
                                      required
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: 'Campo obrigatório',
                                        },
                                      }}
                                    />
                                  </Col>
                                  <Col lg="4" className="form-group">
                                    <AvField
                                      label="Descrição (PT)"
                                      name="description_br"
                                      type="textarea"
                                      placeholder="Descrição em português"
                                      required
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: 'Campo obrigatório',
                                        },
                                      }}
                                    />
                                  </Col>
                                  <Col lg="4" className="form-group">
                                    <AvField
                                      label="Descrição (EN)"
                                      name="description_en"
                                      type="textarea"
                                      placeholder="Descrição em inglês"
                                    />
                                  </Col>
                                  <Col
                                    lg="2"
                                    className="form-group align-self-center"
                                  >
                                    <Button
                                      onClick={() =>
                                        handleDeleteFile(item.id, idx)
                                      }
                                      color="danger"
                                      className="mt-3"
                                      style={{ width: '100%' }}
                                    >
                                      Excluir
                                    </Button>

                                    <Button
                                      className="mt-3"
                                      type="submit"
                                      color="primary"
                                      style={{ width: '100%' }}
                                    >
                                      {item?.id ? 'Atualizar' : 'Adicionar'}
                                    </Button>
                                  </Col>
                                </Row>
                              </div>
                            </AvForm>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Button
                    onClick={() =>
                      setFiles([
                        ...files,
                        { description_br: '', description_en: '', url: '' },
                      ])
                    }
                    color="success"
                  >
                    Adicionar nova imagem
                  </Button>
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
