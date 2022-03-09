const subjectData = [
    {
      "name": "안보학",
      "professor": "임봉래"
    },
    {
      "name": "조직 리더십",
      "professor": "유정호"
    },
    {
      "name": "교육실습",
      "professor": ""
    },
    {
      "name": "소비자를 위한 생활법률",
      "professor": ""
    },
    {
      "name": "현대인의 질병과 영양",
      "professor": ""
    },
    {
      "name": "스페인 문화와 예술",
      "professor": ""
    },
    {
      "name": "지구에서 만나 살아가는 남자와여자",
      "professor": ""
    },
    {
      "name": "라틴아메리카 문화 산책",
      "professor": ""
    },
    {
      "name": "대한민국 1%가 될 수 있는 재테크 상식",
      "professor": ""
    },
    {
      "name": "문화속 디자인 여행",
      "professor": ""
    },
    {
      "name": "한국사,뿌리깊은 이야기",
      "professor": ""
    },
    {
      "name": "전통문화와 한옥의 이해",
      "professor": ""
    },
    {
      "name": "TED로 배우는 영화속 바이오테크놀로지",
      "professor": ""
    },
    {
      "name": "마음을 읽어 주는 미술치료",
      "professor": ""
    },
    {
      "name": "범죄와 범죄 심리",
      "professor": ""
    },
    {
      "name": "모두의 인공지능",
      "professor": ""
    },
    {
      "name": "성과 일상",
      "professor": ""
    },
    {
      "name": "세계의 명화와 사상",
      "professor": ""
    },
    {
      "name": "사물인터넷 이해",
      "professor": ""
    },
    {
      "name": "현대사회와 회계",
      "professor": ""
    },
    {
      "name": "언어의 표현과 이해 Ⅰ",
      "professor": "강선화"
    },
    {
      "name": "언어의 표현과 이해 Ⅱ",
      "professor": "김연주"
    },
    {
      "name": "언어의 표현과 이해 Ⅲ",
      "professor": "김원경"
    },
    {
      "name": "외국인을 위한 글쓰기",
      "professor": "강선화"
    },
    {
      "name": "한・중 문화와 컨텐츠",
      "professor": "송향경"
    },
    {
      "name": "한국 문화의 이해",
      "professor": "조수진"
    },
    {
      "name": "한국 문화의 이해",
      "professor": "황혜란"
    },
    {
      "name": "한국 사회의 이해",
      "professor": "최수진"
    },
    {
      "name": "International Seminar: Korean and Global Affairs",
      "professor": "김장욱"
    },
    {
      "name": "Global Cultural Studies",
      "professor": "니노슬라브 란제로빅"
    },
    {
      "name": "전공별 진로 탐색",
      "professor": "이정은"
    },
    {
      "name": "취업 실전 전략",
      "professor": "이정은"
    },
    {
      "name": "취업정보 분석 및 입사전략",
      "professor": "김치성"
    },
    {
      "name": "자기 이해와 진로탐색",
      "professor": "이정은"
    },
    {
      "name": "직무 적성검사 분석",
      "professor": "이동원"
    },
    {
      "name": "진로설계",
      "professor": "이정은"
    },
    {
      "name": "진로설계",
      "professor": "여지은"
    },
    {
      "name": "현장실습 1",
      "professor": ""
    },
    {
      "name": "예술 비즈니스 창업론",
      "professor": "김대원"
    },
    {
      "name": "재미있고 알기 쉬운 창업이야기",
      "professor": "지윤정"
    },
    {
      "name": "인터넷 쇼핑몰 구축과 창업",
      "professor": "호준환"
    },
    {
      "name": "뷰티 창업론",
      "professor": "한태수"
    },
    {
      "name": "인문 고전의 이해",
      "professor": "이채영"
    },
    {
      "name": "내러티브 졸업세미나 1",
      "professor": "김정숙"
    },
    {
      "name": "내러티브 졸업세미나 2",
      "professor": "김정숙"
    },
    {
      "name": "국문학의 이해",
      "professor": "심치열"
    },
    {
      "name": "국어학의 이해",
      "professor": "김일환"
    },
    {
      "name": "현대문학의 이해",
      "professor": "김명석"
    },
    {
      "name": "국어문법론",
      "professor": "김일환"
    },
    {
      "name": "고전문학과 전통문화",
      "professor": "강혜선"
    },
    {
      "name": "한국문학과 여성",
      "professor": "강진호"
    },
    {
      "name": "문학교육론",
      "professor": "김혜련"
    },
    {
      "name": "설화와 스토리텔링",
      "professor": "심치열"
    },
    {
      "name": "현대소설과 사회",
      "professor": "김명석"
    },
    {
      "name": "한국문학과 세계문학",
      "professor": "김명석"
    },
    {
      "name": "국어 교과교육론",
      "professor": "김혜련"
    },
    {
      "name": "국어 논리 및 논술",
      "professor": "김혜련"
    },
    {
      "name": "옛노래의 세계",
      "professor": "강혜선"
    },
    {
      "name": "한국어정보처리",
      "professor": "김일환"
    },
    {
      "name": "문화와 비평",
      "professor": "강진호"
    },
    {
      "name": "한글이 걸어온 길",
      "professor": "전기량"
    },
    {
      "name": "글쓰기의 기술",
      "professor": "강진호"
    },
    {
      "name": "영미단편",
      "professor": "정이화"
    },
    {
      "name": "영어학개론",
      "professor": "정소우"
    },
    {
      "name": "영어학개론",
      "professor": "김경영"
    },
    {
      "name": "여성과 영문학",
      "professor": "정혜연"
    },
    {
      "name": "실용영어 스피치와 프리젠테이션",
      "professor": "마이클 엘리어트"
    },
    {
      "name": "미문학개론",
      "professor": "정혜연"
    },
    {
      "name": "근대영국소설",
      "professor": "정이화"
    },
    {
      "name": "응용 영어학",
      "professor": "방혜영"
    },
    {
      "name": "외국어 교과교육론(서양권)",
      "professor": "고정민"
    },
    {
      "name": "외국어 논리 및 논술(서양권)",
      "professor": "이귀분"
    },
    {
      "name": "현대미국소설",
      "professor": "정혜연"
    },
    {
      "name": "영미명작읽기",
      "professor": "정이화"
    },
    {
      "name": "미국 드라마 스토리텔링",
      "professor": "마이클 엘리어트"
    },
    {
      "name": "상황별 영어 커뮤니케이션",
      "professor": "다릴 로스"
    },
    {
      "name": "사회언어학",
      "professor": "고정민"
    },
    {
      "name": "기초독일어 1",
      "professor": "김륜옥"
    },
    {
      "name": "기초독일어 1",
      "professor": "김길웅"
    },
    {
      "name": "독일어권 문화와 사회",
      "professor": "김길웅"
    },
    {
      "name": "기초독일어회화 1",
      "professor": "마누엘 보가드"
    },
    {
      "name": "독일 텍스트 강독",
      "professor": "정혜륜"
    },
    {
      "name": "독문학개론",
      "professor": "한상희"
    },
    {
      "name": "독일어 듣기와 말하기1",
      "professor": "마누엘 보가드"
    },
    {
      "name": "중급독일어1",
      "professor": "정영희"
    },
    {
      "name": "독일어작문연습",
      "professor": "이재영"
    },
    {
      "name": "독일소설 읽기",
      "professor": "김륜옥"
    },
    {
      "name": "독일어의 구조",
      "professor": "황은미"
    },
    {
      "name": "독일도시와 인문학",
      "professor": "조수진"
    },
    {
      "name": "독일어 에세이와 프레젠테이션",
      "professor": "마누엘 보가드"
    },
    {
      "name": "독일동화와 민담",
      "professor": "최은아"
    },
    {
      "name": "독일 미디어와 언어",
      "professor": "김유리"
    },
    {
      "name": "초급프랑스어 1",
      "professor": "홍인혜"
    },
    {
      "name": "초급프랑스어 1",
      "professor": "이채영"
    },
    {
      "name": "프랑스어 발음연습",
      "professor": "토마 기데"
    },
    {
      "name": "프랑스 문화와 명작산책",
      "professor": "김혜중"
    },
    {
      "name": "프랑스어 어법과 연습 1",
      "professor": "윤신원"
    },
    {
      "name": "프랑스어회화 A2",
      "professor": "토마 기데"
    },
    {
      "name": "중급프랑스어 1",
      "professor": "박혜선"
    },
    {
      "name": "프랑스 공연예술",
      "professor": "이선우"
    },
    {
      "name": "프랑스어회화 B1",
      "professor": "토마 기데"
    },
    {
      "name": "프랑스 문학과 예술의 흐름 1",
      "professor": "박언주"
    },
    {
      "name": "프랑스 시와 샹송",
      "professor": "조지숙"
    },
    {
      "name": "프랑스어 어휘와 문화",
      "professor": "박혜선"
    },
    {
      "name": "프랑스 영화의 이해",
      "professor": "이선우"
    },
    {
      "name": "프랑스어 번역의 실제",
      "professor": "박선희"
    },
    {
      "name": "현대프랑스소설과 작가",
      "professor": "서지형"
    },
    {
      "name": "초급일본어연습 1",
      "professor": "다케우치 노리아키"
    },
    {
      "name": "초급일본어연습 1",
      "professor": "네고로 유키"
    },
    {
      "name": "일본어 기초표현 1",
      "professor": "박일호"
    },
    {
      "name": "일본어 기초표현 1",
      "professor": "안평호"
    },
    {
      "name": "일본어 기초표현 1",
      "professor": "김옥임"
    },
    {
      "name": "일본의 이해",
      "professor": "유혜경"
    },
    {
      "name": "중급일본어연습 1",
      "professor": "다케우치 노리아키"
    },
    {
      "name": "일본어 중급표현 1",
      "professor": "안평호"
    },
    {
      "name": "중급일본어회화 1",
      "professor": "다케우치 노리아키"
    },
    {
      "name": "중급일본어회화 1",
      "professor": "네고로 유키"
    },
    {
      "name": "일본문학의 흐름 1",
      "professor": "박일호"
    },
    {
      "name": "일본어 교과교육론",
      "professor": "안평호"
    },
    {
      "name": "고급일본어회화",
      "professor": "네고로 유키"
    },
    {
      "name": "일본어 고급표현 1",
      "professor": "남휘정"
    },
    {
      "name": "일본어학개론",
      "professor": "안평호"
    },
    {
      "name": "비즈니스 일본어와 프레젠테이션",
      "professor": "김옥임"
    },
    {
      "name": "일본문학・문화의 비교연구",
      "professor": "박일호"
    },
    {
      "name": "일본 고전문법의 이해",
      "professor": "강성문"
    },
    {
      "name": "일본 근현대문학과 내러티브",
      "professor": "홍윤표"
    },
    {
      "name": "중국문화의 이해",
      "professor": "김화진"
    },
    {
      "name": "초급중국어 회화 1",
      "professor": "리우 나"
    },
    {
      "name": "초급중국어 회화 1",
      "professor": "노은정"
    },
    {
      "name": "초급중국어 회화 1",
      "professor": "김미라"
    },
    {
      "name": "초급중국어 1",
      "professor": "황정희"
    },
    {
      "name": "초급중국어 1",
      "professor": "박홍준"
    },
    {
      "name": "초급중국어 1",
      "professor": "김수진"
    },
    {
      "name": "초급중국어 1",
      "professor": "정세진"
    },
    {
      "name": "중국문자문화의 이해",
      "professor": "이해윤"
    },
    {
      "name": "중국문학사 1",
      "professor": "박홍준"
    },
    {
      "name": "당시와 여성",
      "professor": "정세진"
    },
    {
      "name": "중급중국어 1",
      "professor": "정세진"
    },
    {
      "name": "중급중국어 1",
      "professor": "진화진"
    },
    {
      "name": "중급중국어 회화 1",
      "professor": "김수진"
    },
    {
      "name": "중급중국어 회화 1",
      "professor": "윤지영"
    },
    {
      "name": "중국현대문학과 문화",
      "professor": "김수진"
    },
    {
      "name": "중국 희곡의 이해",
      "professor": "박홍준"
    },
    {
      "name": "고급중국어 연습과 토론",
      "professor": "리우 나"
    },
    {
      "name": "중국어 교과교육론",
      "professor": "신준호"
    },
    {
      "name": "외국어 논리 및 논술(동양권)",
      "professor": "신준호"
    },
    {
      "name": "중국어작문",
      "professor": "리우 나"
    },
    {
      "name": "중국어번역연습",
      "professor": "황정희"
    },
    {
      "name": "중국현대문학강독",
      "professor": "김수진"
    },
    {
      "name": "역사적 내러티브의 이해와 활용",
      "professor": "조국"
    },
    {
      "name": "공공역사와 미디어",
      "professor": "이규철"
    },
    {
      "name": "문화유산의 이해",
      "professor": "강호선"
    },
    {
      "name": "한국 고대국가의 성립과 발전",
      "professor": "강호선"
    },
    {
      "name": "서양사 1- 고중세사",
      "professor": "차승현"
    },
    {
      "name": "사료 읽기와 해석",
      "professor": "김우택"
    },
    {
      "name": "조선시대의 역사와 문화",
      "professor": "이규철"
    },
    {
      "name": "동아시아사 1 : 일본사회의 성립과 발전",
      "professor": "조국"
    },
    {
      "name": "지역의 이해",
      "professor": "이진일"
    },
    {
      "name": "현대사 특강",
      "professor": "박정민"
    },
    {
      "name": "여성사의 이해",
      "professor": "오경환"
    },
    {
      "name": "냉전사의 이해",
      "professor": "홍석률"
    },
    {
      "name": "역사 속의 불교사상과 문화",
      "professor": "강호선"
    },
    {
      "name": "근대성의 이해",
      "professor": "오경환"
    },
    {
      "name": "Reading Seminar: 지식",
      "professor": "김민수"
    },
    {
      "name": "Reading Seminar: 정치와 사회운동",
      "professor": "조국"
    },
    {
      "name": "정치학개론",
      "professor": "한의석"
    },
    {
      "name": "정치학개론",
      "professor": "설규상"
    },
    {
      "name": "국제정치사",
      "professor": "유나영"
    },
    {
      "name": "정치사상특강",
      "professor": "정진화"
    },
    {
      "name": "정치학방법론",
      "professor": "박지영"
    },
    {
      "name": "정체성의 정치",
      "professor": "박진곤"
    },
    {
      "name": "중국정치외교론",
      "professor": "연상모"
    },
    {
      "name": "글로벌 경제와 정치",
      "professor": "김도훈"
    },
    {
      "name": "일본정치론",
      "professor": "한의석"
    },
    {
      "name": "비교정치론",
      "professor": "권영승"
    },
    {
      "name": "미국외교정책",
      "professor": "김영호"
    },
    {
      "name": "국제정치사상",
      "professor": "김영호"
    },
    {
      "name": "한국민주주의론",
      "professor": "김진주"
    },
    {
      "name": "동남아정치론",
      "professor": "고우정"
    },
    {
      "name": "전쟁과 평화",
      "professor": "김백주"
    },
    {
      "name": "한국의 공공외교",
      "professor": "고우정"
    },
    {
      "name": "정치학원서강독",
      "professor": "김영호"
    },
    {
      "name": "동아시아정치사상",
      "professor": "손민석"
    },
    {
      "name": "선거와 여론",
      "professor": "박지영"
    },
    {
      "name": "교육실습(전문상담)",
      "professor": ""
    },
    {
      "name": "심리학개론",
      "professor": "조효진"
    },
    {
      "name": "심리학개론",
      "professor": "신은삼"
    },
    {
      "name": "학습과 기억",
      "professor": "민수정"
    },
    {
      "name": "학습과 기억",
      "professor": "박형생"
    },
    {
      "name": "성격심리학",
      "professor": "이상하"
    },
    {
      "name": "실험연구법",
      "professor": "차옥균"
    },
    {
      "name": "생애발달",
      "professor": "진경선"
    },
    {
      "name": "사회심리학",
      "professor": "박혜경"
    },
    {
      "name": "사회심리학",
      "professor": "김영주"
    },
    {
      "name": "이상심리학",
      "professor": "김명선"
    },
    {
      "name": "이상심리학",
      "professor": "김수정"
    },
    {
      "name": "건강심리학",
      "professor": "이은별"
    },
    {
      "name": "집단상담",
      "professor": "이정윤"
    },
    {
      "name": "산업심리학",
      "professor": "정지희"
    },
    {
      "name": "경력개발과 코칭",
      "professor": "현은정"
    },
    {
      "name": "통계 패키지를 활용한 자료 분석",
      "professor": "이슬"
    },
    {
      "name": "기업현장과 창의성",
      "professor": "유은아"
    },
    {
      "name": "학교상담과 생활지도",
      "professor": "이정윤"
    },
    {
      "name": "가족상담",
      "professor": "차민정"
    },
    {
      "name": "신경심리학",
      "professor": "김명선"
    },
    {
      "name": "조사연구법",
      "professor": "박혜경"
    },
    {
      "name": "인지 발달",
      "professor": "진경선"
    },
    {
      "name": "관광지리학",
      "professor": "박소현"
    },
    {
      "name": "글로벌경제와 지역문제",
      "professor": "이원호"
    },
    {
      "name": "인문지리학",
      "professor": "이자원"
    },
    {
      "name": "지형학",
      "professor": "박경"
    },
    {
      "name": "지도학",
      "professor": "정재준"
    },
    {
      "name": "경제지리학",
      "professor": "어정민"
    },
    {
      "name": "도시지리학",
      "professor": "이자원"
    },
    {
      "name": "사회지리학",
      "professor": "이원호"
    },
    {
      "name": "역사지리학",
      "professor": "박선영"
    },
    {
      "name": "기후학",
      "professor": "박경"
    },
    {
      "name": "GIS응용",
      "professor": "정재준"
    },
    {
      "name": "도시환경론",
      "professor": "이자원"
    },
    {
      "name": "중국지역연구",
      "professor": "이원호"
    },
    {
      "name": "지리 교과교육론",
      "professor": "박민영"
    },
    {
      "name": "환경변화 및 재난관리",
      "professor": "박경"
    },
    {
      "name": "공간정보학실무",
      "professor": "정재준"
    },
    {
      "name": "경제사",
      "professor": "박기주"
    },
    {
      "name": "경제원론 1",
      "professor": "성효용"
    },
    {
      "name": "경제원론 1",
      "professor": "박기주"
    },
    {
      "name": "경제수학입문",
      "professor": "이동열"
    },
    {
      "name": "여성과 경제",
      "professor": "성효용"
    },
    {
      "name": "게임이론",
      "professor": "이동열"
    },
    {
      "name": "미시경제학",
      "professor": "박기성"
    },
    {
      "name": "한국경제론",
      "professor": "강석훈"
    },
    {
      "name": "경제학방법론",
      "professor": "진양수"
    },
    {
      "name": "화폐금융론",
      "professor": "김원기"
    },
    {
      "name": "산업경제학",
      "professor": "진양수"
    },
    {
      "name": "국제경제학",
      "professor": "김원기"
    },
    {
      "name": "노동경제학",
      "professor": "박기성"
    },
    {
      "name": "계량경제학",
      "professor": "강석훈"
    },
    {
      "name": "환경과 경제",
      "professor": "박기주"
    },
    {
      "name": "경제학특강",
      "professor": "강석훈"
    },
    {
      "name": "상업 교과교육론",
      "professor": "박노윤"
    },
    {
      "name": "인적자원관리",
      "professor": "정종태"
    },
    {
      "name": "국제경영학",
      "professor": "신철호"
    },
    {
      "name": "투자론",
      "professor": "최승은"
    },
    {
      "name": "마케팅조사론",
      "professor": "김종배"
    },
    {
      "name": "마케팅조사론",
      "professor": ""
    },
    {
      "name": "데이터 사이언스 1",
      "professor": "심선영"
    },
    {
      "name": "고급회계",
      "professor": "이상혁"
    },
    {
      "name": "기업재무",
      "professor": "정미화"
    },
    {
      "name": "사회적기업의 이해",
      "professor": "박노윤"
    },
    {
      "name": "유통관리",
      "professor": "백민선"
    },
    {
      "name": "금융기관론",
      "professor": "김동균"
    },
    {
      "name": "인간커뮤니케이션",
      "professor": "노동열"
    },
    {
      "name": "커뮤니케이션과 사회",
      "professor": "상윤모"
    },
    {
      "name": "커뮤니케이션과 사회",
      "professor": "김문환"
    },
    {
      "name": "전략 커뮤니케이션 개론",
      "professor": "김현정"
    },
    {
      "name": "전략 커뮤니케이션 개론",
      "professor": "이민규"
    },
    {
      "name": "디지털 미디어 리터러시",
      "professor": "상윤모"
    },
    {
      "name": "디지털 미디어 리터러시",
      "professor": "정지영"
    },
    {
      "name": "영상미학",
      "professor": "노동열"
    },
    {
      "name": "마케팅커뮤니케이션 효과론",
      "professor": "하지영"
    },
    {
      "name": "미디어 데이터 분석",
      "professor": ""
    },
    {
      "name": "뉴스취재와 보도",
      "professor": ""
    },
    {
      "name": "마케팅커뮤니케이션캠페인",
      "professor": "류은아"
    },
    {
      "name": "미디어비즈니스",
      "professor": "심상민"
    },
    {
      "name": "스마트미디어",
      "professor": "김호성"
    },
    {
      "name": "대중문화와 문화연구",
      "professor": "심두보"
    },
    {
      "name": "대중문화와 문화연구",
      "professor": "정수경"
    },
    {
      "name": "데이터 기반 PR 기획",
      "professor": "최호진"
    },
    {
      "name": "아시아의 미디어문화",
      "professor": "Keith Barrows Wagner"
    },
    {
      "name": "문화콘텐츠 기반 공공외교",
      "professor": "여은하"
    },
    {
      "name": "세계 미디어산업 정책",
      "professor": "심상민"
    },
    {
      "name": "미디어세미나",
      "professor": "심상민"
    },
    {
      "name": "미디어연구 원서 강독",
      "professor": ""
    },
    {
      "name": "미디어 법과 윤리",
      "professor": "상윤모"
    },
    {
      "name": "경영통계학",
      "professor": "황성욱"
    },
    {
      "name": "경영학원론",
      "professor": "이성근"
    },
    {
      "name": "경영학원론",
      "professor": "박노윤"
    },
    {
      "name": "회계원리",
      "professor": "전홍민"
    },
    {
      "name": "회계원리",
      "professor": "심재연"
    },
    {
      "name": "경영수학",
      "professor": "손규현"
    },
    {
      "name": "글로벌 비즈니스를 위한 경제학",
      "professor": "이윤경"
    },
    {
      "name": "글로벌 비즈니스의 이해",
      "professor": "구자원"
    },
    {
      "name": "재무회계",
      "professor": "전홍민"
    },
    {
      "name": "경영 및 회계정보 분석",
      "professor": "심선영"
    },
    {
      "name": "기업가 정신과 E-Business전략",
      "professor": "신철호"
    },
    {
      "name": "중급회계 1",
      "professor": "전홍민"
    },
    {
      "name": "마케팅원론",
      "professor": "김종배"
    },
    {
      "name": "마케팅원론",
      "professor": "유경남"
    },
    {
      "name": "마케팅원론",
      "professor": "변경희"
    },
    {
      "name": "조직행동론",
      "professor": "박노윤"
    },
    {
      "name": "관리회계",
      "professor": "박형주"
    },
    {
      "name": "기업경제학",
      "professor": "이정경"
    },
    {
      "name": "캡스톤 마케팅 애널리틱스",
      "professor": "이성근"
    },
    {
      "name": "글로벌 커뮤니케이션 II",
      "professor": "이윤경"
    },
    {
      "name": "비교문화 경영론",
      "professor": "이상기"
    },
    {
      "name": "글로벌 시장 분석과 관리",
      "professor": "이윤경"
    },
    {
      "name": "글로벌 기업 프로젝트 관리 실무",
      "professor": "구자원"
    },
    {
      "name": "글로벌 스타트업 관리",
      "professor": "차용욱"
    },
    {
      "name": "국제비즈니스협상론",
      "professor": "박미"
    },
    {
      "name": "글로벌 비즈니스와 해외영업 전략",
      "professor": "구자원"
    },
    {
      "name": "국제금융정책과 환율시장",
      "professor": "이윤경"
    },
    {
      "name": "ICT와 글로벌 비즈니스",
      "professor": "구자원"
    },
    {
      "name": "글로벌 기업 전문가 특강",
      "professor": "차용욱"
    },
    {
      "name": "이머징 마켓 관리",
      "professor": "이상기"
    },
    {
      "name": "글로벌지역연구",
      "professor": "박성진"
    },
    {
      "name": "사회복지학개론",
      "professor": "이승기"
    },
    {
      "name": "인간행동과 사회환경",
      "professor": "박주희"
    },
    {
      "name": "사회문제론",
      "professor": "조윤주"
    },
    {
      "name": "가족생활교육",
      "professor": "박주희"
    },
    {
      "name": "노인복지론",
      "professor": "박현용"
    },
    {
      "name": "사회복지조사론",
      "professor": "고선강"
    },
    {
      "name": "사회복지정책론",
      "professor": "이승기"
    },
    {
      "name": "청소년복지론",
      "professor": "조윤주"
    },
    {
      "name": "건강가정론",
      "professor": "고선강"
    },
    {
      "name": "프로그램개발과 평가",
      "professor": "박주희"
    },
    {
      "name": "사회복지실천기술론",
      "professor": "박현용"
    },
    {
      "name": "장애인복지론",
      "professor": "이승기"
    },
    {
      "name": "정신건강론",
      "professor": "조윤주"
    },
    {
      "name": "사회복지현장실습",
      "professor": "손선옥"
    },
    {
      "name": "사회복지현장실습",
      "professor": "박현용"
    },
    {
      "name": "사회복지자료분석론",
      "professor": "고선강"
    },
    {
      "name": "산업복지론",
      "professor": "조윤주"
    },
    {
      "name": "트라우마와 사회복지실천",
      "professor": "박현용"
    },
    {
      "name": "헌법 1",
      "professor": "정연주"
    },
    {
      "name": "헌법 1",
      "professor": "김연식"
    },
    {
      "name": "법학개론",
      "professor": "이재훈"
    },
    {
      "name": "법학개론",
      "professor": "황태희"
    },
    {
      "name": "민법총칙",
      "professor": "전광백"
    },
    {
      "name": "법률영어",
      "professor": "김연식"
    },
    {
      "name": "헌법 3",
      "professor": "정연주"
    },
    {
      "name": "상법총론",
      "professor": "김원각"
    },
    {
      "name": "노동법 1",
      "professor": "권오성"
    },
    {
      "name": "문화예술법",
      "professor": "황태희"
    },
    {
      "name": "국제법 1",
      "professor": "허난이"
    },
    {
      "name": "형법각론",
      "professor": "이성기"
    },
    {
      "name": "채권법총론",
      "professor": "전광백"
    },
    {
      "name": "헌법실무 1",
      "professor": "정연주"
    },
    {
      "name": "주식회사법",
      "professor": "박한성"
    },
    {
      "name": "의료법",
      "professor": "신효성"
    },
    {
      "name": "행정법총론",
      "professor": "이재훈"
    },
    {
      "name": "민사소송법 1",
      "professor": "김봉수"
    },
    {
      "name": "형사소송법 1",
      "professor": "이성기"
    },
    {
      "name": "형사소송법 1",
      "professor": "고명수"
    },
    {
      "name": "경제법",
      "professor": "황태희"
    },
    {
      "name": "국제통상법 1",
      "professor": "권현호"
    },
    {
      "name": "특수범죄와 형벌",
      "professor": "이명근"
    },
    {
      "name": "영사법무학1",
      "professor": "김현명"
    },
    {
      "name": "영사법무 사례연구",
      "professor": "한동만"
    },
    {
      "name": "형법연습",
      "professor": "장진환"
    },
    {
      "name": "부동산등기법",
      "professor": "김봉수"
    },
    {
      "name": "법률 상담 실무",
      "professor": "이재훈"
    },
    {
      "name": "세법 1",
      "professor": "하봉곤"
    },
    {
      "name": "국제법과 시사문제",
      "professor": "권현호"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "김도현"
    },
    {
      "name": "현대대수학 1",
      "professor": "신용수"
    },
    {
      "name": "복소함수론",
      "professor": "황정연"
    },
    {
      "name": "수학적 문제해결 방법론",
      "professor": "심성아"
    },
    {
      "name": "수학 교과교육론",
      "professor": "정해남"
    },
    {
      "name": "수학 논리 및 논술",
      "professor": "정해남"
    },
    {
      "name": "금융사회와 수학",
      "professor": "이수용"
    },
    {
      "name": "위상수학 1",
      "professor": "권보현"
    },
    {
      "name": "현대대수학 3",
      "professor": "신용수"
    },
    {
      "name": "곡면의 기하와 위상",
      "professor": "윤기헌"
    },
    {
      "name": "수치적 데이터 처리 1",
      "professor": "김도현"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "윤기헌"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "심성아"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "김수리"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "강우석"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "김지현"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "김기택"
    },
    {
      "name": "미적분과 벡터해석 기초",
      "professor": "연미정"
    },
    {
      "name": "기초통계학",
      "professor": "이종협"
    },
    {
      "name": "사회조사방법론",
      "professor": "김용섭"
    },
    {
      "name": "회귀분석실습",
      "professor": "이성건"
    },
    {
      "name": "회귀분석실습",
      "professor": "박성오"
    },
    {
      "name": "범주형자료분석",
      "professor": "김동하"
    },
    {
      "name": "범주형자료분석",
      "professor": "조재범"
    },
    {
      "name": "통계시뮬레이션",
      "professor": "전예슬"
    },
    {
      "name": "다변량자료분석 I",
      "professor": "박성오"
    },
    {
      "name": "경영경제 자료분석",
      "professor": "이종협"
    },
    {
      "name": "빅데이터통계분석",
      "professor": "정호현"
    },
    {
      "name": "빅데이터통계분석",
      "professor": "이성건"
    },
    {
      "name": "최신통계방법론",
      "professor": "최병정"
    },
    {
      "name": "기초 통계학",
      "professor": "이종협"
    },
    {
      "name": "기초 통계학",
      "professor": "정호현"
    },
    {
      "name": "기초 통계학",
      "professor": "김계완"
    },
    {
      "name": "기초 통계학",
      "professor": "원형묵"
    },
    {
      "name": "기초 통계학",
      "professor": "박진환"
    },
    {
      "name": "일반화학 1",
      "professor": "김정수"
    },
    {
      "name": "무기화학 1",
      "professor": "조준상"
    },
    {
      "name": "무기화학실험",
      "professor": "조준상"
    },
    {
      "name": "유기분광학",
      "professor": "정선호"
    },
    {
      "name": "생화학실험",
      "professor": "박성순"
    },
    {
      "name": "과학 논리 및 논술",
      "professor": "김경순"
    },
    {
      "name": "화학 교과교육론",
      "professor": "김경순"
    },
    {
      "name": "유기화학특강",
      "professor": "채정현"
    },
    {
      "name": "일반화학 Ⅰ",
      "professor": "김정수"
    },
    {
      "name": "일반화학 Ⅰ",
      "professor": "이향애"
    },
    {
      "name": "일반화학 Ⅰ",
      "professor": "심용호"
    },
    {
      "name": "일반물리학 Ⅰ",
      "professor": "유상구"
    },
    {
      "name": "조합 및 그래프 이론",
      "professor": "김수리"
    },
    {
      "name": "통계적 사고",
      "professor": "이성건"
    },
    {
      "name": "통계적 사고",
      "professor": "박관영"
    },
    {
      "name": "데이터사이언스입문",
      "professor": "정호현"
    },
    {
      "name": "해석학개론 및 연습 1",
      "professor": "심성아"
    },
    {
      "name": "선형대수학 및 연습 1",
      "professor": "신용수"
    },
    {
      "name": "다변수미적분학 및 연습",
      "professor": "윤기헌"
    },
    {
      "name": "머신러닝을 위한 수학",
      "professor": "김수리"
    },
    {
      "name": "수학적 프로그래밍",
      "professor": "김도현"
    },
    {
      "name": "통계프로그래밍",
      "professor": "오찬욱"
    },
    {
      "name": "통계프로그래밍",
      "professor": "김기영"
    },
    {
      "name": "통계프로그래밍",
      "professor": "엄인옥"
    },
    {
      "name": "보험통계학",
      "professor": "차재형"
    },
    {
      "name": "수리통계학 1",
      "professor": "전예슬"
    },
    {
      "name": "탐색적 자료분석",
      "professor": "박관영"
    },
    {
      "name": "R통계분석",
      "professor": "김동하"
    },
    {
      "name": "R통계분석",
      "professor": "정호현"
    },
    {
      "name": "R통계분석",
      "professor": "오찬욱"
    },
    {
      "name": "R통계분석",
      "professor": "김영호"
    },
    {
      "name": "암호수학1",
      "professor": "황정연"
    },
    {
      "name": "일반화학실험 1",
      "professor": "김정현"
    },
    {
      "name": "일반화학실험 1",
      "professor": "신민정"
    },
    {
      "name": "일반화학실험 1",
      "professor": "구본재"
    },
    {
      "name": "일반화학실험 1",
      "professor": "조준상"
    },
    {
      "name": "일반화학실험 1",
      "professor": "김경순"
    },
    {
      "name": "물리화학 1",
      "professor": "김정수"
    },
    {
      "name": "유기화학 1",
      "professor": "정선호"
    },
    {
      "name": "분석화학 1",
      "professor": "신민정"
    },
    {
      "name": "분석화학실험",
      "professor": "신민정"
    },
    {
      "name": "생화학 1",
      "professor": "박성순"
    },
    {
      "name": "유기화학실험",
      "professor": "김정현"
    },
    {
      "name": "유기화학실험",
      "professor": "채정현"
    },
    {
      "name": "에너지공학개론",
      "professor": "구본재"
    },
    {
      "name": "디지털컨텐츠",
      "professor": "안민지"
    },
    {
      "name": "디지털컨텐츠",
      "professor": "신민아"
    },
    {
      "name": "디지털컨텐츠",
      "professor": "한세영"
    },
    {
      "name": "웹프로그래밍기초",
      "professor": "김경진"
    },
    {
      "name": "웹프로그래밍기초",
      "professor": "이혜리"
    },
    {
      "name": "웹프로그래밍기초",
      "professor": "장현미"
    },
    {
      "name": "IT개론",
      "professor": "이재원"
    },
    {
      "name": "소프트웨어융합기술개론",
      "professor": "이일구"
    },
    {
      "name": "소프트웨어융합기술개론",
      "professor": "박새롬"
    },
    {
      "name": "소프트웨어융합기술개론",
      "professor": "이택"
    },
    {
      "name": "이산수학",
      "professor": "홍기형"
    },
    {
      "name": "자료구조",
      "professor": "이택"
    },
    {
      "name": "자료구조",
      "professor": "홍의석"
    },
    {
      "name": "자료구조",
      "professor": "이규중"
    },
    {
      "name": "자료구조",
      "professor": "안양준"
    },
    {
      "name": "운영체제",
      "professor": "김준철"
    },
    {
      "name": "컴퓨터구조",
      "professor": "김준철"
    },
    {
      "name": "자바프로그래밍",
      "professor": "윤인식"
    },
    {
      "name": "자바프로그래밍",
      "professor": "이주희"
    },
    {
      "name": "자바프로그래밍",
      "professor": "김성민"
    },
    {
      "name": "자바프로그래밍",
      "professor": "우종정"
    },
    {
      "name": "고급C++프로그래밍",
      "professor": "서동수"
    },
    {
      "name": "고급C++프로그래밍",
      "professor": "홍의석"
    },
    {
      "name": "고급C++프로그래밍",
      "professor": "김설현"
    },
    {
      "name": "고급C++프로그래밍",
      "professor": "이규중"
    },
    {
      "name": "고급C++프로그래밍",
      "professor": "안양준"
    },
    {
      "name": "인공지능",
      "professor": "이재원"
    },
    {
      "name": "알고리즘",
      "professor": "김도형"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "윤상덕"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "이정빈"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "이택"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "이윤경"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "양숙희"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "유재현"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "노현아"
    },
    {
      "name": "파이썬프로그래밍",
      "professor": "최수경"
    },
    {
      "name": "서비스디자인 개론 및 실습",
      "professor": "최민영"
    },
    {
      "name": "UX 프로토타이핑",
      "professor": "김준철"
    },
    {
      "name": "정보설계와 시각화",
      "professor": "이자인"
    },
    {
      "name": "정보설계와 시각화",
      "professor": "KIM SEOYOUNG"
    },
    {
      "name": "라이프스타일과 트렌드",
      "professor": "안준환"
    },
    {
      "name": "제품서비스시스템디자인",
      "professor": "강효진"
    },
    {
      "name": "VR 콘텐츠디자인",
      "professor": "김현석"
    },
    {
      "name": "비즈니스모델링",
      "professor": "이여름"
    },
    {
      "name": "HCI방법론실습",
      "professor": "최민영"
    },
    {
      "name": "AI융합디자인",
      "professor": "김현석"
    },
    {
      "name": "데이터기반 서비스디자인",
      "professor": "윤상덕"
    },
    {
      "name": "서비스디자인스튜디오",
      "professor": "강효진"
    },
    {
      "name": "서비스디자인스튜디오",
      "professor": "안준환"
    },
    {
      "name": "정보보호법과 보안정책",
      "professor": "김경진"
    },
    {
      "name": "웹 보안",
      "professor": "이일구"
    },
    {
      "name": "웹 보안",
      "professor": "이주희"
    },
    {
      "name": "융합보안개론",
      "professor": "김성민"
    },
    {
      "name": "융합보안 포렌식",
      "professor": "이상학"
    },
    {
      "name": "융합보안 포렌식",
      "professor": "김학경"
    },
    {
      "name": "네트워크 보안",
      "professor": "임연섭"
    },
    {
      "name": "시스템 보안",
      "professor": "김성민"
    },
    {
      "name": "해킹프로그램실습",
      "professor": "장대희"
    },
    {
      "name": "융합보안 범죄대책론",
      "professor": "김학경"
    },
    {
      "name": "암호응용",
      "professor": "이주희"
    },
    {
      "name": "암호응용",
      "professor": "박새롬"
    },
    {
      "name": "웹해킹",
      "professor": "장대희"
    },
    {
      "name": "보안소프트웨어 분석과 개발",
      "professor": "이택"
    },
    {
      "name": "융합보안캡스톤디자인 1",
      "professor": "김경진"
    },
    {
      "name": "컴퓨터시스템관리",
      "professor": "김종완"
    },
    {
      "name": "시스템프로그래밍",
      "professor": "박지웅"
    },
    {
      "name": "서버시스템구축실습",
      "professor": "박지웅"
    },
    {
      "name": "정보ㆍ컴퓨터 교과교육론",
      "professor": "강수영"
    },
    {
      "name": "소프트웨어분석및설계",
      "professor": "서동수"
    },
    {
      "name": "프로젝트개발 및 창업",
      "professor": "박지웅"
    },
    {
      "name": "오픈소스 응용",
      "professor": "박지웅"
    },
    {
      "name": "인공지능",
      "professor": "오장민"
    },
    {
      "name": "지능형마케팅",
      "professor": "오장민"
    },
    {
      "name": "기계학습",
      "professor": "유재현"
    },
    {
      "name": "빅데이터분석",
      "professor": "김준영"
    },
    {
      "name": "지능형플랫폼",
      "professor": "이규중"
    },
    {
      "name": "정보시스템 캡스톤디자인",
      "professor": "정영희"
    },
    {
      "name": "디자인패턴",
      "professor": "홍의석"
    },
    {
      "name": "게임제작실습",
      "professor": "황주선"
    },
    {
      "name": "스마트센서응용 및 실습",
      "professor": "김준철"
    },
    {
      "name": "일반화학실험 1",
      "professor": "홍사미"
    },
    {
      "name": "청정융합 진로와 전망",
      "professor": "임종훈"
    },
    {
      "name": "융합과학개론",
      "professor": "양인목"
    },
    {
      "name": "반응속도론",
      "professor": "이세현"
    },
    {
      "name": "일반물리실험",
      "professor": "엄재현"
    },
    {
      "name": "융합화학",
      "professor": "황안나"
    },
    {
      "name": "재료과학과 공학 1",
      "professor": "고상기"
    },
    {
      "name": "열역학",
      "professor": "김정수"
    },
    {
      "name": "환경과 지속가능성",
      "professor": "양인목"
    },
    {
      "name": "창의성 공학설계와 창업(캡스톤디자인) 1",
      "professor": "이형곤"
    },
    {
      "name": "국제환경규제",
      "professor": "양인목"
    },
    {
      "name": "전기화학",
      "professor": "이세현"
    },
    {
      "name": "에너지소재공학",
      "professor": "이세현"
    },
    {
      "name": "환경·소재·에너지공학 실습 1",
      "professor": "이형민"
    },
    {
      "name": "산학협력인턴십 1",
      "professor": "양인목"
    },
    {
      "name": "소재공정기술",
      "professor": "임종훈"
    },
    {
      "name": "융합공학세미나",
      "professor": "양인목"
    },
    {
      "name": "바이오식품공학 진로와 전망",
      "professor": "김종훈"
    },
    {
      "name": "식품 물리화학",
      "professor": "김종훈"
    },
    {
      "name": "생화학 1",
      "professor": "나혜경"
    },
    {
      "name": "유기화학",
      "professor": "윤현근"
    },
    {
      "name": "바이오식품미생물공학",
      "professor": "현정은"
    },
    {
      "name": "생명공학",
      "professor": "김종훈"
    },
    {
      "name": "식품분석실험",
      "professor": "김종훈"
    },
    {
      "name": "바이오식품공학 1",
      "professor": "장혜원"
    },
    {
      "name": "바이오식품화학 1",
      "professor": "윤현근"
    },
    {
      "name": "발효식품공학",
      "professor": "현정은"
    },
    {
      "name": "기능성 식품 생리 기전학",
      "professor": "나혜경"
    },
    {
      "name": "바이오식품안전실험",
      "professor": "현정은"
    },
    {
      "name": "기능성식품학",
      "professor": "윤현근"
    },
    {
      "name": "바이오식품가공학",
      "professor": "장혜원"
    },
    {
      "name": "바이오식품가공학 및 공학 실험",
      "professor": "장혜원"
    },
    {
      "name": "식품소재 효능 평가실험",
      "professor": "나혜경"
    },
    {
      "name": "바이오식품설계",
      "professor": "김종훈"
    },
    {
      "name": "일반생물학실험 1",
      "professor": "임동현"
    },
    {
      "name": "일반생물학실험 1",
      "professor": "이성호"
    },
    {
      "name": "일반생물학실험 1",
      "professor": "고병준"
    },
    {
      "name": "일반생물학실험 1",
      "professor": "박은진"
    },
    {
      "name": "생물공학기초계산",
      "professor": ""
    },
    {
      "name": "세포학",
      "professor": "강창수"
    },
    {
      "name": "식물분류학",
      "professor": "김상태"
    },
    {
      "name": "식물분류학실험",
      "professor": "김상태"
    },
    {
      "name": "생물공정공학",
      "professor": ""
    },
    {
      "name": "유전공학",
      "professor": "강창수"
    },
    {
      "name": "동물생리학",
      "professor": "전용필"
    },
    {
      "name": "생물통계학",
      "professor": "강태욱"
    },
    {
      "name": "미생물유전공학실험",
      "professor": "윤진호"
    },
    {
      "name": "생물 교과교육론",
      "professor": "안주현"
    },
    {
      "name": "줄기세포공학",
      "professor": "전용필"
    },
    {
      "name": "생명공학창의설계 1",
      "professor": "윤진호"
    },
    {
      "name": "발생공학실험",
      "professor": "전용필"
    },
    {
      "name": "바이오분석기기학",
      "professor": ""
    },
    {
      "name": "일반생물학 Ⅰ",
      "professor": "윤진호"
    },
    {
      "name": "일반생물학 Ⅰ",
      "professor": "강창수"
    },
    {
      "name": "일반생물학 Ⅰ",
      "professor": "송재민"
    },
    {
      "name": "일반생물학 Ⅰ",
      "professor": "권혜경"
    },
    {
      "name": "고급파이썬프로그래밍",
      "professor": "김준영"
    },
    {
      "name": "고급파이썬프로그래밍",
      "professor": "이준세"
    },
    {
      "name": "모바일프로그래밍",
      "professor": "조성우"
    },
    {
      "name": "AI서비스설계",
      "professor": "김호성"
    },
    {
      "name": "IoT창의공학설계",
      "professor": "홍기형"
    },
    {
      "name": "디지털회로및실습",
      "professor": "이준세"
    },
    {
      "name": "교육실습(보건)",
      "professor": ""
    },
    {
      "name": "성장과 발달",
      "professor": "천주영"
    },
    {
      "name": "간호학개론",
      "professor": "최은영"
    },
    {
      "name": "미생물학",
      "professor": "윤진호"
    },
    {
      "name": "인간관계와 의사소통",
      "professor": "김덕진"
    },
    {
      "name": "기본간호학 1",
      "professor": "김영주"
    },
    {
      "name": "임상약리학",
      "professor": "기지선"
    },
    {
      "name": "병리학",
      "professor": "박찬숙"
    },
    {
      "name": "영양과 간호",
      "professor": "조무용"
    },
    {
      "name": "성인간호학 1",
      "professor": "양승애"
    },
    {
      "name": "건강사정",
      "professor": "임경춘"
    },
    {
      "name": "기본간호학실습 1",
      "professor": "김영주"
    },
    {
      "name": "기본간호학실습 1",
      "professor": "송효빈"
    },
    {
      "name": "기본간호학실습 1",
      "professor": "나윤희"
    },
    {
      "name": "건강사정실습",
      "professor": "임경춘"
    },
    {
      "name": "지역사회간호학 1",
      "professor": "조정민"
    },
    {
      "name": "성인간호학 실습 1",
      "professor": "조무용"
    },
    {
      "name": "여성건강간호학 2",
      "professor": "전나미"
    },
    {
      "name": "정신간호학 1",
      "professor": "정명실"
    },
    {
      "name": "아동간호학 2",
      "professor": "장은영"
    },
    {
      "name": "성인간호학 4",
      "professor": "김애리"
    },
    {
      "name": "노인간호학",
      "professor": "천주영"
    },
    {
      "name": "지역사회간호학 2",
      "professor": "이영미"
    },
    {
      "name": "간호관리학",
      "professor": "최은영"
    },
    {
      "name": "지역사회간호학실습1",
      "professor": "조정민"
    },
    {
      "name": "성인간호학실습 3",
      "professor": "조무용"
    },
    {
      "name": "정신간호학실습 2",
      "professor": "정명실"
    },
    {
      "name": "성인간호학 6",
      "professor": "김애리"
    },
    {
      "name": "일반생물학 1",
      "professor": "송재민"
    },
    {
      "name": "의과학과 화학입문 1",
      "professor": "이향애"
    },
    {
      "name": "미생물학",
      "professor": "송재민"
    },
    {
      "name": "생화학 1",
      "professor": "임동현"
    },
    {
      "name": "생리학 1",
      "professor": "전민영"
    },
    {
      "name": "면역학",
      "professor": "송재민"
    },
    {
      "name": "의약화학 1",
      "professor": "이지연"
    },
    {
      "name": "의학개론 1",
      "professor": "전민영"
    },
    {
      "name": "교육실습(영양)",
      "professor": ""
    },
    {
      "name": "영양교육 및 상담실습",
      "professor": "이승민"
    },
    {
      "name": "식품가공학 및 실험",
      "professor": "윤현근"
    },
    {
      "name": "조리과학실험",
      "professor": "표영희"
    },
    {
      "name": "단체급식관리",
      "professor": "고성희"
    },
    {
      "name": "임상영양학",
      "professor": "이명숙"
    },
    {
      "name": "단체급식 및 실습",
      "professor": "고성희"
    },
    {
      "name": "영양사현장실습",
      "professor": "이승민"
    },
    {
      "name": "보건영양학",
      "professor": "심선아"
    },
    {
      "name": "트레이닝방법론",
      "professor": "이윤미"
    },
    {
      "name": "스포츠심리학",
      "professor": "성용석"
    },
    {
      "name": "골프 1",
      "professor": "임우택"
    },
    {
      "name": "골프 1",
      "professor": "박경연"
    },
    {
      "name": "배드민턴 1",
      "professor": "신희광"
    },
    {
      "name": "스포츠통계",
      "professor": "송혜리"
    },
    {
      "name": "스포츠경영학",
      "professor": "정영남"
    },
    {
      "name": "운동처방",
      "professor": "최승욱"
    },
    {
      "name": "운동역학",
      "professor": "구본호"
    },
    {
      "name": "스트레칭",
      "professor": "유정완"
    },
    {
      "name": "대체요법",
      "professor": "박성영"
    },
    {
      "name": "스포츠레저현장실습",
      "professor": "최승욱"
    },
    {
      "name": "스포츠 마케팅 사례연구",
      "professor": "정영남"
    },
    {
      "name": "뉴스포츠",
      "professor": "최재희"
    },
    {
      "name": "운동재활마사지",
      "professor": "박지명"
    },
    {
      "name": "스포츠카운셀링",
      "professor": "김동현"
    },
    {
      "name": "운동손상학",
      "professor": "지무엽"
    },
    {
      "name": "병태생리학",
      "professor": "김희재"
    },
    {
      "name": "특수체육",
      "professor": "임상훈"
    },
    {
      "name": "장애인스포츠지도사(보치아)",
      "professor": "이정준"
    },
    {
      "name": "매트필라테스",
      "professor": "오정하"
    },
    {
      "name": "의학용어학",
      "professor": "전민영"
    },
    {
      "name": "유기화학 1",
      "professor": "이지연"
    },
    {
      "name": "의약품분석학",
      "professor": "고병준"
    },
    {
      "name": "식품학개론",
      "professor": "표영희"
    },
    {
      "name": "식품화학",
      "professor": "표영희"
    },
    {
      "name": "영양생화학",
      "professor": "이명숙"
    },
    {
      "name": "식품미생물학",
      "professor": "현정은"
    },
    {
      "name": "보건통계학",
      "professor": "강태욱"
    },
    {
      "name": "보건학",
      "professor": "강태욱"
    },
    {
      "name": "급식경영 및 인사관리",
      "professor": "고성희"
    },
    {
      "name": "조리원리",
      "professor": "이경연"
    },
    {
      "name": "고급영양학",
      "professor": "이승민"
    },
    {
      "name": "태권도",
      "professor": "김영진"
    },
    {
      "name": "볼링 1",
      "professor": "정영남"
    },
    {
      "name": "레저론",
      "professor": "임우택"
    },
    {
      "name": "탁구",
      "professor": "이시은"
    },
    {
      "name": "탁구",
      "professor": ""
    },
    {
      "name": "수영",
      "professor": "이수정"
    },
    {
      "name": "운동재활개론",
      "professor": "김영주"
    },
    {
      "name": "요가지도법",
      "professor": "육영숙"
    },
    {
      "name": "스포츠시설관리",
      "professor": "조형선"
    },
    {
      "name": "해양스포츠 1",
      "professor": "정영남"
    },
    {
      "name": "운동생리학",
      "professor": "정세원"
    },
    {
      "name": "구기",
      "professor": "장덕진"
    },
    {
      "name": "승마 1",
      "professor": "이금주"
    },
    {
      "name": "운동과 건강",
      "professor": "권보하"
    },
    {
      "name": "근관절 기능해부학",
      "professor": "김영주"
    },
    {
      "name": "스포츠재활심리학",
      "professor": "육영숙"
    },
    {
      "name": "상해예방과 재활테이핑",
      "professor": "송기재"
    },
    {
      "name": "유도 1",
      "professor": "이소연"
    },
    {
      "name": "가정 교과교육론",
      "professor": "이신애"
    },
    {
      "name": "가정 논리 및 논술",
      "professor": "김선주"
    },
    {
      "name": "패션소재의 이해",
      "professor": "김미경"
    },
    {
      "name": "서양복식문화",
      "professor": "김금화"
    },
    {
      "name": "패션마케팅",
      "professor": "정이재"
    },
    {
      "name": "인체와 의복구성",
      "professor": "김경희"
    },
    {
      "name": "인체와 의복구성",
      "professor": "김민경"
    },
    {
      "name": "인체와 의복구성",
      "professor": "문윤경"
    },
    {
      "name": "전통과 현대염색기법",
      "professor": "최경미"
    },
    {
      "name": "드레이핑",
      "professor": "김미영"
    },
    {
      "name": "어패럴 메이킹",
      "professor": "안연숙"
    },
    {
      "name": "어패럴 메이킹",
      "professor": "김미영"
    },
    {
      "name": "패션니트",
      "professor": "유화숙"
    },
    {
      "name": "한국복식디자인 2",
      "professor": "장민정"
    },
    {
      "name": "패턴제작 및 구성",
      "professor": "김서영"
    },
    {
      "name": "패션머천다이징",
      "professor": "김해정"
    },
    {
      "name": "한국복식프로젝트",
      "professor": "장민정"
    },
    {
      "name": "패션디자인과 구성",
      "professor": "이혜선"
    },
    {
      "name": "마케팅 리서치 컨텐츠 기획",
      "professor": "정이재"
    },
    {
      "name": "특수소재와 봉제",
      "professor": "안연숙"
    },
    {
      "name": "패턴 CAD",
      "professor": "김미영"
    },
    {
      "name": "패션디자인CAD 2",
      "professor": "김덕하"
    },
    {
      "name": "패션디자인CAD 2",
      "professor": "류한나"
    },
    {
      "name": "패션디자인CAD 2",
      "professor": "권수희"
    },
    {
      "name": "패션창업과 마케팅 1",
      "professor": "박은주"
    },
    {
      "name": "패션창업과 마케팅 1",
      "professor": "이영주"
    },
    {
      "name": "졸업프로젝트",
      "professor": "장민정"
    },
    {
      "name": "졸업프로젝트",
      "professor": "이영주"
    },
    {
      "name": "졸업프로젝트",
      "professor": "염미선"
    },
    {
      "name": "졸업프로젝트",
      "professor": "오지혜"
    },
    {
      "name": "패션포트폴리오",
      "professor": "염미선"
    },
    {
      "name": "패션포트폴리오",
      "professor": "이재민"
    },
    {
      "name": "뷰티산업의 진로와 전망",
      "professor": "김민경"
    },
    {
      "name": "미용학개론",
      "professor": "한지수"
    },
    {
      "name": "기초메이크업",
      "professor": "조은진"
    },
    {
      "name": "기초메이크업",
      "professor": "백주현"
    },
    {
      "name": "전공 실무중국어",
      "professor": "이경"
    },
    {
      "name": "전공 실무영어",
      "professor": "앤드리아 톨레프슨"
    },
    {
      "name": "체형관리에스테틱",
      "professor": "박초희"
    },
    {
      "name": "체형관리에스테틱",
      "professor": "임우경"
    },
    {
      "name": "모발과학",
      "professor": "박초희"
    },
    {
      "name": "기초헤어스타일링",
      "professor": "이정림"
    },
    {
      "name": "응용메이크업",
      "professor": "황선희"
    },
    {
      "name": "응용메이크업",
      "professor": "김정하"
    },
    {
      "name": "응용메이크업",
      "professor": "조은진"
    },
    {
      "name": "미용문화사",
      "professor": "김세은"
    },
    {
      "name": "공중보건과 위생",
      "professor": "송연재"
    },
    {
      "name": "공중보건과 위생",
      "professor": "김규리"
    },
    {
      "name": "화장품 제조 및 실습",
      "professor": "김주덕"
    },
    {
      "name": "컬러 코디네이트 미학",
      "professor": "백주현"
    },
    {
      "name": "뷰티마케팅",
      "professor": "신정원"
    },
    {
      "name": "뷰티마케팅",
      "professor": "김지은"
    },
    {
      "name": "화장품 성분학",
      "professor": "박초희"
    },
    {
      "name": "3D 일러스트레이션",
      "professor": "하승아"
    },
    {
      "name": "화보 및 영상 메이크업",
      "professor": "김현진"
    },
    {
      "name": "헤어디자인",
      "professor": "이정림"
    },
    {
      "name": "무대분장",
      "professor": "황선희"
    },
    {
      "name": "무대분장",
      "professor": "이경"
    },
    {
      "name": "메디컬 에스테틱",
      "professor": "박한나"
    },
    {
      "name": "화장 심리학",
      "professor": "김지은"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "박초희"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "서현우"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "황선희"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "이유나"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "한지수"
    },
    {
      "name": "졸업작품 및 논문",
      "professor": "이경"
    },
    {
      "name": "소비자학",
      "professor": "장성철"
    },
    {
      "name": "소비자학",
      "professor": "노영래"
    },
    {
      "name": "가계경제와 시장",
      "professor": "차경욱"
    },
    {
      "name": "가계경제와 시장",
      "professor": "석재혜"
    },
    {
      "name": "가정생활문화",
      "professor": "주영애"
    },
    {
      "name": "소비자재무설계",
      "professor": "박나영"
    },
    {
      "name": "소비자안전세미나",
      "professor": "허경옥"
    },
    {
      "name": "여가문화산업",
      "professor": "홍영윤"
    },
    {
      "name": "서비스산업과 프로세스관리",
      "professor": "박복임"
    },
    {
      "name": "소비자조사분석과 실습",
      "professor": "노영래"
    },
    {
      "name": "융복합신기술과 소비자",
      "professor": "양수진"
    },
    {
      "name": "소비자유통과 창업",
      "professor": "양수진"
    },
    {
      "name": "생활문화지도실무",
      "professor": "백주원"
    },
    {
      "name": "라이프스타일과 생활문화산업",
      "professor": "백주원"
    },
    {
      "name": "기업프로모션연출실무",
      "professor": "박현명"
    },
    {
      "name": "통계분석 및 실습",
      "professor": "허경옥"
    },
    {
      "name": "금융소비자와 시장",
      "professor": "이기연"
    },
    {
      "name": "문화산업비즈니스와 고객만족",
      "professor": "임태희"
    },
    {
      "name": "학교 안전∙건강교육의 이론과 실습",
      "professor": "한종극"
    },
    {
      "name": "교육심리",
      "professor": "조윤정"
    },
    {
      "name": "교육방법 및 교육공학",
      "professor": "노석준"
    },
    {
      "name": "교육행정 및 교육경영",
      "professor": "김지현"
    },
    {
      "name": "교육행정 및 교육경영",
      "professor": "임성연"
    },
    {
      "name": "교육행정 및 교육경영",
      "professor": "김주경"
    },
    {
      "name": "교육과정",
      "professor": "황순예"
    },
    {
      "name": "교육평가",
      "professor": "강태훈"
    },
    {
      "name": "교육사회",
      "professor": "노경란"
    },
    {
      "name": "교육철학 및 교육사",
      "professor": "심형진"
    },
    {
      "name": "특수교육학개론",
      "professor": "연준모"
    },
    {
      "name": "특수교육학개론",
      "professor": "최은정"
    },
    {
      "name": "교직실무",
      "professor": "이은혜"
    },
    {
      "name": "교직실무",
      "professor": "김미령"
    },
    {
      "name": "교직실무",
      "professor": "권경숙"
    },
    {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "연준모"
    },
    {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "이윤옥"
    },
    {
      "name": "평생교육",
      "professor": "노경란"
    },
    {
      "name": "교육학의 이해",
      "professor": "심형진"
    },
    {
      "name": "자기주도학습과 학습코칭",
      "professor": "조윤정"
    },
    {
      "name": "교육철학",
      "professor": "심형진"
    },
    {
      "name": "학습동기와 정서",
      "professor": "조윤정"
    },
    {
      "name": "교육연구방법",
      "professor": "강태훈"
    },
    {
      "name": "교사론",
      "professor": ""
    },
    {
      "name": "교수설계",
      "professor": "노석준"
    },
    {
      "name": "비교교육학",
      "professor": "김지현"
    },
    {
      "name": "교육학 교과교육론",
      "professor": "문민지"
    },
    {
      "name": "평생교육경영론",
      "professor": "노경란"
    },
    {
      "name": "특수교육학",
      "professor": "연준모"
    },
    {
      "name": "교육측정 및 검사",
      "professor": "강태훈"
    },
    {
      "name": "교육통계",
      "professor": "김명연"
    },
    {
      "name": "문화와 사회",
      "professor": "조대훈"
    },
    {
      "name": "법과 사회",
      "professor": "모춘흥"
    },
    {
      "name": "인간과 사회",
      "professor": "정영선"
    },
    {
      "name": "국민경제와 경제교육",
      "professor": "박형준"
    },
    {
      "name": "자기이해 및 사회교육 진로탐색",
      "professor": "조대훈"
    },
    {
      "name": "미국과 민주주의",
      "professor": "서현진"
    },
    {
      "name": "금융과 금융교육",
      "professor": "박형준"
    },
    {
      "name": "사회학자의 생애와 사상",
      "professor": "정영선"
    },
    {
      "name": "일반사회 교과교육론",
      "professor": "조대훈"
    },
    {
      "name": "사회 논리 및 논술",
      "professor": "송현정"
    },
    {
      "name": "게임 활용 경제교육",
      "professor": "박형준"
    },
    {
      "name": "민주정치와 시민교육",
      "professor": "서현진"
    },
    {
      "name": "글로벌·다문화시대의 교수법",
      "professor": "조대훈"
    },
    {
      "name": "사회문제의 이해",
      "professor": "정영선"
    },
    {
      "name": "전통윤리",
      "professor": "윤용남"
    },
    {
      "name": "정치와 윤리",
      "professor": "김혜림"
    },
    {
      "name": "논리학",
      "professor": "권수현"
    },
    {
      "name": "자기이해 및 윤리교육 진로탐색",
      "professor": "문경호"
    },
    {
      "name": "다문화사회의 생명윤리",
      "professor": "이경희"
    },
    {
      "name": "윤리학개론",
      "professor": "권수현"
    },
    {
      "name": "민주주의론",
      "professor": "이종철"
    },
    {
      "name": "민주시민 가치교육론",
      "professor": "문경호"
    },
    {
      "name": "시민교육론",
      "professor": "김혜수"
    },
    {
      "name": "서양고전과 윤리",
      "professor": "편상범"
    },
    {
      "name": "도덕윤리 교과교육론",
      "professor": "문경호"
    },
    {
      "name": "한국윤리사상",
      "professor": "윤용남"
    },
    {
      "name": "불교학 개론",
      "professor": "윤민향"
    },
    {
      "name": "윤리와 논술",
      "professor": "이은호"
    },
    {
      "name": "근현대윤리이론",
      "professor": "권수현"
    },
    {
      "name": "서예",
      "professor": "이진선"
    },
    {
      "name": "기초한문 1",
      "professor": "장진엽"
    },
    {
      "name": "한문학개론",
      "professor": "황아영"
    },
    {
      "name": "한자문화권의 이해",
      "professor": "김용재"
    },
    {
      "name": "자기이해 및 한문교육 진로 탐색",
      "professor": "김용재"
    },
    {
      "name": "한자교육방법론",
      "professor": "김희영"
    },
    {
      "name": "고전해석방법론",
      "professor": "장진엽"
    },
    {
      "name": "경서강독",
      "professor": "김용재"
    },
    {
      "name": "한국한문학사",
      "professor": "류준경"
    },
    {
      "name": "한문 교과교육론",
      "professor": "정효영"
    },
    {
      "name": "한문 논리 및 논술",
      "professor": "김연수"
    },
    {
      "name": "중국역사산문",
      "professor": "장진엽"
    },
    {
      "name": "시화강독",
      "professor": "장진엽"
    },
    {
      "name": "한중고사원문선독",
      "professor": "김용재"
    },
    {
      "name": "교육실습(유치원)",
      "professor": ""
    },
    {
      "name": "동요반주법 1",
      "professor": "강보라"
    },
    {
      "name": "자기이해 및 유아교육 진로탐색",
      "professor": "김고은"
    },
    {
      "name": "영유아발달",
      "professor": "서현선"
    },
    {
      "name": "유아교육개론",
      "professor": "배지희"
    },
    {
      "name": "유아교육사상",
      "professor": "권경숙"
    },
    {
      "name": "보육과정",
      "professor": "황인애"
    },
    {
      "name": "유아과학교육",
      "professor": "전홍주"
    },
    {
      "name": "동요반주법 3",
      "professor": "강보라"
    },
    {
      "name": "유아언어교육",
      "professor": "이윤영"
    },
    {
      "name": "놀이지도",
      "professor": "정미애"
    },
    {
      "name": "유아사회교육",
      "professor": "배지희"
    },
    {
      "name": "다매체 유아교육 방법론",
      "professor": "조미영"
    },
    {
      "name": "유치원 교과교육론",
      "professor": "전홍주"
    },
    {
      "name": "유치원 논리 및 논술",
      "professor": "김고은"
    },
    {
      "name": "유아교사론",
      "professor": "김은령"
    },
    {
      "name": "보육실습",
      "professor": "황인애"
    },
    {
      "name": "유아를 위한 세계시민교육",
      "professor": "김고은"
    },
    {
      "name": "입체와 공간",
      "professor": "김민형"
    },
    {
      "name": "입체와 공간",
      "professor": "신예진"
    },
    {
      "name": "입체와 공간",
      "professor": "김주영"
    },
    {
      "name": "입체와 공간",
      "professor": "배성미"
    },
    {
      "name": "미술사와 창작",
      "professor": "민경소"
    },
    {
      "name": "획과 여백 1",
      "professor": "노신경"
    },
    {
      "name": "획과 여백 1",
      "professor": "권기범"
    },
    {
      "name": "획과 여백 1",
      "professor": "홍지윤"
    },
    {
      "name": "획과 여백 1",
      "professor": "채효진"
    },
    {
      "name": "획과 여백 1",
      "professor": "김선영"
    },
    {
      "name": "획과 여백 1",
      "professor": "강유림"
    },
    {
      "name": "모델링",
      "professor": "김보라"
    },
    {
      "name": "모델링",
      "professor": "김성복"
    },
    {
      "name": "한국미술사 1",
      "professor": "이보연"
    },
    {
      "name": "조각의 이해",
      "professor": "정정주"
    },
    {
      "name": "인체표현",
      "professor": "이규성"
    },
    {
      "name": "인체표현",
      "professor": "조병왕"
    },
    {
      "name": "인체표현",
      "professor": "김정연"
    },
    {
      "name": "인체표현",
      "professor": "박영근"
    },
    {
      "name": "인체표현",
      "professor": "이승애"
    },
    {
      "name": "인체표현",
      "professor": "이정희"
    },
    {
      "name": "한국회화사",
      "professor": "이보연"
    },
    {
      "name": "현대수묵화연구1",
      "professor": "장재록"
    },
    {
      "name": "현대수묵화연구1",
      "professor": "권순영"
    },
    {
      "name": "채색화기초1",
      "professor": "최익진"
    },
    {
      "name": "채색화기초1",
      "professor": "이만수"
    },
    {
      "name": "서화기초 1",
      "professor": "성태훈"
    },
    {
      "name": "서화기초 1",
      "professor": "임진성"
    },
    {
      "name": "현대동양화 1",
      "professor": "하용주"
    },
    {
      "name": "현대동양화 1",
      "professor": "권기범"
    },
    {
      "name": "기초조형1",
      "professor": "노신경"
    },
    {
      "name": "기초조형1",
      "professor": "김희진"
    },
    {
      "name": "현장드로잉1",
      "professor": "김민호"
    },
    {
      "name": "현장드로잉1",
      "professor": "박형진"
    },
    {
      "name": "한국근현대동양화 이론과 현장",
      "professor": "이보연"
    },
    {
      "name": "미디어연구 스튜디오1",
      "professor": "임장순"
    },
    {
      "name": "색채와 표현1",
      "professor": "박재철"
    },
    {
      "name": "색채와 표현1",
      "professor": "이만수"
    },
    {
      "name": "융합매체1",
      "professor": "김혜리"
    },
    {
      "name": "융합매체1",
      "professor": "정은별"
    },
    {
      "name": "현대동양화3",
      "professor": "정성윤"
    },
    {
      "name": "현대동양화3",
      "professor": "손문일"
    },
    {
      "name": "한국회화 스튜디오1",
      "professor": "유근택"
    },
    {
      "name": "한국회화 스튜디오1",
      "professor": "이만수"
    },
    {
      "name": "창작스튜디오1",
      "professor": "권기범"
    },
    {
      "name": "창작스튜디오1",
      "professor": "노신경"
    },
    {
      "name": "현대회화 1",
      "professor": "최병진"
    },
    {
      "name": "현대회화 1",
      "professor": "임상빈"
    },
    {
      "name": "현대드로잉 1",
      "professor": "안중경"
    },
    {
      "name": "현대드로잉 1",
      "professor": "박관택"
    },
    {
      "name": "재현적표현 1",
      "professor": "김지은"
    },
    {
      "name": "재현적표현 1",
      "professor": "윤영혜"
    },
    {
      "name": "서양근세미술과 문화",
      "professor": "이혜진"
    },
    {
      "name": "현대판화 1",
      "professor": "신현희"
    },
    {
      "name": "현대판화 1",
      "professor": "장성숙"
    },
    {
      "name": "회화적 사진",
      "professor": "조병왕"
    },
    {
      "name": "회화적 사진",
      "professor": "백지선"
    },
    {
      "name": "현대판화 3",
      "professor": "장서우"
    },
    {
      "name": "현대판화 3",
      "professor": "이지영"
    },
    {
      "name": "뉴미디어 1",
      "professor": "임상빈"
    },
    {
      "name": "현대회화 3(구상)",
      "professor": "박영근"
    },
    {
      "name": "현대회화 3(구상)",
      "professor": "김정연"
    },
    {
      "name": "현대회화 3(추상)",
      "professor": "서재정"
    },
    {
      "name": "현대회화 3(추상)",
      "professor": "이진주"
    },
    {
      "name": "현대회화 3(복합매체)",
      "professor": "조병왕"
    },
    {
      "name": "현대회화 3(복합매체)",
      "professor": "김태서"
    },
    {
      "name": "서양 시각예술론",
      "professor": "이혜진"
    },
    {
      "name": "포트폴리오 연구 1",
      "professor": "박미숙"
    },
    {
      "name": "포트폴리오 연구 1",
      "professor": "나광호"
    },
    {
      "name": "졸업작품연구 1",
      "professor": "임상빈"
    },
    {
      "name": "졸업작품연구 2",
      "professor": "박영근"
    },
    {
      "name": "졸업작품연구 2",
      "professor": "조병왕"
    },
    {
      "name": "졸업작품연구 3",
      "professor": "조병왕"
    },
    {
      "name": "졸업작품연구 3",
      "professor": "박영근"
    },
    {
      "name": "졸업작품연구 4",
      "professor": "김정연"
    },
    {
      "name": "미디어 아트 1",
      "professor": "김민정"
    },
    {
      "name": "미디어 아트 1",
      "professor": "이지숙"
    },
    {
      "name": "미술사 1",
      "professor": "이재은"
    },
    {
      "name": "동시대 조각의 현장 1",
      "professor": "이연숙"
    },
    {
      "name": "형상조소1",
      "professor": "권치규"
    },
    {
      "name": "석조기법 1",
      "professor": "김병규"
    },
    {
      "name": "현대조각 1",
      "professor": "노주환"
    },
    {
      "name": "현대조각 1",
      "professor": "정정주"
    },
    {
      "name": "형상표현1",
      "professor": "김성복"
    },
    {
      "name": "재료기법 1",
      "professor": "이지훈"
    },
    {
      "name": "재료기법 1",
      "professor": "조영철"
    },
    {
      "name": "디지털 조형 1",
      "professor": "오원영"
    },
    {
      "name": "디지털 조형 1",
      "professor": "엄아롱"
    },
    {
      "name": "현대조각의 흐름",
      "professor": "강은주"
    },
    {
      "name": "자유창작 1",
      "professor": "노주환"
    },
    {
      "name": "2D디지털그래픽 1",
      "professor": "조희은"
    },
    {
      "name": "통합금속공예실기 1",
      "professor": "김송"
    },
    {
      "name": "통합금속공예실기 1",
      "professor": "공새롬"
    },
    {
      "name": "통합금속공예실기 1",
      "professor": "신혜정"
    },
    {
      "name": "통합도자공예실기 1",
      "professor": "박태성"
    },
    {
      "name": "통합도자공예실기 1",
      "professor": "김시만"
    },
    {
      "name": "텍스타일디자인프로세스 1",
      "professor": "정병헌"
    },
    {
      "name": "금속전공이론 1",
      "professor": "현광훈"
    },
    {
      "name": "섬유소재분석론",
      "professor": "김수연"
    },
    {
      "name": "3D디지털모델링 1",
      "professor": "이슬범"
    },
    {
      "name": "3D디지털모델링 1",
      "professor": "이석진"
    },
    {
      "name": "금속표현연구 1",
      "professor": "원재선"
    },
    {
      "name": "주얼리디자인기초 1",
      "professor": "최경미"
    },
    {
      "name": "도자표현연구 1",
      "professor": "손세은"
    },
    {
      "name": "패턴디자인기초",
      "professor": "박좌용"
    },
    {
      "name": "도자리빙디자인기초 1",
      "professor": "한영숙"
    },
    {
      "name": "텍스타일소재개발 1",
      "professor": "김수연"
    },
    {
      "name": "텍스타일드로잉1",
      "professor": "이재선"
    },
    {
      "name": "도자장식기초 1",
      "professor": "이은미"
    },
    {
      "name": "공예와문화 1",
      "professor": "김시만"
    },
    {
      "name": "패션컬러기획",
      "professor": "고현주"
    },
    {
      "name": "도자리빙디자인 1",
      "professor": "권성은"
    },
    {
      "name": "주얼리디자인 1",
      "professor": "신혜정"
    },
    {
      "name": "금속리빙디자인 1",
      "professor": "김동현"
    },
    {
      "name": "산업금속프로세스 1",
      "professor": "김대건"
    },
    {
      "name": "디지털세라믹프로세스1",
      "professor": "한영숙"
    },
    {
      "name": "디지털써피스디자인 1",
      "professor": "김수연"
    },
    {
      "name": "아트패브릭1",
      "professor": "이재선"
    },
    {
      "name": "니트디자인프로세스",
      "professor": "이민경"
    },
    {
      "name": "테이블웨어프로젝트 1",
      "professor": "김윤지"
    },
    {
      "name": "텍스타일프로덕트디자인 1",
      "professor": "김수연"
    },
    {
      "name": "테이블웨어디자인 1",
      "professor": "박태성"
    },
    {
      "name": "공간장식도자 1",
      "professor": "한영숙"
    },
    {
      "name": "상품개발 및 마케팅 1",
      "professor": "한명호"
    },
    {
      "name": "금속리빙디자인 3",
      "professor": "이재익"
    },
    {
      "name": "아트주얼리 1",
      "professor": "신혜정"
    },
    {
      "name": "세라믹프로덕트 디자인 1",
      "professor": "정소영"
    },
    {
      "name": "텍스타일디자인기획 1",
      "professor": "박좌용"
    },
    {
      "name": "주얼리디자인기획 1",
      "professor": "김송"
    },
    {
      "name": "산업디자인기초",
      "professor": "최인환"
    },
    {
      "name": "산업디자인기초",
      "professor": "구상"
    },
    {
      "name": "산업디자인기초",
      "professor": "한옥재"
    },
    {
      "name": "산업디자인기초",
      "professor": "김현석"
    },
    {
      "name": "시각디자인 1",
      "professor": "장선희"
    },
    {
      "name": "시각디자인 1",
      "professor": "이은영"
    },
    {
      "name": "리빙디자인",
      "professor": "이홍구"
    },
    {
      "name": "타이포그래피 1",
      "professor": "황상준"
    },
    {
      "name": "타이포그래피 1",
      "professor": "김장우"
    },
    {
      "name": "타이포그래피 1",
      "professor": "KANG JU HYUN"
    },
    {
      "name": "초급 공간디자인실습",
      "professor": "장기윤"
    },
    {
      "name": "초급 공간디자인실습",
      "professor": "안민선"
    },
    {
      "name": "초급 공간디자인실습",
      "professor": "유은정"
    },
    {
      "name": "타임베이스 그래픽",
      "professor": "김도식"
    },
    {
      "name": "모션그래픽 워크샵 1",
      "professor": "이명숙"
    },
    {
      "name": "중급 공간디자인실습 1",
      "professor": "홍승석"
    },
    {
      "name": "인테리어디자인",
      "professor": "윤현경"
    },
    {
      "name": "사용자경험디자인",
      "professor": "김혜린"
    },
    {
      "name": "정보디자인 1",
      "professor": "권다은"
    },
    {
      "name": "브랜딩1",
      "professor": "장혜진"
    },
    {
      "name": "브랜딩1",
      "professor": "윤지영"
    },
    {
      "name": "스토리텔링디자인",
      "professor": "김민석"
    },
    {
      "name": "편집디자인",
      "professor": "양희재"
    },
    {
      "name": "인터페이스디자인 1",
      "professor": "신수민"
    },
    {
      "name": "인터페이스디자인 1",
      "professor": "박한진"
    },
    {
      "name": "디지털이미징 1",
      "professor": "박한진"
    },
    {
      "name": "3D프린팅",
      "professor": "최인환"
    },
    {
      "name": "디자인실무와 커뮤니케이션",
      "professor": "장기윤"
    },
    {
      "name": "디자인미학",
      "professor": "장연정"
    },
    {
      "name": "디자인씽킹스튜디오 1",
      "professor": "최인환"
    },
    {
      "name": "시각디자인스튜디오 1",
      "professor": "장혜진"
    },
    {
      "name": "시각디자인스튜디오 1",
      "professor": "황상준"
    },
    {
      "name": "정보경험디자인스튜디오 1",
      "professor": "신수민"
    },
    {
      "name": "캡스톤디자인과 창업",
      "professor": "최성훈"
    },
    {
      "name": "공간디자인스튜디오 1",
      "professor": "장기윤"
    },
    {
      "name": "공간연출디자인스튜디오 1",
      "professor": "이소영"
    },
    {
      "name": "디자인브릿지",
      "professor": "김용환"
    },
    {
      "name": "모션그래픽스스튜디오 1",
      "professor": "이명숙"
    },
    {
      "name": "커뮤니케이션디자인 프로젝트",
      "professor": "김형우"
    },
    {
      "name": "이태리어딕션",
      "professor": "박지현"
    },
    {
      "name": "학내연주 1",
      "professor": "김은덕"
    },
    {
      "name": "전공실기 1",
      "professor": "박경희"
    },
    {
      "name": "전공실기 1",
      "professor": "민숙연"
    },
    {
      "name": "전공실기 1",
      "professor": "이정은"
    },
    {
      "name": "전공실기 1",
      "professor": "이지환"
    },
    {
      "name": "전공실기 1",
      "professor": "이영은"
    },
    {
      "name": "전공실기 1",
      "professor": "김경란"
    },
    {
      "name": "전공실기 1",
      "professor": "서보란"
    },
    {
      "name": "전공실기 1",
      "professor": "남정희"
    },
    {
      "name": "전공실기 1",
      "professor": "이현주"
    },
    {
      "name": "전공실기 1",
      "professor": "이고은"
    },
    {
      "name": "전공실기 1",
      "professor": "곽연희"
    },
    {
      "name": "전공실기 1",
      "professor": ""
    },
    {
      "name": "전공실기 1",
      "professor": "이재은"
    },
    {
      "name": "합창 1",
      "professor": "박승유"
    },
    {
      "name": "시창.청음 1",
      "professor": "성혜진"
    },
    {
      "name": "클래스피아노 1",
      "professor": "윤선영"
    },
    {
      "name": "성악 세미나 1",
      "professor": "박경신"
    },
    {
      "name": "독일예술가곡",
      "professor": "김샤론"
    },
    {
      "name": "학내연주 3",
      "professor": "김은덕"
    },
    {
      "name": "전공실기 3",
      "professor": "박경신"
    },
    {
      "name": "전공실기 3",
      "professor": "공영숙"
    },
    {
      "name": "전공실기 3",
      "professor": "박경희"
    },
    {
      "name": "전공실기 3",
      "professor": "정나리"
    },
    {
      "name": "전공실기 3",
      "professor": "인수연"
    },
    {
      "name": "전공실기 3",
      "professor": "이영은"
    },
    {
      "name": "전공실기 3",
      "professor": "김혜란"
    },
    {
      "name": "전공실기 3",
      "professor": "김경란"
    },
    {
      "name": "전공실기 3",
      "professor": "서보란"
    },
    {
      "name": "전공실기 3",
      "professor": "남정희"
    },
    {
      "name": "전공실기 3",
      "professor": ""
    },
    {
      "name": "합창 3",
      "professor": "박승유"
    },
    {
      "name": "시창.청음 3",
      "professor": "성혜진"
    },
    {
      "name": "클래스피아노 3",
      "professor": "이신애"
    },
    {
      "name": "화성법1",
      "professor": "김설향"
    },
    {
      "name": "성악 세미나 3",
      "professor": "박지현"
    },
    {
      "name": "성악 인턴십 1",
      "professor": "소수정"
    },
    {
      "name": "프랑스예술가곡",
      "professor": "권세연"
    },
    {
      "name": "성악문헌 1",
      "professor": "송혜진"
    },
    {
      "name": "학내연주 5",
      "professor": "김은덕"
    },
    {
      "name": "전공실기 5",
      "professor": "오미선"
    },
    {
      "name": "전공실기 5",
      "professor": "박지현"
    },
    {
      "name": "전공실기 5",
      "professor": "공영숙"
    },
    {
      "name": "전공실기 5",
      "professor": "박경희"
    },
    {
      "name": "전공실기 5",
      "professor": "정나리"
    },
    {
      "name": "전공실기 5",
      "professor": "인수연"
    },
    {
      "name": "전공실기 5",
      "professor": "민숙연"
    },
    {
      "name": "전공실기 5",
      "professor": "이정은"
    },
    {
      "name": "전공실기 5",
      "professor": "이지환"
    },
    {
      "name": "전공실기 5",
      "professor": "김혜란"
    },
    {
      "name": "전공실기 5",
      "professor": ""
    },
    {
      "name": "합창 5",
      "professor": "박승유"
    },
    {
      "name": "가곡앙상블",
      "professor": "박경신"
    },
    {
      "name": "고음악의 이해",
      "professor": "공영숙"
    },
    {
      "name": "합창지휘 1",
      "professor": "박승유"
    },
    {
      "name": "합창 7",
      "professor": "박승유"
    },
    {
      "name": "전공실기 7",
      "professor": "박경신"
    },
    {
      "name": "전공실기 7",
      "professor": "오미선"
    },
    {
      "name": "전공실기 7",
      "professor": "박지현"
    },
    {
      "name": "전공실기 7",
      "professor": "공영숙"
    },
    {
      "name": "전공실기 7",
      "professor": "정나리"
    },
    {
      "name": "전공실기 7",
      "professor": "민숙연"
    },
    {
      "name": "전공실기 7",
      "professor": "이정은"
    },
    {
      "name": "전공실기 7",
      "professor": ""
    },
    {
      "name": "오페라워크샵 1",
      "professor": "이혜영"
    },
    {
      "name": "근.현대독일가곡",
      "professor": "박경신"
    },
    {
      "name": "음악코칭",
      "professor": "이소영"
    },
    {
      "name": "서양음악사 및 문헌 1",
      "professor": "신인선"
    },
    {
      "name": "학내연주 1",
      "professor": "김성희"
    },
    {
      "name": "학내연주 1",
      "professor": "임경원"
    },
    {
      "name": "전공실기 1",
      "professor": "정재원"
    },
    {
      "name": "전공실기 1",
      "professor": "이준성"
    },
    {
      "name": "전공실기 1",
      "professor": "안미현"
    },
    {
      "name": "전공실기 1",
      "professor": "김성희"
    },
    {
      "name": "전공실기 1",
      "professor": "일리야 라쉬코프스키"
    },
    {
      "name": "전공실기 1",
      "professor": "어수희"
    },
    {
      "name": "전공실기 1",
      "professor": "이재완"
    },
    {
      "name": "전공실기 1",
      "professor": "성해린"
    },
    {
      "name": "전공실기 1",
      "professor": "이섬승"
    },
    {
      "name": "전공실기 1",
      "professor": "최고은"
    },
    {
      "name": "전공실기 1",
      "professor": "조미정"
    },
    {
      "name": "전공실기 1",
      "professor": "강수연"
    },
    {
      "name": "전공실기 1",
      "professor": "피호영"
    },
    {
      "name": "전공실기 1",
      "professor": "민유경"
    },
    {
      "name": "전공실기 1",
      "professor": "허상미"
    },
    {
      "name": "전공실기 1",
      "professor": "김현정"
    },
    {
      "name": "전공실기 1",
      "professor": "김도연"
    },
    {
      "name": "전공실기 1",
      "professor": "임경원"
    },
    {
      "name": "전공실기 1",
      "professor": "김창호"
    },
    {
      "name": "전공실기 1",
      "professor": "이재준"
    },
    {
      "name": "전공실기 1",
      "professor": "윤서우"
    },
    {
      "name": "전공실기 1",
      "professor": "박예은"
    },
    {
      "name": "전공실기 1",
      "professor": "최수연"
    },
    {
      "name": "전공실기 1",
      "professor": "정담온"
    },
    {
      "name": "전공실기 1",
      "professor": "이우광"
    },
    {
      "name": "전공실기 1",
      "professor": "장유경"
    },
    {
      "name": "전공실기 1",
      "professor": "임태훈"
    },
    {
      "name": "전공실기 1",
      "professor": "이응우"
    },
    {
      "name": "전공실기 1",
      "professor": "강석진"
    },
    {
      "name": "전공실기 1",
      "professor": "김승현"
    },
    {
      "name": "전공실기 1",
      "professor": "이혜림"
    },
    {
      "name": "전공실기 1",
      "professor": "백승연"
    },
    {
      "name": "전공실기 1",
      "professor": "정선미"
    },
    {
      "name": "시창.청음 1",
      "professor": "정혜경"
    },
    {
      "name": "시창.청음 1",
      "professor": "김지현"
    },
    {
      "name": "관악합주 1",
      "professor": "김동수"
    },
    {
      "name": "현악합주 1",
      "professor": "피호영"
    },
    {
      "name": "합주 1",
      "professor": "김동수"
    },
    {
      "name": "건반화성 1",
      "professor": "장은혜"
    },
    {
      "name": "서양음악사 및 문헌 3",
      "professor": "유선옥"
    },
    {
      "name": "낭만화성",
      "professor": "홍청의"
    },
    {
      "name": "반주실습",
      "professor": "이상희"
    },
    {
      "name": "피아노를 위한 대위법 1",
      "professor": "전민재"
    },
    {
      "name": "학내연주 3",
      "professor": "김성희"
    },
    {
      "name": "학내연주 3",
      "professor": "임경원"
    },
    {
      "name": "관현악을 위한 대위법 1",
      "professor": "전민재"
    },
    {
      "name": "전공실기 3",
      "professor": "정재원"
    },
    {
      "name": "전공실기 3",
      "professor": "이준성"
    },
    {
      "name": "전공실기 3",
      "professor": "안미현"
    },
    {
      "name": "전공실기 3",
      "professor": "김성희"
    },
    {
      "name": "전공실기 3",
      "professor": "일리야 라쉬코프스키"
    },
    {
      "name": "전공실기 3",
      "professor": "어수희"
    },
    {
      "name": "전공실기 3",
      "professor": "이재완"
    },
    {
      "name": "전공실기 3",
      "professor": "윤유진"
    },
    {
      "name": "전공실기 3",
      "professor": "이화경"
    },
    {
      "name": "전공실기 3",
      "professor": "성해린"
    },
    {
      "name": "전공실기 3",
      "professor": "이섬승"
    },
    {
      "name": "전공실기 3",
      "professor": "최고은"
    },
    {
      "name": "전공실기 3",
      "professor": "조미정"
    },
    {
      "name": "전공실기 3",
      "professor": "강수연"
    },
    {
      "name": "전공실기 3",
      "professor": "피호영"
    },
    {
      "name": "전공실기 3",
      "professor": "이세영"
    },
    {
      "name": "전공실기 3",
      "professor": "민유경"
    },
    {
      "name": "전공실기 3",
      "professor": "허상미"
    },
    {
      "name": "전공실기 3",
      "professor": "김도연"
    },
    {
      "name": "전공실기 3",
      "professor": "임경원"
    },
    {
      "name": "전공실기 3",
      "professor": "박노을"
    },
    {
      "name": "전공실기 3",
      "professor": "김창호"
    },
    {
      "name": "전공실기 3",
      "professor": "이재준"
    },
    {
      "name": "전공실기 3",
      "professor": "김진주"
    },
    {
      "name": "전공실기 3",
      "professor": "박의경"
    },
    {
      "name": "전공실기 3",
      "professor": "권혜진"
    },
    {
      "name": "전공실기 3",
      "professor": "최수연"
    },
    {
      "name": "전공실기 3",
      "professor": "정담온"
    },
    {
      "name": "전공실기 3",
      "professor": "백동훈"
    },
    {
      "name": "전공실기 3",
      "professor": "이혜선"
    },
    {
      "name": "전공실기 3",
      "professor": "강희선"
    },
    {
      "name": "전공실기 3",
      "professor": "이준목"
    },
    {
      "name": "전공실기 3",
      "professor": "손형원"
    },
    {
      "name": "전공실기 3",
      "professor": "이응우"
    },
    {
      "name": "전공실기 3",
      "professor": "강석진"
    },
    {
      "name": "전공실기 3",
      "professor": "김승현"
    },
    {
      "name": "전공실기 3",
      "professor": "이혜림"
    },
    {
      "name": "전공실기 3",
      "professor": "정선미"
    },
    {
      "name": "전공실기 3",
      "professor": "황대남"
    },
    {
      "name": "관악합주 3",
      "professor": "김동수"
    },
    {
      "name": "현악합주 3",
      "professor": "피호영"
    },
    {
      "name": "합주 3",
      "professor": "김동수"
    },
    {
      "name": "시창.청음 3",
      "professor": "김지현"
    },
    {
      "name": "실내악 1",
      "professor": "황소진"
    },
    {
      "name": "실내악 1",
      "professor": "박진오"
    },
    {
      "name": "화성 및 이론 3(편곡)",
      "professor": "정영빈"
    },
    {
      "name": "국악개론 및 실습",
      "professor": "문현"
    },
    {
      "name": "지휘법 1",
      "professor": "김동수"
    },
    {
      "name": "지휘법 1",
      "professor": "김우중"
    },
    {
      "name": "반주법 1",
      "professor": "고은지"
    },
    {
      "name": "전자음악 및 실습 1",
      "professor": "김효주"
    },
    {
      "name": "학내연주 5",
      "professor": "김성희"
    },
    {
      "name": "학내연주 5",
      "professor": "임경원"
    },
    {
      "name": "전공실기 5",
      "professor": "정재원"
    },
    {
      "name": "전공실기 5",
      "professor": "이준성"
    },
    {
      "name": "전공실기 5",
      "professor": "안미현"
    },
    {
      "name": "전공실기 5",
      "professor": "김성희"
    },
    {
      "name": "전공실기 5",
      "professor": "일리야 라쉬코프스키"
    },
    {
      "name": "전공실기 5",
      "professor": "어수희"
    },
    {
      "name": "전공실기 5",
      "professor": "이재완"
    },
    {
      "name": "전공실기 5",
      "professor": "이화경"
    },
    {
      "name": "전공실기 5",
      "professor": "이섬승"
    },
    {
      "name": "전공실기 5",
      "professor": "최고은"
    },
    {
      "name": "전공실기 5",
      "professor": "조미정"
    },
    {
      "name": "전공실기 5",
      "professor": "피호영"
    },
    {
      "name": "전공실기 5",
      "professor": "이세영"
    },
    {
      "name": "전공실기 5",
      "professor": "민유경"
    },
    {
      "name": "전공실기 5",
      "professor": "허상미"
    },
    {
      "name": "전공실기 5",
      "professor": "윤서우"
    },
    {
      "name": "전공실기 5",
      "professor": "김도연"
    },
    {
      "name": "전공실기 5",
      "professor": "임경원"
    },
    {
      "name": "전공실기 5",
      "professor": "황소진"
    },
    {
      "name": "전공실기 5",
      "professor": "김창호"
    },
    {
      "name": "전공실기 5",
      "professor": "이재준"
    },
    {
      "name": "전공실기 5",
      "professor": "이수아"
    },
    {
      "name": "전공실기 5",
      "professor": "박의경"
    },
    {
      "name": "전공실기 5",
      "professor": "백동훈"
    },
    {
      "name": "전공실기 5",
      "professor": "이혜선"
    },
    {
      "name": "전공실기 5",
      "professor": "강희선"
    },
    {
      "name": "전공실기 5",
      "professor": "이준목"
    },
    {
      "name": "전공실기 5",
      "professor": "임태훈"
    },
    {
      "name": "전공실기 5",
      "professor": "이응우"
    },
    {
      "name": "전공실기 5",
      "professor": "강석진"
    },
    {
      "name": "전공실기 5",
      "professor": "김승현"
    },
    {
      "name": "전공실기 5",
      "professor": "박성진"
    },
    {
      "name": "전공실기 5",
      "professor": "황대남"
    },
    {
      "name": "관악합주 5",
      "professor": "김동수"
    },
    {
      "name": "현악합주 5",
      "professor": "피호영"
    },
    {
      "name": "피아노문헌 1",
      "professor": "임지연"
    },
    {
      "name": "합주 5",
      "professor": "이종진"
    },
    {
      "name": "실내악 3",
      "professor": "이세영"
    },
    {
      "name": "실내악 3",
      "professor": "이수아"
    },
    {
      "name": "음악분석 1",
      "professor": "정영빈"
    },
    {
      "name": "클래스인스트루먼트 1",
      "professor": "김진주"
    },
    {
      "name": "클래스인스트루먼트 1",
      "professor": "문제임스재원"
    },
    {
      "name": "20세기피아노문헌",
      "professor": "이준성"
    },
    {
      "name": "악기수리법 1",
      "professor": "여우진"
    },
    {
      "name": "악기수리법 1",
      "professor": "전상진"
    },
    {
      "name": "전공실기 7",
      "professor": "정재원"
    },
    {
      "name": "전공실기 7",
      "professor": "이준성"
    },
    {
      "name": "전공실기 7",
      "professor": "안미현"
    },
    {
      "name": "전공실기 7",
      "professor": "김성희"
    },
    {
      "name": "전공실기 7",
      "professor": "일리야 라쉬코프스키"
    },
    {
      "name": "전공실기 7",
      "professor": "윤유진"
    },
    {
      "name": "전공실기 7",
      "professor": "이화경"
    },
    {
      "name": "전공실기 7",
      "professor": "성해린"
    },
    {
      "name": "전공실기 7",
      "professor": "조미정"
    },
    {
      "name": "전공실기 7",
      "professor": "강수연"
    },
    {
      "name": "전공실기 7",
      "professor": "피호영"
    },
    {
      "name": "전공실기 7",
      "professor": "이세영"
    },
    {
      "name": "전공실기 7",
      "professor": "민유경"
    },
    {
      "name": "전공실기 7",
      "professor": "김도연"
    },
    {
      "name": "전공실기 7",
      "professor": "임경원"
    },
    {
      "name": "전공실기 7",
      "professor": "박노을"
    },
    {
      "name": "전공실기 7",
      "professor": "황소진"
    },
    {
      "name": "전공실기 7",
      "professor": "김창호"
    },
    {
      "name": "전공실기 7",
      "professor": "이재준"
    },
    {
      "name": "전공실기 7",
      "professor": "김상애"
    },
    {
      "name": "전공실기 7",
      "professor": "권혜진"
    },
    {
      "name": "전공실기 7",
      "professor": "박준서"
    },
    {
      "name": "전공실기 7",
      "professor": "백동훈"
    },
    {
      "name": "전공실기 7",
      "professor": "이혜선"
    },
    {
      "name": "전공실기 7",
      "professor": "이우광"
    },
    {
      "name": "전공실기 7",
      "professor": "이준목"
    },
    {
      "name": "전공실기 7",
      "professor": "장유경"
    },
    {
      "name": "전공실기 7",
      "professor": "손형원"
    },
    {
      "name": "전공실기 7",
      "professor": "강석진"
    },
    {
      "name": "전공실기 7",
      "professor": "이혜림"
    },
    {
      "name": "전공실기 7",
      "professor": "김승현"
    },
    {
      "name": "전공실기 7",
      "professor": "박성진"
    },
    {
      "name": "전공실기 7",
      "professor": "황대남"
    },
    {
      "name": "피아노 및 관현악 교수법 1",
      "professor": "김지현"
    },
    {
      "name": "피아노 및 관현악 교수법 1",
      "professor": "김지은"
    },
    {
      "name": "합주 7",
      "professor": "이종진"
    },
    {
      "name": "관악합주 7",
      "professor": "김동수"
    },
    {
      "name": "현악합주 7",
      "professor": "피호영"
    },
    {
      "name": "피아노앙상블 2",
      "professor": "안미현"
    },
    {
      "name": "피아노워크숍 1",
      "professor": "최수빈"
    },
    {
      "name": "창작실내악 1",
      "professor": "김도연"
    },
    {
      "name": "근현대화성 1",
      "professor": "윤규일"
    },
    {
      "name": "서양음악사및문헌 1",
      "professor": "이혜진"
    },
    {
      "name": "다성음악 1",
      "professor": "김수호"
    },
    {
      "name": "창작연주 1",
      "professor": "이인식"
    },
    {
      "name": "악기론 1",
      "professor": "김지현"
    },
    {
      "name": "컴퓨터ㆍ전자음악 1",
      "professor": "조진옥"
    },
    {
      "name": "전공실기 1",
      "professor": "구본우"
    },
    {
      "name": "전공실기 1",
      "professor": "강은경"
    },
    {
      "name": "전공실기 1",
      "professor": "임현경"
    },
    {
      "name": "전공실기 1",
      "professor": "안성민"
    },
    {
      "name": "전공실기 1",
      "professor": "이문희"
    },
    {
      "name": "전공실기 1",
      "professor": "박수정"
    },
    {
      "name": "전공실기 1",
      "professor": "장춘희"
    },
    {
      "name": "전공실기 1",
      "professor": "정재은"
    },
    {
      "name": "음악분석 1",
      "professor": "설수경"
    },
    {
      "name": "전공이론 1",
      "professor": "이혜진"
    },
    {
      "name": "전공이론 1",
      "professor": "신인선"
    },
    {
      "name": "전공이론 1",
      "professor": "정이은"
    },
    {
      "name": "전공이론 1",
      "professor": "이가영"
    },
    {
      "name": "전공이론 1",
      "professor": ""
    },
    {
      "name": "초급화성 및 이론 1",
      "professor": "박지영"
    },
    {
      "name": "클래스 피아노 1",
      "professor": "김명선"
    },
    {
      "name": "창작연주 3",
      "professor": "이인식"
    },
    {
      "name": "악기론 3",
      "professor": "김지현"
    },
    {
      "name": "컴퓨터ㆍ전자음악 3",
      "professor": "조진옥"
    },
    {
      "name": "전공실기 3",
      "professor": "구본우"
    },
    {
      "name": "전공실기 3",
      "professor": "김수호"
    },
    {
      "name": "전공실기 3",
      "professor": "임현경"
    },
    {
      "name": "전공실기 3",
      "professor": "윤규일"
    },
    {
      "name": "전공실기 3",
      "professor": "정미선"
    },
    {
      "name": "전공실기 3",
      "professor": "이문희"
    },
    {
      "name": "건반화성 1",
      "professor": "전예은"
    },
    {
      "name": "서양음악사및문헌 3",
      "professor": "이가영"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": "신인선"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": "변지연"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": "권오연"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": "서윤정"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": "이가영"
    },
    {
      "name": "전공이론 및 악기(A) 3",
      "professor": ""
    },
    {
      "name": "전공이론 및 악기(B) 3",
      "professor": "정혜경"
    },
    {
      "name": "전공이론 및 악기(B) 3",
      "professor": "하승민"
    },
    {
      "name": "전공이론 및 악기(B) 3",
      "professor": ""
    },
    {
      "name": "화성 및 실습 1",
      "professor": "강은경"
    },
    {
      "name": "고급재즈화성학 1",
      "professor": "김지은"
    },
    {
      "name": "가창곡작곡법 및 실습 1",
      "professor": "장지영"
    },
    {
      "name": "음악치료학",
      "professor": "노인규"
    },
    {
      "name": "음악분석 3",
      "professor": "정미선"
    },
    {
      "name": "창작연주 5",
      "professor": "이인식"
    },
    {
      "name": "전공실기 5",
      "professor": "이인식"
    },
    {
      "name": "전공실기 5",
      "professor": "강은경"
    },
    {
      "name": "전공실기 5",
      "professor": "윤규일"
    },
    {
      "name": "전공실기 5",
      "professor": "설수경"
    },
    {
      "name": "전공실기 5",
      "professor": "안성민"
    },
    {
      "name": "전공실기 5",
      "professor": "이문희"
    },
    {
      "name": "전공실기 5",
      "professor": "박수정"
    },
    {
      "name": "전공실기 5",
      "professor": "장춘희"
    },
    {
      "name": "전공실기 5",
      "professor": "정재은"
    },
    {
      "name": "20세기음악 1",
      "professor": "임현경"
    },
    {
      "name": "음악학",
      "professor": "이가영"
    },
    {
      "name": "전공이론 및 악기(A) 5",
      "professor": "유선옥"
    },
    {
      "name": "전공이론 및 악기(A) 5",
      "professor": "박지영"
    },
    {
      "name": "전공이론 및 악기(A) 5",
      "professor": "서윤정"
    },
    {
      "name": "전공이론 및 악기(A) 5",
      "professor": ""
    },
    {
      "name": "전공이론 및 악기(B) 5",
      "professor": "김명선"
    },
    {
      "name": "전공이론 및 악기(B) 5",
      "professor": "김지현"
    },
    {
      "name": "전공이론 및 악기(B) 5",
      "professor": "하승민"
    },
    {
      "name": "전공이론 및 악기(B) 5",
      "professor": ""
    },
    {
      "name": "음악과 사회",
      "professor": "변지연"
    },
    {
      "name": "음악교육론",
      "professor": "이보림"
    },
    {
      "name": "재즈건반실습 1",
      "professor": "김지은"
    },
    {
      "name": "몰입형 미디어아트를 위한 사운드 디자인1",
      "professor": "강은경"
    },
    {
      "name": "관현악법 1",
      "professor": "안성민"
    },
    {
      "name": "뮤지컬 워크숍 1",
      "professor": "김기연"
    },
    {
      "name": "전공실기 7",
      "professor": "구본우"
    },
    {
      "name": "전공실기 7",
      "professor": "강은경"
    },
    {
      "name": "전공실기 7",
      "professor": "설수경"
    },
    {
      "name": "전공실기 7",
      "professor": "전예은"
    },
    {
      "name": "전공실기 7",
      "professor": "정미선"
    },
    {
      "name": "전공실기 7",
      "professor": "이문희"
    },
    {
      "name": "전공실기 7",
      "professor": "장춘희"
    },
    {
      "name": "전공실기 7",
      "professor": "정재은"
    },
    {
      "name": "전공이론 및 악기(A) 7",
      "professor": "이가영"
    },
    {
      "name": "전공이론 및 악기(A) 7",
      "professor": "이혜진"
    },
    {
      "name": "전공이론 및 악기(A) 7",
      "professor": "정이은"
    },
    {
      "name": "전공이론 및 악기(A) 7",
      "professor": ""
    },
    {
      "name": "전공이론 및 악기(B) 7",
      "professor": "김수현"
    },
    {
      "name": "전공이론 및 악기(B) 7",
      "professor": "하승민"
    },
    {
      "name": "전공이론 및 악기(B) 7",
      "professor": ""
    },
    {
      "name": "음악경영 1",
      "professor": "서윤정"
    },
    {
      "name": "미디어영상연기의 이해",
      "professor": "박우성"
    },
    {
      "name": "융합무용기초",
      "professor": "신은석"
    },
    {
      "name": "융합무용기초",
      "professor": ""
    },
    {
      "name": "융합무용기초",
      "professor": "최혜경"
    },
    {
      "name": "융합무용기초",
      "professor": "김미숙"
    },
    {
      "name": "융합무용기초",
      "professor": "김슬기"
    },
    {
      "name": "음악의 이해",
      "professor": "한보람"
    },
    {
      "name": "예술경영학",
      "professor": ""
    },
    {
      "name": "공연기획",
      "professor": "김종헌"
    },
    {
      "name": "문화예술감상과 이해",
      "professor": "정경미"
    },
    {
      "name": "문화예술감상과 이해",
      "professor": "권수정"
    },
    {
      "name": "마케팅원론",
      "professor": "김시영"
    },
    {
      "name": "마케팅원론",
      "professor": "김정선"
    },
    {
      "name": "전시기획",
      "professor": "정소라"
    },
    {
      "name": "예술적 글쓰기",
      "professor": "정나영"
    },
    {
      "name": "무대연출론",
      "professor": "김수정"
    },
    {
      "name": "무대연출론",
      "professor": "고해종"
    },
    {
      "name": "공연시장의 이해",
      "professor": "백경민"
    },
    {
      "name": "문화예술정책과 법",
      "professor": "김진각"
    },
    {
      "name": "극장 경영",
      "professor": "김종헌"
    },
    {
      "name": "대중예술 트렌드 세미나",
      "professor": "김진각"
    },
    {
      "name": "호흡/발성 1",
      "professor": "김혜진"
    },
    {
      "name": "배우 신체훈련 1",
      "professor": "양주희"
    },
    {
      "name": "기초연기실습 1",
      "professor": "김혜진"
    },
    {
      "name": "기초연기실습 1",
      "professor": "김정훈"
    },
    {
      "name": "영상연기 실습 1",
      "professor": "반민정"
    },
    {
      "name": "영상연기 실습 1",
      "professor": "손보민"
    },
    {
      "name": "배우 화술 1",
      "professor": "김혜진"
    },
    {
      "name": "영화 제작실습 1",
      "professor": "박은형"
    },
    {
      "name": "영화 제작실습 1",
      "professor": "이준학"
    },
    {
      "name": "영화 제작실습 1",
      "professor": "박경목"
    },
    {
      "name": "영화 제작실습 1",
      "professor": "임태규"
    },
    {
      "name": "장면연기실습 1",
      "professor": "김혜진"
    },
    {
      "name": "장면연기실습 1",
      "professor": "김정훈"
    },
    {
      "name": "공연워크샵 1",
      "professor": "신동일"
    },
    {
      "name": "보컬 1",
      "professor": "전은혜"
    },
    {
      "name": "TV드라마 연기실습 1",
      "professor": "손보민"
    },
    {
      "name": "개별연기실습",
      "professor": "지춘성"
    },
    {
      "name": "졸업작품워크숍 1",
      "professor": "유영식"
    },
    {
      "name": "졸업작품워크숍 1",
      "professor": "신동일"
    },
    {
      "name": "대본 분석과 인물 창조1",
      "professor": "박은형"
    },
    {
      "name": "전공실기 1",
      "professor": "김유미"
    },
    {
      "name": "전공실기 1",
      "professor": "김영준"
    },
    {
      "name": "전공실기 1",
      "professor": "김승범"
    },
    {
      "name": "전공실기 1",
      "professor": "이창원"
    },
    {
      "name": "전공실기 1",
      "professor": "심영주"
    },
    {
      "name": "전공실기 1",
      "professor": "남예지"
    },
    {
      "name": "전공실기 1",
      "professor": "신기남"
    },
    {
      "name": "전공실기 1",
      "professor": "이지민"
    },
    {
      "name": "전공실기 1",
      "professor": "유수미"
    },
    {
      "name": "전공실기 1",
      "professor": "이지혜"
    },
    {
      "name": "전공실기 1",
      "professor": "이선경"
    },
    {
      "name": "전공실기 1",
      "professor": "최현아"
    },
    {
      "name": "전공실기 1",
      "professor": "임경은"
    },
    {
      "name": "전공실기 1",
      "professor": "신형찬"
    },
    {
      "name": "전공실기 1",
      "professor": "우미진"
    },
    {
      "name": "전공실기 1",
      "professor": "김주헌"
    },
    {
      "name": "전공실기 1",
      "professor": "성기준"
    },
    {
      "name": "전공실기 1",
      "professor": "남성희"
    },
    {
      "name": "전공실기 1",
      "professor": "박규연"
    },
    {
      "name": "전공실기 1",
      "professor": "박세윤"
    },
    {
      "name": "전공실기 1",
      "professor": "이상원"
    },
    {
      "name": "전공실기 1",
      "professor": "함은진"
    },
    {
      "name": "기보법",
      "professor": "조원주"
    },
    {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 1",
      "professor": "강경한"
    },
    {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 1",
      "professor": "조윤정"
    },
    {
      "name": "음악 형식과 분석 1",
      "professor": "김정범"
    },
    {
      "name": "음악 형식과 분석 1",
      "professor": "김한아"
    },
    {
      "name": "전공실기 3",
      "professor": "변준형"
    },
    {
      "name": "전공실기 3",
      "professor": "윤혜린"
    },
    {
      "name": "전공실기 3",
      "professor": "이지영"
    },
    {
      "name": "전공실기 3",
      "professor": "유수미"
    },
    {
      "name": "전공실기 3",
      "professor": "김희주"
    },
    {
      "name": "전공실기 3",
      "professor": "이나경"
    },
    {
      "name": "전공실기 3",
      "professor": "함지민"
    },
    {
      "name": "전공실기 3",
      "professor": "이지혜"
    },
    {
      "name": "전공실기 3",
      "professor": "민아영"
    },
    {
      "name": "전공실기 3",
      "professor": "성기준"
    },
    {
      "name": "전공실기 3",
      "professor": "유영하"
    },
    {
      "name": "전공실기 3",
      "professor": "허준영"
    },
    {
      "name": "전공실기 3",
      "professor": "홍경섭"
    },
    {
      "name": "전공실기 3",
      "professor": "이준"
    },
    {
      "name": "전공실기 3",
      "professor": "박규연"
    },
    {
      "name": "재즈 화성학",
      "professor": "이아선"
    },
    {
      "name": "리듬 청음 연습",
      "professor": "이지민"
    },
    {
      "name": "디지털 오디오 워크스테이션 활용: 프로 툴스 1",
      "professor": "고남수"
    },
    {
      "name": "디지털 오디오 워크스테이션 활용: 프로 툴스 1",
      "professor": "조남준"
    },
    {
      "name": "보컬 전공을 위한 아카펠라 앙상블 1",
      "professor": "임경은"
    },
    {
      "name": "악기 전공을 위한 임프로비제이션 앙상블 1",
      "professor": "정이령"
    },
    {
      "name": "전공실기 5",
      "professor": "김정범"
    },
    {
      "name": "전공실기 5",
      "professor": "조석훈"
    },
    {
      "name": "전공실기 5",
      "professor": "신형찬"
    },
    {
      "name": "전공실기 5",
      "professor": "윤혜린"
    },
    {
      "name": "전공실기 5",
      "professor": "임경은"
    },
    {
      "name": "전공실기 5",
      "professor": "이지민"
    },
    {
      "name": "전공실기 5",
      "professor": "이지영"
    },
    {
      "name": "전공실기 5",
      "professor": "유수미"
    },
    {
      "name": "전공실기 5",
      "professor": "김희주"
    },
    {
      "name": "전공실기 5",
      "professor": "윤영삼"
    },
    {
      "name": "전공실기 5",
      "professor": "김현민"
    },
    {
      "name": "전공실기 5",
      "professor": "정민영"
    },
    {
      "name": "전공실기 5",
      "professor": "김주현"
    },
    {
      "name": "전공실기 5",
      "professor": "함지민"
    },
    {
      "name": "전공실기 5",
      "professor": "민아영"
    },
    {
      "name": "전공실기 5",
      "professor": "우미진"
    },
    {
      "name": "전공실기 5",
      "professor": "반검서"
    },
    {
      "name": "전공실기 5",
      "professor": "김주헌"
    },
    {
      "name": "전공실기 5",
      "professor": "유영하"
    },
    {
      "name": "전공실기 5",
      "professor": "남성희"
    },
    {
      "name": "전공실기 5",
      "professor": "박규연"
    },
    {
      "name": "전공실기 5",
      "professor": "이상원"
    },
    {
      "name": "전공실기 5",
      "professor": "김영준"
    },
    {
      "name": "전공실기 5",
      "professor": "임채광"
    },
    {
      "name": "전공실기 5",
      "professor": "최훈"
    },
    {
      "name": "전공실기 5",
      "professor": "이준"
    },
    {
      "name": "전공실기 5",
      "professor": "변준형"
    },
    {
      "name": "전공실기 5",
      "professor": "김유미"
    },
    {
      "name": "일렉트로닉 작곡과 사운드 디자인 1",
      "professor": "정채웅"
    },
    {
      "name": "보컬 전공을 위한 송라이팅 앙상블 1",
      "professor": "윤혜린"
    },
    {
      "name": "음반프로덕션",
      "professor": "정철"
    },
    {
      "name": "홈 레코딩과 믹싱 1",
      "professor": "채준기"
    },
    {
      "name": "악기 전공을 위한 라이브 퍼포먼스 앙상블 1",
      "professor": "임채광"
    },
    {
      "name": "작곡론 1",
      "professor": "송종헌"
    },
    {
      "name": "작곡론 1",
      "professor": "김한아"
    },
    {
      "name": "스튜디오 레코딩과 믹싱 1",
      "professor": "정채웅"
    },
    {
      "name": "전공실기 7",
      "professor": "우미진"
    },
    {
      "name": "전공실기 7",
      "professor": "김정범"
    },
    {
      "name": "전공실기 7",
      "professor": "변준형"
    },
    {
      "name": "전공실기 7",
      "professor": "신형찬"
    },
    {
      "name": "전공실기 7",
      "professor": "김현민"
    },
    {
      "name": "전공실기 7",
      "professor": "정민영"
    },
    {
      "name": "전공실기 7",
      "professor": "김주현"
    },
    {
      "name": "전공실기 7",
      "professor": "민아영"
    },
    {
      "name": "전공실기 7",
      "professor": "김유미"
    },
    {
      "name": "전공실기 7",
      "professor": "이준"
    },
    {
      "name": "음악 매니지먼트 1",
      "professor": "김도연"
    },
    {
      "name": "필름 스코어링과 오케스트레이션 1",
      "professor": "함은진"
    },
    {
      "name": "콜라보러티브 프로덕션 워크숍 1",
      "professor": "변준형"
    },
    {
      "name": "밴드를 위한 라이브 레코딩 앙상블 1",
      "professor": "최훈"
    },
    {
      "name": "전공실기 1",
      "professor": "김순정"
    },
    {
      "name": "전공실기 1",
      "professor": "성재형"
    },
    {
      "name": "전공실기 1",
      "professor": "김슬기"
    },
    {
      "name": "움직임과 표현 1",
      "professor": "최혜경"
    },
    {
      "name": "움직임과 표현 1",
      "professor": "유지연"
    },
    {
      "name": "움직임과 표현 1",
      "professor": "이민선"
    },
    {
      "name": "움직임과 표현 1",
      "professor": "김슬기"
    },
    {
      "name": "필라테스자세교정 1",
      "professor": ""
    },
    {
      "name": "무용예술",
      "professor": "김미숙"
    },
    {
      "name": "전공실기 3",
      "professor": "성재형"
    },
    {
      "name": "전공실기 3",
      "professor": "김주원"
    },
    {
      "name": "전공실기 3",
      "professor": "이효연"
    },
    {
      "name": "발레 Point Work",
      "professor": "김주원"
    },
    {
      "name": "무용워크샵트레이닝 1",
      "professor": "정경화"
    },
    {
      "name": "무용워크샵트레이닝 1",
      "professor": "유지연"
    },
    {
      "name": "무용워크샵트레이닝 1",
      "professor": "김미숙"
    },
    {
      "name": "요가테라피1",
      "professor": "김미숙"
    },
    {
      "name": "요가테라피1",
      "professor": "임영희"
    },
    {
      "name": "안무즉흥",
      "professor": "양주희"
    },
    {
      "name": "전공실기 5",
      "professor": "성재형"
    },
    {
      "name": "전공실기 5",
      "professor": "김주원"
    },
    {
      "name": "전공실기 5",
      "professor": "이민선"
    },
    {
      "name": "표현예술치료 1",
      "professor": "윤정아"
    },
    {
      "name": "전공실기 7",
      "professor": "최경란"
    },
    {
      "name": "전공실기 7",
      "professor": "장운규"
    },
    {
      "name": "전공실기 7",
      "professor": "김슬기"
    },
    {
      "name": "무용지도법 1",
      "professor": "성재형"
    },
    {
      "name": "무용지도법 1",
      "professor": "박순영"
    },
    {
      "name": "무용지도법 1",
      "professor": "김미숙"
    },
    {
      "name": "무용감상",
      "professor": "김지윤"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "석기용"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "강희경"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "임성진"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "전지은"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이은경"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "김종원"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "김준석"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "류경동"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "곽승숙"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "기유정"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "강소영"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "김시형"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "김형중"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이솔"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "주민재"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "강규호"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이지선"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이성준"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "허찬"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이혜진"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "손성우"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이연순"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "강선형"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "김미덕"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "이상화"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "엄상희"
    },
    {
      "name": "비판적 사고와 토론",
      "professor": "오윤정"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이윤경"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "신정은"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이은우"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김나영"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "장예준"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "탁원정"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김예니"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "송용구"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "구선정"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "박상란"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김명석"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김보람"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "구봉곤"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "양정화"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이세경"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "신민영"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김자영"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "조별"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "신희경"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김민선"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "방금단"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "박근예"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "김난경"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "선민서"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이선형"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이연승"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "장영미"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "장혜련"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "양정현"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "이주영"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "정슬아"
    },
    {
      "name": "창조적 사고와 글쓰기",
      "professor": "박민영"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "앤드리아 톨레프슨"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "다릴 로스"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "수잔 홀랜드"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "메스 닐슨"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "스티븐 파이겐바움"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "김장욱"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "다릴 로스"
    },
    {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "로난 맥알리스터"
    },
    {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "스티븐 파이겐바움"
    },
    {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "전연희"
    },
    {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "조나단 리스 팬톤"
    },
    {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "올리버 테리"
    },
    {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "콜 헌트"
    },
    {
      "name": "공통 드라마 영어",
      "professor": "수잔 홀랜드"
    },
    {
      "name": "공통 드라마 영어",
      "professor": "앤드리아 톨레프슨"
    },
    {
      "name": "공통 드라마 영어",
      "professor": "스티븐 파이겐바움"
    },
    {
      "name": "공통 세계 단편 소설",
      "professor": "존 다니엘 맥카시"
    },
    {
      "name": "공통 세계 단편 소설",
      "professor": "메스 닐슨"
    },
    {
      "name": "British Culture and History",
      "professor": "존 다니엘 맥카시"
    },
    {
      "name": "British Culture and History",
      "professor": "올리버 테리"
    },
    {
      "name": "공통 서구 문화의 이해",
      "professor": "다릴 로스"
    },
    {
      "name": "공통 서구 문화의 이해",
      "professor": "니노슬라브 란제로빅"
    },
    {
      "name": "공통 글로벌 뉴스와 이슈",
      "professor": "올리버 테리"
    },
    {
      "name": "공통 사회 심리의 이해",
      "professor": "조나단 리스 팬톤"
    },
    {
      "name": "Global Communication through Food, Travel & Culture",
      "professor": "로난 맥알리스터"
    },
    {
      "name": "English through Harry Potter",
      "professor": "콜 헌트"
    },
    {
      "name": "북미권 예술 문화와 여성",
      "professor": "앤드리아 톨레프슨"
    },
    {
      "name": "시사 영어 청취",
      "professor": "김장욱"
    },
    {
      "name": "영어의 기초 어휘와 표현",
      "professor": "김장욱"
    },
    {
      "name": "English through Detective Stories",
      "professor": "메스 닐슨"
    },
    {
      "name": "공통 중국어",
      "professor": "리우 나"
    },
    {
      "name": "공통 중국어",
      "professor": "신준호"
    },
    {
      "name": "공통 중국어",
      "professor": "강선화"
    },
    {
      "name": "공통 중국어",
      "professor": "송향경"
    },
    {
      "name": "공통 중국어",
      "professor": "노은정"
    },
    {
      "name": "공통 중국어",
      "professor": "이정인"
    },
    {
      "name": "공통 일본어",
      "professor": "김유진"
    },
    {
      "name": "공통 일본어",
      "professor": "유혜경"
    },
    {
      "name": "공통 일본어",
      "professor": "이지사"
    },
    {
      "name": "공통 프랑스어",
      "professor": "안성은"
    },
    {
      "name": "공통 프랑스어",
      "professor": "음두은"
    },
    {
      "name": "공통 프랑스어",
      "professor": "황원미"
    },
    {
      "name": "공통 독일어",
      "professor": "김길웅"
    },
    {
      "name": "공통 독일어",
      "professor": "이진숙"
    },
    {
      "name": "공통 스페인어",
      "professor": "조영실"
    },
    {
      "name": "공통 러시아어",
      "professor": "이새봄"
    },
    {
      "name": "공통 개인정보보호와 보안윤리",
      "professor": "장현미"
    },
    {
      "name": "공통 스마트 IT 기술의 현재와 미래",
      "professor": "장현미"
    },
    {
      "name": "컴퓨팅적 사고",
      "professor": "진동욱"
    },
    {
      "name": "프로그래밍과 문제해결",
      "professor": "김의찬"
    },
    {
      "name": "오픈소스 SW 활용",
      "professor": "이화주"
    },
    {
      "name": "실습으로 배우는 머신러닝",
      "professor": "김동하"
    },
    {
      "name": "SW&AI 전공 진입을 위한 수학",
      "professor": "심성아"
    },
    {
      "name": "실사례를 통한 머신러닝 알고리즘 구현 실습",
      "professor": "윤상덕"
    },
    {
      "name": "동∙서 철학의 만남",
      "professor": "양선진"
    },
    {
      "name": "비판적 사고 기초",
      "professor": "배식한"
    },
    {
      "name": "바람직한 인간관계를 위한 갈등 관리와 협상",
      "professor": "김오현"
    },
    {
      "name": "한글 맞춤법과 국어 능력",
      "professor": "정종수"
    },
    {
      "name": "과학기술 사회의 생명윤리",
      "professor": "김율리"
    },
    {
      "name": "현대인의 정신 건강",
      "professor": "이정윤"
    },
    {
      "name": "대중 문화 예술 산책",
      "professor": "윤상호"
    },
    {
      "name": "자존감 수업",
      "professor": "조주희"
    },
    {
      "name": "철학으로의 초대",
      "professor": "배식한"
    },
    {
      "name": "정치학 고전의 이해",
      "professor": "윤종성"
    },
    {
      "name": "삶과 죽음의 이해",
      "professor": "임성훈"
    },
    {
      "name": "인권의 이해",
      "professor": "올리버 테리"
    },
    {
      "name": "문화인류학으로 세상보기",
      "professor": "김길웅"
    },
    {
      "name": "공동체 공유가치의 이해와 실천",
      "professor": "김선주"
    },
    {
      "name": "뉴스 바로 보기",
      "professor": "김진각"
    },
    {
      "name": "우리 문화 속의 한자어",
      "professor": "김용재"
    },
    {
      "name": "주제로 읽는 명저 : 인문학",
      "professor": "김륜옥"
    },
    {
      "name": "현대 사회와 여성의 역할",
      "professor": "임영빈"
    },
    {
      "name": "설득의 과학",
      "professor": "소현진"
    },
    {
      "name": "세계 시민교육과 글로벌 리더십",
      "professor": "올리버 테리"
    },
    {
      "name": "사회 공헌 활동의 이해와 전망",
      "professor": "서경덕"
    },
    {
      "name": "Developing Positive Mind",
      "professor": "조나단 리스 팬톤"
    },
    {
      "name": "포스트휴머니즘의 이해",
      "professor": "석기용"
    },
    {
      "name": "키워드로 읽는 여성학 Ⅰ",
      "professor": "김미덕"
    },
    {
      "name": "인공지능과 윤리",
      "professor": "김도형"
    },
    {
      "name": "미학의 이해",
      "professor": "임성훈"
    },
    {
      "name": "세계 복식과 패션정보",
      "professor": "이정명"
    },
    {
      "name": "한국 문학 명작 감상",
      "professor": "김혜련"
    },
    {
      "name": "프랑스 문화와 예술",
      "professor": "이선우"
    },
    {
      "name": "미술로 표현된 신체",
      "professor": "임성훈"
    },
    {
      "name": "힐링이 있는 클래식 음악",
      "professor": "강석순"
    },
    {
      "name": "오페라의 이해",
      "professor": "오유석"
    },
    {
      "name": "발레: 융합문화예술의 실제",
      "professor": "김주원"
    },
    {
      "name": "음악은 왜 치료적인가",
      "professor": "강경선"
    },
    {
      "name": "클릭, 생활 속의 현대미술",
      "professor": "구진경"
    },
    {
      "name": "문학과 시대 읽기",
      "professor": "김길웅"
    },
    {
      "name": "문학과 함께 하는 인성",
      "professor": "김정숙"
    },
    {
      "name": "서양 음악의 이해",
      "professor": "이혜진"
    },
    {
      "name": "현대 미술 산책",
      "professor": "이혜진"
    },
    {
      "name": "주제로 읽는 명저 : 문화예술",
      "professor": "조형빈"
    },
    {
      "name": "America in American Novels",
      "professor": "다릴 로스"
    },
    {
      "name": "무용과 인간",
      "professor": "유인화"
    },
    {
      "name": "영화 예술 입문",
      "professor": "박상우"
    },
    {
      "name": "21세기 미국문학 다시 읽기",
      "professor": "전연희"
    },
    {
      "name": "현대시 산책",
      "professor": "박민영"
    },
    {
      "name": "문학치료와 시 쓰기",
      "professor": "박민영"
    },
    {
      "name": "신화와 함께하는 삶",
      "professor": "김나영"
    },
    {
      "name": "예술적 얼굴과 감정조절",
      "professor": "임상빈"
    },
    {
      "name": "조선 문인들이 사랑한 나의 집",
      "professor": "강혜선"
    },
    {
      "name": "전쟁사",
      "professor": "공평원"
    },
    {
      "name": "세계문화유산으로 보는 한국의 역사와 문화",
      "professor": "강호선"
    },
    {
      "name": "영화로 보는 영미 문화",
      "professor": "정혜연"
    },
    {
      "name": "동아시아의 역사와 문화",
      "professor": "이완석"
    },
    {
      "name": "동양 고전의 산책",
      "professor": "김용재"
    },
    {
      "name": "테마로 보는 전통문화",
      "professor": "조순자"
    },
    {
      "name": "서양 고전 읽기",
      "professor": "김정숙"
    },
    {
      "name": "한국 사상 오딧세이",
      "professor": "전수연"
    },
    {
      "name": "한국사 입문",
      "professor": "전세영"
    },
    {
      "name": "American Culture and History",
      "professor": "존 다니엘 맥카시"
    },
    {
      "name": "미디어로 일본 문화 읽기",
      "professor": "조주희"
    },
    {
      "name": "역사와 현실",
      "professor": "이규철"
    },
    {
      "name": "문화도시와 역사도시의 이해",
      "professor": "서경덕"
    },
    {
      "name": "영화로 이해하는 한국사",
      "professor": "이규철"
    },
    {
      "name": "우리, 독립운동을 이야기하다",
      "professor": "정수아"
    },
    {
      "name": "생활 속의 법적 분쟁과 해결",
      "professor": "최우령"
    },
    {
      "name": "현대 사회와 소외",
      "professor": "김선주"
    },
    {
      "name": "국가안보론",
      "professor": "공평원"
    },
    {
      "name": "국가안보론",
      "professor": "조현행"
    },
    {
      "name": "북한학",
      "professor": "조현행"
    },
    {
      "name": "소비자 트렌드와 소비 문화",
      "professor": "박배진"
    },
    {
      "name": "국제 정세의 이해",
      "professor": "김성용"
    },
    {
      "name": "중국의 사상과 문화",
      "professor": "신준호"
    },
    {
      "name": "경제학 개론",
      "professor": "이창선"
    },
    {
      "name": "법으로 풀어보는 글로벌 문화",
      "professor": "이양복"
    },
    {
      "name": "국가브랜드의 의미와 이해",
      "professor": "서경덕"
    },
    {
      "name": "음식과 문화 이야기",
      "professor": "고성희"
    },
    {
      "name": "헌법: 갈등 해결의 코드",
      "professor": "김연식"
    },
    {
      "name": "현대 조직행동 이론",
      "professor": "윤정우"
    },
    {
      "name": "사례로 보는 리더십",
      "professor": "김오현"
    },
    {
      "name": "주제로 읽는 명저 : 사회과학",
      "professor": "정연주"
    },
    {
      "name": "알기 쉬운 행정법 이야기",
      "professor": "이재훈"
    },
    {
      "name": "일본 문화의 이해",
      "professor": "다케우치 노리아키"
    },
    {
      "name": "현대인의 여가 문화",
      "professor": "김우정"
    },
    {
      "name": "주거 문화의 이해",
      "professor": "김진영"
    },
    {
      "name": "한국 현대사와 대통령",
      "professor": "윤종성"
    },
    {
      "name": "세계 여성 연구",
      "professor": "수잔 홀랜드"
    },
    {
      "name": "기본권, 세상과 통하는 법",
      "professor": "김연식"
    },
    {
      "name": "젠더로 본 세계화",
      "professor": "김미덕"
    },
    {
      "name": "대중문화 속의 여성과 페미니즘",
      "professor": "김미덕"
    },
    {
      "name": "사회적 이슈의 찬반 논쟁",
      "professor": "정영선"
    },
    {
      "name": "Issues in American Justice",
      "professor": "존 다니엘 맥카시"
    },
    {
      "name": "인체생리학",
      "professor": "강소라"
    },
    {
      "name": "생활 속의 과학",
      "professor": "김상태"
    },
    {
      "name": "생태학의 이해",
      "professor": "김상연"
    },
    {
      "name": "기후 변화와 문명",
      "professor": "박경"
    },
    {
      "name": "과학의 철학적 이해",
      "professor": "배식한"
    },
    {
      "name": "기초 수학",
      "professor": "정해남"
    },
    {
      "name": "유전자 과학과 미래",
      "professor": "유중기"
    },
    {
      "name": "문화 속 수학 읽기",
      "professor": "정해남"
    },
    {
      "name": "무기 체계론",
      "professor": "조현행"
    },
    {
      "name": "기초 디자인",
      "professor": "지문규"
    },
    {
      "name": "생활 속의 의학정보",
      "professor": "유하정"
    },
    {
      "name": "헬스와 운동 재활",
      "professor": "백승희"
    },
    {
      "name": "4차 산업혁명과 경영혁신",
      "professor": "심선영"
    },
    {
      "name": "빅데이터의 이해와 활용",
      "professor": "허명회"
    },
    {
      "name": "화장품과 피부",
      "professor": "최서정"
    },
    {
      "name": "패션 스튜디오",
      "professor": "염미선"
    },
    {
      "name": "비즈니스를 위한 인공지능",
      "professor": "심선영"
    },
    {
      "name": "파워포인트와 엑셀",
      "professor": "장현미"
    },
    {
      "name": "독일어",
      "professor": "김진숙"
    },
    {
      "name": "중국어 Ⅰ",
      "professor": "리우 나"
    },
    {
      "name": "중국어 Ⅱ",
      "professor": "신준호"
    },
    {
      "name": "리더십",
      "professor": "공평원"
    },
    {
      "name": "비즈니스와 생활예절",
      "professor": "김선주"
    },
    {
      "name": "여성 리더십과 커뮤니케이션",
      "professor": "김오현"
    },
    {
      "name": "러시아어",
      "professor": "남서영"
    },
    {
      "name": "비즈니스 스피치",
      "professor": "김선주"
    },
    {
      "name": "세계 뉴스 분석",
      "professor": "존 다니엘 맥카시"
    },
    {
      "name": "스타일 메이크업",
      "professor": "김희진"
    },
    {
      "name": "기초 영어 강독",
      "professor": "김장욱"
    },
    {
      "name": "기초 영문법",
      "professor": "김장욱"
    },
    {
      "name": "Advanced Effective English Speech",
      "professor": "로난 맥알리스터"
    },
    {
      "name": "Writing for the Modern World",
      "professor": "김장욱"
    },
    {
      "name": "Effective Academic English Writing",
      "professor": "콜 헌트"
    },
    {
      "name": "대학생을 위한 경제교육과 실용금융",
      "professor": "권민수"
    },
    {
      "name": "English through Film and Television",
      "professor": "앤드리아 톨레프슨"
    },
    {
      "name": "일본어",
      "professor": "네고로 유키"
    },
    {
      "name": "프랑스어",
      "professor": "이명은"
    },
    {
      "name": "스페인어",
      "professor": "전수진"
    },
    {
      "name": "문화예술 교육 현장의 이해와 실습",
      "professor": "강향숙"
    },
    {
      "name": "문화예술 교육 개론",
      "professor": "임성훈"
    },
    {
      "name": "환경 홍보의 의미와 미래",
      "professor": "서경덕"
    },
    {
      "name": "영미 대중음악과 문화",
      "professor": "마이클 엘리어트"
    },
    {
      "name": "학습법 특강",
      "professor": "조윤정"
    },
    {
      "name": "시사로 중국문화 읽기",
      "professor": "강선화"
    },
    {
      "name": "Basic Business English",
      "professor": "니노슬라브 란제로빅"
    },
    {
      "name": "지역문화, 문화도시",
      "professor": "이자원"
    },
    {
      "name": "세계의 차 문화",
      "professor": "김효주"
    },
    {
      "name": "예비 부모 교육",
      "professor": "김선주"
    },
    {
      "name": "생활 한자",
      "professor": "김용재"
    },
    {
      "name": "필라테스 움직임 과학",
      "professor": ""
    },
    {
      "name": "골프",
      "professor": "박경연"
    },
    {
      "name": "볼링",
      "professor": "정영남"
    },
    {
      "name": "탁구",
      "professor": "최승욱"
    },
    {
      "name": "호신술",
      "professor": "이준영"
    },
    {
      "name": "웰니스 요가",
      "professor": "육영숙"
    },
    {
      "name": "전통무용",
      "professor": "성재형"
    },
    {
      "name": "생활 도예",
      "professor": "강인경"
    },
    {
      "name": "생활 소품 디자인",
      "professor": "박소영"
    }
  ]

export default subjectData;