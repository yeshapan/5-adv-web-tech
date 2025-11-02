let a=90;
let b=100;

// setTimeout(() => {
//     b=20;
// }, 5000);

let waitingData= new Promise((re,reject)=>{
    setTimeout(() => {
        re(80);
    }, 5000);

})
// // waitingData.then((data)=>{
// //     b=data
// //     console.log(data);
    
// // })

waitingData.then((data) => {
    let b = data;  
    console.log(a + b); 
});

//  console.log(a+b);