# MBTI 계산기 & 순서 바꾸기

## MBTI 계산기

```
/**
 * MBTI를 계산해 콘솔에 출력하는 프로그램을 작성해주세요.
 *
 * 아래 questions 배열은 MBTI를 계산하기 위한 문항들입니다.
 * 모든 문항에 대한 선택지는 다섯개로 동일하며 다음과 같습니다.
 *   매우 아니다, 아니다, 보통이다, 그렇다, 매우 그렇다
 *
 * 선택지에 따라 다음과 같이 점수를 부여합니다.
 *   매우 아니다는 disagree 타입에 2점
 *   아니다는 disagree 타입에 1점
 *   보통이다는 양쪽에 0점
 *   그렇다는 agree 타입에 1점
 *   매우 그렇다는 agree 타입에 2점
 *
 * 예를 들어 첫 번째 문항인 `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`에
 * 매우 아니다라고 답하면 E 타입에 2점
 * 아니다라고 답하면 E 타입에 1점
 * 보통이다라고 답하면 양쪽에 0점
 * 그렇다라고 답하면 I 타입에 1점
 * 매우 그렇다라고 답하면 I 타입에 2점을 부여합니다.
 *
 * 자리가 같은 두 알파벳의 점수가 같은 경우 다음과 같이 처리합니다.
 *   E == I: E
 *   S == N: N
 *   F == T: F
 *   P == J: P
 * 따라서 모든 항목에 보통이다라고 답하면 결과는 ENFP가 됩니다.
 */

const questions = [
  { disagree: 'E', agree: 'I', text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.` },
  { disagree: 'S', agree: 'N', text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.` },
  { disagree: 'T', agree: 'F', text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.` },
  { disagree: 'J', agree: 'P', text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.` },
  { disagree: 'E', agree: 'I', text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.` },
  { disagree: 'S', agree: 'N', text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.` },
  { disagree: 'T', agree: 'F', text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.` },
  { disagree: 'J', agree: 'P', text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.` },
]

// 아래에 코드를 작성해주세요. 사용자의 응답은 상수로 작성하셔도 무방합니다.

const MBTI_QUESTION_LIST = [
  {
    id: "Q1",
    disagree: "E",
    agree: "I",
    text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.`,
  },
  {
    id: "Q2",
    disagree: "S",
    agree: "N",
    text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.`,
  },
  {
    id: "Q3",
    disagree: "T",
    agree: "F",
    text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.`,
  },
  {
    id: "Q4",
    disagree: "J",
    agree: "P",
    text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.`,
  },
  {
    id: "Q5",
    disagree: "E",
    agree: "I",
    text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.`,
  },
  {
    id: "Q6",
    disagree: "S",
    agree: "N",
    text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.`,
  },
  {
    id: "Q7",
    disagree: "T",
    agree: "F",
    text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.`,
  },
  {
    id: "Q8",
    disagree: "J",
    agree: "P",
    text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.`,
  },
];

type TAnswer =
  | "매우 아니다"
  | "아니다"
  | "보통이다"
  | "그렇다"
  | "매우 그렇다";


const calculateMBTI = (answerList:TAnswer[]) => {
    let scores: { [key: string]: number } = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    MBTI_QUESTION_LIST.forEach((question, index) => {
      const answer = answerList[index];

      switch (answer) {
        case "매우 아니다":
          scores[question.disagree] += 2;
          break;
        case "아니다":
          scores[question.disagree] += 1;
          break;
        case "보통이다":
          break;
        case "그렇다":
          scores[question.agree] += 1;
          break;
        case "매우 그렇다":
          scores[question.agree] += 2;
          break;
        default:
          break;
      }
    });

    const mbti = [
      scores["E"] >= scores["I"] ? "E" : "I",
      scores["S"] >= scores["N"] ? "N" : "S",
      scores["F"] >= scores["T"] ? "F" : "T",
      scores["P"] >= scores["J"] ? "P" : "J",
    ];

    return mbti.join("");
  }
```

---------------------------------------------

## 순서바꾸기
```
/**
 * selected 배열에 포함된 data 배열의 원소들을 왼쪽으로 한 칸씩 옴기는 프로그램을 작성해주세요.
 *
 * 예) data = [1, 2, 3], selected = [1],       data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2],       data' = [2, 1, 3]
 * 예) data = [1, 2, 3], selected = [3],       data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [1, 2],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [2, 1],    data' = [1, 2, 3]
 * 예) data = [1, 2, 3], selected = [1, 3],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [3, 1],    data' = [1, 3, 2]
 * 예) data = [1, 2, 3], selected = [2, 3],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [3, 2],    data' = [2, 3, 1]
 * 예) data = [1, 2, 3], selected = [1, 2, 3], data' = [1, 2, 3]
 */

const data = [1, 2, 3]
const selected = [1]

// 아래에 코드를 작성해주세요.
const shiftToLeft = (data, selected) => {
  let newList = [...data];
  let firstItem;

  selected.forEach((selectedItem) => {
    const index = newList.findIndex((item) => item === selectedItem);

    if (index > 0) {
      [newList[index], newList[index - 1]] = [
        newList[index - 1],
        newList[index],
      ];
    } else if (index === 0 && !firstItem) {
      firstItem = newList[0];
    }
  });

  if (firstItem) {
    newList = newList.filter((item) => item !== firstItem);
    newList.unshift(firstItem);
  }

  return newList;
};
```

## 기능 구현
MBTI 계산기와 순서 바꾸기 기능을 구현해보았습니다.
- 실행 후 첫화면에서 MBTI계산기 또는 순서 바꾸기 기능을 선택할 수 있습니다.
- MBTI 계산기는 MBTITest.tsx 파일에서 calculateMBTI 코드 확인 가능합니다.
  - react hook form 을 사용하여 input 값을 관리합니다.
- 순서 바꾸기 기능은 OrderTest.tsx 파일에서 shiftToLeft 코드 확인 가능합니다.(파일에서의 함수명은 rasingOrder 입니다.)
  - data 에 id 값을 주고 id 값에 따라 동작하게 변경하였습니다.
  - loweringOrder 함수를 추가하여 배열의 요소를 오른쪽으로 이동할 수 있는 기능을 추가하였습니다.

### 프로젝트 실행
```
yarn dev
```

### 기술 스택
- Next.js
- typescript
- module scss
- react hook form


### Demo Image
<img width="480" alt="스크린샷 2024-10-29 오후 9 50 46" src="https://github.com/user-attachments/assets/b6dae0c0-2a99-42b9-88e5-22f58802b71d">


<img width="480" alt="스크린샷 2024-10-29 오후 9 50 27" src="https://github.com/user-attachments/assets/98d941f5-92c0-4a9d-9387-b6d42f44aa02">

<img width="480" alt="스크린샷 2024-10-29 오후 9 50 16" src="https://github.com/user-attachments/assets/cf9879fe-af95-454c-9306-93c6994b5333">

<img width="480" alt="스크린샷 2024-10-29 오후 9 50 38" src="https://github.com/user-attachments/assets/0321c4ba-6134-47e2-8564-4145c9f4cdf7">
