import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ContactUs from "../ContactUs/ContactUs";
import Galary from "../Galary/Galary";
import HappyClient from "../HappyClient/HappyClient";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baby Car Toy | Home</title>
            </Helmet>
            <Banner />
            <Galary />
            <Catagory />
            <HappyClient />
            <ContactUs />
        </div>
    );
};

export default Home;