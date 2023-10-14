import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar fixed bg-opacity-50 z-20 font-semibold text-white bg-black w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 text-black rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {
                isAdmin ? <li>
                  <Link to='/dashboard/adminhome'>Dashboard</Link>
                </li> :
                  <li>
                    <Link to='/dashboard/userhome' >Dashboard</Link>
                  </li>
              }

              {user ? (
                <>
                  <img className=" h-10 rounded-full mx-2" src={user?.photoURL} alt="" />
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log-Out
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                </>
              )}

            </ul>
          </div>
          <a className="btn btn-ghost lg:text-3xl text-lg">
            Library Management System
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-12 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            {
              isAdmin ? <li>
                <Link to='/dashboard/adminhome'>Dashboard</Link>
              </li> :
                <li>
                  <Link to='/dashboard/userhome' >Dashboard</Link>
                </li>
            }
            {user ? (
              <>
                <img className=" h-10 rounded-full mx-2" src={user?.photoURL} alt="" />
                <button onClick={handleLogOut} className="btn btn-ghost">
                  Log-Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="login">Login</Link>
                </li>
              </>
            )}

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
