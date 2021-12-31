import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import "../scss/main.scss";

const calendarEl = document.getElementsByClassName('calendar__small')[0];
const calendarElBig = document.getElementsByClassName('calendar__whole')[0];
const today = new Date;
const month = (today.getMonth() > 8) ? today.getMonth() + 1 : `0${today.getMonth() + 1}`;
const date = (today.getDate() > 9) ? today.getDate()  : `0${today.getDate()}`;;
const initialDate = `${today.getFullYear()}-${month}-${date}`;
let events;
try{
  const events_text = calendar.dataset.events;
   events = JSON.parse(events_text);
} catch(error){
  console.log(error);
}
document.addEventListener('DOMContentLoaded', function() {
  if(calendarEl){
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin ,bootstrapPlugin ], // no interaction 
      themeSystem: 'bootstrap',

      customButtons: {
        myCustomButton: {
          text: '+',

          click: function popup(){
            var url = "user/addSchedule";
            var name = "popup test";
            var option = "width = 500, height = 500, top = 100, left = 200, location = no"
            window.open(url, name, option);
          }
        }
      },
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'myCustomButton',
        prev: 'fal fa-edit',
        next: 'right-single-arrow',
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
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin,bootstrapPlugin  ],
      themeSystem: 'bootstrap',
      eventColor: '#8ca6fa',
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
        eventDrop: function(info){
         // insertModalOpen(arg);		//이벤트 드래그드랍 시 모달 호출
          if (!confirm("일정을 변경하시겠습니까?")) {
            info.revert();
          } else {
            changeEvent(info.event.title, info.event.start);
          }
          
          console.log(info.delta);
        },
        eventResize: function(arg){
          //insertModalOpen(arg);		//이벤트 사이즈 변경시(일정변경) 모달 호출
        },	
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'myCustomButton'
      },
      initialDate,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events,
      viewSkeletonRender: function(info) {
        calendarElBig.querySelectorAll('.fc-button').forEach((button) => {
          if (button.innerText === 'add schedule!') {
            button.classList.add('yellow-button')
          }
        });
      }
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

function changeEvent(title, start){
  console.log(title, start);
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action","/user/changeSchedule" );
  let hidden = document.createElement("input");
  hidden.setAttribute("name", "title");
  hidden.setAttribute("value", title);
  form.appendChild(hidden);
  hidden = document.createElement("input");
  hidden.setAttribute("name", "start");
  hidden.setAttribute("value", start);
  form.appendChild(hidden);
 // hidden = document.createElement("input");
  //hidden.setAttribute("name", "finish");
  //hidden.setAttribute("value", finish);
  //form.appendChild(hidden);
  document.body.appendChild(form);
  console.log(form.innerHTML);
  form.submit();

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
