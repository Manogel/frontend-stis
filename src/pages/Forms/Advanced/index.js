import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import '@vtaits/react-color-picker/dist/index.css';
import DatePicker from 'react-datepicker';
import { Link, withRouter } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Switch from 'react-switch';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import ColorPicker from '@vtaits/react-color-picker';

const optionGroup = [
  {
    label: 'Picnic',
    options: [
      { label: 'Mustard', value: 'Mustard' },
      { label: 'Ketchup', value: 'Ketchup' },
      { label: 'Relish', value: 'Relish' },
    ],
  },
  {
    label: 'Camping',
    options: [
      { label: 'Tent', value: 'Tent' },
      { label: 'Flashlight', value: 'Flashlight' },
      { label: 'Toilet Paper', value: 'Toilet Paper' },
    ],
  },
];

function Advanced() {
  const [simple_color, setSimpleColor] = useState('red');
  const [simple_color2, setSimpleColor2] = useState('red');
  const [simple_color3, setSimpleColor3] = useState('red');
  const [colorHor, setColorHor] = useState('red');
  const [color, setColor] = useState('red');
  const [colorRgb, setColorRgb] = useState('red');
  const [colorCust, setColorCust] = useState('red');
  const [default_date, setDefaultDate] = useState(new Date());
  const [isdefault, setDefault] = useState(new Date());
  const [start_date, setStartDate] = useState(new Date());
  const [monthDate, setMonthDate] = useState(new Date());
  const [yearDate, setYearDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [disbadge, setDisbadge] = useState(true);
  const [disthresh, setDisthresh] = useState(false);
  const [placementbadge, setPlacementbadge] = useState(true);
  const [textcount, setTextcount] = useState(0);
  const [optioncount, setOptioncount] = useState(0);
  const [placementcount, setPlacementcount] = useState(0);
  const [advanceclass, setAdvanceclass] = useState('badgecount');
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);
  const [switch4, setSwitch4] = useState(true);
  const [switch5, setSwitch5] = useState(true);
  const [switch6, setSwitch6] = useState(true);
  const [switch7, setSwitch7] = useState(true);
  const [switch8, setSwitch8] = useState(true);
  const [switch9, setSwitch9] = useState(true);
  const [switch10, setSwitch10] = useState(true);
  const [switch11, setSwitch11] = useState(true);
  const [switch12, setSwitch12] = useState(true);
  const [switch13, setSwitch13] = useState(true);
  const [switch14, setSwitch14] = useState(true);
  const [switch15, setSwitch15] = useState(true);
  const [data_attr, setDataAttr] = useState(56);
  const [postfix, setPostfix] = useState(20);
  const [prefix, setPrefix] = useState(25);
  const [empty_val, setEmptyVal] = useState(0);
  const [not_attr, setNotAttr] = useState(15);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedMulti, setSelectedMulti] = useState(null);
  const [explicit_val, setExplictVal] = useState(33);
  const [threshholdcount, setThreshholdcount] = useState(0);
  const [optionCount, setOptionCount] = useState(0);
  const [disDefault, setDisDefault] = useState(true);
  const [threshholdcountdefault, setThreshholdDefault] = useState(0);
  const [textareabadge, setTextareabadge] = useState(false);

  function threshholdchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setDisthresh(true);
    } else {
      setDisthresh(false);
    }
    setThreshholdcount(count);
  }

  function threshholdDefault(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setDisDefault(true);
    } else {
      setDisDefault(false);
    }
    setThreshholdDefault(count);
  }

  function optionchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setDisbadge(true);
    } else {
      setDisbadge(false);
    }
    if (count > 24) {
      setAdvanceclass('badgecountextra');
    } else {
      setAdvanceclass('badgecount');
    }
    setOptionCount(count);
  }

  function placementchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setPlacementbadge(true);
    } else {
      setPlacementbadge(false);
    }
    setPlacementcount(count);
  }

  function textareachange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setTextareabadge(true);
    } else {
      setTextareabadge(false);
    }
    setTextcount(count);
  }

  const Offsymbol = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          fontSize: 12,
          color: '#fff',
          paddingRight: 2,
        }}
      >
        {' '}
        No
      </div>
    );
  };

  const OnSymbol = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          fontSize: 12,
          color: '#fff',
          paddingRight: 2,
        }}
      >
        {' '}
        Yes
      </div>
    );
  };

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Form Advanced</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">Forms</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Form Advanced</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Colorpicker</h4>
                <p className="text-muted m-b-30">
                  Fancy and customizable colorpicker plugin for Twitter
                  Bootstrap.
                </p>

                <Form action="#">
                  <FormGroup>
                    <Label>Simple input field</Label>
                    <Input
                      type="text"
                      className="colorpicker-default"
                      value={color}
                      onClick={() => setSimpleColor(!simple_color)}
                    />
                    {simple_color && (
                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={color}
                        onDrag={setColor}
                      />
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Horizontal mode</Label>
                    <Input
                      type="text"
                      onClick={() => setSimpleColor2(!simple_color2)}
                      value={colorHor}
                    />
                    {simple_color2 && (
                      <SketchPicker
                        color="#fff"
                        value={simple_color2}
                        width="160px"
                        onChangeComplete={setColorHor}
                      />
                    )}
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <Label>Customized widget size</Label>
                    <Input
                      type="text"
                      className="colorpicker-large"
                      value={colorCust}
                      onClick={() => setSimpleColor3(!simple_color3)}
                    />
                    {simple_color3 && (
                      <>
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={colorCust}
                          onDrag={setColorCust}
                        />
                        <div
                          style={{
                            backgroundColor: colorCust,
                            width: '140px',
                            padding: '5px',
                          }}
                        />
                      </>
                    )}
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Bootstrap MaxLength</h4>
                <p className="text-muted m-b-30">
                  This plugin integrates by default with Twitter bootstrap using
                  badges to display the maximum lenght of the field where the
                  user is inserting text.{' '}
                </p>

                <Label>Default usage</Label>
                <p className="text-muted m-b-15">
                  The badge will show up by default when the remaining chars are
                  10 or less:
                </p>
                <Input
                  type="text"
                  maxLength="25"
                  name="defaultconfig"
                  id="defaultconfig"
                />
                {disDefault && (
                  <span className="badgecount">{threshholdDefault} / 25 </span>
                )}

                <div className="m-t-20">
                  <Label>Threshold value</Label>
                  <p className="text-muted m-b-15">
                    Do you want the badge to show up when there are 20 chars or
                    less? Use the <code>threshold</code> option:
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={threshholdchange}
                    name="thresholdconfig"
                    id="thresholdconfig"
                  />
                  {disthresh && (
                    <span className="badgecount">{threshholdcount} / 25 </span>
                  )}
                </div>

                <div className="m-t-20">
                  <Label>All the options</Label>
                  <p className="text-muted m-b-15">
                    Please note: if the <code>alwaysShow</code> option is
                    enabled, the <code>threshold</code> option is ignored.
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={optionchange}
                    name="alloptions"
                    id="alloptions"
                  />
                  {disbadge && (
                    <span className="badgecount">
                      You Types {optioncount} out of 25 chars available
                    </span>
                  )}
                </div>

                <div className="m-t-20">
                  <Label>Position</Label>
                  <p className="text-muted m-b-15">
                    All you need to do is specify the <code>placement</code>{' '}
                    option, with one of those strings. If none is specified, the
                    positioning will be defauted to 'bottom'.
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={placementchange}
                    name="placement"
                    id="placement"
                  />
                  {placementbadge && (
                    <span style={{ float: 'right' }} className="badgecount">
                      {placementcount} / 25{' '}
                    </span>
                  )}
                </div>

                <div className="m-t-20">
                  <Label>textareas</Label>
                  <p className="text-muted m-b-15">
                    Bootstrap maxlength supports textarea as well as inputs.
                    Even on old IE.
                  </p>
                  <Input
                    type="textarea"
                    id="textarea"
                    onChange={textareachange}
                    maxLength="225"
                    rows="3"
                    placeholder="This textarea has a limit of 225 chars."
                  />
                  {textareabadge && (
                    <span className="badgecount"> {textcount} / 225 </span>
                  )}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">React Switch</h4>
                <p className="text-muted m-b-30">
                  Here are a few types of switches.{' '}
                </p>

                <div>
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#626ed4"
                    onChange={() => setSwitch1(!switch1)}
                    checked={switch1}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#a2a2a2"
                    onChange={() => setSwitch4(!switch4)}
                    checked={switch2}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#02a499"
                    onChange={() => setSwitch3(!switch3)}
                    checked={switch3}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#626ed4"
                    onChange={() => setSwitch4(!switch4)}
                    checked={switch4}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#02a499"
                    onChange={() => setSwitch5(!switch5)}
                    checked={switch5}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#38a4f8"
                    onChange={() => setSwitch6(!switch6)}
                    checked={switch6}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#f8b425"
                    onChange={() => setSwitch7(!switch7)}
                    checked={switch7}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#ec4561"
                    onChange={() => setSwitch8(!switch8)}
                    checked={switch8}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#2a3142"
                    onChange={() => setSwitch9(!switch9)}
                    checked={switch9}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">React Datepicker</h4>
                <p className="text-muted m-b-30">
                  Examples of twitter bootstrap datepicker.
                </p>

                <Form action="#">
                  <FormGroup className="forminput">
                    <Label>Default Functionality</Label>
                    <InputGroup>
                      <DatePicker
                        className="form-control"
                        selected={default_date}
                        onChange={setDefaultDate}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="forminput">
                    <Label>Month View</Label>
                    <InputGroup>
                      <DatePicker
                        selected={monthDate}
                        className="form-control"
                        onChange={setMonthDate}
                        showMonthDropdown
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="forminput">
                    <Label>Year View</Label>
                    <InputGroup>
                      <DatePicker
                        selected={yearDate}
                        className="form-control"
                        onChange={setYearDate}
                        showYearDropdown
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="mb-0 forminput">
                    <Label>Date Range</Label>
                    <Row>
                      <Col md="6">
                        <DatePicker
                          selected={start_date}
                          selectsStart
                          className="form-control"
                          startDate={start_date}
                          endDate={end_date}
                          onChange={setStartDate}
                        />
                      </Col>
                      <Col md="6">
                        <DatePicker
                          selected={end_date}
                          selectsEnd
                          className="form-control"
                          startDate={start_date}
                          endDate={end_date}
                          onChange={setEndDate}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Bootstrap TouchSpin</h4>
                <p className="text-muted m-b-30">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>

                <Form>
                  <FormGroup>
                    <Label>Using data attributes</Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => setDataAttr(data_attr - 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={data_attr}
                        placeholder="number"
                      />
                      <div
                        className="input-group-append"
                        onClick={() => setDataAttr(data_attr + 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Example with postfix (large)</Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => setPostfix(postfix - 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={postfix}
                        placeholder="number"
                      />
                      <div
                        className="input-group-append"
                        onClick={() => setPostfix(postfix + 1)}
                      >
                        <span className="input-group-text">%</span>
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Init with empty value:</Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => setEmptyVal(empty_val - 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={empty_val}
                        placeholder="number"
                      />
                      <div
                        className="input-group-append"
                        onClick={() => setEmptyVal(empty_val + 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>
                      Value attribute is not set (applying settings.initval)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => setNotAttr(not_attr - 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={not_attr}
                        placeholder="number"
                      />
                      <div
                        className="input-group-append"
                        onClick={() => setNotAttr(not_attr + 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label>
                      Value is set explicitly to 33 (skipping settings.initval)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => setExplictVal(explicit_val - 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={explicit_val}
                        placeholder="number"
                      />
                      <div
                        className="input-group-append"
                        onClick={() => setExplictVal(explicit_val + 1)}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Select2</h4>
                <p className="text-muted m-b-30">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>

                <Form>
                  <FormGroup>
                    <Label>Single Select</Label>
                    <Select
                      value={selectedGroup}
                      onChange={setSelectedGroup}
                      options={optionGroup}
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label>Multiple Select</Label>

                    {/* <select className="select2 form-control select2-multiple" multiple="multiple" multiple data-placeholder="Choose ...">
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select> */}
                    <Select
                      value={selectedMulti}
                      isMulti
                      onChange={setSelectedMulti}
                      options={optionGroup}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Advanced);
