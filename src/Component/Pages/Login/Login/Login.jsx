import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const googleUser = result.user;
            console.log(googleUser)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="bg-base-200">
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
                                        <button className="btn btn-primary">Login</button>
                                    </div>
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