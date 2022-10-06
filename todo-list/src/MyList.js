import React, { useState } from 'react'
import './App.css'
import ListItem from './ListItem'

function MyList(props) {
    const [tasks, setTasks] = useState(props.theList);
    const [newItem, setNewItem] = useState('');

    const clearList = () => {
        console.log('clearing list...');
        setTasks([]);
    }

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        let newList = tasks;
        newList.push(newItem);
        setTasks(newList);
        setNewItem('');
    } 

    const renderTodoItems = () => {
        let todoItems = tasks.map((item, index) => {
            return <ListItem task={item} key={`todo${index}`} />
        });
        return todoItems;
    }
    
    return (
        <div className='text'>
            <h1>Things I should stop procrastinating:</h1>
            <form onSubmit={addItem}>
                <input type="text" value={newItem} onChange={handleChange}/>
                <button type="submit">Add To List</button>
            </form>
            <ul>
                {renderTodoItems()}
            </ul>
            <button onClick={clearList}>Clear List</button>
        </div>
    )

}

export default MyList;