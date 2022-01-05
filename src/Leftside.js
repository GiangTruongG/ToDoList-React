import React, { useState, useContext, useEffect } from "react";
import { useGlobalContext } from "./context";

const Leftside = () => {
    const {
        fetchData, 
        title, 
        desc, 
        time, 
        date,
        setTitle,
        setDesc,
        setTime,
        setDate,
        isEditing,
        setIsEditing,
        editingId,
        tasklist,
        setTaskList
    } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title, desc, time, date};

        if(isEditing){

            
            fetch('https://61d59d662b4f730017a82957.mockapi.io/tasks/' + editingId, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, desc, time, date})
            }).then(() => {
                fetchData();
                setTitle('');
                setDesc('');
                setTime('');
                setDate('');
                setIsEditing(false);
            }).catch(error => {
                console.log(error);
            })
        } else {
            fetch('https://61d59d662b4f730017a82957.mockapi.io/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
            }).then(() => {
                fetchData();
                setTitle('');
                setDesc('');
                setTime('');
                setDate('');
            })
        }
    }


    return ( 
        <section className="left-side">
            <h3>{isEditing ? 'Edit Task' : 'Add Task'}</h3>
            <form className="form-left-container" onSubmit={handleSubmit}>
                <label>Task: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Task Description: </label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                <label>Time: </label>
                <input type='text' value={time} onChange={(e) => setTime(e.target.value)}></input>
                <label>Date: </label>
                <input type='text' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <p><button>
                    {isEditing ? 'Edit' : 'Add'}
                    </button></p>
            </form>
        </section>
     );
}
 
export default Leftside;