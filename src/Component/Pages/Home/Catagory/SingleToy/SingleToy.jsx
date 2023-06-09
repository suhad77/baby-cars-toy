import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'



const SingleToy = ({ toy }) => {

    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={toy?.photoUrl} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {toy?.name} </h5>
                <Rating
                            style={{ maxWidth: 120 }}
                            value={toy?.rating}
                            readOnly
                        />
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${toy?.price}</span>
                    <Link to={`/details/${toy?._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                </div>
            </div>
        </div>


    );
};

export default SingleToy;