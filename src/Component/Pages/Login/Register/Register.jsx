import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result=>{
            const user =result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
       
    }

    return (
        <div className=" bg-base-200">
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
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                    <br />
                                    {/* <p className='text-error'>{error}</p> */}
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