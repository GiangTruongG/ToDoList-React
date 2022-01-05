import React, { useState, useEffect } from "react";
import Task from "./Task";
import { useGlobalContext, AppContext } from "./context";

const Rightside = () => {
    const {
        tasklist, 
        fetchData,
        setTitle,
        setDesc,
        setTime,
        setDate,
        setIsEditing,
        setEditingID,
        setSearchTerm,
        searchTerm,
        setIsSearch
    } = useGlobalContext();

    const deleteTask = async (id) => {
        await fetch('https://61d59d662b4f730017a82957.mockapi.io/tasks/' + id, {
            method: 'DELETE'
        })
        fetchData();
    };


    return ( 
        <section className="right-side">
            <h3>Task List</h3>
            <form className="form-right-container">
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button onClick={(e) => e.preventDefault()}>Search here</button>
            </form>
            <div className="task-list">
                {tasklist.length > 0 && 
                    tasklist.map(task => {
                        return <Task key={task.id} {...task} deleteTask={deleteTask} />
                    })
                }
            </div>
        </section>
     );
}
 
export default Rightside;