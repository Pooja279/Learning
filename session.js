//add items to the local storage
let arr = ['tameto','pateto','bringle'];
// localStorage.setItem('name','Pooja');
// localStorage.setItem('name2','pruthvi');
// localStorage.setItem('veg',JSON.stringify(arr));
//remove item from local storage
// localStorage.removeItem('name');
//retrive the items from local storage
let Name= localStorage.getItem('veg');
console.log(JSON.parse(Name));


// sessionStorage.setItem('name','Pooja');
// sessionStorage.setItem('name2','pruthvi');
// sessionStorage.setItem('veg',JSON.stringify(arr));
