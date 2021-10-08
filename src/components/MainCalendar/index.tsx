import FullCalendar, {EventInput} from '@fullcalendar/react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import { Container } from './styles';

function MainCalendar() {

  const data:EventInput[] = [
    {title: 'Teste', start: '2021-09-09', amount: 10}
  ];
  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin,timeGridPlugin, bootstrapPlugin]}
        locale="pt-br"
        buttonText={{'today': '', 'month': 'Mês', 'week': 'Semana'}}
        initialView="dayGridMonth"

        themeSystem={'bootstrap'}

        events={data}

        headerToolbar= {{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth'
        }}
      />

    </Container>
  );
}
export default MainCalendar;
