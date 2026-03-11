import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD01WDP_RxUQd8s0L_0eSzXB2cuQ68q6sg",
    authDomain: "aicurator-9ed42.firebaseapp.com",
    projectId: "aicurator-9ed42",
    storageBucket: "aicurator-9ed42.firebasestorage.app",
    messagingSenderId: "815073584833",
    appId: "1:815073584833:web:bbe00de9c44b8406289640",
    measurementId: "G-7WFXM34L5N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// sidebar.html 불러오기
fetch("sidebar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
    });

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

const form = document.getElementById("artworkForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const artistName = document.getElementById("artist_name").value.trim();
    const artworkTitle = document.getElementById("artwork_title").value.trim();
    const artworkSize = document.getElementById("artwork_size").value.trim();
    const artworkIngredient = document.getElementById("artwork_ingredients").value.trim();
    const artworkDesc = document.getElementById("artwork_desc").value.trim();
    const artworkImage = document.getElementById("artwork_image").files[0];
    const artworkQrImage = document.getElementById("artwork_qr_image").files[0];

    if (!artistName || !artworkTitle || !artworkSize || !artworkIngredient || !artworkDesc || !artworkImage || !artworkQrImage) {
        showToast("모든 항목을 입력해야 작품을 등록할 수 있습니다.");
        return;
    }

    try {
        let artImageUrl = "";
        let qrImageUrl = "";

        // 작품 이미지 업로드
        const artworkRef = ref(storage, `artworks/${Date.now()}_${artworkImage.name}`);
        await uploadBytes(artworkRef, artworkImage);
        artImageUrl = await getDownloadURL(artworkRef);

        // QR 이미지 업로드
        const qrRef = ref(storage, `artworks/${Date.now()}_qr_${artworkQrImage.name}`);
        await uploadBytes(qrRef, artworkQrImage);
        qrImageUrl = await getDownloadURL(qrRef);

        // Firestore에 저장
        await addDoc(collection(db, "artworks"), {
            artist: artistName,
            artworkTitle: artworkTitle,
            artworkSize: artworkSize,
            artworkIngredient: artworkIngredient,
            artworkDesc: artworkDesc,
            artImageRes: artImageUrl,
            qrImageUrl: qrImageUrl,
            createdAt: new Date()
        });

        showToast("작품이 등록되었습니다.");
        setTimeout(() => {
            window.location.href = "artwork.html";
        }, 1500);

    } catch (error) {
        console.error("Firestore 저장 오류:", error);
        showToast("저장 실패: " + error.message);
    }
});
