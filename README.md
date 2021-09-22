Crazy bird for test in University
Using NodeJS, express, MongoDB, AWS

global router:
/ - main page
/map
/timetable (callender)
/chatbot

/login - usercontroller
/enroll - usercontroller

subject router:
/subject/search
/subject/:id - can see community and test buttons - 여기서 게시판이랑 문제 풀기, 문제 리스트 등 버튼들

/subject/:id/test/list - 내가 등록한 문제들 보이는 페이지
/subject/:id/test/upload - 문제 만들기
/subject/:id/test/:testId/update - 문제 내용 수정하기

/subject/:id/test/setting - prepare test. for example, choose test number 문제 수랑 권위 설정하기
/subject/:id/test/solve - 문제 푸는 페이지
/subject/:id/test/result - 문제 채점 결과 - 메인으로 가는 버튼이랑 test/setting으로 이동 하는 버튼

문제 내용 삭제하기 - 나중에 페이지 따로 만들지, 바로 윗 단위에서 할지 생각

/subject/:id/community

user router:
/user/:id
/user/edit - change password school, dday setting setting update하는 페이지들 추가하기
/user/logout
/user/remove

여러 대학에 서비스한다면 대학용 model 필요
