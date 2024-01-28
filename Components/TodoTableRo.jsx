import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";

const TodoTableRo = ({ todo, Complated, id, deleteTodo }) => {
    const { description, _id, title, Status } = todo;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {id + 1}
            </th>
            <td className={`px-6 py-4 ${Status ? "line-through" : ""}`}>
                {title}
            </td>
            <td className={`px-6 py-4 ${Status ? "line-through" : ""}`}>
                {description}
            </td>
            <td className="px-6 py-4">
                {Status ? "Complated" : "Pending"}
            </td>
            <td className="px-6 py-4">
                {Status ? "" : <button onClick={() => Complated(_id)} className={`bg-green-800 text-white font-bold text-sm ${Status ? "disabled" : ""} p-2 rounded`}><FaCheck /></button>}
            </td>
            <td><button onClick={() => deleteTodo(_id)} className='bg-red-700 text-white p-2 text-xl ml-5 rounded'><MdDelete /></button></td>
        </tr>
    );
};

export default TodoTableRo;


