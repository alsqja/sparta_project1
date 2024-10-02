// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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

const param =
  window.location.search && decodeURI(window.location.search.slice(6));

const q = query(collection(db, "화이팅하시조"), where("name", "==", param));
// const q = query(collection(db, "화이팅하시조"));
let id = "";

const docs = await getDocs(q);
docs.forEach((doc) => {
  const values = doc.data();
  console.log(values);
  console.log(doc);
  id = doc.id;

  $("#oneintro").text(values.oneintro);
  $("#name").text(`${values.name} 입니다.`);
  $("#blog").text(values.blog);
  $("#blog").attr("href", values.blog);
  $("#github").text(values.github);
  $("#github").attr("href", values.github);
  $("#intro").text(values.intro);
  $("#oneword").text(values.oneword);
  $("#mbti").text(values.mbti);
  $("#role").text(values.role);
  $("#members_photo").css("background-image", `url("${values.image}")`);
});

const dummy = {
  name: "asd",
  oneintro: "asd",
  blog: "asd",
  github: "asd",
  intro: "asd",
  oneword: "asd",
  mbti: "asd",
  image: "asd",
  role: "asd",
};

// $("#modify").click(async () => {
//   await addDoc(collection(db, "화이팅하시조"), dummy);
// });

$("#delete").click(async () => {
  if (confirm("삭제하시겠습니까?")) {
    await deleteDoc(doc(db, "화이팅하시조", id));
    alert("삭제 완료 되었습니다.");
    window.location.replace("/index.html");
  }
});

$("#modify").click(async () => {
  window.open(
    `/popup.html?name=${param}`,
    "_black",
    "width=800, height=600, top=0, left=0"
  );
});
