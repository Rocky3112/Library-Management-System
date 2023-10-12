import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://sports-camp-server-lemon.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center py-5">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-blue-600">
          <FaGoogle></FaGoogle></button>
      </div>
    </div>
  );
};

export default SocialLogin;
