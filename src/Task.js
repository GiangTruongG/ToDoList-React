import { FaEdit, FaTrash } from 'react-icons/fa';
import { useGlobalContext, AppContext } from "./context";

const Task = ({title, desc, time, date, id, deleteTask}) => {
    const {
        tasklist, 
        fetchData,
        setTitle,
        setDesc,
        setTime,
        setDate,
        setIsEditing,
        setEditingID
    } = useGlobalContext();

    const editTask = (id) => {
        setIsEditing(true);
        setEditingID(id);
        setTitle(title);
        setDesc(desc);
        setTime(time);
        setDate(date); 
    };


    return ( 
        <div className="task">
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p>{time} - {date}</p>
            </div>
            <div>
                <button className='edit-btn' onClick={() => editTask(id)}>
                    <FaEdit />
                </button>
                <button className='delete-btn' onClick={() => deleteTask(id)}>
                    <FaTrash />
                </button>
            </div>

        </div>
     );
}
 
export default Task;
