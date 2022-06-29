export async function getAllTodos(){
    let todos;
    await fetch("http://jsonplaceholder.typicode.com/todos")
    .then(data=>data.json()).then(data=>{
        todos = data;
    });
    return todos;
}