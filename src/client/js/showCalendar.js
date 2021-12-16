console.log("캘린더");

var calendarEl = document.getElementById('calendar');

calendarEl.addEventListener('DOMContentLoaded', function() {
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
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