let boxes = document.querySelectorAll('.box')
let turn = true
let msgContainer = document.querySelector('.msg-container')
let Msg = document.querySelector('#msg')
let resetBtn = document.querySelector('#reset-btn')
let newbtn= document.querySelector('#new-btn')
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// reset

for( let box of boxes){
    box.addEventListener(('click'),(e)=>{
        if(turn){
            box.innerHTML = "O"
            turn = false
        }else{
            box.innerHTML = "X"
            turn = true
        }
        box.disabled = true
        checkWinner()
    })
}

let showWinner = (winner)=>{
    msgContainer.classList.remove('hide')
    Msg.innerHTML = `Winner is ${winner}`
}

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posval0 = boxes[pattern[0]].innerHTML
        let posval1 = boxes[pattern[1]].innerHTML
        let posval2 = boxes[pattern[2]].innerHTML

        if(posval0 !== "" && posval1 !== "" && posval2 !== ""){
            if(posval0 == posval1 && posval1 == posval2){
                console.log("winner",posval0)
                showWinner(posval0)
                disableBoxes()
            }
        }

        console.log(posval0)
    }
}

let reset = ()=>{
    turn = true
    for(let box of boxes){
        box.innerHTML = ""
        box.disabled = false
        msgContainer.classList.add('hide')
    }
}

let disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false
    }
}

resetBtn.addEventListener('click',reset)
newbtn.addEventListener('click',reset)
