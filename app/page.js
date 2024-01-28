"use client"
import TodoTableRo from "@/Components/TodoTableRo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  const [tododata, setTododata] = useState([]);


  // const handaleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const title = form.title.value;
  //   const discription = form.discription.value;
  //   const formdata = { title, discription }
  //   console.log("form data", formdata);

  // }


  const onChangeHandaler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));


  }

  const submitHandaler = async (e) => {
    e.preventDefault();

    try {
      // todo api code
      const response = await axios.post('/api', formData)

      toast.success(response.data.msg)
      setFormData({
        title: "",
        description: "",
      })

      fetchToto();
    } catch (error) {
      toast.error("Shomthing a Worng")

    }
  };



  const fetchToto = async () => {
    const response = await axios("/api")
    setTododata(response.data.data);
  }


  const deleteTodo = async (id) => {
    const response = await axios.delete('/api', {
      params: {
        _id: id
      }
    })
    toast.success(response.data.msg);
    fetchToto();
  }


  const Complated = async (id) => {
    const response = await axios.put("/api", {}, {
      params: {
        _id: id
      }

    })
    toast.success(response.data.msg)
    fetchToto()
  }


  useEffect(() => {
    fetchToto()
  }, [])
  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-5 bg-slate-500 w-[50%] mx-auto p-2 text-4xl font-bold text-black rounded">Todo App</h1>
      <hr />
      <form onSubmit={submitHandaler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-12 px-2 mx-auto">
        <label>Title:</label>
        <input value={formData.title} onChange={onChangeHandaler} type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
        <label >Descriptions:</label>
        <textarea value={formData.description} onChange={onChangeHandaler} name="description" placeholder="Enter Description" className="px-3 py-3 border-2 w-full" ></textarea>
        {/* <input type="submit" value="Add-Todo" className="bg-blue-500 p-2 hover:font-bold my-2 rounded" /> */}
        <button className="bg-blue-500 p-2 hover:font-bold my-2 rounded" type="submit"> Add Todo</button>
      </form>

      {/* Table Form */}

      <div>
        <div className="relative overflow-x-auto mt-10 w-[60%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              {tododata?.map((todo, index) => {
                return <TodoTableRo key={index} id={index} todo={todo} Complated={Complated} deleteTodo={deleteTodo} />
              })}

            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
