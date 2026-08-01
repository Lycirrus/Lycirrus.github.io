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
    title: "YOLO11s 선택 — 최소 부하, 최대 정확도",
    image: "",
    problem: ["24시간 운영 서비스 특성상 리소스 최소화 필요", "a", "YOLO8s 대비 YOLO11s가 경량화 모델임에도 정확도 우위 확인 필요"],
    solution: ["공식 성능 비교표에서 동급 경량 모델 중 YOLO11s가 YOLO8s 대비 정확도 우위를 확인 후 채택", "YOLO11s 모델을 기반으로 학습 데이터셋 구성 및 학습 진행", "YOLO11s 모델을 기반으로 한 이상행동 감지 모델을 서비스에 적용", "YOLO11s 모델을 기반으로 한 이상행동 감지 모델을 서비스에 적용"],
    result: ["리소스 소모 감소", "정확도 향상", "실시간 이상행동 감지 및 정보 제공 무인 매장 AI 보안 솔루션 구현", "24시간 운영 서비스 특성상 리소스 최소화 필요"]
  },
  {
    title: "YOLO11s 학습 데이터셋 구성 — 이상행동 감지 모델 학습",
    image: "",
    problem: ["YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요", "YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요"],
    solution: ["YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요", "YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요"],
    result: ["YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요", "YOLO11s 모델 학습을 위한 이상행동 감지 데이터셋 구성 필요"]
  }
]

// ─── B: 초코레터 ──────────────────────────────────────────
export const tsB: TSItemList = [
  {
    title: "iOS 기기에서 한쪽 음성 미출력",
    image: "",
    problem: ["준비 버튼을 먼저 누른 사용자가 publisher, 나중에 누른 사용자가 subscriber로 등록되는 구조에서, subscriber의 audio track이 ICE 협상 완료 이전에 세션에 등록되지 않은 것으로 판단."],
    solution: ["publish 시점부터 audio: true로 통일, 5초 대기방에서도 오디오를 활성화 상태로 유지. audio on/off 전환 로직을 제거해 연결 시점 불일치 우회."],
    result: ["iOS 기기에서도 양쪽 음성 출력"]
  },
  {
    title: "iOS 기기에서 영상 미출력",
    image: "",
    problem: ["iOS 기기에서 영상이 출력되지 않는 문제 발생."],
    solution: ["iOS 기기에서 영상이 출력되지 않는 문제 발생."],
    result: ["iOS 기기에서도 영상 출력"]
  }
] 

// ─── C: 머니위즈 ──────────────────────────────────────────
export const tsC: TSItemList = [
  {
    title: "낙관적 업데이트 미동작",
    image: "",
    problem: ["직업 등록 mutation에서 query key를 올바르게 사용했음에도 등록 즉시 UI에 반영되지 않는 문제 발생."],
    solution: ["onMutate에서 queryClient.setQueryData를 호출할 때, 직업 목록을 불러오는 API의 응답 JSON 형식과 동일하게 데이터를 구성해 set하여 해결."],
    result: ["낙관적 업데이트 기능 정상 작동"]
  },
  {
    title: "직업 등록 후 직업 목록 미갱신",
    image: "",
    problem: ["직업 등록 mutation에서 query key를 올바르게 사용했음에도 등록 즉시 직업 목록이 갱신되지 않는 문제 발생."],
    solution: ["onSuccess에서 queryClient.invalidateQueries를 호출해 직업 목록을 불러오는 API를 재요청하도록 처리하여 해결."],
    result: ["직업 등록 후 직업 목록 정상 갱신"]
  }
]