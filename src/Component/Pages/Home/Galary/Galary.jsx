import { useEffect } from "react";
import { useState } from "react";


const Galary = () => {

    const [Toys , setToys] = useState([])

    useEffect(() => {
        fetch(`https://baby-cars-toys-server-suhad77.vercel.app/allToys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <section className=" container mx-auto px-2 py-6">
                <div className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                    Gallery Section
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {Toys?.map(photo => (
                        <div data-aos="top-bottom" key={photo._id}>
                            <div className="w-full h-full">
                            <img className="rounded-lg w-full h-full" src={photo.photoUrl} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Galary;