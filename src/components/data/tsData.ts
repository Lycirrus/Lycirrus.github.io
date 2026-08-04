export type TSItem = {
  title: string
  image: string
  problem: string[]
  solution: string[]
  result: string[]
}

export type TSItemList = TSItem[]

// ─── A: 시시각각 ──────────────────────────────────────────
export const tsA: TSItemList = [
  {
    title: "Python에서 timezone 미설정으로 데이터 생성 시각과 표출 시각 사이 9시간 오프셋 발생",
    image: "",
    problem: [
      "AI 서버에서 스케줄링을 통해 정시마다 인원 통계와 타임스탬프를 BE로 전송하는 구조로 설계",
      "BE는 Asia/Seoul(KST) 기준으로 데이터를 저장하고 조회하도록 설계되어 있었음",
      "레포트 화면 작업 중 화면 표출 시각이 실제 시각보다 9시간 전으로 표시되는 문제를 발견했고, AI 서버가 datetime.now()로 timezone을 명시하지 않은 채 UTC 환경의 서버 OS 기준으로 시각을 생성해 BE와 9시간 차이가 발생하고 있었음"
    ],
    solution: [
      "AI 서버(Python)에서 timezone(timedelta(hours=9))으로 KST를 명시",
    ],
    result: [
      "KST 기준으로 정확한 시각 저장 및 조회",
      "분산 시스템에서 서버 간 timezone 불일치는 조용히 쌓이다가 데이터 조회 시점에야 드러난다는 것을 확인"
    ]
  },
  {
    title: "AI→BE→FE 3개 레이어에 걸친 데이터 결측 원인 추적, 근본 해결 대신 FE 방어 코드로 우선순위 판단",
    image: "",
    problem: [
      "없는 시간대 데이터에 접근할 때 undefined.avgCount TypeError 크래시가 발생하는 것을 발견하고 전 레이어를 역추적",
      "AI 서버: RTSP 스트림 다운, 서버 재시작, 프레임 캡처 간격 과대 설정 등으로 집계 데이터가 비면 해당 시간대 POST 자체가 발생하지 않음을 확인",
      "BE: GROUP BY 쿼리 특성상 레코드 없는 시간대는 결과 행 자체가 없고, values Map에 결측을 채우는 로직도 없어 그대로 전달됨을 확인",
      "FE: 08~07 고정 24슬롯을 순회하는 전제였기 때문에 없는 key 접근 시 크래시로 이어짐을 확인"
    ],
    solution: [
      "FE 차트 로직에서 없는 시간대 값을 nullish coalescing으로 기본값({ avgCount: 0, maxCount: 0 })으로 대체",
      "근본 원인(AI 레이어의 결측 처리 부재)까지 추적은 했으나, 서비스 핵심 기능이 아니었고 FE 수정만으로 화면 표출이 정상화된 상태여서 AI/BE 레이어는 손대지 않기로 판단",
      "첫 풀스택 프로젝트로 시간 배분이 중요했던 시점이라는 점을 고려한 우선순위 결정"
    ],
    result: [
      "크래시 증상 해소",
      "결측이 발생하는 근본 원인은 남아있는 임시방편이라는 한계를 그대로 인지"
    ]
  }
];

