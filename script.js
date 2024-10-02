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
docs.forEach((doc) => {
  const values = doc.data();
  //  values 에 불러온 데이터들만 담아두고

  //  temp 변수에 카드 html 복사해서 id에 name, src에 image, 역할에 role, 이름에 name 할당
  const temp = `
        <div class="col" id=${values.name}>
          <div class="card h-100">
            <img
              src="${values.image}"
              class="card-img-top"
              alt=""
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
