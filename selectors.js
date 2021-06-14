let a = document.getElementById('first')
//a = document.getElementsByClassName
//a = a.className;
// a = a.childNodes;
// a=a.parentNode;
// a=a.style.color='red';
// a.innerText='puja';
// a.innerHTML ='<b>pooja</b>'
// console.log(a.innerHTML)
// let sel = document.querySelector('#first')
// sel = document.querySelector('.child')
// sel = document.querySelector('div')
// sel.style.color = 'green';
// console.log(sel)
let elems = document.getElementsByClassName('child')
// elems = document.getElementsByClassName('container')
// console.log(elems[0].getElementsByClassName('child'));
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color='blue';
});