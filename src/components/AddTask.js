

import React, { useState } from 'react'
import ListTask from './Listtask'

function AddTask({addtask,theme,color}) {
    const [value, setValue] = useState("");
    const addItem = () =>{
        addtask(value)
        setValue("")
    }
    return (
        <>
            <div className={`${theme}`}>
                <h4 className={`${theme} pb-3 `} >Add Task</h4>
                <input type='text'  className={`${theme} addtask w-75 py-2 px-3 ${color}`} onChange={(e) => {
                    setValue(e.target.value)
                }} value={value}></input>
                <button className={` addbutton py-2 px-3 ${color}`} onClick={addItem}>Add</button>
            </div>

        </>
    )
}

export default AddTask