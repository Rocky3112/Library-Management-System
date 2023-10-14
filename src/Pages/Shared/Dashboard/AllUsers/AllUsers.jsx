/* eslint-disable no-unused-vars */

import { useQuery } from "react-query";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet";



const AllUsers = () => {
  
    return (
        <div className="w-full">
            <Helmet>
                <title>LMS | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn  bg-slate-600 hover:bg-orange-600 text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button  onClick={() => handleDelete(user)} className="btn bg-slate-600 hover:bg-red-700  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;