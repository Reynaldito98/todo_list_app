// ***************   DECLARING VARIABLES     *************************
const userTemplate = document.querySelector('#template').content;
const userList = userTemplate.querySelector('.list-item').cloneNode(true);
const list = document.querySelector('.container__list');
const input = document.querySelector('#input');
const addButton = document.querySelector('.content__button');
const checkBox = list.querySelectorAll('.list-item__button_clicked');

//**************** FUNCTION DECLARATION ******************************
function addTodoItem(){
    const userList = userTemplate.querySelector('.list-item').cloneNode(true);

    if(input.value===""){
        alert("You must write something");
    }
    else{
        const checkBox = userList.querySelector('.list-item__button_clicked');
        const content = userList.querySelector('.list-item__content');
        const closeButton = userList.querySelector('.list-item__button_margin');

        userList.querySelector('.list-item__content').textContent = input.value;
        list.append(userList);

        checkBox.addEventListener('click', function(evt){
            evt.target.classList.toggle('list-item__button_checked');
            content.classList.toggle('list-item__content_text-decoration_line-through');
        })

        closeButton.addEventListener('click', function(){
            userList.remove();
        })
    }
}

//**************** EVENT LISTENERS *************************************
addButton.addEventListener('click', addTodoItem);