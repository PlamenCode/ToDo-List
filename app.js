const input = document.getElementById('input-box');
const list = document.getElementById('list-container');
const addBtn = document.getElementById('addBtn');
const container = document.querySelector('container');

const authContainer = document.querySelector('authentication');
const form = document.querySelector('form');

getData();

addBtn.addEventListener('click', () => {
    if(input.value == ''){
        alert('No task has been added. Please write your task and THEN click Add.');
        return;
    };
    let cross = document.createElement('span');
        cross.innerHTML = '\u00d7';

    let li = document.createElement('li');
        li.innerHTML = input.value;
        li.appendChild(cross);

    list.appendChild(li);
    input.value = '';
    saveData();
});


list.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem('data', list.innerHTML)
};

function getData(){
    list.innerHTML = localStorage.getItem('data');
}

