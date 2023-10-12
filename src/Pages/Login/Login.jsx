import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import login from '../../assets/login.png';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {
        handleSubmit,
        control,
        formState: { errors },
    }= useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (data) => {
        const email = data.email;
        const password = data.password;
        const result = await signIn(email, password);
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
        });
        navigate(from, { replace: true });
    };

    return (
        <>
            <Helmet>
                <title>Sports Camp | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img src={login} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Email is required' }}
                                    render={({ field }) => <input {...field} type="email" placeholder="email" className="input input-bordered" />}
                                />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Password is required' }}
                                        render={({ field }) => <input {...field} type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" />}
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword((prevShow) => !prevShow)}
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="text-xl" />
                                        ) : (
                                            <FiEye className="text-xl" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {/* You can add your LoadCanvasTemplate and handleValidateCaptcha here */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center text-blue-800 text-xl pb-2">
                            <small>
                                New Here? <Link to="/signup">Create an account</Link>
                            </small>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;
