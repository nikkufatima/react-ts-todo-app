import {useState} from 'react'
export default function TodoInput(props: any){
    const [input, setInput] = useState('');
    const handleClick = () => {
        props.onAddTodo({
                            id: Date.now(),
                            text: input,
                            completed: false,    
                        });
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
            <button style={{margin: "10px"}}
                disabled = {input === ''} 
                onClick={handleClick}
            >
                Add
            </button>
        </div>
    )
}
