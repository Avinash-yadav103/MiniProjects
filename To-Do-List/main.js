let input = document.getElementById('input');
let ul = document.getElementById('list-container');

function addTask(){
    if(input.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = '';

        let removeButton = document.createElement('i');
        removeButton.classList.add('fa-solid', 'fa-x');
        // removeButton.innerHTML = 'Remove';
        li.appendChild(removeButton);
        removeButton.onclick = function(){
            ul.removeChild(li);
        }
    }
}

// function removeTask(){
//     ul.removeChild();
// }