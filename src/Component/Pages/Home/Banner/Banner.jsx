
const Banner = () => {
    return (
        <div>
            <div className="hero bg-cover bg-no-repeat w-full" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1600'})`, height:'70vh' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">SALE OF NEW AND OLD CAR</h1>
                        <p className="mb-5 text-3xl">shop and get an extra 10% off your first purchase</p>
                        <button className="btn bg-blue-700 hover:bg-blue-800">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;