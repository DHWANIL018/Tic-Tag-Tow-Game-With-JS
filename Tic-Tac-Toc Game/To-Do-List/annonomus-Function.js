// Shree Ganeshay namah 
// console.log("Dwnail")

    // annoymus function

    // let sum = function(num1,num2){
    //     return num1 + num2
    // }

    // let sumofThreeNum = function(num1,num2,num3,SumofTwoNum){
    //     let sum1 = SumofTwoNum(num1,num2)
    //     return SumofTwoNum(sum1,num3)

        
    // }

    // console.log(sumofThreeNum(10,20,30,sum))


    // let sub = function(num1,num2){
    //     return num1-num2
    // }

    // // console.log(sub(20,40))

    // let subofThreeNum = function(num1,num2,num3,subofTwoNumber){
    //    let sub1 = subofTwoNumber(num1,num2)
       
    //     return subofTwoNumber(sub1,num3)
    // }

    // console.log(subofThreeNum(10,20,30,sub))


    // Arrow FUnction 
    // We use for Short Code 


    // let sum = (num1,num2)=>{
    //     return num1+num2
    // }

    // console.log(sum(10,30))


    // let square = (num1) =>{
    //     return num1*num1
    // }

    // console.log(square(5))

    // if you have single argument so you don't need to use square breckeas g

    // let squer = num1 =>{
    //     return num1*num1
    // }

    // console.log(squer(10))

    // if our statement has only one line so we should use this 

    // let squer = num1 => num1*num1

    // console.log(squer(10))

    // let my = num1 =>  num1 * num1

    // console.log(my(20))


            // Here is SetTimeout //

    

//     let alaram = function(){
//         console.log("Bhai Subha Ho Gyi jago")
//     }

//     setTimeout(alaram,3000)

//     setTimeout(() => {
//         console.log("bhai par mein to arrow mein bhi aa sakta hu na")
//     }, 4000);
    
//     console.log("Bhai setTimeout ki vajah se bad ka code nhi rukta hein")

//     // Important main

//     let main = function(){
//         console.log("Bhai ye Wala Print Nhi hone wala hein")
//     }

//    let TimerId = setTimeout(main,1000)
//    console.log(`Bhai Function Hme Timer Id Return Karti Hein isse hum kabhi usse clear bhi kar sakte hein: ${TimerId}`)
//    clearTimeout(TimerId)


            // Here is SetInterval

    // let alaram = function(){
    //     console.log(`Bhai shubh ho Gyi jago ${new Date()}`)
    // }

    // let intevalId = setInterval(alaram,1000)

    // setTimeout(()=> clearInterval(intevalId),5000)


    
                //    Here is addEventListener

    // let btn = document.querySelector('#btn')
    // let behaviour = event =>console.log("I am Cliked",event)

    // btn.addEventListener('click',behaviour)

    // let printDate = event=> console.log(`${new Date()}`)

    // btn.addEventListener('click',printDate)
    // // Here important : if We Have Refrence of this Eventlistner so we can that remove this eventlistner if we go direct as we many timese do so we Don't Can Remove
    // btn.removeEventListener('click',printDate)


            // We GO Than For Each
            
    // let arr = [3,5,7,9]

    // arr.forEach((num)=> console.log(num ))

    // in a Foreach loop return statement work as a continue statement When We Want to Countinue And Break statement so we should not use Foreach


            // Filter Methord 

    // let arr = [1,2,3,4,5,6,7,8,9];
    // let odds = arr.filter((num,index) =>{
    //     if(num %2 == 1){
    //         return true
    //     }else{
    //         return false
    //     }
    // })

    // console.log(odds)


    // let newodds = arr.filter((num,index)=> num %2== 1)

    // console.log(newodds)

    
    // Map Mathord aa array na every element uper jaine event perform kare 6 Ane tenea new Array ma return kare 


//     const words = ['hello', 'world', 'javascript'];
// const uppercasedWords = words.map((word) => word.toUpperCase());
// console.log(uppercasedWords); // ['HELLO', 'WORLD', 'JAVASCRIPT']

    let arr = [1,2,3,4,5,6]
    // let square = arr.map((num)=>{
    //     return num *num
    // })


    let square = arr.map((num)=> num*num)

    console.log(square)