let today = new Date();
console.log(typeof today);
// let Otherdate = new Date("October 13, 2014 11:13:00");
let Otherdate = new Date("8/3/2003 04:54:08");
 Otherdate = new Date("8/3/2003");
console.log(Otherdate);
let a;
a =  Otherdate.getDate();
console.log(a);
Otherdate.setDate(20);
Otherdate.setMonth(2);
Otherdate.setFullYear(1900);
Otherdate.setMinutes(2);
Otherdate.setHours(2);
Otherdate.setSeconds(2);

console.log(Otherdate);