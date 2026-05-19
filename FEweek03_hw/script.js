const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const songContainer = document.getElementById("songContainer");

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value;

  getSongs(keyword);
});

async function getSongs(keyword) {
  const url = `https://api.manana.kr/karaoke/singer/${keyword}.json`;

  try {
    const response = await fetch(url);  // API 서버에 요청 보내기
    const data = await response.json();  // 객체 변환
    console.log(data);

  const resultHTML = data.map((song) => {  // HTML 문자열로 바꿔줌
    return `
        <div class="song-card">
        <h3>${song.title}</h3>
        <p>가수 : ${song.singer}</p>
        <p>번호 : ${song.no}</p>
        <p>작곡 : ${song.composer}</p>
        <p>발매일 : ${song.release}</p>
        </div>
        `;
    });

    songContainer.innerHTML = resultHTML.join("");  // 문자열 하나로 합치기
    } catch (error) {
        console.log("에러 발생");
        console.log(error);
    }
}