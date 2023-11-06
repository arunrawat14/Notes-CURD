import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../features/todoSclice';
import { Link } from 'react-router-dom';
import {deleteUser} from '../features/todoSclice'

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dispatch the action to fetch user data when the component mounts
    dispatch(getAllUser())
      .then(() => {
        setIsLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false even in case of an error
      });
  }, [dispatch]);

  function handleDelete(id) {
    console.log(id);
    dispatch(deleteUser(id))
      .then((response) => {
        console.log("Delete success:", response);
        // Trigger a refresh of user data by dispatching getAllUser again
        dispatch(getAllUser());
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
  }

  return (
    <div>
    <section className="container px-4 mx-auto py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Employees
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            This is a list of all employees. You can add new employees, edit, or delete existing ones.
          </p>
        </div>
        <Link to="/add">
          <div>
            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
              Add Employee
            </button>
          </div>
        </Link>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Employee</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Role
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {isLoading ? (
                    <tr>
                      <td colSpan="4">Loading...</td>
                    </tr>
                  ) : (
                    data.users.data.map((person) => (
                      <tr key={person.name}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.department}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {person.role}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          <Link to={`/edit/${person._id}`} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</Link>
                          <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(person._id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
