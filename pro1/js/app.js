// console.log("here js")
showNotes();
//If user add note,add it to localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    // console.log(notesObj);
    showNotes();
})
function showNotes() {
    let title = document.getElementById('title').value;
    console.log(title);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title"> ${title}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div> `;

    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        `Nothing to show! Use "Add Notes" section to above to add notes. `
    }

}
function deleteNote(index) {
    // console.log('i am deleteing', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxT');
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    // console.log('input event fire', inputval);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxT = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxT);
        if (cardTxT.includes(inputval)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })


})