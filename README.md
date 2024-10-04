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
```html
<div class="mycards">
  <div id="card-wrap">
    <div id="card-container">
        <!-- script 를 통해 append 하는 부분 -->
        <div class="col" id=${values.name}>
          <div class="card h-100">
            <img
              src="${values.image}"
              class="card-img-top"
              alt=""
              height="300"
            />
            <div class="card-body">
              <h5 class="card-title">${values.role}</h5>
              <p class="card-text">${values.name}</p>
            </div>
          </div>
        </div>
        <!-- append 완료 -->
    </div>
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
- `overflow-x: scroll` 속성을 사용하여 가로 스크롤 구현
- 구현 과정에서 overflow 가 발생하지 않고 카드의 width가 줄어들며 나열되는 현상 발생 => bootstrap `.card`의 css 속성에 width 값이 % 형태로 부여되어 발생하는 현상으로 확인 후 `width: 250px` 속성으로 해결


## ✨개선사항

- 데이터 입력 시 createAt 컬럼을 추가해 시간별 정렬을 보다 쉽게 구현할 수 있다.
- 데이터 입력 시 id 컬럼을 추가해 데이터의 구분을 보다 명확하게 할 수 있다.

## ✨각오 및 소감
1. #### 한 번 더 생각하고 말하기
   - 머릿속에서 떠오르는 생각을 바로 뱉어버리면 논리적으로 오류가 발생할 확률이 높습니다. 그 오류는 한 번 더 생각했으면 발견했을 만큼 찾기 쉬운 오류인 경우가 많습니다.
자신의 의견을 이야기하거나 리뷰를 남길 때, 자신의 의견에 대해 한 번 더 검토하고, 한 번 더 관련 코드를 읽어보는 습관을 들이고자 합니다. 논리적으로 오류가 있는 코드를 언급할 확률이 많이 줄어들 것입니다.
2. #### 꾸준한 스터디를 지속할 수 있는 동기
   - 화이팅 하시조 팀원의 출발선은 다릅니다. 그래서 뒤늦게 출발한 팀원이 초조한 감정을 가질 수 있기 때문에,
매일 꾸준히 TIL을 쓰는 것처럼 꾸준하게 한두 시간씩 스터디를 합니다.
저희는 이번 개천절인 10/3에도 각자 되는 시간에 모여 스터디를 진행했습니다.
같이 공부하는 사람이 있으면, 서로 자극을 받아 열심히하게 됩니다. 한두시간이 적은 시간 같아 보이지만, 매일 쌓이다 보면 많은 발전을 이룰 수 있게 됩니다.
3. #### 모든 지식을 습득해야 한다는 생각을 버립니다.
   - 지금 좋아하고 공부해야 하는 분야에만 집중하겠습니다. (백엔드 : Java와 SQL_데이터 분석)
자신이 좋아하는 분야 혹은 한 분야를 깊게 파는 것은 결국 다른 분야에 흥미가 생기기 쉽다는 점과 두 번째는 한정된 시간에 세상의 모든 지식을 습득할 수 없기 때문에, 자신이 해야 하는 분야와 좋아하고 잘하는 분야에 집중하여 개발자로서의 가치를 많이 끌어올리는 것이 좋다고 생각합니다.
4. #### 프로 의식을 가집니다.
   - 자신의 발언과 행위에 대한 책임을 집니다.
일정 회의에서 말한 각자의 일정이 지켜지지 않았을 때, 혹은 코드 오류로 결과에 문제가 발생했을 때 책임을 지려고 하는 마음가짐이 필요합니다. 책임감을 가지면 허투루 하지 않고, 팀원과의 의사소통을 할 때도 자신이 정확하게 알거나 확신하는 정보만 전달하게 됩니다. 일정을 짤 때도 무리한 일정을 뱉을 수 없게 되고, 코드에 오류가 없는지 검토하여 추후 배포했을 때 문제가 없는지 확인하게 됩니다. 이런 태도는 본인에게 팀원들의 신뢰로 돌아옵니다.
자신이 해결하지 못하고 떠넘긴 것은 결국 팀원에게 부담으로 돌아갑니다. 자신의 능력으로 할 수 있는 범위가 어느 정도이고 일정에 맞춰 개발을 완료할 수 있는 시점을 정확히 언급합니다. 못하는 일은 못한다고 말하고 더 할 수 있는 부분은 가능하다고 이야기합니다. 자신의 능력을 정확히 파악하고, 확신을 가지고 의사소통하여, 잘못에는 책임을 지고 같은 일이 반복되지 않도록 합니다.
5. #### 화이팅하시조는 어떤 개발자로 성장할까요?
   - 저희는 다양한 분야와 성향을 가진 개발자가 모인 팀입니다. 많은 기술에 관심을 가지고 적극적으로 도입하거나, 문제를 가볍고 빠르게 해결하거나, 어떤 문제가 주어져도 생각지 못한 방법으로 해결하거나, 팀원이 일을 더 잘할 수 있도록 도움을 주는 등. 좋은 개발자로 성장할 수 있는 자질을 가진 사람들이 모였습니다. 길고도 짧은 내배캠 백엔드 과정 Spring 7기를 수료할 때까지 다양한 성향의 팀원들과 다른 팀 팀원들, 훌륭하신 튜터님들과 매니저님들과 함께 공부하며 그다음이 기대가 되는 개발자로 성장하고자 합니다. 다같이 화이팅! 하시조.

