// script.js

function saveNote() {
    const noteText = document.getElementById('noteText').value;
    localStorage.setItem('note', noteText);
    alert('Note saved!');
}

function loadNote() {
    const noteText = localStorage.getItem('note');
    if (noteText) {
        document.getElementById('noteText').value = noteText;
        alert('Note loaded!');
    } else {
        alert('No note found!');
    }
}

function clearNote() {
    document.getElementById('noteText').value = '';
    localStorage.removeItem('note');
    alert('Note cleared!');
}
