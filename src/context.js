import React, { useState, useContext, useEffect } from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [tasklist, setTaskList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingID] = useState(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const fetchData = async () => {
        if(searchTerm.length > 0){
            const response = await fetch('https://61d59d662b4f730017a82957.mockapi.io/tasks?search=' + searchTerm);
            const data = await response.json();
            setTaskList(data);
            return setIsSearch(false);
        } else {
            const response = await fetch('https://61d59d662b4f730017a82957.mockapi.io/tasks');
            const data = await response.json();
            setTaskList(data);
            return setIsSearch(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [tasklist.length, searchTerm]);

    return <AppContext.Provider value={{
        tasklist,
        setTaskList,
        fetchData,
        isEditing,
        setIsEditing,
        editingId,
        setEditingID,
        title,
        desc,
        time,
        date,
        setTitle,
        setDesc,
        setTime,
        setDate,
        setSearchTerm,
        searchTerm,
        setIsSearch
    }}>{children}</AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}