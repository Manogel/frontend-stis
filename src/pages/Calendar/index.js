import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

import BootstrapTheme from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import 'fullcalendar/dist/fullcalendar.min.css';

// import Settingmenu from '../Subpages/Settingmenu';

const DefaultEvents = [
  {
    title: 'All Day Event',
    start: new Date().setDate(new Date().getDate() + 1),
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: new Date().setDate(new Date().getDate() - 5),
    allDay: false,
    className: 'bg-teal',
  },
  {
    id: 999,
    title: 'Meeting',
    start: new Date().setDate(new Date().getDate() - 3),
    allDay: false,
    className: 'bg-purple',
  },
  {
    id: 999,
    title: 'Meeting',
    start: new Date().setDate(new Date().getDate() + 4),
    allDay: false,
    className: 'bg-warning',
  },
  {
    title: 'Meeting',
    start: new Date().setDate(new Date().getDate() + 4),
    allDay: false,
    className: 'bg-danger',
  },
];

function Calendar() {
  const [calendarEvents, setCalendarEvents] = useState(DefaultEvents);
  const calendarRef = useRef();

  function handleDateClick(arg) {
    const title = prompt('Event Title:');

    if (!title) return;

    setCalendarEvents(
      calendarEvents.concat({
        title: 'Meeting',
        start: arg ? arg.date : new Date(),
        allDay: false,
        className: 'bg-danger',
      })
    );
  }

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Calendar</h4>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <FullCalendar
                  ref={calendarRef}
                  defaultView="dayGridMonth"
                  plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                  themeSystem="bootstrap"
                  dateClick={handleDateClick}
                  events={calendarEvents}
                  id="calendar"
                  editable
                  droppable
                  eventLimit
                  slotDuration="00:15:00"
                  minTime="08:00:00"
                  maxTime="19:00:00"
                  handleWindowResize
                  header={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Calendar);
