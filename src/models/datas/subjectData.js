const subjectData = [
        {
            "name": "안전 및 조직관리 사례 연구",
            "professor": "이성희"
        },
        {
            "name": "조직 리더십 사례 연구",
            "professor": "윤해진"
        },
        {
            "name": "교육실습"
        },
        {
            "name": "클릭, 즐겨찾기ㆍ북한문화예술"
        },
        {
            "name": "소비자를 위한 생활법률"
        },
        {
            "name": "현대인의 질병과 영양"
        },
        {
            "name": "스페인 문화와 예술"
        },
        {
            "name": "지구에서 만나 살아가는 남자와 여자"
        },
        {
            "name": "라틴아메리카 문화 산책"
        },
        {
            "name": "문화속 디자인 여행"
        },
        {
            "name": "한국사, 뿌리깊은 이야기"
        },
        {
            "name": "언어레시피로 광고요리하기"
        },
        {
            "name": "TED로 배우는 영화속 바이오테크놀로지"
        },
        {
            "name": "마음을 읽어 주는 미술치료"
        },
        {
            "name": "범죄와 범죄심리"
        },
        {
            "name": "한국인의 문화와 심리"
        },
        {
            "name": "모두의 인공지능"
        },
        {
            "name": "성과 일상"
        },
        {
            "name": "세계의 명화와 사상"
        },
        {
            "name": "사물인터넷 이해"
        },
        {
            "name": "세상을 바꾸는 아름다운 수학"
        },
        {
            "name": "현대음악의 이해"
        },
        {
            "name": "현대사회와 회계"
        },
        {
            "name": "TED로 배우는 비즈니스 트렌드"
        },
        {
            "name": "언어의 표현과 이해 Ⅰ",
            "professor": "강선화"
        },
        {
            "name": "언어의 표현과 이해 Ⅱ",
            "professor": "주월랑"
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
            "name": "한국 사회의 이해",
            "professor": "최수진"
        },
        {
            "name": "International Seminar: Korean and Global Affairs",
            "professor": "김장욱"
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
            "name": "산학 협동 인턴십"
        },
        {
            "name": "예술 비즈니스 창업론",
            "professor": "김정섭"
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
            "name": "창업을 위한 법의 이해",
            "professor": "이양복"
        },
        {
            "name": "창업 아이디어 발상 및 실습",
            "professor": "김현이"
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
            "name": "문화와 내러티브",
            "professor": "신혜수"
        },
        {
            "name": "공연문화속의 서사",
            "professor": "김정숙"
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
            "name": "응용국어학의 이해",
            "professor": "김일환"
        },
        {
            "name": "구비문학의 이해",
            "professor": "심치열"
        },
        {
            "name": "현대문학사",
            "professor": "김명석"
        },
        {
            "name": "고전문학사",
            "professor": "강혜선"
        },
        {
            "name": "현대문학 명작읽기",
            "professor": "강진호"
        },
        {
            "name": "의사소통교육론",
            "professor": "김혜련"
        },
        {
            "name": "다매체와 서사 읽기",
            "professor": "김명석"
        },
        {
            "name": "글로벌시대의 한국어",
            "professor": "장미경"
        },
        {
            "name": "고전소설의 이해",
            "professor": "심치열"
        },
        {
            "name": "현대문학 창작론",
            "professor": "강진호"
        },
        {
            "name": "시조와 가사의 세계",
            "professor": "강혜선"
        },
        {
            "name": "국어사",
            "professor": "전기량"
        },
        {
            "name": "국어 교과교재연구 및 지도법",
            "professor": "김혜련"
        },
        {
            "name": "판소리계소설과 매체",
            "professor": "심치열"
        },
        {
            "name": "현대문학특강",
            "professor": "김명석"
        },
        {
            "name": "우리 한시의 세계",
            "professor": "강혜선"
        },
        {
            "name": "출판문화론",
            "professor": "백원근"
        },
        {
            "name": "국어어휘론",
            "professor": "김일환"
        },
        {
            "name": "공인인증 영어독해",
            "professor": "김경영"
        },
        {
            "name": "공인인증 영어독해",
            "professor": "앨리슨 맥스웰"
        },
        {
            "name": "영문학개론",
            "professor": "정혜연"
        },
        {
            "name": "영문법",
            "professor": "고정민"
        },
        {
            "name": "미디어영문학",
            "professor": "정이화"
        },
        {
            "name": "중급영어 읽기와 쓰기",
            "professor": "앨리슨 맥스웰"
        },
        {
            "name": "영어음성음운론"
        },
        {
            "name": "근대미국소설",
            "professor": "정혜연"
        },
        {
            "name": "미디어 영어 읽기와 토론",
            "professor": "마이클 엘리어트"
        },
        {
            "name": "외국어 교과교재연구 및 지도법(서양권)",
            "professor": "고정민"
        },
        {
            "name": "비즈니스 영어",
            "professor": "마이클 엘리어트"
        },
        {
            "name": "현대영국소설",
            "professor": "정이화"
        },
        {
            "name": "영어의미ㆍ화용론",
            "professor": "정소우"
        },
        {
            "name": "영미문학특강",
            "professor": "정혜연"
        },
        {
            "name": "상황별 영어 커뮤니케이션",
            "professor": "앨리슨 맥스웰"
        },
        {
            "name": "영미산문",
            "professor": "정이화"
        },
        {
            "name": "기초독일어 2",
            "professor": "김륜옥"
        },
        {
            "name": "기초독일어 2",
            "professor": "마누엘 보가드"
        },
        {
            "name": "기초독일어회화 2",
            "professor": "마누엘 보가드"
        },
        {
            "name": "독일명작의 이해",
            "professor": "최은아"
        },
        {
            "name": "독일 언어학의 기초",
            "professor": "황은미"
        },
        {
            "name": "독일문학의 변천사",
            "professor": "한상희"
        },
        {
            "name": "독일어 듣기와 말하기2",
            "professor": "마누엘 보가드"
        },
        {
            "name": "독일의 역사",
            "professor": "김미경"
        },
        {
            "name": "중급독일어2",
            "professor": "김길웅"
        },
        {
            "name": "독일언어와 독일문화",
            "professor": "김유리"
        },
        {
            "name": "유럽문화사",
            "professor": "김길웅"
        },
        {
            "name": "독일 음악과 미술",
            "professor": "조수진"
        },
        {
            "name": "독일어권 드라마",
            "professor": "김동조"
        },
        {
            "name": "유럽 및 독일영화",
            "professor": "마누엘 보가드"
        },
        {
            "name": "독일어 통번역연습",
            "professor": "마누엘 보가드"
        },
        {
            "name": "독일어권 예술과 사상",
            "professor": "이재영"
        },
        {
            "name": "초급프랑스어 2",
            "professor": "홍용철"
        },
        {
            "name": "초급프랑스어 2",
            "professor": "이채영"
        },
        {
            "name": "초급프랑스어 회화",
            "professor": "토마 기데"
        },
        {
            "name": "초급프랑스어 읽기",
            "professor": "안성은"
        },
        {
            "name": "프랑스어와 세계",
            "professor": "박선희"
        },
        {
            "name": "프랑스어 어법과 연습 2",
            "professor": "홍용철"
        },
        {
            "name": "중급프랑스어 회화 2",
            "professor": "토마 기데"
        },
        {
            "name": "중급프랑스어 2",
            "professor": "홍용철"
        },
        {
            "name": "프랑스문학과 여성"
        },
        {
            "name": "프랑스소설읽기",
            "professor": "김병욱"
        },
        {
            "name": "프랑스 문학과 예술의 흐름 2",
            "professor": "박언주"
        },
        {
            "name": "프랑스언어학입문 2",
            "professor": "박선희"
        },
        {
            "name": "미디어 프랑스어",
            "professor": "박혜선"
        },
        {
            "name": "델프 프랑스어",
            "professor": "토마 기데"
        },
        {
            "name": "프랑스어권의 사회와 문화"
        },
        {
            "name": "프랑스 지역 문화",
            "professor": "이선우"
        },
        {
            "name": "프랑스어 글쓰기",
            "professor": "토마 기데"
        },
        {
            "name": "프랑스어와 광고",
            "professor": "이선우"
        },
        {
            "name": "초급일본어연습 2",
            "professor": "다케우치 노리아키"
        },
        {
            "name": "초급일본어연습 2",
            "professor": "네고로 유키"
        },
        {
            "name": "일본어 기초표현 2",
            "professor": "안평호"
        },
        {
            "name": "일본어 기초표현 2",
            "professor": "다케우치 노리아키"
        },
        {
            "name": "일본의 정치경제와 문화",
            "professor": "다케우치 노리아키"
        },
        {
            "name": "중급일본어연습 2",
            "professor": "김원기"
        },
        {
            "name": "일본어 중급표현 2",
            "professor": "안평호"
        },
        {
            "name": "중급일본어회화 2",
            "professor": "네고로 유키"
        },
        {
            "name": "일본 현대어문법의 이해",
            "professor": "김옥임"
        },
        {
            "name": "일본문학의 흐름 2",
            "professor": "남휘정"
        },
        {
            "name": "일본어텍스트 읽기와 비평",
            "professor": "남휘정"
        },
        {
            "name": "일본어 교과교재연구 및 지도법 ",
            "professor": "김옥임"
        },
        {
            "name": "일본어통번역 실습",
            "professor": "안평호"
        },
        {
            "name": "일본어 고급표현 2",
            "professor": "김원기"
        },
        {
            "name": "일본 고전문화콘텐츠와 현대",
            "professor": "김태영"
        },
        {
            "name": "일본문화론과 대중문화콘텐츠",
            "professor": "홍윤표"
        },
        {
            "name": "실용일본어특강",
            "professor": "네고로 유키"
        },
        {
            "name": "초급중국어 회화 2",
            "professor": "리우 나"
        },
        {
            "name": "초급중국어 회화 2",
            "professor": "김화진"
        },
        {
            "name": "초급중국어 회화 2",
            "professor": "노은정"
        },
        {
            "name": "초급중국어 회화 2",
            "professor": "김미라"
        },
        {
            "name": "초급중국어 2",
            "professor": "황정희"
        },
        {
            "name": "초급중국어 2",
            "professor": "박홍준"
        },
        {
            "name": "초급중국어 2",
            "professor": "김수진"
        },
        {
            "name": "초급중국어 2",
            "professor": "김경림"
        },
        {
            "name": "중국명저특강",
            "professor": "박홍준"
        },
        {
            "name": "실용중국어문법",
            "professor": "진화진"
        },
        {
            "name": "중국문학사 2",
            "professor": "박홍준"
        },
        {
            "name": "중급중국어 2",
            "professor": "정세진"
        },
        {
            "name": "중급중국어 회화 2",
            "professor": "김수진"
        },
        {
            "name": "중급중국어 회화 2",
            "professor": "리우 나"
        },
        {
            "name": "중국 역사고사와 인물의 이해",
            "professor": "황정희"
        },
        {
            "name": "중국대중소설의 이해",
            "professor": "김수진"
        },
        {
            "name": "중국어학의 이해",
            "professor": "이해윤"
        },
        {
            "name": "중국어 교과교재연구 및 지도법",
            "professor": "신준호"
        },
        {
            "name": "사곡산책",
            "professor": "정세진"
        },
        {
            "name": "중국고전문학과 문화콘텐츠",
            "professor": "황정희"
        },
        {
            "name": "실용중국어 프레젠테이션",
            "professor": "리우 나"
        },
        {
            "name": "비즈니스 중국어",
            "professor": "이정인"
        },
        {
            "name": "중국어통역연습",
            "professor": "윤지영"
        },
        {
            "name": "중국역대시가산책",
            "professor": "정세진"
        },
        {
            "name": "한국사의 이해",
            "professor": "이규철"
        },
        {
            "name": "동아시아사 입문",
            "professor": "조국"
        },
        {
            "name": "서양사로의 초대",
            "professor": "이진일"
        },
        {
            "name": "고려시대의 역사와 문화",
            "professor": "강호선"
        },
        {
            "name": "한국근현대의 역사와 문화",
            "professor": "홍석률"
        },
        {
            "name": "서양사 2 - 근대유럽사의 발전",
            "professor": "차승현"
        },
        {
            "name": "동아시아사 2",
            "professor": "이지영"
        },
        {
            "name": "역사 명저 읽기",
            "professor": "조국"
        },
        {
            "name": "역사학 연구방법과 글쓰기",
            "professor": "오경환"
        },
        {
            "name": "내러티브로 읽는 역사자료",
            "professor": "이규철"
        },
        {
            "name": "사물/예술의 역사",
            "professor": "오경환"
        },
        {
            "name": "동아시아와 근대화",
            "professor": "조국"
        },
        {
            "name": "역사학 특별주제 강의",
            "professor": "이규철"
        },
        {
            "name": "동아시아의 일상과 문화",
            "professor": "전세영"
        },
        {
            "name": "Reading Seminar: 지식",
            "professor": "김민수"
        },
        {
            "name": "Reading Seminar: 종교와 문화",
            "professor": "강호선"
        },
        {
            "name": "한국정치사",
            "professor": "김용직"
        },
        {
            "name": "국제정치의 이해",
            "professor": "유나영"
        },
        {
            "name": "한국정치사상",
            "professor": "김동현"
        },
        {
            "name": "국제기구론",
            "professor": "설규상"
        },
        {
            "name": "공공외교의 이해",
            "professor": "한의석"
        },
        {
            "name": "정치와 생명",
            "professor": "정진화"
        },
        {
            "name": "정치과정과 제도",
            "professor": "박지영"
        },
        {
            "name": "미국정치론",
            "professor": "김영호"
        },
        {
            "name": "유럽정치론",
            "professor": "박선희"
        },
        {
            "name": "정치와 예술",
            "professor": "박지영"
        },
        {
            "name": "일본외교안보론",
            "professor": "김백주"
        },
        {
            "name": "정치와 종교",
            "professor": "김용직"
        },
        {
            "name": "동남아국제관계론",
            "professor": "고우정"
        },
        {
            "name": "서양정치사상",
            "professor": "박진곤"
        },
        {
            "name": "국제관계이론",
            "professor": "김영호"
        },
        {
            "name": "북한정치외교론",
            "professor": "이유정"
        },
        {
            "name": "동아시아국제관계론",
            "professor": "한의석"
        },
        {
            "name": "정치발전론",
            "professor": "박지영"
        },
        {
            "name": "국제정치학원서강독",
            "professor": "연상모"
        },
        {
            "name": "인간관계심리",
            "professor": "박혜경"
        },
        {
            "name": "생물심리학",
            "professor": "김명선"
        },
        {
            "name": "심리통계학",
            "professor": "차옥균"
        },
        {
            "name": "발달심리학",
            "professor": "진경선"
        },
        {
            "name": "심리측정론",
            "professor": "이슬"
        },
        {
            "name": "정서심리학",
            "professor": "이상하"
        },
        {
            "name": "상담이론과 실제",
            "professor": "이정윤"
        },
        {
            "name": "인지심리학",
            "professor": "차옥균"
        },
        {
            "name": "인지심리학",
            "professor": "박형생"
        },
        {
            "name": "특수아상담",
            "professor": "차민정"
        },
        {
            "name": "심리평가",
            "professor": "조효진"
        },
        {
            "name": "문화심리학",
            "professor": "박혜경"
        },
        {
            "name": "행동수정"
        },
        {
            "name": "조직심리학",
            "professor": "정지희"
        },
        {
            "name": "진로상담",
            "professor": "조지연"
        },
        {
            "name": "임상심리학",
            "professor": "서수연"
        },
        {
            "name": "소비자 및 광고심리학",
            "professor": "유은아"
        },
        {
            "name": "식량,식품,음식과 지리학",
            "professor": "박소현"
        },
        {
            "name": "계량지리학",
            "professor": "정재준"
        },
        {
            "name": "자연지리학",
            "professor": "박경"
        },
        {
            "name": "문화지리학",
            "professor": "문상명"
        },
        {
            "name": "한국의 자연과 환경",
            "professor": "박경"
        },
        {
            "name": "발전연구와 지리학",
            "professor": "안창진"
        },
        {
            "name": "GIS개론",
            "professor": "정재준"
        },
        {
            "name": "환태평양 지역지리",
            "professor": "이자원"
        },
        {
            "name": "지리공간의 사상과 역사",
            "professor": "박선영"
        },
        {
            "name": "교통지리학",
            "professor": "박소현"
        },
        {
            "name": "사회정의와 공간문제",
            "professor": "이효선"
        },
        {
            "name": "대도시지역연구",
            "professor": "이자원"
        },
        {
            "name": "원격탐사 및 실습",
            "professor": "정재준"
        },
        {
            "name": "기후변화 개론",
            "professor": "박경"
        },
        {
            "name": "지리 교과교재연구 및 지도법",
            "professor": "박민영"
        },
        {
            "name": "부동산입지분석"
        },
        {
            "name": "지역 및 공간정책 실습",
            "professor": "채지민"
        },
        {
            "name": "도시계획 및 디자인",
            "professor": "이자원"
        },
        {
            "name": "경제원론 2",
            "professor": "강석훈"
        },
        {
            "name": "경제원론 2",
            "professor": "진양수"
        },
        {
            "name": "경제통계학",
            "professor": "강석훈"
        },
        {
            "name": "경제정보분석",
            "professor": "이동열"
        },
        {
            "name": "경제와 사회",
            "professor": "박기주"
        },
        {
            "name": "미시경제학",
            "professor": "박기성"
        },
        {
            "name": "거시경제학",
            "professor": "최준용"
        },
        {
            "name": "거시경제학",
            "professor": "이창선"
        },
        {
            "name": "수리경제학",
            "professor": "이동열"
        },
        {
            "name": "경제학설사",
            "professor": "박기주"
        },
        {
            "name": "후생경제학",
            "professor": "박기성"
        },
        {
            "name": "경제정책론",
            "professor": "오철"
        },
        {
            "name": "국제금융론",
            "professor": "김원기"
        },
        {
            "name": "금융투자론",
            "professor": "김원기"
        },
        {
            "name": "경제성장론",
            "professor": "박기성"
        },
        {
            "name": "조세론",
            "professor": "박기주"
        },
        {
            "name": "법경제학",
            "professor": "진양수"
        },
        {
            "name": "정보화와 경제",
            "professor": "박기주"
        },
        {
            "name": "경제문제세미나",
            "professor": "진양수"
        },
        {
            "name": "마케팅커뮤니케이션",
            "professor": "김종배"
        },
        {
            "name": "마케팅커뮤니케이션",
            "professor": "유경남"
        },
        {
            "name": "계량경영학",
            "professor": "황성욱"
        },
        {
            "name": "재무관리",
            "professor": "이현석"
        },
        {
            "name": "원가회계",
            "professor": "박형주"
        },
        {
            "name": "소비자행동론"
        },
        {
            "name": "소비자행동론",
            "professor": "변경희"
        },
        {
            "name": "파생상품 이해",
            "professor": "이현석"
        },
        {
            "name": "신상품개발론",
            "professor": "김종배"
        },
        {
            "name": "노사관계론",
            "professor": "정종태"
        },
        {
            "name": "세무회계"
        },
        {
            "name": "글로벌 기업론",
            "professor": "신철호"
        },
        {
            "name": "데이터 사이언스 2",
            "professor": "심선영"
        },
        {
            "name": "위험 관리와 보험",
            "professor": "정미화"
        },
        {
            "name": "전략경영",
            "professor": "신철호"
        },
        {
            "name": "서비스마케팅"
        },
        {
            "name": "회계감사",
            "professor": "전홍민"
        },
        {
            "name": "뉴패러다임 경영",
            "professor": "신철호"
        },
        {
            "name": "빅데이터 분석 실습",
            "professor": "최한별"
        },
        {
            "name": "국제재무의 이해"
        },
        {
            "name": "영상커뮤니케이션",
            "professor": "강신규"
        },
        {
            "name": "영상커뮤니케이션",
            "professor": "이은주"
        },
        {
            "name": "디지털미디어론",
            "professor": "김호성"
        },
        {
            "name": "커뮤니케이션연구방법론",
            "professor": "이형민"
        },
        {
            "name": "설득커뮤니케이션",
            "professor": "소현진"
        },
        {
            "name": "미디어, 기호학과 수용자",
            "professor": "정수경"
        },
        {
            "name": "엔터테인먼트산업론",
            "professor": "심상민"
        },
        {
            "name": "지능형콘텐츠제작",
            "professor": "김호성"
        },
        {
            "name": "창의적 아이디어 발상",
            "professor": "신형교"
        },
        {
            "name": "커뮤니케이션이론",
            "professor": "이나연"
        },
        {
            "name": "글로벌마케팅커뮤니케이션",
            "professor": "우미원"
        },
        {
            "name": "문화콘텐츠 마케팅",
            "professor": "심상민"
        },
        {
            "name": "저널리즘 원칙과 쟁점",
            "professor": "박상현"
        },
        {
            "name": "영상연출론",
            "professor": "박소연"
        },
        {
            "name": "글로벌 미디어와 커뮤니케이션",
            "professor": "심두보"
        },
        {
            "name": "미디어와 정치",
            "professor": "이나연"
        },
        {
            "name": "디지털 미디어 마케팅",
            "professor": "류은아"
        },
        {
            "name": "미디어연구 원서 강독",
            "professor": "상윤모"
        },
        {
            "name": "공공/정책 PR"
        },
        {
            "name": "소셜 미디어와 플랫폼 연구",
            "professor": "상윤모"
        },
        {
            "name": "공공외교와 국가브랜딩 전략",
            "professor": "박진우"
        },
        {
            "name": "경영학원론",
            "professor": "신철호"
        },
        {
            "name": "회계원리",
            "professor": "전홍민"
        },
        {
            "name": "기업과 사회",
            "professor": "국화"
        },
        {
            "name": "글로벌 커뮤니케이션 I",
            "professor": "이윤경"
        },
        {
            "name": "글로벌문화와 시민역량",
            "professor": "박성진"
        },
        {
            "name": "재무회계",
            "professor": "전홍민"
        },
        {
            "name": "생산관리",
            "professor": "황성욱"
        },
        {
            "name": "금융의 이해",
            "professor": "이현석"
        },
        {
            "name": "글로벌 비즈니스를 위한 경제정보분석",
            "professor": "이윤경"
        },
        {
            "name": "한국·중국·일본 경제론",
            "professor": "이윤경"
        },
        {
            "name": "글로벌 SCM의 이해",
            "professor": "구자원"
        },
        {
            "name": "글로벌 이커머스",
            "professor": "차용욱"
        },
        {
            "name": "글로벌 커뮤니케이션 III",
            "professor": "올리버 테리"
        },
        {
            "name": "국제무역통상실무론",
            "professor": "이윤경"
        },
        {
            "name": "국제기업법 실무",
            "professor": "이상기"
        },
        {
            "name": "글로벌 비즈니스 베스트 프랙티스 사례",
            "professor": "구자원"
        },
        {
            "name": "글로벌 스타트업 경영연구",
            "professor": "차용욱"
        },
        {
            "name": "글로벌파이낸싱시스템과 FX관리",
            "professor": "이윤경"
        },
        {
            "name": "(Global) Internship",
            "professor": "구자원"
        },
        {
            "name": "글로벌 트렌드와 혁신 경영",
            "professor": "박미"
        },
        {
            "name": "글로벌마케팅전략",
            "professor": "구자원"
        },
        {
            "name": "가족복지론",
            "professor": "박주희"
        },
        {
            "name": "사회복지역사",
            "professor": "이승기"
        },
        {
            "name": "아동복지론",
            "professor": "조윤주"
        },
        {
            "name": "사회복지실천론",
            "professor": "박현용"
        },
        {
            "name": "자원봉사론",
            "professor": "고선강"
        },
        {
            "name": "사회복지행정론",
            "professor": "이승기"
        },
        {
            "name": "사회복지윤리와 철학",
            "professor": "박주희"
        },
        {
            "name": "학교사회복지론",
            "professor": "조윤주"
        },
        {
            "name": "지역사회복지론",
            "professor": "조윤주"
        },
        {
            "name": "가족상담 및 가족치료",
            "professor": "박주희"
        },
        {
            "name": "사례관리론",
            "professor": "손선옥"
        },
        {
            "name": "사회복지와 문화다양성",
            "professor": "고선강"
        },
        {
            "name": "사회복지현장실습",
            "professor": "박현용"
        },
        {
            "name": "사회복지현장실습"
        },
        {
            "name": "사회복지법제와 실천",
            "professor": "이승기"
        },
        {
            "name": "의료사회복지론",
            "professor": "고선강"
        },
        {
            "name": "중독과 사회복지실천",
            "professor": "박현용"
        },
        {
            "name": "법률적 주장과 모의재판",
            "professor": "황태희"
        },
        {
            "name": "물권법",
            "professor": "전광백"
        },
        {
            "name": "물권법",
            "professor": "김봉수"
        },
        {
            "name": "형법총론",
            "professor": "이성기"
        },
        {
            "name": "법사회학",
            "professor": "김나경"
        },
        {
            "name": "채권법각론",
            "professor": "김봉수"
        },
        {
            "name": "노동법 2",
            "professor": "권오성"
        },
        {
            "name": "회사법개론",
            "professor": "김한종"
        },
        {
            "name": "형사정책",
            "professor": "이명근"
        },
        {
            "name": "소비자법",
            "professor": "황태희"
        },
        {
            "name": "국제법 2",
            "professor": "박미경"
        },
        {
            "name": "민주사회의 헌법",
            "professor": "김연식"
        },
        {
            "name": "유가증권법",
            "professor": "김한종"
        },
        {
            "name": "가족법",
            "professor": "전광백"
        },
        {
            "name": "형사소송법 2",
            "professor": "이성기"
        },
        {
            "name": "형사소송법 2",
            "professor": "김나경"
        },
        {
            "name": "행정법각론",
            "professor": "이재훈"
        },
        {
            "name": "민사소송법 2",
            "professor": "문기탁"
        },
        {
            "name": "국제통상법 2",
            "professor": "이상혁"
        },
        {
            "name": "영사법무 사례연구",
            "professor": "한동만"
        },
        {
            "name": "영사법무학2",
            "professor": "김현명"
        },
        {
            "name": "행정구제법",
            "professor": "이재훈"
        },
        {
            "name": "금융법",
            "professor": "김한종"
        },
        {
            "name": "지식재산권법",
            "professor": "임광섭"
        },
        {
            "name": "생명윤리법",
            "professor": "김나경"
        },
        {
            "name": "글로벌 경제와 법",
            "professor": "황태희"
        },
        {
            "name": "민사소송법 3",
            "professor": "문기탁"
        },
        {
            "name": "세법 2",
            "professor": "하봉곤"
        },
        {
            "name": "미적분과 벡터해석 기초"
        },
        {
            "name": "해석학개론 및 연습 2",
            "professor": "심성아"
        },
        {
            "name": "기하학 일반",
            "professor": "윤기헌"
        },
        {
            "name": "보험수리학",
            "professor": "김주홍"
        },
        {
            "name": "선형대수학 2",
            "professor": "신용수"
        },
        {
            "name": "수학적 모델링과 미분방정식",
            "professor": "김도현"
        },
        {
            "name": "정수론",
            "professor": "신용수"
        },
        {
            "name": "미분기하학",
            "professor": "윤기헌"
        },
        {
            "name": "현대대수학 2",
            "professor": "신용수"
        },
        {
            "name": "복소수적분론",
            "professor": "황정연"
        },
        {
            "name": "수학 교과교재연구 및 지도법",
            "professor": "정해남"
        },
        {
            "name": "위상수학 2",
            "professor": "권보현"
        },
        {
            "name": "수치해석과 파이썬",
            "professor": "김주홍"
        },
        {
            "name": "실해석학",
            "professor": "심성아"
        },
        {
            "name": "편미분방정식과 응용",
            "professor": "김기택"
        },
        {
            "name": "수치적 데이터 처리 2",
            "professor": "김주홍"
        },
        {
            "name": "미적분과 벡터해석 기초",
            "professor": "황정연"
        },
        {
            "name": "미적분과 벡터해석 기초",
            "professor": "윤기헌"
        },
        {
            "name": "미적분과 벡터해석 기초",
            "professor": "김수리"
        },
        {
            "name": "미적분과 벡터해석 기초",
            "professor": "연미정"
        },
        {
            "name": "고급 수학",
            "professor": "김수리"
        },
        {
            "name": "고급 수학",
            "professor": "김도현"
        },
        {
            "name": "고급 수학",
            "professor": "조명원"
        },
        {
            "name": "고급 수학",
            "professor": "김지현"
        },
        {
            "name": "고급 수학",
            "professor": "강우석"
        },
        {
            "name": "통계프로그래밍실습",
            "professor": "김기영"
        },
        {
            "name": "수리통계학 2",
            "professor": "박만식"
        },
        {
            "name": "회귀분석",
            "professor": "이성건"
        },
        {
            "name": "파이썬통계분석",
            "professor": "이성건"
        },
        {
            "name": "생명과학자료분석",
            "professor": "차재형"
        },
        {
            "name": "시계열자료분석",
            "professor": "이종협"
        },
        {
            "name": "통계와 마케팅",
            "professor": "조재범"
        },
        {
            "name": "SQL통계분석",
            "professor": "박성오"
        },
        {
            "name": "SQL통계분석",
            "professor": "김동하"
        },
        {
            "name": "SQL통계분석",
            "professor": "최병정"
        },
        {
            "name": "인공지능통계분석",
            "professor": "김영훈"
        },
        {
            "name": "다변량자료분석 II",
            "professor": "박성오"
        },
        {
            "name": "데이터마이닝",
            "professor": "김동하"
        },
        {
            "name": "금융통계",
            "professor": "오찬욱"
        },
        {
            "name": "고급통계분석",
            "professor": "박만식"
        },
        {
            "name": "기초 통계학",
            "professor": "김계완"
        },
        {
            "name": "기초 통계학",
            "professor": "권윤기"
        },
        {
            "name": "기초 통계학",
            "professor": "강태욱"
        },
        {
            "name": "일반화학 2",
            "professor": "김정수"
        },
        {
            "name": "화학수학",
            "professor": "김수리"
        },
        {
            "name": "물리화학 2",
            "professor": "김정수"
        },
        {
            "name": "유기화학 2",
            "professor": "정선호"
        },
        {
            "name": "유기화학실험",
            "professor": "김정현"
        },
        {
            "name": "유기화학실험",
            "professor": "이은경"
        },
        {
            "name": "분석화학 2",
            "professor": "신민정"
        },
        {
            "name": "생화학 2",
            "professor": "박성순"
        },
        {
            "name": "무기화학 2",
            "professor": "구본재"
        },
        {
            "name": "유기화학 3",
            "professor": "정선호"
        },
        {
            "name": "기기분석",
            "professor": "신민정"
        },
        {
            "name": "화학 교과교재연구 및 지도법",
            "professor": "김경순"
        },
        {
            "name": "효소화학",
            "professor": "박성순"
        },
        {
            "name": "무기화학특강",
            "professor": "구본재"
        },
        {
            "name": "유기합성화학",
            "professor": "채정현"
        },
        {
            "name": "일반화학 Ⅱ",
            "professor": "김정수"
        },
        {
            "name": "일반화학 Ⅱ",
            "professor": "이향애"
        },
        {
            "name": "일반화학 Ⅱ",
            "professor": "심용호"
        },
        {
            "name": "일반물리학 Ⅱ",
            "professor": "유상구"
        },
        {
            "name": "미적분학 및 연습",
            "professor": "김도현"
        },
        {
            "name": "기초통계실습",
            "professor": "이종협"
        },
        {
            "name": "기초통계실습",
            "professor": "박만식"
        },
        {
            "name": "기초통계실습",
            "professor": "엄인옥"
        },
        {
            "name": "핀테크 개론",
            "professor": "김수리"
        },
        {
            "name": "행렬대수",
            "professor": "박성오"
        },
        {
            "name": "엑셀통계분석",
            "professor": "김동하"
        },
        {
            "name": "엑셀통계분석",
            "professor": "정호현"
        },
        {
            "name": "엑셀통계분석",
            "professor": "조재범"
        },
        {
            "name": "데이터사이언스실습",
            "professor": "정호현"
        },
        {
            "name": "일반화학실험 2",
            "professor": "김정현"
        },
        {
            "name": "일반화학실험 2",
            "professor": "정미원"
        },
        {
            "name": "일반화학실험 2",
            "professor": "채정현"
        },
        {
            "name": "일반화학실험 2",
            "professor": "박성순"
        },
        {
            "name": "일반화학실험 2",
            "professor": "구본재"
        },
        {
            "name": "일반화학실험 2",
            "professor": "신민정"
        },
        {
            "name": "디지털컨텐츠",
            "professor": "신민아"
        },
        {
            "name": "디지털컨텐츠",
            "professor": "안민지"
        },
        {
            "name": "디지털컨텐츠",
            "professor": "한세영"
        },
        {
            "name": "웹프로그래밍기초",
            "professor": "최경아"
        },
        {
            "name": "모바일서비스디자인",
            "professor": "이여름"
        },
        {
            "name": "3D 모델링과 시뮬레이션",
            "professor": "김현석"
        },
        {
            "name": "미디어스토리텔링 프로덕션"
        },
        {
            "name": "미디어스토리텔링 프로덕션",
            "professor": "KIM SEOYOUNG"
        },
        {
            "name": "IoT 서비스설계",
            "professor": "김준철"
        },
        {
            "name": "서비스플랫폼디자인",
            "professor": "김현석"
        },
        {
            "name": "비즈니스서비스디자인",
            "professor": "최민영"
        },
        {
            "name": "서비스측정 및 평가",
            "professor": "강효진"
        },
        {
            "name": "서비스디자인 창업",
            "professor": "이향은"
        },
        {
            "name": "문화와 행태 디자인",
            "professor": "이향은"
        },
        {
            "name": "프로페셔널 인큐베이팅",
            "professor": "최민영"
        },
        {
            "name": "서비스캡스톤디자인",
            "professor": "이여름"
        },
        {
            "name": "메이드인성신",
            "professor": "최경아"
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
            "name": "융합보안수사론"
        },
        {
            "name": "개인정보보호관리체계",
            "professor": "김경진"
        },
        {
            "name": "컴퓨터 네트워크",
            "professor": "임연섭"
        },
        {
            "name": "컴퓨터 네트워크",
            "professor": "이일구"
        },
        {
            "name": "융합보안 포렌식"
        },
        {
            "name": "융합보안 비즈니스 활용론",
            "professor": "이상학"
        },
        {
            "name": "정보보호컨설팅기법",
            "professor": "김성민"
        },
        {
            "name": "정보보호제품보안성평가방법론",
            "professor": "김경진"
        },
        {
            "name": "해킹프로그램실습 2",
            "professor": "장대희"
        },
        {
            "name": "디지털포렌식실습",
            "professor": "김성민"
        },
        {
            "name": "디지털포렌식실습",
            "professor": "이별"
        },
        {
            "name": "데이터베이스보안실습",
            "professor": "박새롬"
        },
        {
            "name": "데이터베이스보안실습",
            "professor": "권수정"
        },
        {
            "name": "융합보안캡스톤디자인 2",
            "professor": "김경진"
        },
        {
            "name": "융합보안특강",
            "professor": "임연섭"
        },
        {
            "name": "융합보안특강",
            "professor": "박새롬"
        },
        {
            "name": "C++프로그래밍",
            "professor": "윤상덕"
        },
        {
            "name": "C++프로그래밍",
            "professor": "이택"
        },
        {
            "name": "C++프로그래밍",
            "professor": "김경진"
        },
        {
            "name": "C++프로그래밍",
            "professor": "이정빈"
        },
        {
            "name": "C++프로그래밍",
            "professor": "심광섭"
        },
        {
            "name": "C++프로그래밍",
            "professor": "홍의석"
        },
        {
            "name": "C++프로그래밍",
            "professor": "김설현"
        },
        {
            "name": "C++프로그래밍",
            "professor": "변혜원"
        },
        {
            "name": "C++프로그래밍",
            "professor": "유재현"
        },
        {
            "name": "자료구조"
        },
        {
            "name": "데이터베이스",
            "professor": "박지웅"
        },
        {
            "name": "운영체제",
            "professor": "심광섭"
        },
        {
            "name": "자바프로그래밍",
            "professor": "노현아"
        },
        {
            "name": "자바프로그래밍",
            "professor": "이준세"
        },
        {
            "name": "고급자료구조",
            "professor": "장재경"
        },
        {
            "name": "고급자바프로그래밍",
            "professor": "우종정"
        },
        {
            "name": "고급자바프로그래밍",
            "professor": "이윤경"
        },
        {
            "name": "프로젝트설계",
            "professor": "서동수"
        },
        {
            "name": "데이터베이스프로그래밍",
            "professor": "박지웅"
        },
        {
            "name": "모바일소프트웨어",
            "professor": "우종정"
        },
        {
            "name": "네트워크분석실습",
            "professor": "박지웅"
        },
        {
            "name": "상업 논리 및 논술",
            "professor": "강수영"
        },
        {
            "name": "정보ㆍ컴퓨터 교과교재연구 및 지도법"
        },
        {
            "name": "파이썬 프로그래밍",
            "professor": "홍의석"
        },
        {
            "name": "파이썬 프로그래밍",
            "professor": "조미영"
        },
        {
            "name": "빅데이터 프로그래밍",
            "professor": "김종완"
        },
        {
            "name": "컴파일러",
            "professor": "김도형"
        },
        {
            "name": "소프트웨어공학",
            "professor": "서동수"
        },
        {
            "name": "이산수학",
            "professor": "김형우"
        },
        {
            "name": "이산수학",
            "professor": "오장민"
        },
        {
            "name": "IT개론",
            "professor": "이재원"
        },
        {
            "name": "인공지능",
            "professor": "이재원"
        },
        {
            "name": "인공지능수학",
            "professor": "이준세"
        },
        {
            "name": "데이터마이닝",
            "professor": "김준영"
        },
        {
            "name": "웹정보시스템 프로젝트",
            "professor": "조성우"
        },
        {
            "name": "소프트웨어공학",
            "professor": "이혜리"
        },
        {
            "name": "인간컴퓨터상호작용",
            "professor": "변혜원"
        },
        {
            "name": "스마트시스템 캡스톤디자인",
            "professor": "김준철"
        },
        {
            "name": "스마트네트워크 및 실습",
            "professor": "김준철"
        },
        {
            "name": "데이터마이닝개론",
            "professor": "김준영"
        },
        {
            "name": "지능형 정보시스템",
            "professor": "오장민"
        },
        {
            "name": "가상현실",
            "professor": "변혜원"
        },
        {
            "name": "파이썬프로그래밍",
            "professor": "정영희"
        },
        {
            "name": "파이썬프로그래밍",
            "professor": "김도형"
        },
        {
            "name": "파이썬프로그래밍",
            "professor": "김준영"
        },
        {
            "name": "과학도를 위한 파이썬프로그래밍",
            "professor": "윤상덕"
        },
        {
            "name": "일반화학실험 2",
            "professor": "홍사미"
        },
        {
            "name": "청정융합 진로와 전망",
            "professor": "임종훈"
        },
        {
            "name": "신재생에너지공학개론",
            "professor": "황안나"
        },
        {
            "name": "재료과학과 공학 2",
            "professor": "홍현선"
        },
        {
            "name": "전과정사고와 그린제품 개발",
            "professor": "양인목"
        },
        {
            "name": "창의적 사고와 비즈니스모델",
            "professor": "정소현"
        },
        {
            "name": "현대물리학",
            "professor": "임재용"
        },
        {
            "name": "창의성 공학설계와 창업(캡스톤디자인) 2",
            "professor": "이형곤"
        },
        {
            "name": "상평형과 상변태론 ",
            "professor": "이창우"
        },
        {
            "name": "촉매공학",
            "professor": "임종훈"
        },
        {
            "name": "온실가스관리공학",
            "professor": "양인목"
        },
        {
            "name": "환경·소재·에너지공학 실습 2",
            "professor": "홍현선"
        },
        {
            "name": "기기분석",
            "professor": "임종훈"
        },
        {
            "name": "첨단소재공학"
        },
        {
            "name": "위험성평가 공학",
            "professor": "양인목"
        },
        {
            "name": "프로젝트공학 2",
            "professor": "양인목"
        },
        {
            "name": "바이오식품공학개론",
            "professor": "윤현근"
        },
        {
            "name": "생리학",
            "professor": "나혜경"
        },
        {
            "name": "기기분석개론",
            "professor": "김종훈"
        },
        {
            "name": "단백질공학",
            "professor": "김종훈"
        },
        {
            "name": "생화학 2",
            "professor": "나혜경"
        },
        {
            "name": "생화학실험",
            "professor": "나혜경"
        },
        {
            "name": "바이오식품미생물공학실험",
            "professor": "현정은"
        },
        {
            "name": "분자생물학"
        },
        {
            "name": "바이오프로세스",
            "professor": "김종훈"
        },
        {
            "name": "발효식품공학",
            "professor": "현정은"
        },
        {
            "name": "바이오식품공학 2",
            "professor": "장혜원"
        },
        {
            "name": "바이오식품화학실험",
            "professor": "윤현근"
        },
        {
            "name": "바이오식품화학 2",
            "professor": "윤현근"
        },
        {
            "name": "바이오식품개발캡스톤디자인",
            "professor": "김종훈"
        },
        {
            "name": "HACCP의 이론과 응용",
            "professor": "현정은"
        },
        {
            "name": "바이오식품포장공학",
            "professor": "장혜원"
        },
        {
            "name": "바이오식품산업동향 및 마케팅",
            "professor": "장혜원"
        },
        {
            "name": "바이오산업현장실습",
            "professor": "김종훈"
        },
        {
            "name": "일반생물학 2",
            "professor": "최상철"
        },
        {
            "name": "일반생물학실험 2",
            "professor": "김상태"
        },
        {
            "name": "일반생물학실험 2",
            "professor": "고병준"
        },
        {
            "name": "일반생물학실험 2",
            "professor": "임동현"
        },
        {
            "name": "바이오의약품개론",
            "professor": "강창수"
        },
        {
            "name": "생태학"
        },
        {
            "name": "유전공학",
            "professor": "강창수"
        },
        {
            "name": "해부학 및 조직학",
            "professor": "전용필"
        },
        {
            "name": "미생물학",
            "professor": "김종일"
        },
        {
            "name": "분자계통학",
            "professor": "김상태"
        },
        {
            "name": "발생공학",
            "professor": "전용필"
        },
        {
            "name": "생물 교과교재연구 및 지도법",
            "professor": "안주현"
        },
        {
            "name": "생물분리공정",
            "professor": "백영빈"
        },
        {
            "name": "세포배양 및 공정실험",
            "professor": "백영빈"
        },
        {
            "name": "약물전달학",
            "professor": "고병준"
        },
        {
            "name": "유전체학",
            "professor": "최상철"
        },
        {
            "name": "생물정보학실험",
            "professor": "최상철"
        },
        {
            "name": "생명공학창의설계 2",
            "professor": "최상철"
        },
        {
            "name": "생식생리와 보조생식술",
            "professor": "전용필"
        },
        {
            "name": "일반생물학 Ⅱ",
            "professor": "최상철"
        },
        {
            "name": "일반생물학 Ⅱ",
            "professor": "권혜경"
        },
        {
            "name": "뇌인지과학개론",
            "professor": "김호성"
        },
        {
            "name": "해부학",
            "professor": "천주영"
        },
        {
            "name": "건강과 글로벌이슈",
            "professor": "조정민"
        },
        {
            "name": "간호윤리",
            "professor": "고정미"
        },
        {
            "name": "기본간호학 2",
            "professor": "김영주"
        },
        {
            "name": "여성건강간호학 1",
            "professor": "전나미"
        },
        {
            "name": "성인간호학 2",
            "professor": "임경춘"
        },
        {
            "name": "아동간호학 1",
            "professor": "김동희"
        },
        {
            "name": "성인간호학 3"
        },
        {
            "name": "기본간호학실습 2",
            "professor": "나윤희"
        },
        {
            "name": "기본간호학실습 2",
            "professor": "송효빈"
        },
        {
            "name": "기본간호학실습 2",
            "professor": "김영주"
        },
        {
            "name": "성인간호학 실습 1",
            "professor": "조무용"
        },
        {
            "name": "여성건강간호학실습",
            "professor": "강소라"
        },
        {
            "name": "아동간호학실습",
            "professor": "강소라"
        },
        {
            "name": "정신간호학 2",
            "professor": "정명실"
        },
        {
            "name": "보건교육",
            "professor": "조정민"
        },
        {
            "name": "성인간호학실습 2",
            "professor": "조무용"
        },
        {
            "name": "정신간호학실습 1",
            "professor": "김덕진"
        },
        {
            "name": "성인간호학 5",
            "professor": "조무용"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "정명실"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "양승애"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "천주영"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "조무용"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "강소라"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "김미경"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "송효빈"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "민혜영"
        },
        {
            "name": "시뮬레이션통합실습 1",
            "professor": "김순옥"
        },
        {
            "name": "간호정보학",
            "professor": "조무용"
        },
        {
            "name": "노인간호학 실습",
            "professor": "조무용"
        },
        {
            "name": "성인간호학실습 3",
            "professor": "천주영"
        },
        {
            "name": "간호연구 및 통계"
        },
        {
            "name": "간호연구 및 통계",
            "professor": "유수영"
        },
        {
            "name": "보건의료관계법규",
            "professor": "이영미"
        },
        {
            "name": "간호관리학실습",
            "professor": "고정미"
        },
        {
            "name": "성인간호학실습 4",
            "professor": "천주영"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "임경춘"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "조정민"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "고정미"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "김동희"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "김영주"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "천주영"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "조무용"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "김덕진"
        },
        {
            "name": "시뮬레이션통합실습 2",
            "professor": "민혜영"
        },
        {
            "name": "성인간호학 7",
            "professor": "양승애"
        },
        {
            "name": "지역사회간호학실습2",
            "professor": "김덕진"
        },
        {
            "name": "생물학 2",
            "professor": "권혜경"
        },
        {
            "name": "의과학과 화학입문 2",
            "professor": "이향애"
        },
        {
            "name": "해부생리학 2",
            "professor": "전민영"
        },
        {
            "name": "물리학 2",
            "professor": "조명원"
        },
        {
            "name": "유기화학 2",
            "professor": "이지연"
        },
        {
            "name": "미적분학 및 연습 2",
            "professor": "조명원"
        },
        {
            "name": "생화학 2",
            "professor": "임동현"
        },
        {
            "name": "생리학 2",
            "professor": "전민영"
        },
        {
            "name": "물리학실험",
            "professor": "조명원"
        },
        {
            "name": "의약화학 2",
            "professor": "이지연"
        },
        {
            "name": "연구방법론",
            "professor": "이지연"
        },
        {
            "name": "의학개론 2",
            "professor": "전민영"
        },
        {
            "name": "영작문 2",
            "professor": "조나단 리스 팬톤"
        },
        {
            "name": "신경과학",
            "professor": "전민영"
        },
        {
            "name": "영양생화학실험",
            "professor": "이명숙"
        },
        {
            "name": "영양판정 및 실습",
            "professor": "이승민"
        },
        {
            "name": "식생활관리",
            "professor": "고성희"
        },
        {
            "name": "식품화학실험",
            "professor": "표영희"
        },
        {
            "name": "한국조리 및 실습",
            "professor": "고성희"
        },
        {
            "name": "생애주기영양학",
            "professor": "이승민"
        },
        {
            "name": "식사요법"
        },
        {
            "name": "임상영양학실험",
            "professor": "이명숙"
        },
        {
            "name": "기능성식품학",
            "professor": "표영희"
        },
        {
            "name": "식품위생학",
            "professor": "이경연"
        },
        {
            "name": "영양사현장실습",
            "professor": "표영희"
        },
        {
            "name": "식품마케팅",
            "professor": "고성희"
        },
        {
            "name": "식품위생관계법규",
            "professor": "강태욱"
        },
        {
            "name": "스포츠문화사",
            "professor": "임우택"
        },
        {
            "name": "스포츠산업‧경제론",
            "professor": "정영남"
        },
        {
            "name": "운동생리실습",
            "professor": "양윤권"
        },
        {
            "name": "테니스 2",
            "professor": "성용석"
        },
        {
            "name": "승마 2",
            "professor": "이금주"
        },
        {
            "name": "해양스포츠 2",
            "professor": "정영남"
        },
        {
            "name": "운동처방실습",
            "professor": "권보하"
        },
        {
            "name": "운동처방실습",
            "professor": "최재희"
        },
        {
            "name": "스포츠사회학",
            "professor": "임우택"
        },
        {
            "name": "골프 2",
            "professor": "임우택"
        },
        {
            "name": "배드민턴 2",
            "professor": "신희광"
        },
        {
            "name": "동계스포츠"
        },
        {
            "name": "스포츠의학",
            "professor": "이시은"
        },
        {
            "name": "스포츠와 대중매체",
            "professor": "정영남"
        },
        {
            "name": "스포츠응급처치",
            "professor": "박성영"
        },
        {
            "name": "크로스핏",
            "professor": "이시은"
        },
        {
            "name": "근관절 생리학"
        },
        {
            "name": "운동재활트레이닝",
            "professor": "김영주"
        },
        {
            "name": "운동역학과 재활"
        },
        {
            "name": "운동과 발육발달",
            "professor": "정은나"
        },
        {
            "name": "소마틱재활요법",
            "professor": "육영숙"
        },
        {
            "name": "유도 2",
            "professor": "이소연"
        },
        {
            "name": "건강체력측정평가",
            "professor": "이윤미"
        },
        {
            "name": "운동재활의학",
            "professor": "김영주"
        },
        {
            "name": "교정운동",
            "professor": "이상길"
        },
        {
            "name": "마음챙김과 심리기술",
            "professor": "육영숙"
        },
        {
            "name": "마음챙김과 심리기술",
            "professor": "심교린"
        },
        {
            "name": "운동영양학",
            "professor": "윤동현"
        },
        {
            "name": "짐볼과 밴드운동재활",
            "professor": "오정하"
        },
        {
            "name": "노인재활운동",
            "professor": "김아람"
        },
        {
            "name": "유기화학",
            "professor": "김정수"
        },
        {
            "name": "영양학",
            "professor": "이승민"
        },
        {
            "name": "생리학",
            "professor": "정윤경"
        },
        {
            "name": "야외활동",
            "professor": "이수정"
        },
        {
            "name": "야외활동",
            "professor": "최재희"
        },
        {
            "name": "해부학",
            "professor": "심유진"
        },
        {
            "name": "빙상"
        },
        {
            "name": "볼링 2",
            "professor": "정영남"
        },
        {
            "name": "수상안전 및 인명구조",
            "professor": "이수정"
        },
        {
            "name": "태권도2",
            "professor": "김영진"
        },
        {
            "name": "건강운동심리학",
            "professor": "육영숙"
        },
        {
            "name": "헬스트레이닝",
            "professor": "백승희"
        },
        {
            "name": "가정 교과교재 연구 및 지도법",
            "professor": "이신애"
        },
        {
            "name": "글로벌 기업을 위한 국제 회계",
            "professor": "이상기"
        },
        {
            "name": "글로벌 기업을 위한 국제 재무",
            "professor": "구자원"
        },
        {
            "name": "중국의 경제조직과 발전",
            "professor": "박미"
        },
        {
            "name": "기업윤리",
            "professor": "이성근"
        },
        {
            "name": "서양의복구성",
            "professor": "김경희"
        },
        {
            "name": "서양의복구성",
            "professor": "문윤경"
        },
        {
            "name": "패션일러스트레이션"
        },
        {
            "name": "패션일러스트레이션",
            "professor": "이재민"
        },
        {
            "name": "한국복식디자인 1",
            "professor": "장민정"
        },
        {
            "name": "패션디자인CAD 1",
            "professor": "김덕하"
        },
        {
            "name": "패션디자인CAD 1",
            "professor": "손혜승"
        },
        {
            "name": "패션디자인CAD 1"
        },
        {
            "name": "어패럴 메이킹",
            "professor": "문윤경"
        },
        {
            "name": "패턴제작 및 구성",
            "professor": "김금화"
        },
        {
            "name": "컬러정보와 디자인",
            "professor": "류한나"
        },
        {
            "name": "컬러정보와 디자인",
            "professor": "은광희"
        },
        {
            "name": "비주얼 머천다이징",
            "professor": "박은주"
        },
        {
            "name": "비주얼 머천다이징",
            "professor": "이영주"
        },
        {
            "name": "한국복식프로젝트",
            "professor": "장민정"
        },
        {
            "name": "패션 광고마케팅 프로젝트",
            "professor": "정이재"
        },
        {
            "name": "패션소재기획",
            "professor": "유화숙"
        },
        {
            "name": "패션소재기획",
            "professor": "김미경"
        },
        {
            "name": "패션드레이핑",
            "professor": "김미영"
        },
        {
            "name": "패션드레이핑"
        },
        {
            "name": "패션디자인스튜디오",
            "professor": "염미선"
        },
        {
            "name": "패션디자인스튜디오",
            "professor": "오지혜"
        },
        {
            "name": "패턴 CAD",
            "professor": "김미영"
        },
        {
            "name": "글로벌패션유통산업",
            "professor": "김해정"
        },
        {
            "name": "글로벌패션유통산업",
            "professor": "이영주"
        },
        {
            "name": "패션실무기획과 마케팅",
            "professor": "김가현"
        },
        {
            "name": "테크니컬 디자인",
            "professor": "윤지원"
        },
        {
            "name": "미용 중국어기초",
            "professor": "박초희"
        },
        {
            "name": "피부과학",
            "professor": "박초희"
        },
        {
            "name": "화장품학개론 ",
            "professor": "김주덕"
        },
        {
            "name": "화장품학개론 ",
            "professor": "김지은"
        },
        {
            "name": "뷰티 일러스트레이션 ",
            "professor": "하승아"
        },
        {
            "name": "기초에스테틱 ",
            "professor": "임우경"
        },
        {
            "name": "기초에스테틱 ",
            "professor": "박한나"
        },
        {
            "name": "뷰티색채학 ",
            "professor": "김정하"
        },
        {
            "name": "시대별 테마 메이크업",
            "professor": "김현진"
        },
        {
            "name": "시대별 테마 메이크업",
            "professor": "량쉬"
        },
        {
            "name": "뷰티영양과 헬스 ",
            "professor": "박초희"
        },
        {
            "name": "향과 아로마테라피",
            "professor": "서현우"
        },
        {
            "name": "이미지메이킹 ",
            "professor": "신정원"
        },
        {
            "name": "기능성 화장품학",
            "professor": "박초희"
        },
        {
            "name": "성격분장디자인",
            "professor": "황선희"
        },
        {
            "name": "성격분장디자인",
            "professor": "량쉬"
        },
        {
            "name": "인체해부생리학",
            "professor": "김종례"
        },
        {
            "name": "화장품 품질경영",
            "professor": "강진미"
        },
        {
            "name": "뷰티 마케팅과 경영",
            "professor": "김세은"
        },
        {
            "name": "업스타일",
            "professor": "이정림"
        },
        {
            "name": "아트메이크업",
            "professor": "이유나"
        },
        {
            "name": "특수분장",
            "professor": "황선희"
        },
        {
            "name": "뷰티 트렌드 세미나",
            "professor": "김민경"
        },
        {
            "name": "전공 실무인턴십 ",
            "professor": "류현정"
        },
        {
            "name": "소비자정보와 교육",
            "professor": "석재혜"
        },
        {
            "name": "지역생활문화콘텐츠",
            "professor": "최배영"
        },
        {
            "name": "서비스매너와 커뮤니케이션",
            "professor": "박복임"
        },
        {
            "name": "가족행동의 경제 ",
            "professor": "노영래"
        },
        {
            "name": "가족학",
            "professor": "김선주"
        },
        {
            "name": "소비자 의사결정론",
            "professor": "양수진"
        },
        {
            "name": "생애주기와 문화산업",
            "professor": "최배영"
        },
        {
            "name": "보험과 은퇴설계",
            "professor": "김정현"
        },
        {
            "name": "시장조사와 마케팅",
            "professor": "박배진"
        },
        {
            "name": "연구 및 조사방법",
            "professor": "허경옥"
        },
        {
            "name": "소비자투자와 자산관리",
            "professor": "차경욱"
        },
        {
            "name": "소비자심리와 광고",
            "professor": "양수진"
        },
        {
            "name": "소비자심리와 광고",
            "professor": "박나영"
        },
        {
            "name": "주거학",
            "professor": "백주원"
        },
        {
            "name": "소비자법과 정책",
            "professor": "장성철"
        },
        {
            "name": "소비자법과 정책",
            "professor": "이기연"
        },
        {
            "name": "컨벤션문화산업",
            "professor": "박현명"
        },
        {
            "name": "소비자학응용세미나",
            "professor": "허경옥"
        },
        {
            "name": "소비시장과 산업",
            "professor": "권용덕"
        },
        {
            "name": "세계민주시민교육 1",
            "professor": "김종훈"
        },
        {
            "name": "교육심리",
            "professor": "백아롱"
        },
        {
            "name": "교육심리",
            "professor": "오혜림"
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
            "name": "교육과정",
            "professor": "황순예"
        },
        {
            "name": "교육과정",
            "professor": "김종훈"
        },
        {
            "name": "교육평가",
            "professor": "강태훈"
        },
        {
            "name": "교육평가",
            "professor": "김명연"
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
            "professor": "최은정"
        },
        {
            "name": "특수교육학개론",
            "professor": "권소영"
        },
        {
            "name": "교직실무"
        },
        {
            "name": "학교폭력 예방 및 학생의 이해",
            "professor": "이유림"
        },
        {
            "name": "학교폭력 예방 및 학생의 이해",
            "professor": "이윤옥"
        },
        {
            "name": "교육과정과 수업",
            "professor": "김종훈"
        },
        {
            "name": "학교교육과 평가",
            "professor": "오민아"
        },
        {
            "name": "학교상담론"
        },
        {
            "name": "자기이해 및 교육전문가 진로탐색",
            "professor": "김종훈"
        },
        {
            "name": "교육고전의 향연",
            "professor": "심형진"
        },
        {
            "name": "교육행정",
            "professor": "김지현"
        },
        {
            "name": "교육공학",
            "professor": "노석준"
        },
        {
            "name": "현대교육사조",
            "professor": "심형진"
        },
        {
            "name": "원격교육론",
            "professor": "권회림"
        },
        {
            "name": "평생교육방법론",
            "professor": "노경란"
        },
        {
            "name": "교육학 논리 및 논술",
            "professor": "심형진"
        },
        {
            "name": "교육재정과 경제 ",
            "professor": "김주경"
        },
        {
            "name": "교육학 교과교재연구 및 지도법",
            "professor": "문민지"
        },
        {
            "name": "교육정책과 법",
            "professor": "김지현"
        },
        {
            "name": "학습심리"
        },
        {
            "name": "평생교육프로그램개발론",
            "professor": "노경란"
        },
        {
            "name": "다문화교육과 교육과정",
            "professor": "이은혜"
        },
        {
            "name": "평생교육실습",
            "professor": "노경란"
        },
        {
            "name": "청소년문화의이해",
            "professor": "정영선"
        },
        {
            "name": "정치와 사회",
            "professor": "서현진"
        },
        {
            "name": "경제와 사회",
            "professor": "박형준"
        },
        {
            "name": "스마트시대의 정치과정",
            "professor": "장선화"
        },
        {
            "name": "현대사회의이해",
            "professor": "정영선"
        },
        {
            "name": "민주사회와 헌법",
            "professor": "김연식"
        },
        {
            "name": "일반사회 교과교재연구 및 지도법",
            "professor": "조대훈"
        },
        {
            "name": "시민교육과 사회윤리",
            "professor": "송현정"
        },
        {
            "name": "가족사회학",
            "professor": "정영선"
        },
        {
            "name": "영화속의 정치 이데올로기",
            "professor": "서현진"
        },
        {
            "name": "학교 경제교육의 이해",
            "professor": "박형준"
        },
        {
            "name": "글로벌·다문화시대의 교수법",
            "professor": "조대훈"
        },
        {
            "name": "인간과 행정",
            "professor": "강명원"
        },
        {
            "name": "경제교육특강",
            "professor": "박형준"
        },
        {
            "name": "사회과교육세미나",
            "professor": "조대훈"
        },
        {
            "name": "동양고전과 윤리",
            "professor": "윤용남"
        },
        {
            "name": "정보사회와 윤리",
            "professor": "이경희"
        },
        {
            "name": "철학개론",
            "professor": "권수현"
        },
        {
            "name": "통일교육론",
            "professor": "안승대"
        },
        {
            "name": "북한사회문화론",
            "professor": "권미정"
        },
        {
            "name": "도덕.윤리교육론",
            "professor": "문경호"
        },
        {
            "name": "생태ㆍ환경윤리",
            "professor": "이경희"
        },
        {
            "name": "동양윤리사상",
            "professor": "윤용남"
        },
        {
            "name": "사회윤리",
            "professor": "이두연"
        },
        {
            "name": "사회정의론",
            "professor": "김혜수"
        },
        {
            "name": "도덕윤리 교과교재연구 및 지도법",
            "professor": "문경호"
        },
        {
            "name": "동양철학특강",
            "professor": "이은호"
        },
        {
            "name": "서양윤리사상",
            "professor": "권수현"
        },
        {
            "name": "현대사회정치사상",
            "professor": "김혜림"
        },
        {
            "name": "윤리와 사상 교과교육론",
            "professor": "편상범"
        },
        {
            "name": "동양윤리교육론",
            "professor": "윤민향"
        },
        {
            "name": "현대철학특강",
            "professor": "권수현"
        },
        {
            "name": "사서입문",
            "professor": "김용재"
        },
        {
            "name": "한문문법교육론",
            "professor": "황아영"
        },
        {
            "name": "기초한문 2",
            "professor": "황아영"
        },
        {
            "name": "한시교육론",
            "professor": "김연수"
        },
        {
            "name": "금석서예",
            "professor": "이진선"
        },
        {
            "name": "한국고전신화읽기",
            "professor": "김정숙"
        },
        {
            "name": "경서해석연습",
            "professor": "김용재"
        },
        {
            "name": "역대산문선독",
            "professor": "김홍백"
        },
        {
            "name": "한문 교과교재연구 및 지도법",
            "professor": "정효영"
        },
        {
            "name": "한시특강",
            "professor": "이은주"
        },
        {
            "name": "한문학사특강",
            "professor": "류준경"
        },
        {
            "name": "한국한문소설강독",
            "professor": "류준경"
        },
        {
            "name": "한문교육연습",
            "professor": "허철"
        },
        {
            "name": "고전번역과 사상",
            "professor": "방현아"
        },
        {
            "name": "아동건강교육",
            "professor": "김고은"
        },
        {
            "name": "동요반주법 2",
            "professor": "강보라"
        },
        {
            "name": "영유아교수방법론",
            "professor": "배지희"
        },
        {
            "name": "아동복지론",
            "professor": "전홍주"
        },
        {
            "name": "아동미술",
            "professor": "권경숙"
        },
        {
            "name": "유아수학교육",
            "professor": "이사임"
        },
        {
            "name": "유아음악교육",
            "professor": "전홍주"
        },
        {
            "name": "유아교육과정",
            "professor": "김고은"
        },
        {
            "name": "아동문학",
            "professor": "황인애"
        },
        {
            "name": "아동안전관리",
            "professor": "이윤영"
        },
        {
            "name": "유치원 교과교재연구 및 지도법",
            "professor": "조미영"
        },
        {
            "name": "유아관찰 및 실습",
            "professor": "권정윤"
        },
        {
            "name": "아동생활지도",
            "professor": "김은희"
        },
        {
            "name": "부모교육론",
            "professor": "배지희"
        },
        {
            "name": "유아교육평가"
        },
        {
            "name": "입체와 공간",
            "professor": "배성미"
        },
        {
            "name": "입체와 공간",
            "professor": "김주영"
        },
        {
            "name": "모델표현",
            "professor": "이규성"
        },
        {
            "name": "모델표현",
            "professor": "박영근"
        },
        {
            "name": "모델표현",
            "professor": "이현정"
        },
        {
            "name": "모델표현",
            "professor": "김세중"
        },
        {
            "name": "모델표현",
            "professor": "조병왕"
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
            "name": "모델링",
            "professor": "변경수"
        },
        {
            "name": "모델링"
        },
        {
            "name": "미술의 역사와 사회",
            "professor": "박관택"
        },
        {
            "name": "미술과 글쓰기",
            "professor": "이재은"
        },
        {
            "name": "한국미술사 2",
            "professor": "이보연"
        },
        {
            "name": "획과 여백 2",
            "professor": "권기범"
        },
        {
            "name": "획과 여백 2",
            "professor": "노신경"
        },
        {
            "name": "획과 여백 2",
            "professor": "채효진"
        },
        {
            "name": "획과 여백 2",
            "professor": "홍지윤"
        },
        {
            "name": "획과 여백 2",
            "professor": "강유림"
        },
        {
            "name": "획과 여백 2",
            "professor": "김선영"
        },
        {
            "name": "현대수묵화연구2",
            "professor": "권순영"
        },
        {
            "name": "현대수묵화연구2",
            "professor": "장재록"
        },
        {
            "name": "동양미술사",
            "professor": "이보연"
        },
        {
            "name": "서화기초 2",
            "professor": "임진성"
        },
        {
            "name": "서화기초 2",
            "professor": "성태훈"
        },
        {
            "name": "현대동양화 2",
            "professor": "권기범"
        },
        {
            "name": "현대동양화 2",
            "professor": "하용주"
        },
        {
            "name": "기초조형2",
            "professor": "김희진"
        },
        {
            "name": "기초조형2",
            "professor": "노신경"
        },
        {
            "name": "채색화기초2",
            "professor": "이만수"
        },
        {
            "name": "채색화기초2",
            "professor": "최익진"
        },
        {
            "name": "미디어연구 스튜디오2",
            "professor": "임장순"
        },
        {
            "name": "색채와 표현2",
            "professor": "이만수"
        },
        {
            "name": "색채와 표현2",
            "professor": "박재철"
        },
        {
            "name": "융합매체2",
            "professor": "정은별"
        },
        {
            "name": "융합매체2",
            "professor": "김혜리"
        },
        {
            "name": "현대동양화4",
            "professor": "손문일"
        },
        {
            "name": "현대동양화4",
            "professor": "정성윤"
        },
        {
            "name": "현장드로잉2",
            "professor": "박형진"
        },
        {
            "name": "현장드로잉2",
            "professor": "김민호"
        },
        {
            "name": "한국회화 스튜디오2",
            "professor": "이만수"
        },
        {
            "name": "한국회화 스튜디오2",
            "professor": "유근택"
        },
        {
            "name": "창작스튜디오2",
            "professor": "권기범"
        },
        {
            "name": "창작스튜디오2",
            "professor": "노신경"
        },
        {
            "name": "서양 모더니즘미술사",
            "professor": "이혜진"
        },
        {
            "name": "디지털이미징",
            "professor": "장서우"
        },
        {
            "name": "디지털이미징",
            "professor": "이지영"
        },
        {
            "name": "현대회화 2",
            "professor": "임상빈"
        },
        {
            "name": "현대회화 2",
            "professor": "최병진"
        },
        {
            "name": "현대드로잉 2",
            "professor": "박성환"
        },
        {
            "name": "현대드로잉 2",
            "professor": "안중경"
        },
        {
            "name": "현대판화 2",
            "professor": "장성숙"
        },
        {
            "name": "현대판화 2",
            "professor": "신현희"
        },
        {
            "name": "재현적표현 2",
            "professor": "김지은"
        },
        {
            "name": "재현적표현 2",
            "professor": "윤영혜"
        },
        {
            "name": "서양 동시대 미술의 동향",
            "professor": "이혜진"
        },
        {
            "name": "영상",
            "professor": "임상빈"
        },
        {
            "name": "현대회화 4(구상)"
        },
        {
            "name": "현대회화 4(구상)",
            "professor": "박영근"
        },
        {
            "name": "현대회화 4(추상)"
        },
        {
            "name": "현대회화 4(추상)",
            "professor": "이주연"
        },
        {
            "name": "현대회화 4(복합매체)",
            "professor": "김태서"
        },
        {
            "name": "현대회화 4(복합매체)",
            "professor": "조병왕"
        },
        {
            "name": "포트폴리오 연구 2",
            "professor": "나광호"
        },
        {
            "name": "포트폴리오 연구 2",
            "professor": "박미숙"
        },
        {
            "name": "졸업작품연구 4",
            "professor": "임상빈"
        },
        {
            "name": "졸업작품연구 5",
            "professor": "조병왕"
        },
        {
            "name": "졸업작품연구 5",
            "professor": "박영근"
        },
        {
            "name": "졸업작품연구 6",
            "professor": "박영근"
        },
        {
            "name": "졸업작품연구 6",
            "professor": "조병왕"
        },
        {
            "name": "미디어 아트 2",
            "professor": "이지숙"
        },
        {
            "name": "미디어 아트 2",
            "professor": "김민정"
        },
        {
            "name": "미술사 2",
            "professor": "이보연"
        },
        {
            "name": "도조기법",
            "professor": "김민형"
        },
        {
            "name": "도조기법"
        },
        {
            "name": "석조기법 2",
            "professor": "김병규"
        },
        {
            "name": "형상조소2",
            "professor": "권치규"
        },
        {
            "name": "디지털 조형 2",
            "professor": "엄아롱"
        },
        {
            "name": "디지털 조형 2",
            "professor": "오원영"
        },
        {
            "name": "현대조각 2",
            "professor": "정정주"
        },
        {
            "name": "현대조각 2",
            "professor": "노주환"
        },
        {
            "name": "형상표현2",
            "professor": "김성복"
        },
        {
            "name": "재료기법 2",
            "professor": "조영철"
        },
        {
            "name": "재료기법 2",
            "professor": "이지훈"
        },
        {
            "name": "동시대 조각의 현장 2",
            "professor": "이상윤"
        },
        {
            "name": "자유창작 2",
            "professor": "노주환"
        },
        {
            "name": "2D디지털그래픽 2",
            "professor": "조희은"
        },
        {
            "name": "통합금속공예실기 2",
            "professor": "김송"
        },
        {
            "name": "통합금속공예실기 2",
            "professor": "신혜정"
        },
        {
            "name": "통합금속공예실기 2",
            "professor": "김종승"
        },
        {
            "name": "통합도자공예실기 2",
            "professor": "박태성"
        },
        {
            "name": "통합도자공예실기 2",
            "professor": "김시만"
        },
        {
            "name": "텍스타일디자인프로세스 2",
            "professor": "정병헌"
        },
        {
            "name": "금속전공이론 2",
            "professor": "현광훈"
        },
        {
            "name": "색채표현연구",
            "professor": "김수연"
        },
        {
            "name": "3D디지털모델링 2",
            "professor": "이슬범"
        },
        {
            "name": "3D디지털모델링 2",
            "professor": "이기욱"
        },
        {
            "name": "금속표현연구 2",
            "professor": "원재선"
        },
        {
            "name": "주얼리디자인기초 2",
            "professor": "최경미"
        },
        {
            "name": "도자표현연구 2",
            "professor": "김시만"
        },
        {
            "name": "텍스타일프린팅",
            "professor": "정병헌"
        },
        {
            "name": "도자리빙디자인기초 2",
            "professor": "한영숙"
        },
        {
            "name": "텍스타일소재개발 2",
            "professor": "김수연"
        },
        {
            "name": "조형발상드로잉",
            "professor": "김수연"
        },
        {
            "name": "도자장식기초 2",
            "professor": "이은미"
        },
        {
            "name": "패션마케팅",
            "professor": "박좌용"
        },
        {
            "name": "도자리빙디자인 2",
            "professor": "권성은"
        },
        {
            "name": "주얼리디자인 2",
            "professor": "신혜정"
        },
        {
            "name": "금속리빙디자인 2",
            "professor": "김동현"
        },
        {
            "name": "산업금속프로세스 2",
            "professor": "박예연"
        },
        {
            "name": "디지털세라믹프로세스2",
            "professor": "한영숙"
        },
        {
            "name": "디지털써피스디자인 2",
            "professor": "김수연"
        },
        {
            "name": "문화상품개발(LBD) 2",
            "professor": "신혜정"
        },
        {
            "name": "아트패브릭 2",
            "professor": "김수연"
        },
        {
            "name": "우븐디자인프로세스",
            "professor": "문보영"
        },
        {
            "name": "테이블웨어프로젝트 2",
            "professor": "이혜미"
        },
        {
            "name": "텍스타일프로덕트디자인 2",
            "professor": "문보영"
        },
        {
            "name": "테이블웨어디자인 2",
            "professor": "김윤지"
        },
        {
            "name": "공간장식도자 2",
            "professor": "한영숙"
        },
        {
            "name": "상품개발 및 마케팅 2",
            "professor": "한명호"
        },
        {
            "name": "금속리빙디자인 4",
            "professor": "이재익"
        },
        {
            "name": "아트주얼리 2",
            "professor": "신혜정"
        },
        {
            "name": "세라믹프로덕트 디자인 2",
            "professor": "정소영"
        },
        {
            "name": "텍스타일디자인기획 2",
            "professor": "박좌용"
        },
        {
            "name": "주얼리디자인기획 2",
            "professor": "김송"
        },
        {
            "name": "시각적 발상과 표현",
            "professor": "김도식"
        },
        {
            "name": "공간디자인 기초와 실습",
            "professor": "장기윤"
        },
        {
            "name": "공간디자인 기초와 실습",
            "professor": "안민선"
        },
        {
            "name": "디자인사",
            "professor": "장연정"
        },
        {
            "name": "타이포그래피 2",
            "professor": "김장우"
        },
        {
            "name": "타이포그래피 2",
            "professor": "황상준"
        },
        {
            "name": "타이포그래피 2",
            "professor": "김강인"
        },
        {
            "name": "무대연출디자인",
            "professor": "이홍구"
        },
        {
            "name": "디자인씽킹워크숍",
            "professor": "구상"
        },
        {
            "name": "디자인씽킹워크숍",
            "professor": "한옥재"
        },
        {
            "name": "디자인씽킹워크숍",
            "professor": "최인환"
        },
        {
            "name": "디자인씽킹워크숍",
            "professor": "김현석"
        },
        {
            "name": "정보그래픽디자인",
            "professor": "홍주희"
        },
        {
            "name": "정보그래픽디자인",
            "professor": "김나연"
        },
        {
            "name": "정보그래픽디자인",
            "professor": "김민주"
        },
        {
            "name": "정보그래픽디자인",
            "professor": "김미애"
        },
        {
            "name": "인터랙티브어플리케이션디자인",
            "professor": "김혜린"
        },
        {
            "name": "모션그래픽 워크샵 2",
            "professor": "이명숙"
        },
        {
            "name": "중급 공간디자인실습 2",
            "professor": "홍승석"
        },
        {
            "name": "전시디자인",
            "professor": "윤현경"
        },
        {
            "name": "정보디자인 2",
            "professor": "권다은"
        },
        {
            "name": "브랜딩2",
            "professor": "장혜진"
        },
        {
            "name": "브랜딩2",
            "professor": "윤지영"
        },
        {
            "name": "디스플레이디자인",
            "professor": "김민석"
        },
        {
            "name": "그래픽디자인",
            "professor": "황상준"
        },
        {
            "name": "그래픽디자인",
            "professor": "양희재"
        },
        {
            "name": "그래픽디자인",
            "professor": "백도현"
        },
        {
            "name": "인터페이스디자인 2",
            "professor": "신수민"
        },
        {
            "name": "인터페이스디자인 2",
            "professor": "박한진"
        },
        {
            "name": "디지털이미징 2",
            "professor": "박한진"
        },
        {
            "name": "생활용품디자인",
            "professor": "최인환"
        },
        {
            "name": "공간디자인 CAD",
            "professor": "신영화"
        },
        {
            "name": "디자인씽킹스튜디오 2",
            "professor": "최인환"
        },
        {
            "name": "시각디자인스튜디오 2",
            "professor": "장혜진"
        },
        {
            "name": "시각디자인스튜디오 2",
            "professor": "황상준"
        },
        {
            "name": "미디어디자인프로젝트 2",
            "professor": "박한진"
        },
        {
            "name": "정보경험디자인스튜디오 2",
            "professor": "신수민"
        },
        {
            "name": "공간디자인스튜디오 2",
            "professor": "장기윤"
        },
        {
            "name": "공간연출디자인스튜디오 2",
            "professor": "이소영"
        },
        {
            "name": "디자인트렌드",
            "professor": "강소영"
        },
        {
            "name": "디자인 프로젝트 리서치",
            "professor": "김용환"
        },
        {
            "name": "모션그래픽스스튜디오 2",
            "professor": "이명숙"
        },
        {
            "name": "BX디자인프로젝트",
            "professor": "김형우"
        },
        {
            "name": "이태리예술가곡",
            "professor": "박지현"
        },
        {
            "name": "독일어딕션",
            "professor": "김샤론"
        },
        {
            "name": "학내연주 2",
            "professor": "김미현"
        },
        {
            "name": "전공실기 2"
        },
        {
            "name": "합창 2",
            "professor": "박승유"
        },
        {
            "name": "시창.청음 2",
            "professor": "성혜진"
        },
        {
            "name": "클래스피아노 2",
            "professor": "윤선영"
        },
        {
            "name": "성악 세미나 2",
            "professor": "박경신"
        },
        {
            "name": "불어딕션",
            "professor": "강신모"
        },
        {
            "name": "학내연주 4",
            "professor": "김미현"
        },
        {
            "name": "전공실기 4"
        },
        {
            "name": "합창 4",
            "professor": "박승유"
        },
        {
            "name": "시창.청음 4",
            "professor": "성혜진"
        },
        {
            "name": "클래스피아노 4",
            "professor": "이신애"
        },
        {
            "name": "화성법 2",
            "professor": "김설향"
        },
        {
            "name": "성악 세미나 4",
            "professor": "박지현"
        },
        {
            "name": "성악인턴십2",
            "professor": "소수정"
        },
        {
            "name": "성악문헌 2",
            "professor": "송혜진"
        },
        {
            "name": "학내연주 6",
            "professor": "김미현"
        },
        {
            "name": "전공실기 6"
        },
        {
            "name": "합창 6",
            "professor": "박승유"
        },
        {
            "name": "영어딕션",
            "professor": "이영은"
        },
        {
            "name": "한국가곡연구",
            "professor": "정수연"
        },
        {
            "name": "오라토리오",
            "professor": "공영숙"
        },
        {
            "name": "오페라 공연과 실습",
            "professor": "이혜영"
        },
        {
            "name": "음악교육프로그램개발",
            "professor": "송혜진"
        },
        {
            "name": "합창지휘 2",
            "professor": "박승유"
        },
        {
            "name": "전공실기 8"
        },
        {
            "name": "20세기음악연구",
            "professor": "고은미"
        },
        {
            "name": "오페라워크샵 2",
            "professor": "이혜영"
        },
        {
            "name": "스코어리딩",
            "professor": "이소영"
        },
        {
            "name": "학내연주 2",
            "professor": "오윤주"
        },
        {
            "name": "학내연주 2",
            "professor": "김도연"
        },
        {
            "name": "시창.청음 2",
            "professor": "정혜경"
        },
        {
            "name": "시창.청음 2",
            "professor": "김지현"
        },
        {
            "name": "관악합주 2",
            "professor": "김동수"
        },
        {
            "name": "현악합주 2",
            "professor": "피호영"
        },
        {
            "name": "피아노앙상블 1",
            "professor": "김성희"
        },
        {
            "name": "합주 2",
            "professor": "김동수"
        },
        {
            "name": "건반화성 2",
            "professor": "홍청의"
        },
        {
            "name": "서양음악사 및 문헌 2",
            "professor": "이혜진"
        },
        {
            "name": "서양음악사 및 문헌 4",
            "professor": "유선옥"
        },
        {
            "name": "응용화성",
            "professor": "홍청의"
        },
        {
            "name": "스코어리딩",
            "professor": "이상희"
        },
        {
            "name": "피아노를 위한 대위법 2",
            "professor": "전민재"
        },
        {
            "name": "학내연주 4",
            "professor": "오윤주"
        },
        {
            "name": "학내연주 4",
            "professor": "김도연"
        },
        {
            "name": "관현악을 위한 대위법 2",
            "professor": "전민재"
        },
        {
            "name": "관악합주 4",
            "professor": "김동수"
        },
        {
            "name": "현악합주 4",
            "professor": "피호영"
        },
        {
            "name": "합주 4",
            "professor": "김동수"
        },
        {
            "name": "시창.청음 4",
            "professor": "김지현"
        },
        {
            "name": "실내악 2",
            "professor": "황소진"
        },
        {
            "name": "실내악 2",
            "professor": "박진오"
        },
        {
            "name": "화성 및 이론 4(오케스트레이션) ",
            "professor": "정영빈"
        },
        {
            "name": "지휘법 2",
            "professor": "김동수"
        },
        {
            "name": "지휘법 2",
            "professor": "김우중"
        },
        {
            "name": "반주법 2",
            "professor": "고은지"
        },
        {
            "name": "전자음악 및 실습 2",
            "professor": "김효주"
        },
        {
            "name": "학내연주 6",
            "professor": "오윤주"
        },
        {
            "name": "학내연주 6",
            "professor": "김도연"
        },
        {
            "name": "관악합주 6",
            "professor": "김동수"
        },
        {
            "name": "현악합주 6",
            "professor": "피호영"
        },
        {
            "name": "피아노문헌 2",
            "professor": "임지연"
        },
        {
            "name": "합주 6",
            "professor": "김광현"
        },
        {
            "name": "실내악 4",
            "professor": "이세영"
        },
        {
            "name": "실내악 4",
            "professor": "박예은"
        },
        {
            "name": "음악분석 2",
            "professor": "정영빈"
        },
        {
            "name": "음악교수학습법",
            "professor": "이보림"
        },
        {
            "name": "클래스인스트루먼트 2",
            "professor": "김진주"
        },
        {
            "name": "클래스인스트루먼트 2",
            "professor": "문제임스재원"
        },
        {
            "name": "악기수리법2",
            "professor": "여우진"
        },
        {
            "name": "악기수리법2",
            "professor": "전상진"
        },
        {
            "name": "피아노 및 관현악 교수법 2",
            "professor": "김지현"
        },
        {
            "name": "피아노 및 관현악 교수법 2",
            "professor": "김지은"
        },
        {
            "name": "합주 8",
            "professor": "김광현"
        },
        {
            "name": "관악합주 8",
            "professor": "김동수"
        },
        {
            "name": "현악합주 8",
            "professor": "피호영"
        },
        {
            "name": "피아노워크숍 2",
            "professor": "오윤주"
        },
        {
            "name": "음악치료학",
            "professor": "최윤경"
        },
        {
            "name": "창작실내악 2",
            "professor": "김동수"
        },
        {
            "name": "근현대화성 2",
            "professor": "윤규일"
        },
        {
            "name": "서양음악사및문헌 2",
            "professor": "이가영"
        },
        {
            "name": "다성음악 2",
            "professor": "김수호"
        },
        {
            "name": "창작연주 2",
            "professor": "이인식"
        },
        {
            "name": "악기론 2",
            "professor": "김지현"
        },
        {
            "name": "컴퓨터ㆍ전자음악 2",
            "professor": "조진옥"
        },
        {
            "name": "시창.청음 2",
            "professor": "강은경"
        },
        {
            "name": "음악분석 2",
            "professor": "설수경"
        },
        {
            "name": "전공이론 및 악기(A) 2"
        },
        {
            "name": "전공이론 및 악기(B) 2"
        },
        {
            "name": "초급화성 및 이론 2",
            "professor": "박지영"
        },
        {
            "name": "창작연주 4",
            "professor": "이인식"
        },
        {
            "name": "악기론 4",
            "professor": "김지현"
        },
        {
            "name": "컴퓨터ㆍ전자음악 4",
            "professor": "조진옥"
        },
        {
            "name": "건반화성 2",
            "professor": "전예은"
        },
        {
            "name": "전공이론 및 악기(A) 4"
        },
        {
            "name": "전공이론 및 악기(B) 4"
        },
        {
            "name": "화성 및 실습 2",
            "professor": "김예진"
        },
        {
            "name": "대중문화와 음악",
            "professor": "서윤정"
        },
        {
            "name": "고급재즈화성학 2",
            "professor": "김지은"
        },
        {
            "name": "가창곡작곡법 및 실습 2",
            "professor": "장지영"
        },
        {
            "name": "서양음악사및문헌 4",
            "professor": "신인선"
        },
        {
            "name": "음악현장연구",
            "professor": "정이은"
        },
        {
            "name": "음악분석 4",
            "professor": "정미선"
        },
        {
            "name": "창작연주 6",
            "professor": "이인식"
        },
        {
            "name": "20세기음악 2",
            "professor": "임현경"
        },
        {
            "name": "음악평론",
            "professor": "변지연"
        },
        {
            "name": "전공이론 및 악기(A) 6"
        },
        {
            "name": "전공이론 및 악기(B) 6"
        },
        {
            "name": "재즈건반실습 2",
            "professor": "김지은"
        },
        {
            "name": "관현악법 2",
            "professor": "이인식"
        },
        {
            "name": "뮤지컬 워크숍 2",
            "professor": "김기연"
        },
        {
            "name": "음악미학",
            "professor": "권오연"
        },
        {
            "name": "전공이론 및 악기(A) 8"
        },
        {
            "name": "전공이론 및 악기(B) 8"
        },
        {
            "name": "음악경영 2",
            "professor": "서윤정"
        },
        {
            "name": "음악의 이해",
            "professor": "한보람"
        },
        {
            "name": "예술경영학",
            "professor": "김진각"
        },
        {
            "name": "예술경영학",
            "professor": "오선명"
        },
        {
            "name": "뮤지컬사",
            "professor": "김종헌"
        },
        {
            "name": "미술사",
            "professor": "권수정"
        },
        {
            "name": "미술사",
            "professor": "정경미"
        },
        {
            "name": "연극의 이해",
            "professor": "김종헌"
        },
        {
            "name": "무대메커니즘의이해",
            "professor": "고해종"
        },
        {
            "name": "무대메커니즘의이해",
            "professor": "김수정"
        },
        {
            "name": "문화예술 홍보마케팅",
            "professor": "김진각"
        },
        {
            "name": "문화예술이슈분석",
            "professor": "김진각"
        },
        {
            "name": "경영학원론",
            "professor": "김시영"
        },
        {
            "name": "경영학원론",
            "professor": "김정선"
        },
        {
            "name": "영화의 이해",
            "professor": "강나영"
        },
        {
            "name": "마이스산업의 이해",
            "professor": "양은주"
        },
        {
            "name": "공연기획 프로젝트",
            "professor": "김종헌"
        },
        {
            "name": "호흡/발성 2",
            "professor": "김혜진"
        },
        {
            "name": "배우 신체훈련 2",
            "professor": "김선권"
        },
        {
            "name": "기초연기실습 2",
            "professor": "김정훈"
        },
        {
            "name": "기초연기실습 2",
            "professor": "김혜진"
        },
        {
            "name": "영상연기 실습 2",
            "professor": "반민정"
        },
        {
            "name": "영상연기 실습 2",
            "professor": "손보민"
        },
        {
            "name": "배우 화술 2",
            "professor": "김혜진"
        },
        {
            "name": "영화 제작실습 2",
            "professor": "박은형"
        },
        {
            "name": "영화 제작실습 2"
        },
        {
            "name": "영화 제작실습 2",
            "professor": "임태규"
        },
        {
            "name": "단막극제작실습 2",
            "professor": "신동길"
        },
        {
            "name": "단막극제작실습 2",
            "professor": "김정훈"
        },
        {
            "name": "공연워크샵 2",
            "professor": "신동일"
        },
        {
            "name": "보컬 2",
            "professor": "전은혜"
        },
        {
            "name": "TV드라마 연기실습 2",
            "professor": "손보민"
        },
        {
            "name": "오디션테크닉",
            "professor": "지춘성"
        },
        {
            "name": "졸업작품워크숍 2",
            "professor": "유영식"
        },
        {
            "name": "대본 분석과 인물 창조2",
            "professor": "박은형"
        },
        {
            "name": "기보법",
            "professor": "조원주"
        },
        {
            "name": "기보법",
            "professor": "유영하"
        },
        {
            "name": "전공실기2",
            "professor": "김희주"
        },
        {
            "name": "전공실기2",
            "professor": "유영하"
        },
        {
            "name": "전공실기2",
            "professor": "박규연"
        },
        {
            "name": "전공실기2",
            "professor": "변준형"
        },
        {
            "name": "전공실기2",
            "professor": "김유미"
        },
        {
            "name": "전공실기2",
            "professor": "신형찬"
        },
        {
            "name": "전공실기2",
            "professor": "신기남"
        },
        {
            "name": "전공실기2",
            "professor": "이나경"
        },
        {
            "name": "전공실기2",
            "professor": "유수미"
        },
        {
            "name": "전공실기2",
            "professor": "허준영"
        },
        {
            "name": "전공실기2",
            "professor": "박세윤"
        },
        {
            "name": "전공실기2",
            "professor": "김승범"
        },
        {
            "name": "전공실기2",
            "professor": "홍경섭"
        },
        {
            "name": "전공실기2",
            "professor": "조석훈"
        },
        {
            "name": "전공실기2",
            "professor": "임경은"
        },
        {
            "name": "전공실기2",
            "professor": "정민영"
        },
        {
            "name": "전공실기2",
            "professor": "이지영"
        },
        {
            "name": "전공실기2"
        },
        {
            "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
            "professor": "강경한"
        },
        {
            "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
            "professor": "조윤정"
        },
        {
            "name": "음악분석 2",
            "professor": "김정범"
        },
        {
            "name": "음악분석 2",
            "professor": "김한아"
        },
        {
            "name": "전공실기 4",
            "professor": "송준영"
        },
        {
            "name": "전공실기 4",
            "professor": "이준"
        },
        {
            "name": "전공실기 4",
            "professor": "이준호"
        },
        {
            "name": "전공실기 4",
            "professor": "박세윤"
        },
        {
            "name": "전공실기 4",
            "professor": "김주헌"
        },
        {
            "name": "전공실기 4",
            "professor": "이상원"
        },
        {
            "name": "전공실기 4",
            "professor": "신형찬"
        },
        {
            "name": "전공실기 4",
            "professor": "정이령"
        },
        {
            "name": "전공실기 4",
            "professor": "정민영"
        },
        {
            "name": "전공실기 4",
            "professor": "김현민"
        },
        {
            "name": "전공실기 4",
            "professor": "이지영"
        },
        {
            "name": "전공실기 4",
            "professor": "윤혜린"
        },
        {
            "name": "전공실기 4",
            "professor": "남예지"
        },
        {
            "name": "전공실기 4",
            "professor": "김주현"
        },
        {
            "name": "전공실기 4",
            "professor": "신기남"
        },
        {
            "name": "전공실기 4",
            "professor": "유수미"
        },
        {
            "name": "전공실기 4",
            "professor": "이지민"
        },
        {
            "name": "전공실기 4",
            "professor": "남성희"
        },
        {
            "name": "전공실기 4",
            "professor": "임채광"
        },
        {
            "name": "전공실기 4",
            "professor": "반검서"
        },
        {
            "name": "전공실기 4",
            "professor": "심영주"
        },
        {
            "name": "전공실기 4",
            "professor": "이나경"
        },
        {
            "name": "전공실기 4",
            "professor": "윤영삼"
        },
        {
            "name": "재즈 화성학 2",
            "professor": "이아선"
        },
        {
            "name": "화성 청음연습",
            "professor": "이지민"
        },
        {
            "name": "디지털 오디오 워크스테이션 이해와 활용: 프로 툴스 2",
            "professor": "조남준"
        },
        {
            "name": "디지털 오디오 워크스테이션 이해와 활용: 프로 툴스 2",
            "professor": "고남수"
        },
        {
            "name": "아카펠라를 위한 보컬 합주 2",
            "professor": "임경은"
        },
        {
            "name": "음악형식 2",
            "professor": "송종헌"
        },
        {
            "name": "음악형식 2",
            "professor": "김한아"
        },
        {
            "name": "임프로비제이션을 위한 기악 합주 2",
            "professor": "정이령"
        },
        {
            "name": "전공실기 6",
            "professor": "우미진"
        },
        {
            "name": "전공실기 6",
            "professor": "김정범"
        },
        {
            "name": "전공실기 6",
            "professor": "성기준"
        },
        {
            "name": "전공실기 6",
            "professor": "신형찬"
        },
        {
            "name": "전공실기 6",
            "professor": "이준"
        },
        {
            "name": "전공실기 6",
            "professor": "변준형"
        },
        {
            "name": "전공실기 6",
            "professor": "김현민"
        },
        {
            "name": "전공실기 6",
            "professor": "유영하"
        },
        {
            "name": "전공실기 6",
            "professor": "임경은"
        },
        {
            "name": "전공실기 6",
            "professor": "남예지"
        },
        {
            "name": "전공실기 6",
            "professor": "김주현"
        },
        {
            "name": "전공실기 6",
            "professor": "유수미"
        },
        {
            "name": "전공실기 6",
            "professor": "윤영삼"
        },
        {
            "name": "전공실기 6",
            "professor": "반검서"
        },
        {
            "name": "전공실기 6",
            "professor": "김유미"
        },
        {
            "name": "전공실기 6",
            "professor": "심영주"
        },
        {
            "name": "전공실기 6",
            "professor": "임채광"
        },
        {
            "name": "전공실기 6",
            "professor": "김영준"
        },
        {
            "name": "전공실기 6",
            "professor": "윤혜린"
        },
        {
            "name": "전공실기 6",
            "professor": "이나경"
        },
        {
            "name": "전공실기 6",
            "professor": "조석훈"
        },
        {
            "name": "스튜디오 레코딩과 믹싱 2",
            "professor": "정채웅"
        },
        {
            "name": "영상을 위한 일렉트로닉 작곡과 사운드 디자인 2",
            "professor": "정채웅"
        },
        {
            "name": "송라이팅을 위한 보컬 합주 2",
            "professor": "윤혜린"
        },
        {
            "name": "콘서트프로덕션",
            "professor": "정철"
        },
        {
            "name": "음악매니지먼트 1",
            "professor": "김도연"
        },
        {
            "name": "홈 레코딩과 믹싱 2",
            "professor": "채준기"
        },
        {
            "name": "필름 스코어링과 오케스트레이션 2",
            "professor": "윤수진"
        },
        {
            "name": "라이브 세션을 위한 기악 합주 2",
            "professor": "임채광"
        },
        {
            "name": "전공실기 8",
            "professor": "윤혜린"
        },
        {
            "name": "전공실기 8",
            "professor": "남예지"
        },
        {
            "name": "전공실기 8",
            "professor": "신기남"
        },
        {
            "name": "전공실기 8",
            "professor": "이준호"
        },
        {
            "name": "전공실기 8",
            "professor": "성기준"
        },
        {
            "name": "전공실기 8",
            "professor": "윤영삼"
        },
        {
            "name": "전공실기 8",
            "professor": "정민영"
        },
        {
            "name": "전공실기 8",
            "professor": "이준"
        },
        {
            "name": "전공실기 8",
            "professor": "김정범"
        },
        {
            "name": "전공실기 8",
            "professor": "김영준"
        },
        {
            "name": "전공실기 8",
            "professor": "이창원"
        },
        {
            "name": "전공실기 8",
            "professor": "신형찬"
        },
        {
            "name": "전공실기 8",
            "professor": "심영주"
        },
        {
            "name": "전공실기 8",
            "professor": "이지영"
        },
        {
            "name": "전공실기 8",
            "professor": "송준영"
        },
        {
            "name": "전공실기 8",
            "professor": "유수미"
        },
        {
            "name": "전공실기 8",
            "professor": "이상원"
        },
        {
            "name": "송캠프 2",
            "professor": "변준형"
        },
        {
            "name": "전공실기 2",
            "professor": "최경란"
        },
        {
            "name": "전공실기 2",
            "professor": "유지연"
        },
        {
            "name": "전공실기 2",
            "professor": "김슬기"
        },
        {
            "name": "움직임과 표현 2",
            "professor": "최혜경"
        },
        {
            "name": "움직임과 표현 2",
            "professor": "장운규"
        },
        {
            "name": "움직임과 표현 2",
            "professor": "김슬기"
        },
        {
            "name": "움직임과 표현 2",
            "professor": "이민선"
        },
        {
            "name": "세계무용사",
            "professor": "김지윤"
        },
        {
            "name": "필라테스자세교정 2",
            "professor": "전홍조"
        },
        {
            "name": "한국무용즉흥실기",
            "professor": "양주희"
        },
        {
            "name": "전공실기 4",
            "professor": "성재형"
        },
        {
            "name": "전공실기 4",
            "professor": "김주원"
        },
        {
            "name": "전공실기 4",
            "professor": "이효연"
        },
        {
            "name": "무용워크샵트레이닝 2",
            "professor": "정경화"
        },
        {
            "name": "무용워크샵트레이닝 2",
            "professor": "박순영"
        },
        {
            "name": "무용워크샵트레이닝 2",
            "professor": "김미숙"
        },
        {
            "name": "요가테라피 2",
            "professor": "임영희"
        },
        {
            "name": "요가테라피 2",
            "professor": "김미숙"
        },
        {
            "name": "한국창작무용",
            "professor": "정경화"
        },
        {
            "name": "발레레파토리",
            "professor": "신은석"
        },
        {
            "name": "전공실기 6",
            "professor": "성재형"
        },
        {
            "name": "전공실기 6",
            "professor": "김주원"
        },
        {
            "name": "전공실기 6",
            "professor": "이민선"
        },
        {
            "name": "무용인체과학",
            "professor": "전홍조"
        },
        {
            "name": "표현예술치료 2",
            "professor": "전홍조"
        },
        {
            "name": "예술철학의 이해",
            "professor": "김미숙"
        },
        {
            "name": "전공실기 8",
            "professor": "최경란"
        },
        {
            "name": "전공실기 8",
            "professor": "김주원"
        },
        {
            "name": "전공실기 8",
            "professor": "김슬기"
        },
        {
            "name": "무용지도법 2",
            "professor": "성재형"
        },
        {
            "name": "무용지도법 2",
            "professor": "김순정"
        },
        {
            "name": "무용지도법 2",
            "professor": "김미숙"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "전지은"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "박경남"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "이혜진"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "기유정"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "강규호"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "오희철"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "김형중"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "신승한"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "강선형"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "석기용"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "류경동"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "김준석"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "이연순"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "김시형"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "김태영"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "주민재"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "오윤정"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "박미란"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "강소영"
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
            "professor": "강희경"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "서광열"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "엄상희"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "손성우"
        },
        {
            "name": "비판적 사고와 토론",
            "professor": "허찬"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김보람"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "신정은"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "장예준"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "신민영"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "조별"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "탁원정"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김나영"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "장영미"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김난경"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김민선"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "이세경"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "장혜련"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "구봉곤"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "신희경"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "이연승"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "이윤경"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김현화"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "선민서"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "송용구"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "양정화"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "이선형"
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
            "professor": "이은우"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "박근예"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "방금단"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "양정현"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "구선정"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김예니"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "김자영"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "박상란"
        },
        {
            "name": "창조적 사고와 글쓰기",
            "professor": "박민영"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "스티븐 파이겐바움"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "앤드리아 톨레프슨"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "수잔 홀랜드"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "마타 라카누이"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "메스 닐슨"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
            "professor": "콜 헌트"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅰ"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
            "professor": "콜 헌트"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
            "professor": "니노슬라브 란제로빅"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
            "professor": "로난 맥알리스터"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
            "professor": "다릴 로스"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
            "professor": "스티븐 파이겐바움"
        },
        {
            "name": "공통 영어 스피치와 프레젠테이션 Ⅲ",
            "professor": "수잔 홀랜드"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ",
            "professor": "전연희"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ",
            "professor": "메스 닐슨"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ",
            "professor": "니노슬라브 란제로빅"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ",
            "professor": "스티븐 파이겐바움"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ",
            "professor": "로난 맥알리스터"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅰ"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅱ",
            "professor": "다릴 로스"
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
            "professor": "존 다니엘 맥카시"
        },
        {
            "name": "공통 실용적 영어 글쓰기 Ⅲ",
            "professor": "니노슬라브 란제로빅"
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
            "professor": "올리버 테리"
        },
        {
            "name": "British Culture and History",
            "professor": "존 다니엘 맥카시"
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
            "name": "Global Communication through Food, Travel & Culture",
            "professor": "마타 라카누이"
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
            "name": "공통 중국어",
            "professor": "리우 나"
        },
        {
            "name": "공통 중국어",
            "professor": "강선화"
        },
        {
            "name": "공통 중국어",
            "professor": "노은정"
        },
        {
            "name": "공통 중국어",
            "professor": "신준호"
        },
        {
            "name": "공통 중국어",
            "professor": "이정인"
        },
        {
            "name": "공통 중국어",
            "professor": "송향경"
        },
        {
            "name": "공통 일본어",
            "professor": "이지사"
        },
        {
            "name": "공통 일본어",
            "professor": "유혜경"
        },
        {
            "name": "공통 일본어",
            "professor": "김유진"
        },
        {
            "name": "공통 일본어",
            "professor": "정미령"
        },
        {
            "name": "공통 프랑스어",
            "professor": "음두은"
        },
        {
            "name": "공통 프랑스어",
            "professor": "안성은"
        },
        {
            "name": "공통 프랑스어",
            "professor": "황원미"
        },
        {
            "name": "공통 독일어",
            "professor": "함경희"
        },
        {
            "name": "공통 독일어",
            "professor": "김길웅"
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
            "name": "동∙서 철학의 만남",
            "professor": "양선진"
        },
        {
            "name": "논리와 비판",
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
            "name": "여성학 개론 Ⅰ",
            "professor": "김미덕"
        },
        {
            "name": "미학의 이해",
            "professor": "임성훈"
        },
        {
            "name": "영화 스토리텔링의 이해",
            "professor": "박우성"
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
            "name": "사진 예술의 이해",
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
            "name": "전쟁사",
            "professor": "공평원"
        },
        {
            "name": "세계 문화유산으로 보는 한국의 역사와 문화",
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
            "name": "과학기술사",
            "professor": "김준식"
        },
        {
            "name": "문화와 일상으로 본 서양사",
            "professor": "오경환"
        },
        {
            "name": "동양 고전의 산책",
            "professor": "김희영"
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
            "name": "미디어로 배우는 일본 문화",
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
            "name": "생활 속의 법적 분쟁과 해결"
        },
        {
            "name": "현대 사회와 소외",
            "professor": "김선주"
        },
        {
            "name": "국가안보론",
            "professor": "조현행"
        },
        {
            "name": "국가안보론",
            "professor": "공평원"
        },
        {
            "name": "북한학",
            "professor": "조현행"
        },
        {
            "name": "소비자 트렌드와 소비 문화",
            "professor": "노영래"
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
            "name": "알기 쉬운 행정법 이야기",
            "professor": "손성기"
        },
        {
            "name": "일본 문화의 이해",
            "professor": "다케우치 노리아키"
        },
        {
            "name": "주역으로 풀어보는 법과 삶",
            "professor": "문기탁"
        },
        {
            "name": "젠더로 보는 사회",
            "professor": "정영선"
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
            "name": "의료사고, 법으로 이해하기",
            "professor": "김나경"
        },
        {
            "name": "젠더와 정치",
            "professor": "김미덕"
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
            "name": "인체생리학",
            "professor": "천주영"
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
            "name": "우주로의 여행",
            "professor": "이길우"
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
            "name": "뇌 과학의 이해",
            "professor": "김시현"
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
            "name": "생애 주기별 건강과 복지",
            "professor": "고선강"
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
            "professor": "김영주"
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
            "name": "4차 산업혁명과 빅데이터 입문",
            "professor": "강태욱"
        },
        {
            "name": "비즈니스를 위한 인공지능",
            "professor": "심선영"
        },
        {
            "name": "IoT와 전자공학개론",
            "professor": "김준철"
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
            "name": "영어 통번역 입문",
            "professor": "김장욱"
        },
        {
            "name": "World News Analysis and Discourse",
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
            "professor": "최종갑"
        },
        {
            "name": "Advanced Effective English Speech",
            "professor": "로난 맥알리스터"
        },
        {
            "name": "Writing for the Modern World",
            "professor": "마타 라카누이"
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
            "name": "영화로 읽는 셰익스피어",
            "professor": "앨리슨 맥스웰"
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
            "professor": "전홍조"
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
            "name": "호신술",
            "professor": "양윤권"
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