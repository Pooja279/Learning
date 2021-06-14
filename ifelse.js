const age = '65';
// if(age != 29){
//     console.log('age is 65')
// }
// if(age === 65){//It check type and value both
//     console.log('age is 65')
// }
// else{
//     console.log('age is not 29')
// }
// console.log((age==45)? ('age is 45'):('age is not 45'));
switch (age) {
    case '18':
        console.log('you are 18')
        break;
    case '28':
        console.log('you are 28')
        break;
    case '38':
        console.log('you are 38')
        break;

    default:
        console.log('you are unkown age')
        break;
}