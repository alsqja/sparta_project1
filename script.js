// script 작성
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmjaU6tpnJAy6Gtvps-7B6m3Rp6bbaOE",
  authDomain: "sparta-6b12e.firebaseapp.com",
  projectId: "sparta-6b12e",
  storageBucket: "sparta-6b12e.appspot.com",
  messagingSenderId: "177634674627",
  appId: "1:177634674627:web:8ed3250a694a63aa465f76",
  measurementId: "G-DC20VH5P2J",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//  db에서 멤버 불러오기
const q = collection(db, "화이팅하시조");
const docs = await getDocs(q);

//  불러온 데이터(docs) 처리

const datas = [];

docs.forEach((doc) => {
  const values = doc.data();

  datas.push({
    ...values,
    createAt: doc._document.createTime.timestamp.seconds,
  });
  //  values 에 불러온 데이터들만 담아두고
});

datas.sort((a, b) => a.createAt - b.createAt);

datas.forEach((values) => {
  const temp = `
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
  `;
  //  card-container 에 temp 붙이기
  //  card-container 는 index.html 에서 <div class="row row-cols-1 row-cols-md-4 g-4"> 부분에 id=card-container 넣음
  $("#card-container").append(temp);
  // $("#card-test").append(temp);

  //  붙여넣은 각 카드별로 id에 따른 클릭 이벤트 생성
  $(`#${values.name}`).click(async () => {
    window.location.href = `members.html?name=${values.name}`;
  });
});

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=1d13b330eb6543be928ec5c5780898f1";

try {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();

  for (let i = 0; i < 5; i++) {
    const title = data.articles[i].title;
    const author = data.articles[i].author || "";
    const description = data.articles[i].description;
    const temp = `
      <div class="news_box">
        <div>제목 : ${title}</div>
        <div>저자 : ${author}</div>
        <div>내용 : ${description}</div>
      </div>
      `;
    $("#news_container").append(temp);
  }
} catch (error) {
  console.error("There was a problem with the fetch operation:", error);
}

$("#uploadbtn").click(async function () {
  window.open(
    "/popup.html",
    "_blank",
    "width=800, height=600, top=50, left=50, scrollbars=yes"
  );
});

$("#joinbtn").click(async function () {
  window.open(
    "/popup.html",
    "_blank",
    "width=800, height=600, top=50, left=50, scrollbars=yes"
  );
});

$("#card-wrap").on("wheel", function (event) {
  event.preventDefault(); // 기본 세로 스크롤 방지

  // deltaX와 deltaY 모두 가로 스크롤로 처리
  const deltaX = event.originalEvent.deltaX;
  const deltaY = event.originalEvent.deltaY;

  const scrollLeft = $(this).scrollLeft();
  const maxScrollLeft = this.scrollWidth - $(this).outerWidth();

  // 가로 스크롤 끝에 도달했는지 확인
  if (
    (deltaY > 0 && scrollLeft >= maxScrollLeft) ||
    (deltaY < 0 && scrollLeft <= 0)
  ) {
    // 가로 스크롤이 끝에 도달하면 세로 스크롤 허용
    window.scrollBy(0, deltaY); // 세로 스크롤 동작
  } else {
    // 가로 스크롤 동작
    $(this).scrollLeft(scrollLeft + deltaX + deltaY);
  }
});
