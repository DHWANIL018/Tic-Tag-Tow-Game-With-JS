// // Shree Ganshay namah 
// let boxes = document.querySelectorAll('.box')
// let Msg = document.querySelector('#msg')
// let msgContainer = document.querySelector('.msg-container')
// let turn = true
// let NewBtn = document.querySelector('#new-btn')
// let resetBtn = document.querySelector('#reset-btn')

// const RESET = ()=>{
//     turn = true
//     console.log("sidfn")
//     enablebox()

// }
// resetBtn.addEventListener('click',RESET)
// NewBtn.addEventListener('click',RESET)

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
//   ];

// const checkwinner = ()=>{
//     for (const pattern of winPatterns) {
//         let posval0 = boxes[pattern[0]].innerHTML
//         let posval1 = boxes[pattern[1]].innerHTML
//         let posval2 = boxes[pattern[2]].innerHTML

//         if(posval0 !="" && posval1 != "" && posval2!=""){
//             if(posval0 == posval1 && posval1==posval2){
//                 console.log("Winner",posval0)
//                 showwinner(posval0)
//             }
//         }
//       }
// }

// const disableBoxes = ()=>{
//     for (const box of boxes) {
//         box.disabled = true
//     }
// }
// const showwinner = (winner)=>{
//     msgContainer.classList.remove('hide')
//     Msg.innerHTML = `The Winner is ${winner}`
//     disableBoxes()
// }


// boxes.forEach(box => {
//     box.addEventListener('click',()=>{
//         if(turn){
//             console.log("YESS")
//             turn = false
//             box.innerHTML = "X"
//         }
//         else{
//             console.log("NOOO")
//             box.innerHTML = "O"
//             turn = true
//         }
//         box.disabled = true
//         checkwinner()
//     })


// });



// const enablebox = ()=>{
//     for (const box of boxes) {
//         box.disabled = false
//         box.innerHTML = ""
//         msgContainer.classList.add('hide')
//     }
// }


// // newGameBtn.addEventListener("click",resetGame)





// Shree Ganshay namah 
let boxes = document.querySelectorAll('.box');
let Msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let turn = true;
let newBtn = document.querySelector('#new-btn');
let resetBtn = document.querySelector('#reset-btn');

const RESET = () => {
    turn = true;
    enableBox();
};

resetBtn.addEventListener('click', RESET);
newBtn.addEventListener('click', RESET);

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

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let posval0 = boxes[pattern[0]].innerHTML;
        let posval1 = boxes[pattern[1]].innerHTML;
        let posval2 = boxes[pattern[2]].innerHTML;

        if (posval0 !== "" && posval1 !== "" && posval2 !== "") {
            if (posval0 === posval1 && posval1 === posval2) {
                console.log("Winner", posval0);
                showWinner(posval0);
            }
        }
    }
};

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msgContainer.classList.remove('hide');
    Msg.innerHTML = `The Winner is ${winner}`;
    disableBoxes();
};

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turn) {
            console.log("YES");
            turn = false;
            box.innerHTML = "X";
        } else {
            console.log("NO");
            box.innerHTML = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBox = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        msgContainer.classList.add('hide');
    }
};
