import {useState} from 'react'
export default function TodoList(props: any){
    const [list, setList] = useState(''); 
    console.log(`This is displayed from TodoList ${props.todos}`);
    const tasks = props.todos;

    return(
        <div>
            <h3> TODOS</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
                {tasks.map((item:any, index: number) =>(
                    <li>
                        <label style={{margin: '5px'}}></label>
                        <span style={{margin: '5px'}}>{index+1}.</span>
                         {item.text.toUpperCase()}
                        <button
                         style={{ margin: '5px'}}
                         onClick={() => props.onToggleTodo(item.id)}
                         >
                          {(item.completed)?<span style={{backgroundColor: 'lightblue'}}>Completed</span>:<span style={{backgroundColor: 'pink'}}>Incomplete</span>}
                        </button> 
                        <button 
                        style={{margin: '5px', backgroundColor: 'lightgrey'}}
                        onClick={() => props.onRemoveTodo(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))
                }
               </ul>
        </div>
    )
}
