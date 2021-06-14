document.getElementById('heading').addEventListener('click',function (e) {
    console.log('you have clicked in heading.')
    let variable = e.target;
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.clientX;
    console.log(variable);
});