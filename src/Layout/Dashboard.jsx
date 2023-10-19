import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUser,
  FaCheckSquare,
  FaMoneyCheckAlt
} from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import '../Pages/Dashboard/AdminPanel/Addbooks.css'


const Dashboard = () => {

  const [isAdmin]=useAdmin();
 
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center books">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-96 h-full bg-slate-300 text-2xl">
            {
            isAdmin ? (
              <>
              <h1 className="text-3xl font-semibold text-orange-500 py-4"> Admin Dashboard</h1>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addBook">
                     <FaUser></FaUser>Add Books
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/selectedClasses">
                    <FaCheckSquare></FaCheckSquare> Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                   <FaMoneyCheckAlt></FaMoneyCheckAlt>Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider text-white"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/"><FaUser></FaUser>All classes</NavLink>
            </li> */}
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;