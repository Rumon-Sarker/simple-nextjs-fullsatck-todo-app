import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";

const TodoRo = ({ todo, Complated, id, deleteTodo }) => {
    const { description, _id, title, Statuss } = todo;
    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {id + 1}
            </th>
            <td className={`px-6 py-4 ${Statuss ? "line-through" : ""}`}>
                {title}
            </td>
            {Statuss ? <td className="px-6 py-4 text-green-500 line-through">
                {description}
            </td> : <td className="px-6 py-4">
                {description}
            </td>}
            <td className="px-6 py-4">
                {Statuss ? "Complated" : "Pending"}
            </td>
            <td className="px-6 py-4">
                {Statuss ? "" : <button onClick={() => Complated(_id)} className={`bg-green-800 text-white font-bold text-sm p-2 rounded`}><FaCheck /></button>}
            </td>
            <td><button onClick={() => deleteTodo(_id)} className='bg-red-700 text-white p-2 text-xl ml-5 rounded'><MdDelete /></button></td>
        </tr>

    );
};

export default TodoRo;