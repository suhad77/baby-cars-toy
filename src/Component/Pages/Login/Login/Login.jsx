import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [error, setError] = useState("")
    const { signIn, googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => setError(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Baby Car Toy | Log in</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center mb-4">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-blue-700 hover:bg-blue-800">Login</button>
                                    </div>
                                    <br />
                                    <p className='text-error'>{error}</p>
                                </form>
                                <button onClick={handleGoogleSignIn} className="text-5xl ml-5"><FaGoogle className="border-4 p-2"></FaGoogle></button>
                                <p className="text-green-500">Do not Have an Account? <Link to="/register" className="text-pink-600">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;