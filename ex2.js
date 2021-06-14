divelem = document.createElement('div');
let text;
let val = localStorage.getItem('text');

if(val==null){
    let text =document.createTextNode("this is text");
    divelem.appendChild(text);
}else{
    text = document.createTextNode(val);
    divelem.appendChild(text);
}



divelem.setAttribute('id','elem')
divelem.setAttribute('class','elem')
divelem.setAttribute('style','border:2px');

console.log(divelem);
let container = document.querySelector('.container')
console.log(container);
let first = document.getElementById('myul');
console.log(first);

container.insertBefore(divelem,first);

divelem.addEventListener('click',function () {
    let noTextarea = document.getElementsByClassName('textarea').length
    if(noTextarea == 0){
        let html =  elem.innerHTML;
        divelem.innerHTML =   `<textarea class="textarea  form-control" id="Textarea" rows="3">${html}</textarea>`

    }
    let textarea = document.querySelector('.elem');
    textarea.addEventListener('blur',function () {
        elem.innerHTML = textarea.nodeValue;
        localStorage.setItem('text',textarea.value);
        
    })
   
    

})



