# 화이팅하시조

주제 : 저희 팀 만의 특징과 목표, 팀원 각자에 대한 소개를 하는 페이지

## ✨기능

- 모든 팀원 관련 정보를 읽어와 카드형식으로 볼 수 있다. (Read)
- 멤버 카드 만들기 팝업창을 이용해 새로운 카드를 추가 할 수 있다. (Create)
- 카드 정보를 수정할 수 있다. (Update)
- 카드 정보를 삭제할 수 있다. (Delete)
- 최신 뉴스 정보를 볼 수 있다.
- 가로스크롤을 통해 한정된 공간에서 모든 카드를 조회할 수 있다. (세로스크롤 동작 시 가로스크롤로 작동)
- 카드 작성 시 파일업로드를 통해 프로필사진을 만들 수 있다.
- 헤더 로고, join 버튼을 이용해 홈이동 / 멤버카드 작성 을 할 수 있다.
- 멤버 카드 클릭 시 디테일 페이지로 이동 할 수 있다.

## ✨기능별 시연

<details>
  <summary>메인 화면</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/50957794-b6bb-499e-ac07-8b7c3660021e"/>
  </div>
</details>
<details>
  <summary>카드 상세보기</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/b70b170d-9855-4b61-867b-166ba2ec24c2"/>
  </div>
</details>
<details>
  <summary>카드 추가하기</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/f049252e-7ac0-4a22-86bc-8df79acb39b9"/>
  </div>
</details>
<details>
  <summary>카드 수정하기</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/28967437-ee58-411c-8800-961ad54c3293"/>
  </div>
</details>
<details>
  <summary>카드 삭제하기</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/86b346e8-abf8-444b-8a31-eca4bb78dcc2"/>
  </div>
</details>
<details>
  <summary>페이지 이동하기</summary>
  <div markdown="1">
    <img src="https://github.com/user-attachments/assets/167ccf07-2601-46f8-973c-84c693cbdee9"/>
  </div>
</details>

## ✨멤버

| 이름              | Github 프로필  | 포지션     | 역할 |
| ----------------- | -------------- | ---------- | ---- |
| 김민범 | [alsqja]      | 카드 상세보기, 수정, 삭제     | 팀장 |
| 허수연 | [sooyeoneo]       | 멤버카드 리스트, 헤더  | 팀원 |
| 정가현 | [kahyun0608]    | 멤버카드 등록 페이지 제작  | 팀원 |
| 김명호 | [KimMyungHo919]  | 메인 페이지 제작 | 팀원 |

[alsqja]: https://github.com/alsqja
[sooyeoneo]: https://github.com/sooyeoneo
[kahyun0608]: https://github.com/kahyun0608
[KimMyungHo919]: https://github.com/KimMyungHo919

## ✨Tech Stacks

- HTML
- CSS
- JavaScript
- JQuery
- Firebase
- AWS S3
- BootStrap

## ✨어려웠던 문제
- BootStrap 사이트에서 cards 템플릿을 가져와 멤버카드 받아오기 기능을 구현하던 중 멤버카드가 4장 이상 추가될 경우 아래 컴포넌트 위로 덮어씌워지는 현상 발생 => bootstrap 자체 css 문제로 판단
- card 개수에 따른 margin 조절을 통해 해결할지 가로 스크롤을 도입할지 회의 후 가로 스크롤 도입 결정
- 가로 스크롤 기능을 도입하는 과정에서 기존 bootstrap css와 충돌하여 원하는 결과물 도출에 어려움을 느낌
```javascript
<div class="mycards">
  <div id="card-wrap">
    <div id="card-container"></div>
  </div>
</div>
```
```css
#card-container {
  max-height: 500px;
  display: flex;
  justify-content: space-around;
}

#card-container > div {
  margin: 0 10px;
}

#card-wrap {
  width: 1100px;
  overflow-x: scroll;
  margin: 0 auto;
}

.card {
  width: 250px;
}
```

## ✨개선사항

- 데이터 입력 시 createAt 컬럼을 추가해 시간별 정렬을 보다 쉽게 구현할 수 있다.
- 데이터 입력 시 id 컬럼을 추가해 데이터의 구분을 보다 명확하게 할 수 있다.
