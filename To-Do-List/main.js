let input = document.getElementById('input');
let ul = document.getElementById('list');

function addTask(){
    if(input.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
    }
}