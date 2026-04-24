// ProjectA (시시각각) — 이미지 1개
import dashboardImg from "../../assets/ssgg/dashboard.svg"

export const rolesA = [
  {
    role: "시간별 인원 수 판단",
    description: "YOLO11s 모델을 이용하여 5초간격으로 실시간 영상에서 시간별 인원수를 구하고, FastAPI로 시간마다 DB에 저장하는 파이프라인 구현.",
    images: [
      { src: dashboardImg, label: "// 데일리 레포트 대시보드" }
    ]
  },
  {
    role: "데이터 제공 API 제작",
    description: "레포트 페이지에서 필요한 데이터를 차트별로 파악하여, 프론트에서 작업하기 용이하도록 서로 다른 API로 구현.",
  },
  {
    role: "차트 기반 데일리 레포트 화면 구현",
    description: "MUI 라이브러리를 이용하여 사용자에게 정보를 쉽게 제공하기 위해 꺾은선·막대·파이 등 다양한 차트 사용.",
  },
]

// ProjectB (초코레터) — 역할별 이미지 다수
import letterList1 from "../../assets/choco/letter_list_1.svg"
import letterList2 from "../../assets/choco/letter_list_2.svg"
import letterList3 from "../../assets/choco/letter_list_3.svg"
import videoChat1 from "../../assets/choco/video_chat_1.svg"
import videoChat2 from "../../assets/choco/video_chat_2.svg"
import videoChat3 from "../../assets/choco/video_chat_3.svg"

export const rolesB = [
  {
    role: "편지 리스트 화면 개발",
    description: "다른 사람들로부터 받은 편지(초콜릿)를 3열 리스트로 구현. 날짜·편지 타입·개봉 여부에 따라 각 편지 버튼의 오버레이와 클릭 시 출력 모달 및 기능 등 작동방식을 다르게 구현.",
    images: [
      { src: letterList1, label: "// 편지함 화면" },
      { src: letterList2, label: "// 편지함 화면" },
      { src: letterList3, label: "// 편지함 화면" },
    ]
  },
  {
    role: "화상 채팅 입장 및 진행 화면 개발",
    description: "WebRTC 기반 라이브러리 OpenVidu를 사용하여, 발렌타인 당일 정해진 시간에 화상 채팅이 이루어지도록 구현.",
    images: [
      { src: videoChat1, label: "// 화상채팅 화면" },
      { src: videoChat2, label: "// 화상채팅 화면" },
      { src: videoChat3, label: "// 화상채팅 화면" },
    ]
  },
]

// ProjectC (머니위즈) — 혼합
import mainImg from "../../assets/mw/main.svg"
import chatbotImg from "../../assets/mw/chatbot.svg"
import chatbotDarkImg from "../../assets/mw/chatbot_dark.svg"

export const rolesC = [
  {
    role: "반응형에 따른 로그인 처리",
    description: "768px 기준으로 미만일 경우 학생, 이상일 경우 선생님으로만 가입할 수 있도록 사용자 역할을 분리.",
    images: [
      { src: mainImg, label: "// 메인페이지" }
    ]
  },
  {
    role: "학생 화면 상단 바와 하단 네비게이션 바 제작",
    description: "상단바 우측에 알림창·전체 기능 버튼 구현. 좌측은 메인페이지에서 로고, 이외 화면에서는 기능 명칭이 나타나도록 설정.",
  },
  {
    role: "챗봇 페이지 구현",
    description: "Python FastAPI와 연결하여 fetch로 stream 형식의 답변 수신. 우측 상단 설정 버튼으로 글씨 크기와 다크모드 설정 기능 추가.",
    images: [
      { src: chatbotImg, label: "// 챗봇" },
      { src: chatbotDarkImg, label: "// 챗봇(다크모드)" },
    ]
  },
]