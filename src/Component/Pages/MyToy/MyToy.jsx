import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyToy = () => {

    const [toys, setToys] = useState();
    const [sort, setSort] = useState();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://baby-cars-toys-server-suhad77.vercel.app/myToys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user?.email, sort])

    const handleDelete = (_id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://baby-cars-toys-server-suhad77.vercel.app/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setToys((previous) => previous.filter((toy) => toy._id !== _id))
                        }
                    })
            }
        })
    }
    return (
        <section className="container mx-auto">
            <Helmet>
            <title>Baby Car Toy | My Toy</title>
            </Helmet>
            <div className="flex items-center justify-end my-3">
                <p className="mr-2 font-semibold uppercase" >Sort by price : </p>
                <select
                    name="cetagory"
                    onChange={(event) => setSort(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-fit cursor-pointer"
                >
                    <option value="">select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {
                            toys?.map(toy => <MyToyRow
                                toy={toy}
                                key={toy._id}
                                handleDelete={handleDelete}
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyToy;