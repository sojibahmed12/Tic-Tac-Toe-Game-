let boxs = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let ngBtn = document.querySelector(".newGame");
let resetBtn = document.querySelector(".reset")

let player0 = true;

let winnigPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const enableBtn = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const resetGame = () => {
    player0 = true;
    msgContainer.classList.add("hide")
    enableBtn();
}

const gameEnd = () => {
    for(let box of boxs){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerHTML = `The Winner Is Player ${winner}`
    msgContainer.classList.remove("hide")
    gameEnd();
}

boxs.forEach(box =>{
    box.addEventListener("click", () => {
        if(player0){
            box.innerHTML = "0"
            player0 = false;
        }else {
            box.innerHTML = "X"
            player0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winnigPattern){
        let pos1val = boxs[pattern[0]].innerHTML;
        let pos2val = boxs[pattern[1]].innerHTML;
        let pos3val = boxs[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}   

resetBtn.addEventListener("click", resetGame);
ngBtn.addEventListener("click", resetGame)