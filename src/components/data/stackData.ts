export interface MainStack {
  name: string;
  annotation: string;
  star: number;
  descriptions: string[];
}

export interface SubStack {
  name: string;
  description: string;
}

export const mainStacks: MainStack[] = [
  {
    name: "React",
    annotation: "with JavaScript / HTML / CSS",
    star: 3,
    descriptions: [
      "React를 사용하여 웹 애플리케이션을 개발한 경험이 있습니다.",
      "Recoil과 Zustand로 상태 관리를 할 수 있습니다.",
      "RESTful API를 기반으로 데이터를 요청할 수 있습니다.",
      "디렉토리 구조를 세분화하고, 공통 컴포넌트를 설계할 수 있습니다."
    ]
  },
  {
    name: "TypeScript",
    annotation: "with JavaScript",
    star: 2,
    descriptions: [
      "컴포넌트의 Props와 인터페이스를 명시적으로 정의할 수 있습니다.",
      "타입 정의 파일을 활용하여 외부 라이브러리와의 호환성을 높일 수 있습니다."
    ]
  },
  {
    name: "Tanstack Query",
    annotation: "",
    star: 2,
    descriptions: [
      "API 호출 시 캐싱을 이용해 불필요한 네트워크 요청을 줄였습니다.",
      "낙관적 업데이트로 사용자 경험을 향상시킬 수 있습니다."
    ]
  },
];

export const subStacks: SubStack[] = [
  { name: "Tailwind CSS", description: "일관된 디자인 시스템을 빠르게 구현할 수 있습니다." },
  { name: "SCSS", description: "컴포넌트 단위로 스타일을 분리하고 변수를 활용할 수 있습니다." },
  { name: "Zustand", description: "간결한 전역 상태를 설계하고 적용할 수 있습니다." },
  { name: "Axios", description: "HTTP 메서드를 활용하여 API 통신을 효율적으로 처리할 수 있습니다." },
  { name: "PWA", description: "서비스 워커와 웹 앱 매니페스트를 활용하여 오프라인에서도 작동하는 웹 애플리케이션을 개발할 수 있습니다." },
  { name: "Git", description: "git을 통해 프로젝트를 관리하며, rebase 전략으로 충돌을 최소화 할 수 있습니다." },
  { name: "Figma", description: "디자인 도구를 활용하여 UI/UX 디자인을 시각화하고 협업할 수 있습니다." },
  { name: "Vite / npm", description: "빠른 빌드와 개발 환경을 제공하는 도구를 활용하여 프로젝트를 관리할 수 있습니다." },
  { name: "Jira", description: "작업을 체계적으로 관리하고 팀과의 협업을 원활하게 할 수 있습니다." },
];