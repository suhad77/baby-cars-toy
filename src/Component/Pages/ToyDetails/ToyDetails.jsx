import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'


const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy)


    return (
        <section className="container mx-auto bg-white ">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 justify-items-center">
                <div className="max-w-xs mx-auto">
                    <img
                        className="w-full rounded-lg"
                        src={toy?.photoUrl}
                    />
                </div>

                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        {toy?.name}
                    </h2>
                    <p className="mb-4">{toy?.description}</p>

                        <Rating
                            style={{ maxWidth: 120 }}
                            value={toy?.rating}
                            readOnly
                        />
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${toy?.price}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;