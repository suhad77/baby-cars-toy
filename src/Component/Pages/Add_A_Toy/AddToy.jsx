import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const AddToy = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.selerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const selerName = form.selerName.value;
        const quantity = form.quantity.value;
        const catagory = form.Catagory.value;
        const toy = { name, photoUrl, email, price, rating, description, selerName, quantity, catagory };


        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Update succrssfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Baby Car Toy | Add A Toy</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full">
                    <div className="card flex-shrink-0 shadow-2xl w-full bg-base-100">
                        <h2 className="text-center text-5xl mt-4">Add Toys</h2>
                        <form onSubmit={handleSubmit}>
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
                                            <select id="categories" name="Catagory" className="select select-primary">
                                                <option disabled selected>Catagory</option>
                                                <option value="regular">Regular Car</option>
                                                <option value="sport">Sports Car</option>
                                                <option value="old">Old Car</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="md:flex gap-4">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seler Email</span>
                                        </label>
                                        <input type="text" defaultValue={user?.email} disabled name="selerEmail" placeholder="Seler Email" className="input input-bordered" />
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
                                        <input type="text" defaultValue={user?.displayName} disabled name="selerName" placeholder="Seler Name" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="md:flex gap-4">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-9 md:w-1/2">
                                        <button className="btn bg-blue-700 hover:bg-blue-800">Add Toy</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;