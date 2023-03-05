// 랜덤번호 지정
// 유저가 번호를 입력, 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다!
// 랜덤번호가 < 유저번호 DOWN!
// 랜덤번호가 > 유저번호 UP!
// reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다.(버튼이 disable 된다)
// 1- 100 범위 밖에 숫자를 입력하면 기회를 깎지 않는다.
// 유저가 이미 입력한 숫잦를 또 입력하면 알려준다 기회를 깎지 않는다

let computerNum = 0;
let playBtn = document.getElementById("play-button"); 
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let chancesArer = document.getElementById("chance");
let chances = 5; // 기회
let gameOver = false;


playBtn.addEventListener("click", play); // 함수도 매개변수처럼 넘길수 있다. () 넣는순간 실행해버린다.
resetBtn.addEventListener("click", reset);

function pickRandomNum(){ // 랜덤번호 지정
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() { // 플레이함수

    let userValue = userInput.value; // 유저가 입력한 값

    if(userValue < 1 || userValue > 100){ // 범위를 벗어났을때
        resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요."
        return;
    }

    chances--;
    chancesArer.textContent = `남은기회 : ${chances}회`;

    if(userValue < computerNum){
        resultArea.textContent = "UP!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!";
    }else{
        resultArea.textContent = "빙고!";
    }

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playBtn.disabled = true;
    }
}

function reset() {
    // 유저 인풋창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운번호가 생성
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다!";
}


pickRandomNum();