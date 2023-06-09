import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Galary from "../Galary/Galary";
import HappyClient from "./HappyClient/HappyClient";


const Home = () => {
    return (
        <div>
            <Banner />
            <Galary />
            <Catagory />
            <HappyClient />
        </div>
    );
};

export default Home;