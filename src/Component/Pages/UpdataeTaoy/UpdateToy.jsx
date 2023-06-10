import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {

    const toyInfo = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const Catagory = form.Catagory.value;
        const toy = { name, photoUrl, price, rating, description, quantity, Catagory };

        fetch(`http://localhost:5000/myToys/${toyInfo?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added succrssfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full">
                    <div className="card flex-shrink-0 shadow-2xl w-full bg-base-100">
                        <h2 className="text-center text-5xl mt-4">Update Toys</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="md:flex gap-4">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={toyInfo?.name} placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Picture URL of the toy</span>
                                        </label>
                                        <input type="text" placeholder="photoUrl" defaultValue={toyInfo?.photoUrl} name="photoUrl" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="md:flex gap-4">
                                    <div className="md:w-1/2">
                                        <div className="form-control w-full max-w-xs" defaultValue={toyInfo?.Catagory}>
                                            <label className="label">
                                                <span className="label-text">Sub Catagory</span>
                                            </label>
                                            <select name="Catagory" className="select select-primary">
                                                <option disabled selected>Catagory</option>
                                                <option>Regular Car</option>
                                                <option>Sports Car</option>
                                                <option>Old Car</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={toyInfo?.price} placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="md:flex gap-4">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" defaultValue={toyInfo?.rating} className="input input-bordered" />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">description</span>
                                        </label>
                                        <input type="text" name="description" defaultValue={toyInfo?.description} placeholder="description" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="md:flex gap-4">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name="quantity" defaultValue={toyInfo?.quantity} placeholder="Available quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-9 md:w-1/2">
                                        <button className="btn bg-blue-700 hover:bg-blue-800">Update Toy</button>
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

export default UpdateToy;