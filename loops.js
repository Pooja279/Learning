// for(let a=0;a<10;a++)
// {
//     if(a===5){
//         break;
//     }
//     console.log(a)
// }
// a=0
// while(a<10){
//     if(a===5){
//         a += 1;
//         continue;
//     }
//     console.log(a)
//     a++;
// }
//  b=0;
//  do{
    
//      console.log(b)
//      b=b+1;

//  }while(b<10)
let arr = [1,2,3,4,5,6]
// arr.forEach(element => {
//     console.log(element)
// });
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }
let obj = {
    name:'puja',
    age:18,
    programer : true
}
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`The ${key}  of student is ${element}`)
    }
    
}