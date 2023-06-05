import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddToy = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full">
                    <div className="card flex-shrink-0 shadow-2xl w-full bg-base-100">
                    <h2 className="text-center text-5xl mt-4">Add Toys</h2>
                        <div className="card-body">
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Picture URL of the toy</span>
                                    </label>
                                    <input type="text" placeholder="photoUrl" name="photoUrl" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex gap-4">
                                <div className="md:w-1/2">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Sub Catagory</span>
                                        </label>
                                        <select className="select select-primary">
                                            <option disabled selected>Select</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                            <option>Lord of the Rings</option>
                                            <option>Planet of the Apes</option>
                                            <option>Star Trek</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="Price" placeholder="Price" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="Rating" placeholder="Rating" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seler Email</span>
                                    </label>
                                    <input type="text" name="selerEmail" placeholder="Seler Email" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="description" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seler Name</span>
                                    </label>
                                    <input type="text" name="selerName" placeholder="Seler Name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 md:w-1/2">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;