export default function handler(req, res){
    fetch("http://jsonplaceholder.typicode.com/todos")
    .then(data=>data.json())
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).json({error: err})
    });
}