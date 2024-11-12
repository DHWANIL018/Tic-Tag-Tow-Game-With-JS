// Shree Ganeshay namah 

let ToDo = []

function Add() {
    
    let input = document.querySelector('#first').value
    let dueDate = document.querySelector('#date').value
    let output  = document.querySelector('.show')

    ToDo.push({item:input,date:dueDate})
    console.log(ToDo)

    let main = JSON.parse(localStorage.getItem('userlist'))
    

    for(let i = 0;i<ToDo.length;i++){

        
        console.log(main,"HII")
        output.innerHTML += `
            Your Item is ${main[i].item} and your Date is ${main[i].date} <button onclick="Deleat(${ToDo[i]})">Deleat</button>
        `


        
    }

    localStorage.setItem('userlist',JSON.stringify(ToDo))   
    
  
    // ToDo.push({item:input,date:date})

    // output.innerHTML= ""

    // for(let i = 0;i<ToDo.length;i++){
    //         output.innerHTML += ToDo[i].item,ToDo[i].date ,+ "<br>"
    
    //         console.log(output)
    //     }
    

    // console.log(value)


    

    // ToDo.push(input)
    
    // console.log(ToDo)

    // output.innerHTML = ""
    
    // for(let i = 0;i<ToDo.length;i++){
    //     output.innerHTML += ToDo[i] + "<br>"

    //     console.log(output)
    // }

    // document.querySelector('#first').value = '';
    
}



// let ToDo = [];

// function Add() {
//     let input = document.querySelector('#first').value;
//     let outputContainer = document.querySelector('.show');
//     ToDo.push(input);
//     console.log(ToDo);
//     outputContainer.innerHTML = '';
//     for (let i = 0; i < ToDo.length; i++) {
//         outputContainer.innerHTML += ToDo[i] + '<br>';
//     }
//     document.querySelector('#first').value = '';
// }
