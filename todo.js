let output=document.getElementById('output');
let btn=document.getElementById('add');
let todo=document.getElementById('todo');
let todovalue=[];
window.onload=()=>{
    todovalue=JSON.parse(localStorage.getItem('todoArray')) || [];
    todovalue.forEach(todo=>showData(todo))
}
btn.addEventListener('click', ()=>{
    todovalue.push(todo.value);    
    showData(todo.value);
    localStorage.setItem('todoArray',JSON.stringify(todovalue));
    todo.value="";
})
function showData(todoData){
    let li=document.createElement('li');
    li.id=todovalue.indexOf(todoData);
    li.className='list-group-item fs-4';
    li.innerHTML= `<p id="${todovalue.indexOf(todoData)}">${todoData}<button class="btn btn-danger"  onclick=deleteData(${todovalue.indexOf(todoData)})>Delete</button></p>`;
    output.appendChild(li);
}
function deleteData(index){
    console.log(index);
    if(index>-1){        
    todovalue.splice(index,1);  
    }   
    localStorage.setItem('todoArray',JSON.stringify(todovalue));
    let childid= document.getElementById(index);
    output.removeChild(childid);
}
