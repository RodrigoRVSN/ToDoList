const list = document.querySelector('.list');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos")==undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify);
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
    constructor(name){
        this.createDiv(name);
    }
    createDiv(name){
        let input = document.createElement('input');
        input.value = name;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML="EDIT";
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML="X";
        removeButton.classList.add('removeButton');

        list.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        
        editButton.addEventListener('click',()=>this.edit(input,name));
        removeButton.addEventListener('click',()=>this.remove(itemBox,name));
        
    }
    edit(input,name){
        if(input.disabled==true){
            input.disabled = !input.disabled;
        }
        else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof]=input.value;
            window.localStorage.setItem("todos",JSON.stringify(todos));
        }
    }
    remove(itemBox,name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index,1);
        window.localStorage.setItem("todos",JSON.stringify(todos));
    }
}

function check(){
    if(inputValue.value != ""){
        new item(inputValue.value);
        todos.push(inputValue.value)
        window.localStorage.setItem("todos", JSON.stringify(todos));
            inputValue.value = "";
        }
    }
    
    for(var i=0;i<todos.length;i++){
        new item(todos[i]);
    }
    
    add.addEventListener('click', check);
    
    window.addEventListener('keydown',(e)=>{
        if(e.which==13){
            check();
        }
    })
    