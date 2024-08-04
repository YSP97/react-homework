# Atomic-component 과제

## 과제 조건

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계

## figma 시안

![image](https://github.com/user-attachments/assets/4cc7e327-6bed-4b15-a452-fe973bc3caef)<br/>

피그마를 다루는 게 익숙하지 않아 가장 시간이 오래 걸렸습니다...프로필 편집 상태와 잠금 상태의 컴포넌트를 구현하고 싶어서 변경상태를 토글할 수 있는 버튼 컴포넌트도 만들었습니다.<br/>
[시안 링크](https://www.figma.com/design/4pADJVoa91i0LHgoL0dJLk/Profile?node-id=0-1&m=dev)

## 과정

1. 저번 바닐라 프로젝트에서 선택한 타잉 시안을 참고하여 프로필 페이지의 프로필 컴포넌트와 버튼 컴포넌트를 구현하였습니다.
   모듈 번들러로 지난 프로젝트부터 사용하여 좀 익숙한 Vite를 사용하였습니다. 사실 typescript도 활용해 보고 싶었지만 환경구성에 애를 먹어 결국 익숙한 것을 선택하였습니다. 😭지난 프로젝트에서 저는 프로필을 구현하지는 않았는데 해보고 싶었던 마음이 커서 이번 기회에 구현해보았습니다.

2. 폴더 구성을 컴포넌트 단위의 구현을 위해 아래처럼 구성하였습니다.<br/>
   ![image](https://github.com/user-attachments/assets/85af2283-4070-4ae3-9fae-fc3d91523af8)

## 설명

1. 접근성 고려 사항
   - 프로필이 잠금 모드인지 편집모드인지를 사용자에세 알리기 위해 figure에 aria-label에 추가하였습니다.
   - 버튼 컴포넌트의 현재 status를 나타내기 위해 aria-label를 추가하였으나 적절한 처리인지 잘 모르겠습니다.
2. 구조 설계
   - profile 컴포넌트의 이미지는 figure를 사용하였고 프로필 이름은 figcaption을 사용하였습니다. 프로필 아이콘은 클릭시 비밀번호 입력이 나타나야 하지만 시간관계상 거기까지 구현하진 못할 것 같아 클릭하면 비밀번호 입력 및 비활성화가 된다는 가정에 버튼으로 구현하였습니다.
   - 프로필 컴포넌트들을 li로 하고 프로필 컨테이너를 ul로 지정하였습니다.
   - 버튼 컴포넌트와 프로필 컴포넌트는 section으로 그룹핑하였습니다.
   - 과제 제출했을 때 피드백 해주신 section 태그 내부의 h태그 누락 문제를 수정하였습니다. 수정하면서 h2 태그를 추가하였고 해당 태그의 텍스트가 status에 따라 동적으로 변경되도록 수정하였습니다.
3. 기능 구현
   - 버튼 클릭시 status props를 변경하여 전달하기 위해 useState를 이용하였습니다. 예습한 내용을 직접 실습할 수 있어 좋았습니다.

## prop type

prop-type 라이브러리 설치를 통해 수행하였습니다.<br/>
![image](https://github.com/user-attachments/assets/3f8e8e42-7e75-4ffc-a05b-73a79569ec7c)
<br/>@types 폴더 내부에 globals.d.js라는 타입 검사를 위한 파일을 생성하였습니다.

```js
import { func, string, number, oneOf, exact } from 'prop-types';

const statusType = oneOf(['lock', 'edit']);

export const profileType = exact({
  name: string.isRequired,
  imgURL: string.isRequired,
  status: statusType,
  size: number,
});

export const buttonType = exact({
  status: statusType,
  onClick: func.isRequired,
});
```

- 상태를 나타내는 prop은 statusType으로 타입을 지정하도록 하였고 lock과 edit 상태 둘 중 하나만 선택하도록 강제하였습니다.
- profile 컴포넌트와 button 컴포넌트의 props 타입을 따로 관리하기 위해 profileType, buttonType으로 지정하였습니다.

```js
Button.propTypes = {
  button: buttonType,
};
```

컴포넌트 파일 내부에서 위와같이 import하여 타입 지정을 완료했습니다!

## 결과

![Atomic-component-Chrome2024-07-2815-33-36online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c377db56-6aa4-41af-b9f6-4cf436d2ef48)
<br/>클릭 시 편집 모드가 활성화됩니다.
