let a = document.links;
let str = 'javascript';
let href
Array.from(a).forEach(element => {
    href = element.href;
    if(href.includes(str)){
        console.log(element)
    }
    
});
// console.log(a);