// import CustomerReview from "./CustomerReview/CustomerReview";
// import Slider from "./Slider";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const HappyClient = () => {
    return (
        <div className="container mx-auto my-6">
            <div className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                <h2>Client Review</h2>
            </div>
            <div className="carousel w-full">
                
                <div id="slide1" className="border-4 bg-blue-700 text-white carousel-item relative w-full text-center">
                    <div className=" mx-auto">
                    <h2 className="py-3">Shakil</h2>
                        <p className="py-3">Excellent, I truly loved this textRanch for quick revision. This textRanch for quick revision is a 10/10 for me.</p>
                        <Rating
                            className="mx-auto py-3"
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="border-4 bg-blue-700 text-white carousel-item relative w-full text-center">
                    <div className=" mx-auto">
                    <h2 className="py-3">Rumi</h2>
                        <p className="py-3">It helps a lot when doing school work better than grammerly</p>
                        <Rating
                            className="mx-auto py-3"
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="border-4 bg-blue-700 text-white carousel-item relative w-full text-center">
                    <div className=" mx-auto">
                    <h2 className="py-3">Marjan</h2>
                        <p className="py-3">My editor understood my intention and gave me a good advice !! Thank you !!</p>
                        <Rating
                            className="mx-auto py-3"
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="border-4 bg-blue-700 text-white carousel-item relative w-full text-center">
                    <div className=" mx-auto">
                    <h2 className="py-3">Rakib</h2>
                        <p className="py-3">The most useful app that I have ever found.I truly appreciate your efforts</p>
                        <Rating
                            className="mx-auto py-3"
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;