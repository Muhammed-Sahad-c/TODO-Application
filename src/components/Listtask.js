import React from 'react'


function Listtask({ task, remove, index , theme , color }) {
    const css = `
    .my-element {
        background-color:green;
        display:none;
    }
`
    if (task.title === false) {
        return (
            <>
                <div className={`py-3 ${theme}`}>
                    <small className={`my-element px-5 ${theme}`} >no saved tasks</small>
                </div>
            </>
        )
    } else {
        return (
            <>
                <style>{css}</style>
                <div className={`py-3 ${theme}`}>
                    <div className='tasks row d-flex justify-content-center px-5'>
                        <div className='col-9 bg-warning px-lg-5 px-0 rounded py-3 overflow-hidden'>
                            <div>
                                <p>
                                    {task.title}
                                </p>
                            </div>
                        </div>
                        <div className='col-3 d-flex justify-content-flex-end align-items-center px-md-5 px-0'>
                            <div>
                                <button className={`addbutton py-1 px-3 ${color}`} onClick={() => {
                                    remove(index);
                                }}>Dlt</button>
                            </div>
                        </div>
                    </div>
                    {/* <input type='text' className='addtask w-75 py-2 px-3 text-uppercase bg-dark opacity-50' value={task.title} readOnly></input> */}
                </div>
            </>
        )
    }
}

export default Listtask  