import {useState} from 'react'
export default function TodoList(){
    const [list, setList] = useState(''); 
    return(
        <div>
            <h1> List of Todos : </h1>
        </div>
    )
}
