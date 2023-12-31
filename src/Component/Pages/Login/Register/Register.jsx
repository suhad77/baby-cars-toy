import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createUser, profileUpdate, setLoading } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password);
        if (password.length < 6) {
            setError("Password length must be up to 6 char");
            return;
        }

        try {
            setError("");
            setLoading(true);
            const { user } = await createUser(email, password);
            await profileUpdate(user, name, url);
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <div className=" bg-base-200">
            <Helmet>
                <title>Baby Car Toy | Register</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center mb-4">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-normal">
                                                <input type="checkbox" className="checkbox me-2" />
                                                <span className="label-text">Terms and Conditions</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-blue-700 hover:bg-blue-800">Register</button>
                                    </div>
                                    <br />
                                    <p className='text-error'>{error}</p>
                                </form>
                                <p className="text-green-500">Already Have an Account? <Link to="/login" className="text-pink-600">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;