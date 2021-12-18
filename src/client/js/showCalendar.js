import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const calendarEl = document.getElementById('calendar');
const calendarElBig = document.getElementById('calendar__whole');
const events_text = document.getElementById('events');
const today = new Date;
const initialDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
// const events = [
//   {
//     title: '해냈다',
//     start: '2021-12-15',
//   },
//   {
//     title: '시험기간',
//     start: '2021-12-17',
//     end: '2021-12-24'
//   },
// ] ; 이런식으로 데베에서 넘어온다.

const events = JSON.parse(events_text.textContent);
console.log(events);
document.addEventListener('DOMContentLoaded', function() {
  if(calendarEl){
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin ], // no interaction 
      customButtons: {
        myCustomButton: {
          text: 'add schedule!',
          click: function popup(){
            var url = "user/addSchedule";
            var name = "popup test";
            var option = "width = 500, height = 500, top = 100, left = 200, location = no"
            window.open(url, name, option);
          }
        }
      },
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialDate,
      navLinks: true,
      dayMaxEvents: true, 
      events,
    });
    calendar.render();
  }
  else if(calendarElBig){
    let calendar = new Calendar(calendarElBig, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      customButtons: {
        myCustomButton: {
          text: 'add schedule!',
          click: function popup(){
            var url = "user/addSchedule";
            var name = "popup test";
            var option = "width = 500, height = 500, top = 100, left = 200, location = no"
            window.open(url, name, option);
          }
        }
      },
        eventClick: function(arg){
          const title = arg.el.innerText; // 과목명
          deleteEvent(title);
        },
        eventDrop: function(arg){
         // insertModalOpen(arg);		//이벤트 드래그드랍 시 모달 호출
        },
        eventResize: function(arg){
          //insertModalOpen(arg);		//이벤트 사이즈 변경시(일정변경) 모달 호출
        },	
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialDate,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events,
    });
    calendar.render();
  }
});

function deleteEvent(title){
  if(confirm("일정을 삭제하시겠습니까?")){
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action","/user/deleteSchedule" );
    let hidden = document.createElement("input");
    hidden.setAttribute("name", "title");
    hidden.setAttribute("value", title);
    form.appendChild(hidden);
    document.body.appendChild(form);
    console.log(form.innerHTML);
    form.submit();
  }
  
}

if(calendarEl){
  window.onload = function(){ // 메인에서 캘린더로 이동
    try{
      let linkButton = document.getElementsByClassName("fc-view-harness")[0];
      let emptyPart = document.getElementById("fc-dom-1");
      linkButton.onclick = function(){ window.location.href = "/calendar";};
      emptyPart.onclick = function(){ window.location.href = "/calendar";};
    }catch(error){
      console.log(error);
    }
  };
}