// ─── B: 초코레터 ──────────────────────────────────────────
export const tsB: TSItemList = [
  {
    title: "화상통화 입장 시점에 따른 오디오 미출력, 3가지 가설 검증 끝에 재현 조건 자체를 제거해 해결",
    image: "",
    problem: [
      "늦게 입장한 참가자 쪽에서 상대방 오디오가 들리지 않는 증상 발견",
      "인원 확인(countConnection)은 시그널링 레벨 Connection 수 조회일 뿐 실제 ICE/미디어 연결 여부와 무관함을 확인",
      "connectionCreated 이벤트가 발생해도 상대방 미디어 스트림이 준비됐다는 보장은 없음을 확인"
    ],
    solution: [
      "가설 A: 수동 워크어라운드(헤드셋 버튼)로 임시 대응했으나 근본 해결이 아니라 폐기",
      "가설 B: iOS 제스처 제약을 의심해 Ready 버튼 클릭 이후로 연결을 미뤘으나 증상 재현, 상호작용이 적은 초기 프로토타입에서는 오히려 정상 동작해 반증으로 기각",
      "가설 C: 인원 확인 시점을 connectionCreated에서 streamCreated로 옮겨봤으나 여전히 타이밍 불안정",
      "세 가설 모두 근본 원인을 확정하지 못해, 지연 발행(delayed publish) 구조를 걷어내고 입장 즉시 publishAudio: true로 오디오를 켜도록 수정"
    ],
    result: [
      "재현 조건이 사라져 오디오 미출력 증상 해소",
      "5초 대기 후 상대 목소리가 등장하는 원래 연출은 포기 — 안정성과 연출 사이에서 안정성을 택한 트레이드오프",
      "근본 원인은 끝내 특정하지 못함 — 이 한계를 숨기지 않고 그대로 기록"
    ]
  }
];

// ─── C: 머니위즈 ──────────────────────────────────────────
export const tsC: TSItemList = [
  {
    title: "낙관적 업데이트 미반영, 원인은 하나가 아니라 둘 — local state 참조 방식과 캐시 응답 스키마",
    image: "",
    problem: [
      "직업 등록 mutation에서 query key를 올바르게 사용했음에도 등록 즉시 화면에 반영되지 않음을 발견",
      "JobSettingView.tsx에서 React Query 데이터를 useState로 한 번 복사해서 쓰고 있어, 캐시가 갱신돼도 컴포넌트가 변화를 읽지 못함을 diff로 확인",
      "JobRegister.tsx의 setQueryData 콜백이 반환하는 구조가 GET /job 응답 스키마(jobs 배열)와 일치하지 않음을 확인"
    ],
    solution: [
      "JobSettingView.tsx에서 local state 복사를 제거하고 useClassJobs() 결과를 직접 참조하도록 변경",
      "JobRegister.tsx의 onMutate에서 setQueryData 콜백이 반환하는 구조를 GET 응답과 동일하게 맞춤",
      "실패 시 이전 데이터로 롤백하고 onSettled에서 invalidateQueries로 서버와 최종 동기화"
    ],
    result: [
      "등록 즉시 UI에 반영되도록 정상화",
      "실패 시 롤백 동작까지 확인 완료"
    ]
  },
  {
    title: "챗봇 응답 체감 대기시간 7초 → 스트리밍 전환, axios/WebSocket/SSE 순차 검토 후 fetch ReadableStream 채택",
    image: "",
    problem: [
      "백엔드 AI 응답 생성에 평균 7초 이상 소요되어, 응답이 완전히 끝나야 화면에 표시되는 구조상 사용자가 빈 화면을 오래 기다림",
      "axios는 response.body를 내부에서 전부 읽어 버퍼링한 뒤 .data로 반환하는 구조라 ReadableStream 접근 자체가 불가능함을 확인",
      "WebSocket은 일정 제약과 팀 내 사용 경험 부재로, SSE는 POST 파라미터·인증 토큰 전달 제약으로 요구사항과 맞지 않음을 확인"
    ],
    solution: [
      "fetch API의 response.body(ReadableStream)를 getReader()로 청크 단위로 읽어오는 방식 채택",
      "청크마다 새 메시지를 추가하면 말풍선이 중복 생성된다는 것을 구현 과정에서 인지하고, 빈 말풍선을 먼저 추가한 뒤 in-place로 갱신하는 방식으로 설계",
      "멀티바이트 문자가 청크 경계에서 잘리는 것을 방지하기 위해 스트림 종료 후 디코더 버퍼를 한 번 더 플러시"
    ],
    result: [
      "응답이 도착하는 순간부터 텍스트가 표시되는 타이핑 효과로 체감 대기시간 단축",
      "백엔드(RAG 검색·응답 생성)는 담당 외 영역이므로, 답변은 스트리밍 수신·표시 구조에 한정"
    ]
  }
];