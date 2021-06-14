let btn = document.getElementById('btn');
btn.addEventListener('click',func)
btn.addEventListener('dblclick',func2)
btn.addEventListener('mousedown',func3);
function func(e) {
     console.log("tnakyou",e)
    e.preventDefault()
}
function func2(e) {
    console.log("thank you for double click",e)
    e.preventDefault()
}
function func3(e) {
    console.log("thank you for mousedown",e)
    e.preventDefault()
}
document.querySelector('.no').addEventListener('mouseenter',function() {
    console.log('you enter no');
})
document.querySelector('.no').addEventListener('mouseleave',function() {
    console.log('you go from no');
})
    

