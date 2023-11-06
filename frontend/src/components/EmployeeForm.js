import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {createUser, getAllUser} from '../features/todoSclice'


const EmployeeForm = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    department: "",
    title: "",
    image: ""
  });

  function changeHandler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

    function onSubbmitHandler() {
      dispatch(createUser(formData))
      dispatch(getAllUser())
      navigate('/')
    }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" method="POST"
        action="/submit"
        onSubmit={onSubbmitHandler}>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" name="name" placeholder="John Doe" required
            onChange={changeHandler}
            value={formData.name}
          />
        </div>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role" type="text" name="role" placeholder="Manager" required
            onChange={changeHandler}
            value={formData.role}
          />
        </div>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" name="email" placeholder="example@example.com" required
            onChange={changeHandler}
            value={formData.email}
          />
        </div>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department" type="text" name="department" placeholder="Sales" required
            onChange={changeHandler}
            value={formData.department}
          />
        </div>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title" type="text" name="title" placeholder="Project Manager" required
            onChange={changeHandler}
            value={formData.title}
          />
        </div>
        <div className="mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image" type="url" name="image" placeholder="https://example.com/image.jpg" required
            onChange={changeHandler}
            value={formData.image}
          />
        </div>
        <div className="flex items-center justify-between">
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default EmployeeForm;
