import {useState} from 'react'
export default function TodoInput(props: any){
    const [input, setInput] = useState('');
    const handleClick = () => {
        props.onAddTodo(input);
        setInput("");

    } 
    const handleChange = (e: any ) => {
       setInput(e.target.value);
    }
    return(
        <div>
            <input 
                placeholder='Task to add...'
                value={input}
                onChange={handleChange}
            />
            <button
                disabled = {input === ''} 
                onClick={handleClick}
            >
                Add
            </button>
        </div>
    )
}
