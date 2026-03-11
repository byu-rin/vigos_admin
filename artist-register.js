// sidebar.html 불러오기
fetch("sidebar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
    });

const form = document.getElementById("artistForm");
let artists = JSON.parse(localStorage.getItem("artists")) || [];
const editIndex = localStorage.getItem("editIndex");

// 수정 모드면 기존 데이터 채우기
if (editIndex !== null) {
    const artist = artists[editIndex];
    document.getElementById("artist_name").value = artist.name;
    // 파일 input은 value 세팅 불가, 필요시 새로 업로드
    document.getElementById("artist_comment").value = artist.comment;
    document.getElementById("artist_major").value = artist.major;
    document.getElementById("artist_website_url").value = artist.website;
    document.getElementById("artist_youtube_url").value = artist.youtube;
    document.getElementById("artist_portfolio_url").value = artist.portfolio;
    document.getElementById("artist_resume_url").value = artist.resume;
    document.getElementById("artist_channel_information").value = artist.artist_channel_information;
    document.getElementById("artist_email").value = artist.artist_email;
    document.getElementById("artist_instagram").value = artist.artist_instagram;
    document.getElementById("artist_kakao_id").value = artist.artist_kakao_id;
    document.getElementById("artist_phone_number").value = artist.artist_phone_number;
}

form.addEventListener("artist_submit", function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("artist_image");
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "";

    const newArtist = {
        artist_name: document.getElementById("artist_name").value,
        artist_image: fileName,
        artist_comment: document.getElementById("artist_comment").value,
        artist_major: document.getElementById("artist_major").value,
        artist_website_url: document.getElementById("artist_website_url").value,
        artist_youtube_url: document.getElementById("artist_youtube_url").value,
        artist_portfolio_url: document.getElementById("artist_portfolio_url").value,
        artist_resume_url: document.getElementById("artist_resume_url").value,
        artist_channel_information: document.getElementById("artist_channel_information").value,
        artist_email: document.getElementById("artist_email").value,
        artist_instagram: document.getElementById("artist_instagram").value,
        artist_kakao_id: document.getElementById("artist_kakao_id").value,
        artist_phone_number: document.getElementById("artist_phone_number").value
    };

    if (editIndex !== null) {
        artists[editIndex] = newArtist; // 수정
        localStorage.removeItem("editIndex"); // 초기화
    } else {
        artists.push(newArtist); // 새 등록
    }

    localStorage.setItem("artists", JSON.stringify(artists));
    window.location.href = "artist.html"; // 등록/수정 완료 후 artist.html로 이동
});
