Crazy bird for test in University
Using NodeJS, express, MongoDB, AWS

global router:
/ - main page
/map
/timetable (callender)
/chatbot
/reportError

                /login - usercontroller
                /enroll - usercontroller

subject router:
//subject Page
/subject/search
/subject/:id - can see community and test buttons
/subject/:id/like
/subject/:id/dislike

        //test Pages
        /subject/:id/test/list - 내가 등록한 문제들 보이는 페이지
        /subject/:id/test/upload - 문제 만들기
        /subject/:id/test/:testId/edit - 문제 내용 edit
        /subject/:id/test/:testId/delete - 문제 내용 delete

        //solving-testPage
        /subject/:id/test/setting - prepare test. for example, choose test number 문제 수랑 권위 설정하기
        /subject/:id/test/solve - 문제 푸는 페이지 <--- 신고 기능 필요(쓰레기 문제)
        /subject/:id/test/:testId/report // 문제 신고... 수정필요
        /subject/:id/test/result - 문제 채점 결과 - 메인으로 가는 버튼이랑 test/setting으로 이동 하는 버튼

        //community page
        /subject/:id/community - 글 목록 - 한페이지에 n개씩 n페이지 뜨게 수정 필요
        /subject/:id/community/upload - 글 업로드
        /subject/:id/community/:postingId - 글 자세히 보기
        /subject/:id/community/:postingId/edit - 글 수정하기
        /subject/:id/community/:postingId/delete - 글 삭제하기

user router:
/user/:userId - 해당 유저의 작성글목록
/user/:userId/report - 유저신고
/user/edit - dday setting하는 페이지들 추가하기
/user/change-password
/user/logout
/user/leave
카카오 로그인 기능 필요
