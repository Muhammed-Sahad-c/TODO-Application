import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import AddTask from './AddTask'
import ListTask from './Listtask';
function Todohome() {
    const [tasks, setTasks] = useState([{ title: false }])
    const [theme, setTheme] = useState('bg-light text-dark')
    const [themeButton, setThemeButton] = useState('/light.png');
    const [colorTheme, setColorTheme] = useState('bg-info')

    const addTask = (title) => {
        let newTask = [...tasks, { title }]
        setTasks(newTask)
    }

    const removeTask = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }

    const changeTheme = () => {
        if (themeButton == '/dark.png') {
            setTheme('bg-light text-dark')
            setThemeButton('/light.png')
        } else {
            setThemeButton('/dark.png')
            setTheme('bg-dark text-white')
        }
    }


    return (
        <>
            <div className={`body ${theme}`}>
                <div className='container-fluid'>
                    <div className={`row d-flex justify-content-center align-items-center py-5 flex-column ${theme}`} >
                        <div className='col-12 col-md-12 py-3 text-center outerbody'>
                            <div className='py-4'>
                                <h3 className={`${theme}`}>TO DO APP </h3>
                                <div className='row mt-5 d-flex justify-content-center align-items-center'>
                                    <div className={`text-center ${theme}`}>
                                        <div className={`${theme} settings`}>
                                            <button className={` px-2 py-2 border-0 ${theme}`} onClick={changeTheme}>
                                                <img src={`${themeButton}`}></img>
                                            </button>
                                            <button className='bg-info p-2 mx-1 colors'></button>
                                            <button className='bg-success p-2 mx-1 colors'></button>
                                            <button className='bg-warning p-2 mx-1 colors'></button>
                                            <button className='bg-danger p-2 mx-1 colors'></button>

                                        </div>
                                    </div>
                                    <div className='col-12 col-md-7 divider mx-1 my-2 my-md-53 p-3'>
                                        <AddTask addtask={addTask} theme={theme}  color={colorTheme}></AddTask>
                                    </div>
                                    <div className='col-12 col-md-7 divider mx-1 my-2 my-md-53 p-3'>
                                        <h5 className={`${theme} text-center`}>Tasks</h5>
                                        {
                                            tasks.map((tasks, index) => (
                                                <ListTask theme={theme} task={tasks} remove={removeTask} index={index} key={index} color={colorTheme}> </ListTask>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todohome