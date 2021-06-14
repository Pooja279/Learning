// console.log('hxbs')
// let element = document.createElement('li');
// element.className = 'childul'
// let ele = document.createTextNode('I am text');
// element.appendChild(ele)
// element.id = 'liid';
// element.setAttribute('title','mytitle');
// // element.innerText = "Hello this is created by puja";
// let ul = document.querySelector('ul','this')
// console.log(ul)
// ul.appendChild(element)
// console.log(element);


// let elem2 = document.createElement('h2');
// elem2.className = 'elem2';
// elem2.id = 'elem2';

// let text = document.createTextNode('i am created text node for elem2');
// elem2.appendChild(text);
// console.log(elem2);
// element.replaceWith(elem2);

// let myul = document.getElementById('myul');
// myul.replaceChild(element,document.getElementById('fui'));
// myul.removeChild(element,document.getElementById('lui'));
let quickquiz = document.createElement('h1');
quickquiz.className = 'qq';
quickquiz.id = 'qq';
let text = document.createTextNode("Go to code with harry");
quickquiz.appendChild(text);
quickquiz.setAttribute('href','http//codewithpuja.com');
let ul  = document.querySelector('ul','this')
ul.appendChild(quickquiz);
console.log(quickquiz);