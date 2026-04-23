import type { TSItem } from "../project/common/ProjectTS"

// ─── A: 시시각각 ──────────────────────────────────────────
export const tsA: TSItem[] = [
  {
    type: "decision",
    title: "YOLO11s 선택 — 최소 부하, 최대 정확도",
    description: "24시간 운영 서비스 특성상 리소스 최소화 필요. 공식 성능 비교표에서 동급 경량 모델 중 YOLO11s가 YOLO8s 대비 정확도 우위를 확인 후 채택.",
  },
  {
    type: "decision",
    title: "07시~07시 타임라인 재설계",
    description: "00시 기준 시 점주가 아침에 전날 새벽 이상행동을 즉시 확인 불가. 실사용 시나리오 기반으로 범위 재정의 → 백 쿼리(LocalDateTime) · 프론트 그래프 축 함께 수정.",
  },
  {
    type: "retrospect",
    title: "GPT 일일 보고서 미완성",
    description: "DB 데이터를 JSON으로 구성해 GPT에 전달했으나, 이상행동 데이터가 있음에도 '이상행동 없음' 출력. 프롬프트 설계와 데이터 구조 정합성 부족으로 판단. UI 공간만 남기고 기능 미적용.",
  },
  {
    type: "retrospect",
    title: "히트맵 → 인원수 카운트로 축소",
    description: "테스트 환경(2평, CCTV 4대)에서 구역별 히트맵의 실용성 퇴색. 구현 난도와 현실 제약을 복합 고려해 인원수 통계로 전환. 서비스 핵심 가치는 유지하며 범위를 현실에 맞게 조정.",
  },
]

// ─── B: 초코레터 ──────────────────────────────────────────
export const tsB: TSItem[] = [
  {
    type: "trouble",
    title: "iOS 기기에서 한쪽 음성 미출력",
    problem: "준비 버튼을 먼저 누른 사용자가 publisher, 나중에 누른 사용자가 subscriber로 등록되는 구조에서, subscriber의 audio track이 ICE 협상 완료 이전에 세션에 등록되지 않은 것으로 판단.",
    solution: "publish 시점부터 audio: true로 통일, 5초 대기방에서도 오디오를 활성화 상태로 유지. audio on/off 전환 로직을 제거해 연결 시점 불일치 우회.",
  },
  {
    type: "retrospect",
    title: "4주차 배포 후 사용자 피드백 반영",
    description: "출시 후 '서비스를 한 번에 파악하기 어렵다'는 피드백 수령 → 계정 당 최초 진입 시 튜토리얼 오버레이 추가. 5주차에 화상 채팅·문자 채팅 기능 업데이트까지 애자일하게 배포 진행.",
  },
]

// ─── C: 머니위즈 ──────────────────────────────────────────
export const tsC: TSItem[] = [
  {
    type: "trouble",
    title: "낙관적 업데이트 미동작",
    problem: "직업 등록 mutation에서 query key를 올바르게 사용했음에도 등록 즉시 UI에 반영되지 않는 문제 발생.",
    solution: "onMutate에서 queryClient.setQueryData를 호출할 때, 직업 목록을 불러오는 API의 응답 JSON 형식과 동일하게 데이터를 구성해 set하여 해결.",
  },
  {
    type: "decision",
    title: "768px 기준 역할 분기",
    description: "학생은 모바일, 선생님은 교내 PC로 접속한다는 기획 전제 하에 별도 역할 선택 UI 없이 화면 너비로 자연스럽게 분기. 로그인·회원가입 모두 동일 기준 적용.",
  },
  {
    type: "decision",
    title: "챗봇 스트리밍 응답 처리",
    description: "Python FastAPI와 연결 시 fetch + ReadableStream으로 응답을 청크 단위로 수신해 타이핑 효과 구현. 글씨 크기·다크모드 설정을 로컬 상태로 관리해 UX 개선.",
  },
]