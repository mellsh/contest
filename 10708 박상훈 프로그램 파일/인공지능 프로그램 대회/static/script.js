// 랜덤 숫자 생성
function generateRandomNumbers() {
    const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100)).join(', ');
    const titles = ["곡선 그래프로 그려보기", "막대 그래프로 그려보기", "원 그래프로 그려보기", "영역 그래프로 그려보기", "꺾은선 그래프로 그려보기"];
    const randomTitle = Math.floor(Math.random() * titles.length);
    document.getElementById('randomNumbers').innerText = randomNumbers;
    document.getElementById('randomTitles').innerText = titles[randomTitle];
}

// 초기화 버튼 클릭 이벤트
document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('codeInput').value = '';
    document.getElementById('result').innerText = '';
});

// 제출 버튼 클릭 이벤트
document.getElementById('submitButton').addEventListener('click', async () => {
    const code = document.getElementById('codeInput').value;
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });
    const result = await response.text();
    document.getElementById('result').innerText = result;
    const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(', ');
    document.getElementById('randomNumbers').innerText = randomNumbers;
    const titles = ["곡선 그래프로 그려보기", "막대 그래프로 그려보기", "원 그래프로 그려보기", "영역 그래프로 그려보기", "꺾은선 그래프로 그려보기"];
    const randomTitle = Math.floor(Math.random() * titles.length);
    document.getElementById('randomTitles').innerText = titles[randomTitle];
});

// 페이지 로드 시 랜덤 숫자 생성
window.onload = generateRandomNumbers;