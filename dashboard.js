// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD01WDP_RxUQd8s0L_0eSzXB2cuQ68q6sg",
  authDomain: "aicurator-9ed42.firebaseapp.com",
  projectId: "aicurator-9ed42",
  storageBucket: "aicurator-9ed42.firebasestorage.app",
  messagingSenderId: "815073584833",
  appId: "1:815073584833:web:873843fcc690852f289640",
  measurementId: "G-QZGC4KF6ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// 대시보드 차트 초기화
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("sessionsChart");
  if (!canvas) return; // 다른 페이지에서는 실행 안 함

  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["1 Oct","2 Oct","3 Oct","4 Oct","5 Oct","6 Oct","7 Oct","8 Oct","9 Oct","10 Oct","11 Oct","12 Oct","13 Oct","14 Oct","15 Oct"],
      datasets: [{
        label: 'Sessions',
        data: [100,200,120,150,220,180,250,270,300,350,330,400,450,500,420],
        borderColor: 'green',
        fill: true,
        backgroundColor: 'rgba(0,255,0,0.05)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => value / 10
          }
        }
      }
    }
  });
});
