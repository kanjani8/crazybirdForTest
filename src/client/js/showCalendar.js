import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
console.log("캘린더");


document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2021-12-17',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: '해냈다',
        start: '2021-12-15',
      },
      {
        title: '시험기간',
        start: '2021-12-17',
        end: '2021-12-24'
      },
    ]
  });
  calendar.render();
});




/*
홈페이지 예시
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });
  */

  /*
  나중에 이벤트 넣을때 참고할거
  var calendar = new Calendar(calendarEl, {
    events: [
      {
        title  : 'event1',
        start  : '2010-01-01'
      },
      {
        title  : 'event2',
        start  : '2010-01-05',
        end    : '2010-01-07'
      },
      {
        title  : 'event3',
        start  : '2010-01-09T12:30:00',
        allDay : false // will make the time show
      }
    ]
  });

  */