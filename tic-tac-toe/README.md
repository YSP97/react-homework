# tic-tac-toe Game

## 구현 과정

### 1. Square 컴포넌트

- [x] 컴포넌트 속성 설계
- [x] Square 컴포넌트 속성(props) 검사를 작성

## 2. Squares 컴포넌트

- [x] Squares 배열의 초기값을 null 9개로 구성하여 배열을 순회하며 리스트 렌더링
- [x] Square 클릭 시 플레이어의 말 놓기
- [x] Square 클릭 시 플레이어 변경되도록
- [x] 게임이 이겼는 지, 졌는 지 확인하는 승리 조건을 게임의 상수로 선언
- [x] 승리 시 해당 Square 색 칠하기
- [x] 게임이 종료되면 더이상 게임을 실행하지 않도록 하기, 게임오버 메세지 띄우기

## 3. 상태 끌어올리기

- [x] Status 컴포넌트에서의 state 사용을 위한 Squares -> Board로의 state 끌어올리기
- [x] Squares 컴포넌트 prop types 검사
- [x] prop types 파일 분리
- [x] proptypes 검사를 위한 PLAYER_LIST 상수 생성

## Status 컴포넌트

- [x] 게임 상태 메시지 표시
- [x] proptypes 검사
