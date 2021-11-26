const subjectData = [
  {
      "name": "안전 및 조직관리 사례 연구",
      "professor": "이성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조직 리더십 사례 연구",
      "professor": "윤해진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육실습",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자를 위한 생활법률",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스페인 문화와 예술",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지구에서 만나 살아가는 남자와 여자",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "라틴아메리카 문화 산책",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화속 디자인 여행",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "TED로 배우는 영화속 바이오테크놀로지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마음을 읽어 주는 미술치료",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "범죄와 범죄심리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성과 일상",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대사회와 회계",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "언어의 표현과 이해 Ⅰ",
      "professor": "강선화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "언어의 표현과 이해 Ⅱ",
      "professor": "주월랑",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "언어의 표현과 이해 Ⅲ",
      "professor": "김원경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "외국인을 위한 글쓰기",
      "professor": "강선화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한・중 문화와 컨텐츠",
      "professor": "송향경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 문화의 이해",
      "professor": "조수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 사회의 이해",
      "professor": "최수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "International Seminar: Korean and Global Affairs",
      "professor": "김장욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "취업 실전 전략",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "취업 실전 전략",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "취업정보 분석 및 입사전략",
      "professor": "김치성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자기 이해와 진로탐색",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "직무 적성검사 분석",
      "professor": "이동원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "직무 적성검사 분석",
      "professor": "이동원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현장실습 1",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술 비즈니스 창업론",
      "professor": "김정섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술 비즈니스 창업론",
      "professor": "김대원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재미있고 알기 쉬운 창업이야기",
      "professor": "지윤정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창업을 위한 법의 이해",
      "professor": "이양복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창업 아이디어 발상 및 실습",
      "professor": "김현이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인터넷 쇼핑몰 구축과 창업",
      "professor": "호준환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티 창업론",
      "professor": "한태수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화와 내러티브",
      "professor": "신혜수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공연문화속의 서사",
      "professor": "김정숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "내러티브 졸업세미나 1",
      "professor": "김정숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "내러티브 졸업세미나 2",
      "professor": "김정숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "응용국어학의 이해",
      "professor": "김일환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "구비문학의 이해",
      "professor": "심치열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대문학사",
      "professor": "김명석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고전문학사",
      "professor": "강혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대문학 명작읽기",
      "professor": "강진호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의사소통교육론",
      "professor": "김혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다매체와 서사 읽기",
      "professor": "김명석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌시대의 한국어",
      "professor": "장미경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고전소설의 이해",
      "professor": "심치열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대문학 창작론",
      "professor": "강진호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시조와 가사의 세계",
      "professor": "강혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어사",
      "professor": "전기량",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어 교과교재연구 및 지도법",
      "professor": "김혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "판소리계소설과 매체",
      "professor": "심치열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대문학특강",
      "professor": "김명석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "우리 한시의 세계",
      "professor": "강혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "출판문화론",
      "professor": "백원근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어어휘론",
      "professor": "김일환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공인인증 영어독해",
      "professor": "김경영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공인인증 영어독해",
      "professor": "앨리슨 맥스웰",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영문학개론",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영문법",
      "professor": "고정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어영문학",
      "professor": "정이화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급영어 읽기와 쓰기",
      "professor": "앨리슨 맥스웰",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급영어 읽기와 쓰기",
      "professor": "앨리슨 맥스웰",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어음성음운론",
      "professor": "방혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "근대미국소설",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 영어 읽기와 토론",
      "professor": "마이클 엘리어트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "외국어 교과교재연구 및 지도법(서양권)",
      "professor": "고정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스 영어",
      "professor": "마이클 엘리어트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스 영어",
      "professor": "마이클 엘리어트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대영국소설",
      "professor": "정이화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어의미ㆍ화용론",
      "professor": "정소우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영미문학특강",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상황별 영어 커뮤니케이션",
      "professor": "앨리슨 맥스웰",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영미산문",
      "professor": "정이화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초독일어 2",
      "professor": "김륜옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초독일어 2",
      "professor": "마누엘 보가드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초독일어회화 2",
      "professor": "마누엘 보가드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일명작의 이해",
      "professor": "최은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일문학의 변천사",
      "professor": "한상희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일어 듣기와 말하기2",
      "professor": "마누엘 보가드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일의 역사",
      "professor": "김미경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급독일어2",
      "professor": "김길웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일언어와 독일문화",
      "professor": "김유리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유럽문화사",
      "professor": "김길웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일 음악과 미술",
      "professor": "조수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일어권 드라마",
      "professor": "김동조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유럽 및 독일영화",
      "professor": "마누엘 보가드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일어권 예술과 사상",
      "professor": "이재영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급프랑스어 2",
      "professor": "홍용철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급프랑스어 2",
      "professor": "이채영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급프랑스어 회화",
      "professor": "토마 기데",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급프랑스어 읽기",
      "professor": "안성은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어와 세계",
      "professor": "박선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어 어법과 연습 2",
      "professor": "홍용철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급프랑스어 2",
      "professor": "홍용철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스문학과 여성",
      "professor": "서지형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스소설읽기",
      "professor": "김병욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스 문학과 예술의 흐름 2",
      "professor": "박언주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스언어학입문 2",
      "professor": "박선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 프랑스어",
      "professor": "박혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "델프 프랑스어",
      "professor": "토마 기데",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어권의 사회와 문화",
      "professor": "조지숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스 지역 문화",
      "professor": "이선우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어 글쓰기",
      "professor": "토마 기데",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어와 광고",
      "professor": "이선우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급일본어연습 2",
      "professor": "다케우치 노리아키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급일본어연습 2",
      "professor": "네고로 유키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급일본어연습 2",
      "professor": "네고로 유키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 기초표현 2",
      "professor": "안평호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 기초표현 2",
      "professor": "다케우치 노리아키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 기초표현 2",
      "professor": "다케우치 노리아키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본의 정치경제와 문화",
      "professor": "다케우치 노리아키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급일본어연습 2",
      "professor": "김원기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 중급표현 2",
      "professor": "안평호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급일본어회화 2",
      "professor": "네고로 유키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본 현대어문법의 이해",
      "professor": "김옥임",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본문학의 흐름 2",
      "professor": "남휘정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어텍스트 읽기와 비평",
      "professor": "남휘정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 교과교재연구 및 지도법 ",
      "professor": "김옥임",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어 고급표현 2",
      "professor": "김원기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본 고전문화콘텐츠와 현대",
      "professor": "김태영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본문화론과 대중문화콘텐츠",
      "professor": "홍윤표",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실용일본어특강",
      "professor": "네고로 유키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 회화 2",
      "professor": "리우 나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 회화 2",
      "professor": "김화진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 회화 2",
      "professor": "노은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 회화 2",
      "professor": "김미라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 2",
      "professor": "황정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 2",
      "professor": "박홍준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 2",
      "professor": "김수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급중국어 2",
      "professor": "김경림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국명저특강",
      "professor": "박홍준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실용중국어문법",
      "professor": "진화진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국문학사 2",
      "professor": "박홍준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급중국어 2",
      "professor": "정세진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급중국어 회화 2",
      "professor": "김수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급중국어 회화 2",
      "professor": "리우 나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국대중소설의 이해",
      "professor": "김수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국어학의 이해",
      "professor": "이해윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국어 교과교재연구 및 지도법",
      "professor": "신준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사곡산책",
      "professor": "정세진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국고전문학과 문화콘텐츠",
      "professor": "황정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실용중국어 프레젠테이션",
      "professor": "리우 나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스 중국어",
      "professor": "이정인",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국어통역연습",
      "professor": "윤지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국역대시가산책",
      "professor": "정세진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국사의 이해",
      "professor": "이규철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아사 입문",
      "professor": "조국",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양사로의 초대",
      "professor": "이진일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고려시대의 역사와 문화",
      "professor": "강호선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국근현대의 역사와 문화",
      "professor": "홍석률",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양사 2 - 근대유럽사의 발전",
      "professor": "차승현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아사 2",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "역사학 연구방법과 글쓰기",
      "professor": "오경환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사물/예술의 역사",
      "professor": "오경환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아와 근대화",
      "professor": "조국",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "역사학 특별주제 강의",
      "professor": "이규철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아의 일상과 문화",
      "professor": "전세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Reading Seminar: 지식",
      "professor": "김민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Reading Seminar: 종교와 문화",
      "professor": "강호선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국정치사",
      "professor": "김용직",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제정치의 이해",
      "professor": "유나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국정치사상",
      "professor": "김동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제기구론",
      "professor": "설규상",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공공외교의 이해",
      "professor": "한의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치와 생명",
      "professor": "정진화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치과정과 제도",
      "professor": "박지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유럽정치론",
      "professor": "박선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치와 예술",
      "professor": "박지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본외교안보론",
      "professor": "김백주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치와 종교",
      "professor": "김용직",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동남아국제관계론",
      "professor": "고우정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양정치사상",
      "professor": "박진곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제관계이론",
      "professor": "김영호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아국제관계론",
      "professor": "한의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치발전론",
      "professor": "박지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제정치학원서강독",
      "professor": "연상모",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인간관계심리",
      "professor": "박혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인간관계심리",
      "professor": "박혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물심리학",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물심리학",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리통계학",
      "professor": "차옥균",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발달심리학",
      "professor": "진경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발달심리학",
      "professor": "진경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리측정론",
      "professor": "이슬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정서심리학",
      "professor": "이상하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담이론과 실제",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담이론과 실제",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인지심리학",
      "professor": "차옥균",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인지심리학",
      "professor": "박형생",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수아상담",
      "professor": "차민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리평가",
      "professor": "조효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리평가",
      "professor": "조효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화심리학",
      "professor": "박혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행동수정",
      "professor": "이은별",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조직심리학",
      "professor": "정지희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "진로상담",
      "professor": "조지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "임상심리학",
      "professor": "서수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자 및 광고심리학",
      "professor": "유은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식량,식품,음식과 지리학",
      "professor": "박소현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "계량지리학",
      "professor": "정재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자연지리학",
      "professor": "박경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화지리학",
      "professor": "박선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국의 자연과 환경",
      "professor": "박경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발전연구와 지리학",
      "professor": "안창진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "GIS개론",
      "professor": "정재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "환태평양 지역지리",
      "professor": "이자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교통지리학",
      "professor": "박소현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회정의와 공간문제",
      "professor": "이효선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대도시지역연구",
      "professor": "이자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "원격탐사 및 실습",
      "professor": "정재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기후변화 개론",
      "professor": "박경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지리 교과교재연구 및 지도법",
      "professor": "박민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "부동산입지분석",
      "professor": "어정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역 및 공간정책 실습",
      "professor": "채지민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도시계획 및 디자인",
      "professor": "이자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제원론 2",
      "professor": "강석훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제원론 2",
      "professor": "진양수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제통계학",
      "professor": "강석훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제통계학",
      "professor": "강석훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제정보분석",
      "professor": "이동열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제와 사회",
      "professor": "박기주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미시경제학",
      "professor": "박기성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "거시경제학",
      "professor": "최준용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "거시경제학",
      "professor": "이창선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수리경제학",
      "professor": "이동열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제학설사",
      "professor": "박기주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "후생경제학",
      "professor": "박기성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제정책론",
      "professor": "오철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제금융론",
      "professor": "김원기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융투자론",
      "professor": "김원기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융투자론",
      "professor": "김원기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제성장론",
      "professor": "박기성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조세론",
      "professor": "박기주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "법경제학",
      "professor": "진양수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보화와 경제",
      "professor": "박기주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제문제세미나",
      "professor": "진양수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마케팅커뮤니케이션",
      "professor": "김종배",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마케팅커뮤니케이션",
      "professor": "유경남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "계량경영학",
      "professor": "황성욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재무관리",
      "professor": "이현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "원가회계",
      "professor": "박형주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자행동론",
      "professor": "백민선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자행동론",
      "professor": "변경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파생상품 이해",
      "professor": "이현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신상품개발론",
      "professor": "김종배",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노사관계론",
      "professor": "정종태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세무회계",
      "professor": "이상혁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 기업론",
      "professor": "하수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터 사이언스 2",
      "professor": "심선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "위험 관리와 보험",
      "professor": "정미화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전략경영",
      "professor": "김상현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스마케팅",
      "professor": "강민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "회계감사",
      "professor": "전홍민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뉴패러다임 경영",
      "professor": "하수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "빅데이터 분석 실습",
      "professor": "최한별",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제재무의 이해",
      "professor": "최승은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상커뮤니케이션",
      "professor": "강신규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상커뮤니케이션",
      "professor": "이은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털미디어론",
      "professor": "김호성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "커뮤니케이션연구방법론",
      "professor": "이형민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "설득커뮤니케이션",
      "professor": "소현진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어, 기호학과 수용자",
      "professor": "정수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "엔터테인먼트산업론",
      "professor": "심상민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지능형콘텐츠제작",
      "professor": "김호성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창의적 아이디어 발상",
      "professor": "신형교",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "커뮤니케이션이론",
      "professor": "이나연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌마케팅커뮤니케이션",
      "professor": "우미원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화콘텐츠 마케팅",
      "professor": "심상민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "저널리즘 원칙과 쟁점",
      "professor": "박상현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상연출론",
      "professor": "박소연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 미디어와 커뮤니케이션",
      "professor": "심두보",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어와 정치",
      "professor": "이나연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 미디어 마케팅",
      "professor": "류은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어연구 원서 강독",
      "professor": "상윤모",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공공/정책 PR",
      "professor": "최호진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소셜 미디어와 플랫폼 연구",
      "professor": "상윤모",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공공외교와 국가브랜딩 전략",
      "professor": "박진우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경영학원론",
      "professor": "김재은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "회계원리",
      "professor": "전홍민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기업과 사회",
      "professor": "국화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 커뮤니케이션 I",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌문화와 시민역량",
      "professor": "박성진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재무회계",
      "professor": "전홍민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생산관리",
      "professor": "황성욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생산관리",
      "professor": "황성욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융의 이해",
      "professor": "이현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 비즈니스를 위한 경제정보분석",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국·중국·일본 경제론",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 SCM의 이해",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 이커머스",
      "professor": "차용욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 커뮤니케이션 III",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제무역통상실무론",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제기업법 실무",
      "professor": "이상기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 비즈니스 베스트 프랙티스 사례",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 스타트업 경영연구",
      "professor": "차용욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌파이낸싱시스템과 FX관리",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(Global) Internship",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 트렌드와 혁신 경영",
      "professor": "박미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌마케팅전략",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족복지론",
      "professor": "박주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지역사",
      "professor": "이승기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동복지론",
      "professor": "조윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지실천론",
      "professor": "박현용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자원봉사론",
      "professor": "고선강",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지행정론",
      "professor": "이승기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지윤리와 철학",
      "professor": "박주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교사회복지론",
      "professor": "조윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역사회복지론",
      "professor": "조윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역사회복지론",
      "professor": "조윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족상담 및 가족치료",
      "professor": "박주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사례관리론",
      "professor": "손선옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지와 문화다양성",
      "professor": "고선강",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지현장실습",
      "professor": "박현용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지현장실습",
      "professor": "박현용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회복지법제와 실천",
      "professor": "이승기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의료사회복지론",
      "professor": "고선강",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중독과 사회복지실천",
      "professor": "박현용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "법률적 주장과 모의재판",
      "professor": "황태희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물권법",
      "professor": "전광백",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물권법",
      "professor": "김봉수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형법총론",
      "professor": "이성기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형법총론",
      "professor": "이성기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "법사회학",
      "professor": "김나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "채권법각론",
      "professor": "김봉수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노동법 2",
      "professor": "권오성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "회사법개론",
      "professor": "김한종",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형사정책",
      "professor": "이명근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자법",
      "professor": "황태희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제법 2",
      "professor": "박미경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "민주사회의 헌법",
      "professor": "김연식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유가증권법",
      "professor": "김한종",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족법",
      "professor": "전광백",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형사소송법 2",
      "professor": "이성기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형사소송법 2",
      "professor": "김나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행정법각론",
      "professor": "이재훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행정법각론",
      "professor": "이재훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "민사소송법 2",
      "professor": "문기탁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제통상법 2",
      "professor": "이상혁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영사법무 사례연구",
      "professor": "한동만",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영사법무학2",
      "professor": "김현명",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행정구제법",
      "professor": "이재훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융법",
      "professor": "김한종",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지식재산권법",
      "professor": "임광섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생명윤리법",
      "professor": "김나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 경제와 법",
      "professor": "황태희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "민사소송법 3",
      "professor": "문기탁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해석학개론 및 연습 2",
      "professor": "심성아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기하학 일반",
      "professor": "윤기헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보험수리학",
      "professor": "김주홍",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "선형대수학 2",
      "professor": "신용수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수학적 모델링과 미분방정식",
      "professor": "김도현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정수론",
      "professor": "신용수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미분기하학",
      "professor": "윤기헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대대수학 2",
      "professor": "신용수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "복소수적분론",
      "professor": "황정연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수학 교과교재연구 및 지도법",
      "professor": "정해남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "위상수학 2",
      "professor": "권보현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수치해석과 파이썬",
      "professor": "김주홍",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실해석학",
      "professor": "심성아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "편미분방정식과 응용",
      "professor": "김기택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수치적 데이터 처리 2",
      "professor": "김주홍",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분과 벡터해석 기초",
      "professor": "황정연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분과 벡터해석 기초",
      "professor": "황정연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분과 벡터해석 기초",
      "professor": "윤기헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분과 벡터해석 기초",
      "professor": "김수리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분과 벡터해석 기초",
      "professor": "연미정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 수학",
      "professor": "김수리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 수학",
      "professor": "김도현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 수학",
      "professor": "조명원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 수학",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 수학",
      "professor": "강우석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통계프로그래밍실습",
      "professor": "김기영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수리통계학 2",
      "professor": "박만식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "회귀분석",
      "professor": "이성건",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬통계분석",
      "professor": "이성건",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬통계분석",
      "professor": "허명회",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생명과학자료분석",
      "professor": "차재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시계열자료분석",
      "professor": "이종협",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통계와 마케팅",
      "professor": "조재범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "SQL통계분석",
      "professor": "박성오",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "SQL통계분석",
      "professor": "김동하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "SQL통계분석",
      "professor": "최병정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인공지능통계분석",
      "professor": "김영훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다변량자료분석 II",
      "professor": "박성오",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터마이닝",
      "professor": "김동하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융통계",
      "professor": "오찬욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 통계학",
      "professor": "권윤기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 통계학",
      "professor": "강태욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학 2",
      "professor": "김정수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화학수학",
      "professor": "김수리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물리화학 2",
      "professor": "김정수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학 2",
      "professor": "정선호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학실험",
      "professor": "이은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학실험",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학실험",
      "professor": "이은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분석화학 2",
      "professor": "신민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생화학 2",
      "professor": "박성순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무기화학 2",
      "professor": "구본재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학 3",
      "professor": "정선호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기기분석",
      "professor": "신민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화학 교과교재연구 및 지도법",
      "professor": "김경순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "효소화학",
      "professor": "박성순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무기화학특강",
      "professor": "구본재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기합성화학",
      "professor": "채정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학 Ⅱ",
      "professor": "김정수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학 Ⅱ",
      "professor": "이향애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학 Ⅱ",
      "professor": "심용호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반물리학 Ⅱ",
      "professor": "유상구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분학 및 연습",
      "professor": "김도현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초통계실습",
      "professor": "이종협",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초통계실습",
      "professor": "박만식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초통계실습",
      "professor": "엄인옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "핀테크 개론",
      "professor": "김수리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행렬대수",
      "professor": "박성오",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "엑셀통계분석",
      "professor": "김동하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "엑셀통계분석",
      "professor": "정호현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "엑셀통계분석",
      "professor": "조재범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터사이언스실습",
      "professor": "정호현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "정미원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "정미원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "박성순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "구본재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "신민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "채정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털컨텐츠",
      "professor": "신민아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털컨텐츠",
      "professor": "안민지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "웹프로그래밍기초",
      "professor": "최경아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "웹프로그래밍기초",
      "professor": "최경아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모바일서비스디자인",
      "professor": "이여름",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모바일서비스디자인",
      "professor": "이여름",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모바일서비스디자인",
      "professor": "이여름",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "3D 모델링과 시뮬레이션",
      "professor": "김현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "3D 모델링과 시뮬레이션",
      "professor": "김현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어스토리텔링 프로덕션",
      "professor": "이자인",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어스토리텔링 프로덕션",
      "professor": "KIM SEOYOUNG",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IoT 서비스설계",
      "professor": "김준철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IoT 서비스설계",
      "professor": "김준철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스플랫폼디자인",
      "professor": "김현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스플랫폼디자인",
      "professor": "김현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스서비스디자인",
      "professor": "최민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스서비스디자인",
      "professor": "최민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스측정 및 평가",
      "professor": "강효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스측정 및 평가",
      "professor": "강효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스디자인 창업",
      "professor": "이향은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스디자인 창업",
      "professor": "이향은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화와 행태 디자인",
      "professor": "이향은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프로페셔널 인큐베이팅",
      "professor": "최민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스캡스톤디자인",
      "professor": "이여름",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "메이드인성신",
      "professor": "최경아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어융합기술개론",
      "professor": "이일구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어융합기술개론",
      "professor": "박새롬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어융합기술개론",
      "professor": "이택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안수사론",
      "professor": "강구민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "개인정보보호관리체계",
      "professor": "김경진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨터 네트워크",
      "professor": "임연섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨터 네트워크",
      "professor": "이일구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨터 네트워크",
      "professor": "임연섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안 포렌식",
      "professor": "이상학",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안 비즈니스 활용론",
      "professor": "이상학",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보보호컨설팅기법",
      "professor": "김성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보보호제품보안성평가방법론",
      "professor": "김경진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해킹프로그램실습 2",
      "professor": "장대희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해킹프로그램실습 2",
      "professor": "장대희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털포렌식실습",
      "professor": "김성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털포렌식실습",
      "professor": "김성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털포렌식실습",
      "professor": "이별",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터베이스보안실습",
      "professor": "박새롬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터베이스보안실습",
      "professor": "권수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안캡스톤디자인 2",
      "professor": "김경진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안특강",
      "professor": "박새롬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합보안특강",
      "professor": "임연섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "윤상덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "윤상덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "이택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "김경진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "이정빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "이택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "심광섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "홍의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "김설현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "심광섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "변혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "유재현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "C++프로그래밍",
      "professor": "유재현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자료구조",
      "professor": "윤인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터베이스",
      "professor": "박지웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운영체제",
      "professor": "심광섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자바프로그래밍",
      "professor": "노현아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자바프로그래밍",
      "professor": "이준세",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자바프로그래밍",
      "professor": "이준세",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급자료구조",
      "professor": "장재경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급자바프로그래밍",
      "professor": "우종정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급자바프로그래밍",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프로젝트설계",
      "professor": "서동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터베이스프로그래밍",
      "professor": "박지웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모바일소프트웨어",
      "professor": "우종정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "네트워크분석실습",
      "professor": "박지웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상업 논리 및 논술",
      "professor": "강수영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보ㆍ컴퓨터 교과교재연구 및 지도법",
      "professor": "안영아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬 프로그래밍",
      "professor": "홍의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬 프로그래밍",
      "professor": "조미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "빅데이터 프로그래밍",
      "professor": "김종완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴파일러",
      "professor": "김도형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어공학",
      "professor": "서동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "이산수학",
      "professor": "김형우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "이산수학",
      "professor": "오장민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IT개론",
      "professor": "이재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IT개론",
      "professor": "이재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인공지능",
      "professor": "이재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인공지능수학",
      "professor": "이준세",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터마이닝",
      "professor": "김준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "웹정보시스템 프로젝트",
      "professor": "조성우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어공학",
      "professor": "이혜리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인간컴퓨터상호작용",
      "professor": "변혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스마트시스템 캡스톤디자인",
      "professor": "김준철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스마트네트워크 및 실습",
      "professor": "김준철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "데이터마이닝개론",
      "professor": "김준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지능형 정보시스템",
      "professor": "오장민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가상현실",
      "professor": "변혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬프로그래밍",
      "professor": "정영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬프로그래밍",
      "professor": "김도형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파이썬프로그래밍",
      "professor": "김준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "과학도를 위한 파이썬프로그래밍",
      "professor": "윤상덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "홍사미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "홍사미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반화학실험 2",
      "professor": "홍사미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "청정융합 진로와 전망",
      "professor": "임종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신재생에너지공학개론",
      "professor": "황안나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재료과학과 공학 2",
      "professor": "홍현선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전과정사고와 그린제품 개발",
      "professor": "양인목",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창의적 사고와 비즈니스모델",
      "professor": "정소현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대물리학",
      "professor": "임재용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창의성 공학설계와 창업(캡스톤디자인) 2",
      "professor": "이형곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상평형과 상변태론 ",
      "professor": "이창우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "촉매공학",
      "professor": "임종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "온실가스관리공학",
      "professor": "양인목",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "환경·소재·에너지공학 실습 2",
      "professor": "홍현선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기기분석",
      "professor": "임종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "첨단소재공학",
      "professor": "고상기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "위험성평가 공학",
      "professor": "양인목",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프로젝트공학 2",
      "professor": "양인목",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품공학개론",
      "professor": "윤현근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생리학",
      "professor": "나혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기기분석개론",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "단백질공학",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생화학 2",
      "professor": "나혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생화학실험",
      "professor": "나혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품미생물공학실험",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품미생물공학실험",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분자생물학",
      "professor": "조장훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오프로세스",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발효식품공학",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품공학 2",
      "professor": "장혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품화학 2",
      "professor": "윤현근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품개발캡스톤디자인",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "HACCP의 이론과 응용",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품포장공학",
      "professor": "장혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오식품산업동향 및 마케팅",
      "professor": "장혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오산업현장실습",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학 2",
      "professor": "최상철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "김상태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "김상태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "고병준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "고병준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "임동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학실험 2",
      "professor": "임동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바이오의약품개론",
      "professor": "강창수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생태학",
      "professor": "김재현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유전공학",
      "professor": "강창수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해부학 및 조직학",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분자생물학",
      "professor": "조장훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미생물학",
      "professor": "김종일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분자계통학",
      "professor": "김상태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발생공학",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물 교과교재연구 및 지도법",
      "professor": "안주현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물분리공정",
      "professor": "백영빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세포배양 및 공정실험",
      "professor": "백영빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세포배양 및 공정실험",
      "professor": "백영빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "약물전달학",
      "professor": "고병준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유전체학",
      "professor": "최상철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물정보학실험",
      "professor": "최상철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생명공학창의설계 2",
      "professor": "최상철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생식생리와 보조생식술",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학 Ⅱ",
      "professor": "최상철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반생물학 Ⅱ",
      "professor": "권혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뇌인지과학개론",
      "professor": "김호성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해부학",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해부학",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강과 글로벌이슈",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강과 글로벌이슈",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호윤리",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호윤리",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학 2",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학 2",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성건강간호학 1",
      "professor": "전나미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성건강간호학 1",
      "professor": "전나미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 2",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 2",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동간호학 1",
      "professor": "김동희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동간호학 1",
      "professor": "김동희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 3",
      "professor": "방양희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 3",
      "professor": "방양희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "나윤희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "송효빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "송효빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본간호학실습 2",
      "professor": "나윤희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 실습 1",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 실습 1",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 실습 1",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성건강간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성건강간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성건강간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동간호학실습",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정신간호학 2",
      "professor": "정명실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정신간호학 2",
      "professor": "정명실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보건교육",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보건교육",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 2",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 2",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 2",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정신간호학실습 1",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정신간호학실습 1",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정신간호학실습 1",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 5",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 5",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "정명실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "양승애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "강소라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "김미경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "송효빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "민혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 1",
      "professor": "김순옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호정보학",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인간호학 실습",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인간호학 실습",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인간호학 실습",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 3",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 3",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 3",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호연구 및 통계",
      "professor": "기지선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호연구 및 통계",
      "professor": "기지선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보건의료관계법규",
      "professor": "이영미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보건의료관계법규",
      "professor": "이영미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호관리학실습",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호관리학실습",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호관리학실습",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 4",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 4",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학실습 4",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "고정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "김동희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "조무용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션통합실습 2",
      "professor": "민혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 7",
      "professor": "양승애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성인간호학 7",
      "professor": "양승애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역사회간호학실습2",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역사회간호학실습2",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역사회간호학실습2",
      "professor": "김덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물학 2",
      "professor": "권혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의과학과 화학입문 2",
      "professor": "이향애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해부생리학 2",
      "professor": "전민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물리학 2",
      "professor": "조명원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학 2",
      "professor": "이지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학실험",
      "professor": "이은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미적분학 및 연습 2",
      "professor": "조명원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생화학 2",
      "professor": "임동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생리학 2",
      "professor": "전민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물리학실험",
      "professor": "조명원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물리학실험",
      "professor": "조명원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의약화학 2",
      "professor": "이지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구방법론",
      "professor": "이지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의학개론 2",
      "professor": "전민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영작문 2",
      "professor": "조나단 리스 팬톤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신경과학",
      "professor": "전민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영양생화학실험",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영양생화학실험",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영양판정 및 실습",
      "professor": "이승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식생활관리",
      "professor": "고성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품화학실험",
      "professor": "표영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품화학실험",
      "professor": "표영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국조리 및 실습",
      "professor": "고성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생애주기영양학",
      "professor": "이승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식사요법",
      "professor": "심선아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "임상영양학실험",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기능성식품학",
      "professor": "표영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품위생학",
      "professor": "이경연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영양사현장실습",
      "professor": "표영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품마케팅",
      "professor": "고성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품위생관계법규",
      "professor": "강태욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠문화사",
      "professor": "임우택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠산업‧경제론",
      "professor": "정영남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동생리실습",
      "professor": "양윤권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동생리실습",
      "professor": "양윤권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테니스 2",
      "professor": "성용석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "승마 2",
      "professor": "이금주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해양스포츠 2",
      "professor": "정영남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동처방실습",
      "professor": "권보하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동처방실습",
      "professor": "최재희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠사회학",
      "professor": "임우택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "골프 2",
      "professor": "임우택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "골프 2",
      "professor": "임우택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "배드민턴 2",
      "professor": "신희광",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동계스포츠",
      "professor": "장덕진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠의학",
      "professor": "이시은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠와 대중매체",
      "professor": "정영남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠응급처치",
      "professor": "박성영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "크로스핏",
      "professor": "이시은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "근관절 생리학",
      "professor": "이인제",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동재활트레이닝",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동재활트레이닝",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동역학과 재활",
      "professor": "하성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동과 발육발달",
      "professor": "정은나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소마틱재활요법",
      "professor": "육영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소마틱재활요법",
      "professor": "육영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유도 2",
      "professor": "이소연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강체력측정평가",
      "professor": "이윤미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동재활의학",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교정운동",
      "professor": "이상길",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마음챙김과 심리기술",
      "professor": "육영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마음챙김과 심리기술",
      "professor": "심교린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동영양학",
      "professor": "윤동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "짐볼과 밴드운동재활",
      "professor": "오정하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인재활운동",
      "professor": "김아람",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유기화학",
      "professor": "김정수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영양학",
      "professor": "이승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생리학",
      "professor": "정윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "야외활동",
      "professor": "이수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "야외활동",
      "professor": "최재희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "해부학",
      "professor": "심유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "빙상",
      "professor": "김수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "볼링 2",
      "professor": "정영남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "수상안전 및 인명구조",
      "professor": "이수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "태권도2",
      "professor": "김영진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "태권도2",
      "professor": "김영진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강운동심리학",
      "professor": "육영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "헬스트레이닝",
      "professor": "백승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "헬스트레이닝",
      "professor": "백승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가정 교과교재 연구 및 지도법",
      "professor": "이신애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 기업을 위한 국제 회계",
      "professor": "이상기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌 기업을 위한 국제 재무",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국의 경제조직과 발전",
      "professor": "박미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기업윤리",
      "professor": "이성근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양의복구성",
      "professor": "김경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양의복구성",
      "professor": "김경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양의복구성",
      "professor": "문윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션일러스트레이션",
      "professor": "이혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션일러스트레이션",
      "professor": "이혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션일러스트레이션",
      "professor": "이재민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국복식디자인 1",
      "professor": "장민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인CAD 1",
      "professor": "김덕하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인CAD 1",
      "professor": "손혜승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인CAD 1",
      "professor": "손혜승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인CAD 1",
      "professor": "권수희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인CAD 1",
      "professor": "권수희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "어패럴 메이킹",
      "professor": "문윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패턴제작 및 구성",
      "professor": "김금화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컬러정보와 디자인",
      "professor": "류한나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컬러정보와 디자인",
      "professor": "은광희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비주얼 머천다이징",
      "professor": "박은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비주얼 머천다이징",
      "professor": "이영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국복식프로젝트",
      "professor": "장민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션 광고마케팅 프로젝트",
      "professor": "정이재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션소재기획",
      "professor": "유화숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션소재기획",
      "professor": "김미경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션드레이핑",
      "professor": "김미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션드레이핑",
      "professor": "김서영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인스튜디오",
      "professor": "염미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션디자인스튜디오",
      "professor": "오지혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패턴 CAD",
      "professor": "김미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패턴 CAD",
      "professor": "김미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패턴 CAD",
      "professor": "김미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌패션유통산업",
      "professor": "김해정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌패션유통산업",
      "professor": "이영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션실무기획과 마케팅",
      "professor": "김가현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테크니컬 디자인",
      "professor": "윤지원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테크니컬 디자인",
      "professor": "윤지원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미용 중국어기초",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피부과학",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품학개론 ",
      "professor": "김주덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품학개론 ",
      "professor": "김지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티 일러스트레이션 ",
      "professor": "하승아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초에스테틱 ",
      "professor": "임우경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초에스테틱 ",
      "professor": "박한나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티색채학 ",
      "professor": "김정하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시대별 테마 메이크업",
      "professor": "김현진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시대별 테마 메이크업",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시대별 테마 메이크업",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시대별 테마 메이크업",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티영양과 헬스 ",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "향과 아로마테라피",
      "professor": "서현우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "이미지메이킹 ",
      "professor": "신정원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기능성 화장품학",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성격분장디자인",
      "professor": "황선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성격분장디자인",
      "professor": "황선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성격분장디자인",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성격분장디자인",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성격분장디자인",
      "professor": "량쉬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인체해부생리학",
      "professor": "김종례",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품 품질경영",
      "professor": "강진미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티 마케팅과 경영",
      "professor": "김세은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "업스타일",
      "professor": "이정림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아트메이크업",
      "professor": "이유나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수분장",
      "professor": "황선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티 트렌드 세미나",
      "professor": "김민경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공 실무인턴십 ",
      "professor": "류현정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자정보와 교육",
      "professor": "석재혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지역생활문화콘텐츠",
      "professor": "최배영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서비스매너와 커뮤니케이션",
      "professor": "박복임",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족행동의 경제 ",
      "professor": "노영래",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족학",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자 의사결정론",
      "professor": "양수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생애주기와 문화산업",
      "professor": "최배영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보험과 은퇴설계",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시장조사와 마케팅",
      "professor": "박배진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구 및 조사방법",
      "professor": "허경옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자투자와 자산관리",
      "professor": "차경욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자심리와 광고",
      "professor": "양수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자심리와 광고",
      "professor": "박나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주거학",
      "professor": "백주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자법과 정책",
      "professor": "이기연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컨벤션문화산업",
      "professor": "박현명",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자학응용세미나",
      "professor": "허경옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비시장과 산업",
      "professor": "권용덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계민주시민교육 1",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육심리",
      "professor": "백아롱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육심리",
      "professor": "백아롱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육심리",
      "professor": "오혜림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육심리",
      "professor": "오혜림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육방법 및 교육공학",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육방법 및 교육공학",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육방법 및 교육공학",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육방법 및 교육공학",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육행정 및 교육경영",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육행정 및 교육경영",
      "professor": "임성연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정",
      "professor": "황순예",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정",
      "professor": "황순예",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육평가",
      "professor": "강태훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육평가",
      "professor": "김명연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육평가",
      "professor": "김명연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육사회",
      "professor": "노경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육사회",
      "professor": "노경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육철학 및 교육사",
      "professor": "심형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육철학 및 교육사",
      "professor": "심형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수교육학개론",
      "professor": "최은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수교육학개론",
      "professor": "권소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교직실무",
      "professor": "김미령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교직실무",
      "professor": "김미령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "이유림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "이유림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "이윤옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교폭력 예방 및 학생의 이해",
      "professor": "이윤옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정과 수업",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교상담론",
      "professor": "이다미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자기이해 및 교육전문가 진로탐색",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육고전의 향연",
      "professor": "심형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육행정",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육공학",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대교육사조",
      "professor": "심형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "평생교육방법론",
      "professor": "노경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육학 논리 및 논술",
      "professor": "심형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육재정과 경제 ",
      "professor": "김주경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육학 교과교재연구 및 지도법",
      "professor": "문민지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학습심리",
      "professor": "백청강",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "평생교육프로그램개발론",
      "professor": "노경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다문화교육과 교육과정",
      "professor": "이은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "청소년문화의이해",
      "professor": "정영선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치와 사회",
      "professor": "서현진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제와 사회",
      "professor": "박형준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스마트시대의 정치과정",
      "professor": "장선화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대사회의이해",
      "professor": "정영선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "민주사회와 헌법",
      "professor": "김연식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일반사회 교과교재연구 및 지도법",
      "professor": "조대훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시민교육과 사회윤리",
      "professor": "송현정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족사회학",
      "professor": "정영선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화속의 정치 이데올로기",
      "professor": "서현진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교 경제교육의 이해",
      "professor": "박형준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "글로벌·다문화시대의 교수법",
      "professor": "조대훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인간과 행정",
      "professor": "모춘흥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제교육특강",
      "professor": "박형준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양고전과 윤리",
      "professor": "윤용남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "철학개론",
      "professor": "권수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통일교육론",
      "professor": "안승대",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "북한사회문화론",
      "professor": "권미정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도덕.윤리교육론",
      "professor": "문경호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생태ㆍ환경윤리",
      "professor": "이경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양윤리사상",
      "professor": "윤용남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회윤리",
      "professor": "이두연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회정의론",
      "professor": "김혜수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도덕윤리 교과교재연구 및 지도법",
      "professor": "문경호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양철학특강",
      "professor": "이은호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양윤리사상",
      "professor": "권수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대사회정치사상",
      "professor": "김혜림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "윤리와 사상 교과교육론",
      "professor": "편상범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양윤리교육론",
      "professor": "윤민향",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대철학특강",
      "professor": "권수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사서입문",
      "professor": "김용재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한문문법교육론",
      "professor": "황아영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초한문 2",
      "professor": "김희영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한시교육론",
      "professor": "김연수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금석서예",
      "professor": "이진선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국고전신화읽기",
      "professor": "김정숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경서해석연습",
      "professor": "김용재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "역대산문선독",
      "professor": "김홍백",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한문 교과교재연구 및 지도법",
      "professor": "정효영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국한문소설강독",
      "professor": "류준경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고전번역과 사상",
      "professor": "방현아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동건강교육",
      "professor": "김고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동요반주법 2",
      "professor": "강보라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영유아교수방법론",
      "professor": "배지희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동복지론",
      "professor": "전홍주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동미술",
      "professor": "권경숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아수학교육",
      "professor": "이사임",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아음악교육",
      "professor": "전홍주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육과정",
      "professor": "김고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동문학",
      "professor": "황인애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동안전관리",
      "professor": "이윤영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유치원 교과교재연구 및 지도법",
      "professor": "조미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아관찰 및 실습",
      "professor": "권정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동생활지도",
      "professor": "김은희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "부모교육론",
      "professor": "배지희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육평가",
      "professor": "정미애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "입체와 공간",
      "professor": "배성미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "입체와 공간",
      "professor": "김주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "이규성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "이현정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "김세중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델표현",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델링",
      "professor": "김보라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델링",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델링",
      "professor": "변경수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모델링",
      "professor": "조경훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술의 역사와 사회",
      "professor": "박관택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술과 글쓰기",
      "professor": "이재은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국미술사 2",
      "professor": "이보연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "권기범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "노신경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "채효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "홍지윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "강유림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "획과 여백 2",
      "professor": "김선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대수묵화연구2",
      "professor": "권순영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대수묵화연구2",
      "professor": "장재록",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양미술사",
      "professor": "이보연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서화기초 2",
      "professor": "임진성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서화기초 2",
      "professor": "성태훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대동양화 2",
      "professor": "권기범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대동양화 2",
      "professor": "하용주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초조형2",
      "professor": "김희진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초조형2",
      "professor": "노신경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "채색화기초2",
      "professor": "이만수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "채색화기초2",
      "professor": "최익진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어연구 스튜디오2",
      "professor": "임장순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "색채와 표현2",
      "professor": "이만수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "색채와 표현2",
      "professor": "박재철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합매체2",
      "professor": "정은별",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "융합매체2",
      "professor": "김혜리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대동양화4",
      "professor": "손문일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대동양화4",
      "professor": "정성윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현장드로잉2",
      "professor": "박형진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현장드로잉2",
      "professor": "김민호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국회화 스튜디오2",
      "professor": "이만수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국회화 스튜디오2",
      "professor": "유근택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작스튜디오2",
      "professor": "권기범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작스튜디오2",
      "professor": "노신경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양 모더니즘미술사",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털이미징",
      "professor": "장서우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털이미징",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 2",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 2",
      "professor": "최병진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대드로잉 2",
      "professor": "박성환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대드로잉 2",
      "professor": "안중경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대판화 2",
      "professor": "장성숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대판화 2",
      "professor": "신현희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재현적표현 2",
      "professor": "김지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재현적표현 2",
      "professor": "윤영혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양 동시대 미술의 동향",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(구상)",
      "professor": "서재정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(구상)",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(추상)",
      "professor": "이진주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(추상)",
      "professor": "이주연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(복합매체)",
      "professor": "김태서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대회화 4(복합매체)",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "포트폴리오 연구 2",
      "professor": "나광호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "포트폴리오 연구 2",
      "professor": "박미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 4",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 4",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 5",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 5",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 6",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품연구 6",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 아트 2",
      "professor": "이지숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 아트 2",
      "professor": "김민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술사 2",
      "professor": "이보연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도조기법",
      "professor": "김민형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도조기법",
      "professor": "신예진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "석조기법 2",
      "professor": "김병규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "석조기법 2",
      "professor": "김병규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형상조소2",
      "professor": "권치규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형상조소2",
      "professor": "권치규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 조형 2",
      "professor": "엄아롱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 조형 2",
      "professor": "오원영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대조각 2",
      "professor": "정정주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대조각 2",
      "professor": "노주환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형상표현2",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "형상표현2",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재료기법 2",
      "professor": "조영철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재료기법 2",
      "professor": "이지훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동시대 조각의 현장 2",
      "professor": "이상윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자유창작 2",
      "professor": "노주환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자유창작 2",
      "professor": "노주환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "2D디지털그래픽 2",
      "professor": "조희은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "2D디지털그래픽 2",
      "professor": "조희은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합금속공예실기 2",
      "professor": "김송",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합금속공예실기 2",
      "professor": "신혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합금속공예실기 2",
      "professor": "김종승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합도자공예실기 2",
      "professor": "박태성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합도자공예실기 2",
      "professor": "박태성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통합도자공예실기 2",
      "professor": "김시만",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일디자인프로세스 2",
      "professor": "정병헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일디자인프로세스 2",
      "professor": "정병헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일디자인프로세스 2",
      "professor": "정병헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금속전공이론 2",
      "professor": "현광훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "색채표현연구",
      "professor": "김수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "3D디지털모델링 2",
      "professor": "이슬범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "3D디지털모델링 2",
      "professor": "이기욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금속표현연구 2",
      "professor": "원재선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주얼리디자인기초 2",
      "professor": "최경미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도자표현연구 2",
      "professor": "김시만",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일프린팅",
      "professor": "정병헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도자리빙디자인기초 2",
      "professor": "한영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일소재개발 2",
      "professor": "김수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조형발상드로잉",
      "professor": "김수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도자장식기초 2",
      "professor": "이은미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션마케팅",
      "professor": "박좌용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도자리빙디자인 2",
      "professor": "권성은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주얼리디자인 2",
      "professor": "신혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금속리빙디자인 2",
      "professor": "김동현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "산업금속프로세스 2",
      "professor": "박예연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털세라믹프로세스2",
      "professor": "한영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털써피스디자인 2",
      "professor": "김수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화상품개발(LBD) 2",
      "professor": "신혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "우븐디자인프로세스",
      "professor": "문보영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테이블웨어프로젝트 2",
      "professor": "이혜미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일프로덕트디자인 2",
      "professor": "문보영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테이블웨어디자인 2",
      "professor": "김윤지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간장식도자 2",
      "professor": "한영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상품개발 및 마케팅 2",
      "professor": "한명호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금속리빙디자인 4",
      "professor": "이재익",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아트주얼리 2",
      "professor": "신혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세라믹프로덕트 디자인 2",
      "professor": "정소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일디자인기획 2",
      "professor": "박좌용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주얼리디자인기획 2",
      "professor": "김송",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각적 발상과 표현",
      "professor": "김도식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각적 발상과 표현",
      "professor": "김도식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각적 발상과 표현",
      "professor": "김도식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각적 발상과 표현",
      "professor": "김도식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간디자인 기초와 실습",
      "professor": "장기윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간디자인 기초와 실습",
      "professor": "장기윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간디자인 기초와 실습",
      "professor": "안민선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인사",
      "professor": "장연정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "타이포그래피 2",
      "professor": "김장우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "타이포그래피 2",
      "professor": "황상준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "타이포그래피 2",
      "professor": "김강인",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "타이포그래피 2",
      "professor": "김장우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무대연출디자인",
      "professor": "이홍구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무대연출디자인",
      "professor": "이홍구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무대연출디자인",
      "professor": "이홍구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인씽킹워크숍",
      "professor": "구상",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인씽킹워크숍",
      "professor": "한옥재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인씽킹워크숍",
      "professor": "최인환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인씽킹워크숍",
      "professor": "김현석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보그래픽디자인",
      "professor": "홍주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보그래픽디자인",
      "professor": "김나연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보그래픽디자인",
      "professor": "김민주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보그래픽디자인",
      "professor": "김미애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인터랙티브어플리케이션디자인",
      "professor": "김혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모션그래픽 워크샵 2",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모션그래픽 워크샵 2",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중급 공간디자인실습 2",
      "professor": "홍승석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전시디자인",
      "professor": "윤현경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보디자인 2",
      "professor": "권다은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "브랜딩2",
      "professor": "장혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "브랜딩2",
      "professor": "장혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "브랜딩2",
      "professor": "윤지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디스플레이디자인",
      "professor": "김민석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "그래픽디자인",
      "professor": "황상준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "그래픽디자인",
      "professor": "양희재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인터페이스디자인 2",
      "professor": "신수민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인터페이스디자인 2",
      "professor": "박한진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털이미징 2",
      "professor": "박한진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활용품디자인",
      "professor": "최인환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간디자인 CAD",
      "professor": "신영화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인씽킹스튜디오 2",
      "professor": "최인환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각디자인스튜디오 2",
      "professor": "장혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각디자인스튜디오 2",
      "professor": "황상준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각디자인스튜디오 2",
      "professor": "장혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어디자인프로젝트 2",
      "professor": "박한진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정보경험디자인스튜디오 2",
      "professor": "신수민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간디자인스튜디오 2",
      "professor": "장기윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공간연출디자인스튜디오 2",
      "professor": "이소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인 프로젝트 리서치",
      "professor": "김용환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모션그래픽스스튜디오 2",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모션그래픽스스튜디오 2",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "BX디자인프로젝트",
      "professor": "김형우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "이태리예술가곡",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일어딕션",
      "professor": "김샤론",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 2",
      "professor": "김미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정나리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "인수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "인수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민숙연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "신효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "신효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "신효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "신효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김혜란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김혜란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김혜란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김혜란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "서보란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "서보란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "서보란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "서보란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "남정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "남정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "남정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합창 2",
      "professor": "박승유",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 2",
      "professor": "성혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "클래스피아노 2",
      "professor": "윤선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악 세미나 2",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "불어딕션",
      "professor": "강신모",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 4",
      "professor": "김미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정나리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정나리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "인수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "인수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "민숙연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합창 4",
      "professor": "박승유",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 4",
      "professor": "성혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "클래스피아노 4",
      "professor": "이신애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성법 2",
      "professor": "김설향",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악 세미나 4",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악인턴십2",
      "professor": "소수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악문헌 2",
      "professor": "송혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 6",
      "professor": "김미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정나리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "민숙연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김샤론",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합창 6",
      "professor": "박승유",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어딕션",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국가곡연구",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오라토리오",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오페라 공연과 실습",
      "professor": "이혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악교육프로그램개발",
      "professor": "송혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합창지휘 2",
      "professor": "박승유",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "20세기음악연구",
      "professor": "고은미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오페라워크샵 2",
      "professor": "이혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스코어리딩",
      "professor": "이소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 2",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 2",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "어수희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이재완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이재완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "윤유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "윤유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이화경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "성해린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "성해린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이섬승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이섬승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "최고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "문지형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "문지형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김진주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "박의경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "권혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "유예동",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정담온",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김민조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "유은서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "강희선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정순섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이동곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이응우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "강석진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "임현수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "임현수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "박성진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정선미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정선미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정선미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "유예동",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "권혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 2",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 2",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관악합주 2",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현악합주 2",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피아노앙상블 1",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합주 2",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건반화성 2",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사 및 문헌 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사 및 문헌 4",
      "professor": "유선옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "응용화성",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스코어리딩",
      "professor": "이상희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피아노를 위한 대위법 2",
      "professor": "전민재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 4",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관현악을 위한 대위법 2",
      "professor": "전민재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이재완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이화경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이화경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "성해린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이섬승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이섬승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이섬승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "최고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "허상미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤서우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤서우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "황소진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "문지형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이수아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박의경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박의경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김민조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정순섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "구태은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이응우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "강석진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김승현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김승현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박성진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "황대남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "황대남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관악합주 4",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현악합주 4",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합주 4",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 4",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창.청음 4",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실내악 2",
      "professor": "황소진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실내악 2",
      "professor": "박진오",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성 및 이론 4(오케스트레이션) ",
      "professor": "정영빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지휘법 2",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "지휘법 2",
      "professor": "김우중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "반주법 2",
      "professor": "고은지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전자음악 및 실습 2",
      "professor": "김효주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 6",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학내연주 6",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이재완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이화경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "성해린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "허상미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "황소진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "문지형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이수아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박의경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "권혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김우중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박준서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정담온",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정담온",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김세희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김세희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김세희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정순섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "장유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이동곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이동곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "강석진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김승현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박성진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정선미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관악합주 6",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현악합주 6",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피아노문헌 2",
      "professor": "임지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합주 6",
      "professor": "김광현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실내악 4",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실내악 4",
      "professor": "박예은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석 2",
      "professor": "정영빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악교수학습법",
      "professor": "이보림",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "클래스인스트루먼트 2",
      "professor": "김진주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "클래스인스트루먼트 2",
      "professor": "문제임스재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "악기수리법2",
      "professor": "여우진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "악기수리법2",
      "professor": "전상진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "어수희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "어수희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이재완",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이화경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "성해린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김창호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김상애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김상애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이수아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이수아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "권혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박예은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "박준서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김민조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김민조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "장유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "장유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "구태은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이응우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "강석진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "임현수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김승현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "백승연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "황대남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "황대남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피아노 및 관현악 교수법 2",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "합주 8",
      "professor": "김광현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관악합주 8",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현악합주 8",
      "professor": "피호영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피아노워크숍 2",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악치료학",
      "professor": "최윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작실내악 2",
      "professor": "김동수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "근현대화성 2",
      "professor": "윤규일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사및문헌 2",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작연주 2",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "악기론 2",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨터ㆍ전자음악 2",
      "professor": "조진옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "임현경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "윤규일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "정미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "이문희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석 2",
      "professor": "설수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "채경주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 2",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급화성 및 이론 2",
      "professor": "박지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "초급화성 및 이론 2",
      "professor": "박지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작연주 4",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "악기론 4",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨터ㆍ전자음악 4",
      "professor": "조진옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "강은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤규일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "설수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "안성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이문희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "장춘희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건반화성 2",
      "professor": "전예은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "신인선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "신인선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "신인선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "변지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "변지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "변지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "권오연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "권오연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "권오연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "정이은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 4",
      "professor": "유선옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 4",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성 및 실습 2",
      "professor": "김예진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대중문화와 음악",
      "professor": "서윤정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급재즈화성학 2",
      "professor": "김지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가창곡작곡법 및 실습 2",
      "professor": "장지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사및문헌 4",
      "professor": "신인선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악현장연구",
      "professor": "정이은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석 4",
      "professor": "정미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창작연주 6",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "강은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "설수경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "전예은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "정미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "안성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이문희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "박수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "장춘희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "20세기음악 2",
      "professor": "임현경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악평론",
      "professor": "변지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 6",
      "professor": "김예진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 6",
      "professor": "김예진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 6",
      "professor": "정이은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 6",
      "professor": "유선옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 6",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 6",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 6",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 6",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 6",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 6",
      "professor": "하승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재즈건반실습 2",
      "professor": "김지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관현악법 2",
      "professor": "안성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뮤지컬 워크숍 2",
      "professor": "김기연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "구본우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "강은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "강은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "강은경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김수호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이문희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "장춘희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악미학",
      "professor": "권오연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(A) 8",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론 및 악기(B) 8",
      "professor": "김수현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악경영 2",
      "professor": "서윤정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악의 이해",
      "professor": "한보람",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술경영학",
      "professor": "오선명",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술경영학",
      "professor": "오선명",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뮤지컬사",
      "professor": "김종헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술사",
      "professor": "권수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술사",
      "professor": "정경미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연극의 이해",
      "professor": "김종헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무대메커니즘의이해",
      "professor": "고해종",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무대메커니즘의이해",
      "professor": "김수정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화예술 홍보마케팅",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화예술이슈분석",
      "professor": "이정희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경영학원론",
      "professor": "김시영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경영학원론",
      "professor": "김정선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화의 이해",
      "professor": "강나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마이스산업의 이해",
      "professor": "양은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공연기획 프로젝트",
      "professor": "김종헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "호흡/발성 2",
      "professor": "김혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "호흡/발성 2",
      "professor": "김혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "배우 신체훈련 2",
      "professor": "김선권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초연기실습 2",
      "professor": "김정훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초연기실습 2",
      "professor": "김혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초연기실습 2",
      "professor": "김혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상연기 실습 2",
      "professor": "반민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상연기 실습 2",
      "professor": "반민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상연기 실습 2",
      "professor": "손보민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "배우 화술 2",
      "professor": "김혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화 제작실습 2",
      "professor": "박은형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화 제작실습 2",
      "professor": "임찬상",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화 제작실습 2",
      "professor": "박경목",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화 제작실습 2",
      "professor": "임태규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "단막극제작실습 2",
      "professor": "신동길",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "단막극제작실습 2",
      "professor": "김정훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공연워크샵 2",
      "professor": "신동일",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보컬 2",
      "professor": "전은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보컬 2",
      "professor": "전은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "TV드라마 연기실습 2",
      "professor": "손보민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오디션테크닉",
      "professor": "지춘성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품워크숍 2",
      "professor": "유영식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "졸업작품워크숍 2",
      "professor": "유영식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대본 분석과 인물 창조2",
      "professor": "박은형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기보법",
      "professor": "조원주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기보법",
      "professor": "조원주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기보법",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기보법",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김희주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김유미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "신기남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김희주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김희주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "허준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박세윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박규연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김승범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김승범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "홍경섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "홍경섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "허준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "허준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "임경은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "정민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "정민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
      "professor": "강경한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
      "professor": "강경한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
      "professor": "강경한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 기초: 로직 프로 2",
      "professor": "조윤정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석 2",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석 2",
      "professor": "김한아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "송준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박세윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이상원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이상원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정이령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "정민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김현민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "남예지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "남예지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "신기남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "신기남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이지민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이상원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "남성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "남성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "임채광",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "반검서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "반검서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김현민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "심영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "박세윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "송준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "윤영삼",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재즈 화성학 2",
      "professor": "이아선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성 청음연습",
      "professor": "이지민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 이해와 활용: 프로 툴스 2",
      "professor": "조남준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디지털 오디오 워크스테이션 이해와 활용: 프로 툴스 2",
      "professor": "조남준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아카펠라를 위한 보컬 합주 2",
      "professor": "임경은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악형식 2",
      "professor": "송종헌",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악형식 2",
      "professor": "김한아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "임프로비제이션을 위한 기악 합주 2",
      "professor": "정이령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "우미진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "우미진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김현민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "유영하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "남예지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김주현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김주현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "우미진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "윤영삼",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "반검서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김유미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "심영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "임채광",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김현민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김영준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스튜디오 레코딩과 믹싱 2",
      "professor": "정채웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상을 위한 일렉트로닉 작곡과 사운드 디자인 2",
      "professor": "정채웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영상을 위한 일렉트로닉 작곡과 사운드 디자인 2",
      "professor": "정채웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "송라이팅을 위한 보컬 합주 2",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "콘서트프로덕션",
      "professor": "정철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "콘서트프로덕션",
      "professor": "정철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악매니지먼트 1",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "홈 레코딩과 믹싱 2",
      "professor": "채준기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "홈 레코딩과 믹싱 2",
      "professor": "채준기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "필름 스코어링과 오케스트레이션 2",
      "professor": "윤수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "필름 스코어링과 오케스트레이션 2",
      "professor": "윤수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "라이브 세션을 위한 기악 합주 2",
      "professor": "임채광",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "남예지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "신기남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "성기준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "성기준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "윤영삼",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "정민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김영준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김영준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김영준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이창원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "신형찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "심영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "송준영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "윤혜린",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이창원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "이상원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "윤영삼",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김정범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "유수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "송캠프 2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "송캠프 2",
      "professor": "변준형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "최경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "유지연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 2",
      "professor": "김슬기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "움직임과 표현 2",
      "professor": "최혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "움직임과 표현 2",
      "professor": "장운규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "움직임과 표현 2",
      "professor": "김슬기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "움직임과 표현 2",
      "professor": "이민선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계무용사",
      "professor": "김지윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "필라테스자세교정 2",
      "professor": "전홍조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국무용즉흥실기",
      "professor": "양주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "성재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "김주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 4",
      "professor": "이효연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용워크샵트레이닝 2",
      "professor": "정경화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용워크샵트레이닝 2",
      "professor": "박순영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용워크샵트레이닝 2",
      "professor": "김미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "요가테라피 2",
      "professor": "임영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "요가테라피 2",
      "professor": "임영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "요가테라피 2",
      "professor": "김미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국창작무용",
      "professor": "정경화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발레레파토리",
      "professor": "신은석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "성재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "김주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 6",
      "professor": "이민선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용인체과학",
      "professor": "전홍조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "표현예술치료 2",
      "professor": "전홍조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술철학의 이해",
      "professor": "김미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "최경란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기 8",
      "professor": "김슬기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용지도법 2",
      "professor": "성재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용지도법 2",
      "professor": "김순정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용지도법 2",
      "professor": "김미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "전지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "박경남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강희경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강규호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "오희철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "김형중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "신승한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강선형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "석기용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "류경동",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "김준석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "전지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "이연순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "김시형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "김태영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "주민재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강선형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "석기용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "오윤정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "박미란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "이지선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "이성준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "강희경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "서광열",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "엄상희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "손성우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "허찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "김형중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비판적 사고와 토론",
      "professor": "석기용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김보람",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "신정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "장예준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "신민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "조별",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "탁원정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "장영미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김난경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김민선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이세경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "장혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "구봉곤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "신희경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이연승",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김현화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "선민서",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "송용구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "양정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이선형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "정슬아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이은우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "박근예",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "방금단",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "이윤경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "양정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "구선정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김예니",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김자영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "박상란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "창조적 사고와 글쓰기",
      "professor": "김나영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "스티븐 파이겐바움",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "앤드리아 톨레프슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "수잔 홀랜드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "마타 라카누이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "메스 닐슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "콜 헌트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅰ",
      "professor": "메스 닐슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "콜 헌트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "니노슬라브 란제로빅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "로난 맥알리스터",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 영어 스피치와 프레젠테이션 Ⅱ",
      "professor": "다릴 로스",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "전연희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "니노슬라브 란제로빅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "스티븐 파이겐바움",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "전연희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅰ",
      "professor": "로난 맥알리스터",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "다릴 로스",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "조나단 리스 팬톤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 실용적 영어 글쓰기 Ⅱ",
      "professor": "존 다니엘 맥카시",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 드라마 영어",
      "professor": "수잔 홀랜드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 드라마 영어",
      "professor": "수잔 홀랜드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 드라마 영어",
      "professor": "앤드리아 톨레프슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 드라마 영어",
      "professor": "스티븐 파이겐바움",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 세계 단편 소설",
      "professor": "존 다니엘 맥카시",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "British Culture and History",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "British Culture and History",
      "professor": "존 다니엘 맥카시",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 서구 문화의 이해",
      "professor": "다릴 로스",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 서구 문화의 이해",
      "professor": "니노슬라브 란제로빅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 서구 문화의 이해",
      "professor": "니노슬라브 란제로빅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 글로벌 뉴스와 이슈",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 사회 심리의 이해",
      "professor": "조나단 리스 팬톤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Global Communication through Food, Travel & Culture",
      "professor": "로난 맥알리스터",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Global Communication through Food, Travel & Culture",
      "professor": "마타 라카누이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Global Communication through Food, Travel & Culture",
      "professor": "마타 라카누이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "English through Harry Potter",
      "professor": "콜 헌트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "English through Harry Potter",
      "professor": "콜 헌트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "북미권 예술 문화와 여성",
      "professor": "앤드리아 톨레프슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시사 영어 청취",
      "professor": "김장욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어의 기초 어휘와 표현",
      "professor": "김장욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "리우 나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "강선화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "신준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "이정인",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "송향경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 중국어",
      "professor": "송향경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 일본어",
      "professor": "이지사",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 일본어",
      "professor": "유혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 일본어",
      "professor": "김유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 일본어",
      "professor": "정미령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 프랑스어",
      "professor": "음두은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 프랑스어",
      "professor": "안성은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 프랑스어",
      "professor": "황원미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 독일어",
      "professor": "함경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 독일어",
      "professor": "김길웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 스페인어",
      "professor": "조영실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 러시아어",
      "professor": "이새봄",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 개인정보보호와 보안윤리",
      "professor": "장현미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공통 스마트 IT 기술의 현재와 미래",
      "professor": "장현미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "컴퓨팅적 사고",
      "professor": "진동욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프로그래밍과 문제해결",
      "professor": "김의찬",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오픈소스 SW 활용",
      "professor": "이화주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "바람직한 인간관계를 위한 갈등 관리와 협상",
      "professor": "김오현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한글 맞춤법과 국어 능력",
      "professor": "정종수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "과학기술 사회의 생명윤리",
      "professor": "김율리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대인의 정신 건강",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대중 문화 예술 산책",
      "professor": "윤상호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자존감 수업",
      "professor": "조주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "철학으로의 초대",
      "professor": "배식한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "정치학 고전의 이해",
      "professor": "윤종성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "삶과 죽음의 이해",
      "professor": "임성훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인권의 이해",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화인류학으로 세상보기",
      "professor": "김길웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공동체 공유가치의 이해와 실천",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뉴스 바로 보기",
      "professor": "김미덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "우리 문화 속의 한자어",
      "professor": "김용재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주제로 읽는 명저 : 인문학",
      "professor": "김륜옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "설득의 과학",
      "professor": "소현진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 시민교육과 글로벌 리더십",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회 공헌 활동의 이해와 전망",
      "professor": "서경덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Developing Positive Mind",
      "professor": "조나단 리스 팬톤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "포스트휴머니즘의 이해",
      "professor": "석기용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미학의 이해",
      "professor": "임성훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화 스토리텔링의 이해",
      "professor": "박우성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 복식과 패션정보",
      "professor": "이정명",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 문학 명작 감상",
      "professor": "김혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스 문화와 예술",
      "professor": "이선우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술로 표현된 신체",
      "professor": "임성훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "힐링이 있는 클래식 음악",
      "professor": "강석순",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오페라의 이해",
      "professor": "오유석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발레: 융합문화예술의 실제",
      "professor": "김주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악은 왜 치료적인가",
      "professor": "강경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "클릭, 생활 속의 현대미술",
      "professor": "구진경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문학과 시대 읽기",
      "professor": "김길웅",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양 음악의 이해",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대 미술 산책",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "America in American Novels",
      "professor": "다릴 로스",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무용과 인간",
      "professor": "유인화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사진 예술의 이해",
      "professor": "박상우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "21세기 미국문학 다시 읽기",
      "professor": "전연희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대시 산책",
      "professor": "박민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문학치료와 시 쓰기",
      "professor": "박민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술적 얼굴과 감정조절",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전쟁사",
      "professor": "공평원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 문화유산으로 보는 한국의 역사와 문화",
      "professor": "강호선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영화로 보는 영미 문화",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아의 역사와 문화",
      "professor": "이완석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "과학기술사",
      "professor": "김준식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화와 일상으로 본 서양사",
      "professor": "오경환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동양 고전의 산책",
      "professor": "김희영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "테마로 보는 전통문화",
      "professor": "조순자",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양 고전 읽기",
      "professor": "김정숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 사상 오딧세이",
      "professor": "전수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국사 입문",
      "professor": "전세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "American Culture and History",
      "professor": "존 다니엘 맥카시",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "역사와 현실",
      "professor": "이규철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화도시와 역사도시의 이해",
      "professor": "서경덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 속의 법적 분쟁과 해결",
      "professor": "최우령",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대 사회와 소외",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국가안보론",
      "professor": "조현행",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국가안보론",
      "professor": "공평원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "북한학",
      "professor": "조현행",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자 트렌드와 소비 문화",
      "professor": "장성철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제 정세의 이해",
      "professor": "김성용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국의 사상과 문화",
      "professor": "신준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "법으로 풀어보는 글로벌 문화",
      "professor": "이양복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국가브랜드의 의미와 이해",
      "professor": "서경덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음식과 문화 이야기",
      "professor": "고성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "헌법: 갈등 해결의 코드",
      "professor": "김연식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대 조직행동 이론",
      "professor": "윤정우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사례로 보는 리더십",
      "professor": "김오현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "알기 쉬운 행정법 이야기",
      "professor": "손성기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본 문화의 이해",
      "professor": "다케우치 노리아키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주역으로 풀어보는 법과 삶",
      "professor": "문기탁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "젠더로 보는 사회",
      "professor": "정영선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대인의 여가 문화",
      "professor": "김우정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "주거 문화의 이해",
      "professor": "김진영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 현대사와 대통령",
      "professor": "윤종성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 여성 연구",
      "professor": "수잔 홀랜드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기본권, 세상과 통하는 법",
      "professor": "김연식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의료사고, 법으로 이해하기",
      "professor": "김나경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "젠더와 정치",
      "professor": "김미덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "젠더로 본 세계화",
      "professor": "김미덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대중문화 속의 여성과 페미니즘",
      "professor": "김미덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인체생리학",
      "professor": "천주영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 속의 과학",
      "professor": "김상태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생태학의 이해",
      "professor": "김상연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기후 변화와 문명",
      "professor": "박경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "우주로의 여행",
      "professor": "이길우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "과학의 철학적 이해",
      "professor": "배식한",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 수학",
      "professor": "정해남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유전자 과학과 미래",
      "professor": "유중기",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화 속 수학 읽기",
      "professor": "정해남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "무기 체계론",
      "professor": "조현행",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생애 주기별 건강과 복지",
      "professor": "고선강",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 디자인",
      "professor": "지문규",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 속의 의학정보",
      "professor": "유하정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "헬스와 운동 재활",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "4차 산업혁명과 경영혁신",
      "professor": "심선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품과 피부",
      "professor": "최서정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션 스튜디오",
      "professor": "염미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "4차 산업혁명과 빅데이터 입문",
      "professor": "강태욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스를 위한 인공지능",
      "professor": "심선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IoT와 전자공학개론",
      "professor": "김준철",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "파워포인트와 엑셀",
      "professor": "장현미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일어",
      "professor": "김진숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국어 Ⅰ",
      "professor": "리우 나",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "중국어 Ⅱ",
      "professor": "신준호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "리더십",
      "professor": "공평원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비즈니스와 생활예절",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "러시아어",
      "professor": "남서영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어 통번역 입문",
      "professor": "김장욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "World News Analysis and Discourse",
      "professor": "존 다니엘 맥카시",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스타일 메이크업",
      "professor": "김희진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 영어 강독",
      "professor": "김장욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기초 영문법",
      "professor": "최종갑",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Advanced Effective English Speech",
      "professor": "로난 맥알리스터",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Writing for the Modern World",
      "professor": "마타 라카누이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "Effective Academic English Writing",
      "professor": "콜 헌트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대학생을 위한 경제교육과 실용금융",
      "professor": "권민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "English through Film and Television",
      "professor": "앤드리아 톨레프슨",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어",
      "professor": "네고로 유키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스어",
      "professor": "이명은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스페인어",
      "professor": "전수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화예술 교육 현장의 이해와 실습",
      "professor": "강향숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화예술 교육 개론",
      "professor": "임성훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "환경 홍보의 의미와 미래",
      "professor": "서경덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영미 대중음악과 문화",
      "professor": "마이클 엘리어트",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계의 차 문화",
      "professor": "김효주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예비 부모 교육",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 한자",
      "professor": "김용재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "필라테스 움직임 과학",
      "professor": "전홍조",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "골프",
      "professor": "박경연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "볼링",
      "professor": "정영남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "호신술",
      "professor": "양윤권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "웰니스 요가",
      "professor": "육영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전통무용",
      "professor": "성재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 도예",
      "professor": "강인경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활 소품 디자인",
      "professor": "박소영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대학원논문연구2",
      "professor": "강진호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어통사론연구",
      "professor": "김일환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어사",
      "professor": "전기량",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "응용국어학의 이해",
      "professor": "김일환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국어어휘론",
      "professor": "김일환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국어교육실습",
      "professor": "장현묵",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비교문학과문화",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여성문학연구",
      "professor": "정혜연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영어의미론Ⅰ",
      "professor": "정소우",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "토마스만연구",
      "professor": "김륜옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다문화성과문학",
      "professor": "송민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스문학과 예술",
      "professor": "김혜중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스문학 비평연구",
      "professor": "이채영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "일본어학세미나2",
      "professor": "김옥임",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대일본문학",
      "professor": "홍윤표",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여항문학특강",
      "professor": "공민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국경학특강",
      "professor": "김용재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한문소품문학특강",
      "professor": "노경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국사자료연습",
      "professor": "홍석률",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비교사연구",
      "professor": "오경환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국회화사연습",
      "professor": "이보연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "20세기미술연습Ⅰ",
      "professor": "권영진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "행정법일반이론",
      "professor": "이재훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제인권법론",
      "professor": "권오성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "근로기준법판례연구",
      "professor": "방강수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제법판례연구",
      "professor": "황태희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국정치세미나",
      "professor": "김용직",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고등정치학연구",
      "professor": "한의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국제관계특수과제연구",
      "professor": "김영호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동심리평가",
      "professor": "한아름",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발달심리학",
      "professor": "진경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담이론과 실제",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신경인지과학",
      "professor": "김명선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리평가",
      "professor": "서수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "심리평가",
      "professor": "위지희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담과정과 기법",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "임상현장실습",
      "professor": "김은진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "사회심리학의주요문제",
      "professor": "김영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다변량분석",
      "professor": "맹세호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "투사검사법",
      "professor": "김진아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시뮬레이션 연구",
      "professor": "차옥균",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인지발달세미나",
      "professor": "진경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경제지리학연습",
      "professor": "박소현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도시및토지정보시스템",
      "professor": "정재준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "자연지리학연습",
      "professor": "박경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "도시지리학실습",
      "professor": "이자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "경영혁신론",
      "professor": "김종배",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "마케팅전략연구",
      "professor": "이성근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "응용통계",
      "professor": "강태훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구방법론",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비교교육행정론",
      "professor": "김지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교수설계이론과모형",
      "professor": "노석준",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정과교수이론",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문항반응이론",
      "professor": "강태훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아놀이세미나",
      "professor": "정효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아인지교육세미나",
      "professor": "최수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아의사회정서발달과교육세미나",
      "professor": "권정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육과정연구",
      "professor": "송나리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육질적연구법I",
      "professor": "김고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교사교육특강",
      "professor": "김소양",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "금융소비자보호론",
      "professor": "차경욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고객만족서비스교육론",
      "professor": "홍영윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여가문화연구",
      "professor": "강미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급통계 및 연구방법",
      "professor": "이신애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "의례문화산업특론",
      "professor": "최배영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "리더십개발과 라이프코칭",
      "professor": "홍성민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자정보와시장조사",
      "professor": "양수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자시장조사론",
      "professor": "허경옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소비자교육특론",
      "professor": "최애연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "물질오남용과사회복지실천",
      "professor": "박현용",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족상담 및 치료특론",
      "professor": "박주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 기업의 경영",
      "professor": "심상민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미디어 윤리와 법제 세미나",
      "professor": "상윤모",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소셜미디어",
      "professor": "표시영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조직학특론",
      "professor": "백두진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발생공학 1",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생물분지론",
      "professor": "김기중",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대학원논문연구1",
      "professor": "김상태",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "재료과학특론",
      "professor": "홍현선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신재생에너지특론",
      "professor": "임종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미생물발효학",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강기능성소재개발",
      "professor": "윤현근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "환경 및 분자 독성학",
      "professor": "나혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급논문연구4",
      "professor": "강창수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "통계데이터분석",
      "professor": "박만식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "응용통계학",
      "professor": "박성오",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "베이지안추론",
      "professor": "정호현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "최신통계적방법",
      "professor": "김영훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션 아트 앤 디자인",
      "professor": "염미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션 드레이핑과 TR 패턴 연구",
      "professor": "김미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "패션마케팅개인연구1",
      "professor": "이영주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수직물의복구성",
      "professor": "김경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국복식구성학특론",
      "professor": "장민정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "텍스타일디자인",
      "professor": "윤지원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분장과색채연구",
      "professor": "최지은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양복식재현연구2",
      "professor": "권순교",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조형실험특론",
      "professor": "김선영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품영양학연구1",
      "professor": "이명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기능성식품연구",
      "professor": "표영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "최신식품영양세미나",
      "professor": "현정은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실험디자인및논문작성",
      "professor": "강태욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급영양이론",
      "professor": "이승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "병태생리학",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "양적연구방법",
      "professor": "김동희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호통계학",
      "professor": "강태욱",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화와건강간호",
      "professor": "조정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "에니어그램과 격정관리",
      "professor": "정명실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "간호이론개발",
      "professor": "전나미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "근거기반 간호연구 세미나",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인복지간호및실습",
      "professor": "곽혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인건강증진",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "노인질환관리실습1",
      "professor": "임경춘",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소프트웨어 융합기술",
      "professor": "이택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급기계학습",
      "professor": "유재현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "AI 최적화 서비스",
      "professor": "윤상덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급 시스템보안",
      "professor": "장대희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시장과 사용자 경험",
      "professor": "이향은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상황인식 인공지능",
      "professor": "최경아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나1",
      "professor": "안소연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나1",
      "professor": "윤여범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나2",
      "professor": "송희경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나3",
      "professor": "고충환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나4",
      "professor": "홍지석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비교비평논술연구2",
      "professor": "이보연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실습1",
      "professor": "권기범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실습1",
      "professor": "노신경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실습2",
      "professor": "유근택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실습3",
      "professor": "이만수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실습4",
      "professor": "유근택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나3",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나4",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나1",
      "professor": "정정주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나2",
      "professor": "박수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나3",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나3",
      "professor": "홍수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "작품연구세미나4",
      "professor": "조은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나1",
      "professor": "조혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나2",
      "professor": "조혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나3",
      "professor": "김성호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나3",
      "professor": "조성지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나4",
      "professor": "김윤섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나4",
      "professor": "박수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구논문설정세미나4",
      "professor": "김성호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급디자인스튜디오3",
      "professor": "장기윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공세미나2",
      "professor": "홍주희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시각디자인론",
      "professor": "오주은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술과사회2",
      "professor": "강지선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아시아의현대미술",
      "professor": "조수진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "이정배",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이준희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "최익진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "유근택",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "회화연구4",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술표현2",
      "professor": "조병왕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조형연구2",
      "professor": "김지수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술실험2",
      "professor": "임상빈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "논문세미나2",
      "professor": "박천남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술이론1",
      "professor": "양은희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "노주환",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "김성복",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "이연숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "최용선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대조형론",
      "professor": "김성하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "논문세미나2",
      "professor": "이희영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김시만",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박태성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이재익",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "박태성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "한영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "신혜정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "공예사",
      "professor": "김시만",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "디자인사",
      "professor": "최호랑",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "PrintMedia사",
      "professor": "박영근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "MultipleArt4",
      "professor": "부지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "판화세미나",
      "professor": "한지민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악연주법세미나2",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "딕션 1",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "성악기법",
      "professor": "어은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "오페라연구",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김샤론",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박지현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이영은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김샤론",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "어은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "공영숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가곡해석법",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기1",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기1",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기2",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기3",
      "professor": "박경신",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기3",
      "professor": "오미선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "박사전공실기3",
      "professor": "정수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사및문헌2",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급건반화성학",
      "professor": "장은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주1",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주1",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주2",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주2",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주3",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주4",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연주4",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악경영",
      "professor": "유연경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악분석",
      "professor": "김경은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고전음악사및문헌",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창,청음2",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성학2",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "20세기피아노음악",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "윤유진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "김상애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "김성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이세영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "오윤주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "정재원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "일리야 라쉬코프스키",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "최고은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "김도연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "황소진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "김상애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "김상애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관현악실내악문헌",
      "professor": "김정현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "관악실내악1",
      "professor": "강희선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현악실내악1",
      "professor": "박노을",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "20세기관현악음악연주및연구",
      "professor": "강효정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "안미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "이준성",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "민유경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "송정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이인식",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대위법1",
      "professor": "정재은",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대무용 반주 연구",
      "professor": "박수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4",
      "professor": "박수연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론4",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론1",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공이론1",
      "professor": "이가영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분석방법론",
      "professor": "지형주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "앙상블문헌",
      "professor": "이승윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "앙상블세미나",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "기악소나타문헌",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "독일가곡문헌",
      "professor": "이영미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "프랑스가곡문헌",
      "professor": "전혜영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "IPA와 가창딕션",
      "professor": "박은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "레파토와클래스",
      "professor": "고승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "시창,청음2",
      "professor": "정혜경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화성법및실습",
      "professor": "홍청의",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대위법",
      "professor": "전민재",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "서양음악사및문헌",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "배은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "현영경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "현영경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "배은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기1",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "허정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "최승리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "고은지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "박은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "고승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "이승윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "최승리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "고은지",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기2",
      "professor": "허정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "최승리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "최은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "배은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "고승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "최은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "이진혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기3",
      "professor": "현영경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "이진혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "최승리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "박은정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "고승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "최은주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "이진혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "허정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "이영미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "허정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "허정화",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "홍지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "홍지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "배민수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "고승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공실기4및졸업연주",
      "professor": "홍지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동생리학특론Ⅱ",
      "professor": "양윤권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "논문세미나",
      "professor": "박성언",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생체역학",
      "professor": "구본호",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신체활동과노화",
      "professor": "이주원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "스포츠 임상병리학",
      "professor": "백승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미용영양학특론",
      "professor": "배현숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품제형학특론",
      "professor": "조완구",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품 광고와 마케팅",
      "professor": "구자원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티산업연구세미나 Ⅰ",
      "professor": "김주덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아트메이크업 세미나",
      "professor": "김경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "분장학 세미나",
      "professor": "황선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피부생리학특론",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품학개론",
      "professor": "김주덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품 품질경영",
      "professor": "강진미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "즉흥음악치료1",
      "professor": "백혜선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "즉흥음악치료1",
      "professor": "황성하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "발달심리학",
      "professor": "진경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담이론과 실제",
      "professor": "이정윤",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악치료기술",
      "professor": "양은아",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악과인간행동",
      "professor": "강경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실습1",
      "professor": "황성하",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실습1",
      "professor": "이은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실습1",
      "professor": "송명훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "실습2",
      "professor": "최미라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악치료인턴쉽",
      "professor": "강경선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신경학적음악치료",
      "professor": "배미현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악심리학",
      "professor": "박정미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "장애아동의 이해",
      "professor": "순진이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대학원 논문 세미나",
      "professor": "송향경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국 사회와 문화",
      "professor": "송향경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "동아시아국제관계론",
      "professor": "한의석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "인권의 이해",
      "professor": "올리버 테리",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 여성 연구",
      "professor": "수잔 홀랜드",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교현장실습",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육철학및교육사",
      "professor": "신현덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육심리",
      "professor": "이나현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육사회",
      "professor": "정기범",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육과정",
      "professor": "김종훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육방법및교육공학",
      "professor": "김대권",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육행정및교육경영",
      "professor": "김숙이",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수교육학개론",
      "professor": "주재연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교직실무",
      "professor": "나혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "학교폭력예방및학생의이해",
      "professor": "이나현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "교육자료의통계적분석",
      "professor": "강태훈",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국현대시사연구",
      "professor": "박민영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(국어)교과교재연구및지도법",
      "professor": "김혜련",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(영어)교과교재연구및지도법",
      "professor": "고정민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화와수학",
      "professor": "정해남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(수학)교과교재연구 및 지도법",
      "professor": "정해남",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아예술교육세미나",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미래사회와교육산업",
      "professor": "권경숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육연구법",
      "professor": "심미영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동복지정책세미나",
      "professor": "이승숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(유치원)교과교재연구 및 지도법",
      "professor": "권경숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "가족지원 및 부모교육세미나",
      "professor": "황인애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육질적연구방법",
      "professor": "배지희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아교육과정연구",
      "professor": "권경숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아과학교육세미나",
      "professor": "황인주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "유아안전교육",
      "professor": "민선옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국미술사",
      "professor": "박세연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "현대미술론",
      "professor": "박세연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "조소",
      "professor": "김리현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "미술교과논리 및 논술",
      "professor": "이혜진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악교육연구",
      "professor": "김명숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악교육세미나 I",
      "professor": "현경실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "음악교육세미나 II",
      "professor": "현경실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국악실기지도법",
      "professor": "문현",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "국악사",
      "professor": "현경실",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "(음악)교과교재연구 및 지도법",
      "professor": "임인경",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "진로상담",
      "professor": "조효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생활지도 연구",
      "professor": "조효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "특수아 상담",
      "professor": "이혜원",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "상담실습및사례연구",
      "professor": "조효진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식생활관리특론",
      "professor": "고성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식사요법특론",
      "professor": "이경연",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "식품가공저장학 특론",
      "professor": "윤현근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티포토샵디자인",
      "professor": "신현국",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "뷰티트렌드메이크업",
      "professor": "정진영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "논문연구방법론Ⅰ",
      "professor": "황선희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품학",
      "professor": "김주덕",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피부생리학",
      "professor": "박초희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "향장미용기초화학",
      "professor": "지홍근",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "모발생리학",
      "professor": "김수미",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품마케팅",
      "professor": "한태수",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "화장품과 고객만족",
      "professor": "정승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "피부미용세미나",
      "professor": "배현숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "비만관리학",
      "professor": "배현숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "생애주기와 피부미용학",
      "professor": "배현숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "블로우 드라이 및 아이롱 연구",
      "professor": "조여진",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "헤어 컬러트렌드 세미나",
      "professor": "김리라",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "문화산업론",
      "professor": "김정섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "소셜미디어와 e비지니스",
      "professor": "김정섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "연구프로젝트2",
      "professor": "김정섭",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "여행상품개발론",
      "professor": "김해옥",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국복식문화",
      "professor": "오석란",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국예의문화",
      "professor": "김선주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국공예문화",
      "professor": "김효주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국차문화",
      "professor": "김진숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국문화지도론",
      "professor": "최성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국문화지도현장실습",
      "professor": "최성희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "한국문화콘텐츠 연구방법론",
      "professor": "최배영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "예술 심리학",
      "professor": "이경희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공 연구 2",
      "professor": "성재형",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공 연구 2",
      "professor": "김순정",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "전공 연구 2",
      "professor": "김미숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "세계 공연 예술과 사회",
      "professor": "최원선",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "요가 테라피 Ⅱ",
      "professor": "임영희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "신체 움직임과 윤리 I",
      "professor": "김은혜",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동복지론",
      "professor": "권경숙",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "놀이지도",
      "professor": "황인애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "아동미술",
      "professor": "고준희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "보육현장에서의질적연구방법",
      "professor": "전홍주",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "다문화교육세미나",
      "professor": "황인애",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "영유아정서및감정코칭세미나",
      "professor": "이지영",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동생리학 II",
      "professor": "남상석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "건강운동지도법 I",
      "professor": "백승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "대인관계 및 의사소통",
      "professor": "박상혁",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "운동과학 연구심화",
      "professor": "남상석",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "임상운동검사 및 처방",
      "professor": "백승희",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "고급영양이론",
      "professor": "이승민",
      "schoolName": "성신여자대학교"
  },
  {
      "name": "병태생리학",
      "professor": "전용필",
      "schoolName": "성신여자대학교"
  },
]

export default subjectData;