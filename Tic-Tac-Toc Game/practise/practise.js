// Shree Ganeshay namah 

let msgContainer = document.querySelector('.msg-container')
let boxes = document.querySelectorAll('.box')
let turn = true
let msg= document.querySelector('#msg')
let resetBtn = document.querySelector('#reset-btn')
let newBtn = document.querySelector('#new-btn')



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

boxes.forEach(box => {
    box.addEventListener(('click'), (e) => {
        if (turn) {
            turn = false
            box.innerHTML = "X"
        } else {
            turn = true
            box.innerHTML = "O"
        }
        box.disabled = true
        checkwinner()
    })
})


    let checkwinner = ()=>{
        for(let pattern of winPatterns){
            let posval0 = boxes[pattern[0]].innerHTML
            let posval1 = boxes[pattern[1]].innerHTML
            let posval2 = boxes[pattern[2]].innerHTML
            console.log(posval0,posval1,posval2)

            if(posval0 !== "" && posval1 !== "" && posval2 !== ""){
                if(posval0 == posval1 && posval1 == posval2){
                    showWinner(posval0)
                }
            }
        }
    }

    let showWinner = (winner)=>{
        msgContainer.classList.remove('hide')
        msg.innerHTML = `winner is ${winner} `
    }

    let disableBoxes = ()=>{
        for(box of boxes){
            box.disabled = false
            box.innerHTML = ""

        }
    }

    resetBtn.addEventListener(('click'),(e)=>{
        turn = true
        disableBoxes()
        msgContainer.classList.add('hide')
    })

    newBtn.addEventListener(('click'),(e)=>{
        turn = true
        disableBoxes()
        msgContainer.classList.add('hide')
        
    })
// const checkWinner = () => {
//     for (const pattern of winPatterns) {
//         let posval0 = boxes[pattern[0]].innerHTML;
//         let posval1 = boxes[pattern[1]].innerHTML;
//         let posval2 = boxes[pattern[2]].innerHTML;

//         if (posval0 !== "" && posval1 !== "" && posval2 !== "") {
//             if (posval0 === posval1 && posval1 === posval2) {
//                 console.log("Winner", posval0);
//                 showWinner(posval0);
//             }
//         }
//     }
// };
