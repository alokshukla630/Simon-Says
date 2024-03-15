let gameSeq =[];
let userSeq = [];

let btns = ["green", "red", "yellow", "purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
     if(!start){
        console.log("Game Started");
        start = true;

        levelUp();
     }
});

function gameflash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Game choose random btn to flash
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);


    gameflash(randBtn);

}

function checkAnswer(idx){
    // console.log("curr level: ", level);
  

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
           
        }
        console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b>  <br> Press any key to restart`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"; 
        }, 200);
        reset();    
    }

}

function btnpress() {
    
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length-1);


}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}