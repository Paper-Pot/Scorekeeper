const playerScore = document.querySelectorAll(".playerScore");
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");

const actionBtn = document.querySelectorAll(".actionBtn");
const playerBtn = document.querySelectorAll(".playerBtn");
const resetBtn = document.querySelector("#resetBtn");

const maxScore = document.querySelector("#maxScore")

actionBtn.forEach(btn=>{
    btn.addEventListener("click",function(e){
        playerOutcome(this);
    })
})
function playerOutcome(btn){
    if(btn.textContent === "Player 1"){
        player1Score.textContent = parseInt(player1Score.textContent) + 1;
        checkIfWinner(player1Score);
    }else if(btn.textContent === "Player 2"){
        player2Score.textContent = parseInt(player2Score.textContent) + 1;
        checkIfWinner(player2Score);
    }else{
        player1Score.textContent = 0;
        player2Score.textContent = 0;
        
        actionBtn.forEach(btn=>{
            btn.classList.remove("disable");
        });
        playerScore.forEach(player =>{
            player.classList.remove("playerWinner");
            player.classList.remove("playerLooser");
        })

    }
}
function checkIfWinner(player){
    if(parseInt(player.textContent) === parseInt(maxScore.value)){
        playerBtn.forEach(btn=>{
            btn.classList.add("disable")
        })
        if(player.classList.contains("player1")){
            player1Score.classList.add("playerWinner");
            player2Score.classList.add("playerLooser");
        }else{
            player2Score.classList.add("playerWinner");
            player1Score.classList.add("playerLooser");
        }
        
    }
}