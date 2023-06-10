import { useEffect } from "react";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Toys from "./Toys/Toys";

const Catagory = () => {

    const [categories, setCategories] = useState('sports');

    const [toys, setToys] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/allToys?catagory=${categories}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [categories])


    return (
        <div className="container mx-auto">
            <section className=" container mx-auto px-2 py-6">
                <div className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                    Toy Category Section
                </div>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => setCategories('sports')}>Sports Car</Tab>
                            <Tab onClick={() => setCategories('regular')}>Regular Car</Tab>
                            <Tab onClick={() => setCategories('old')}>Old Car</Tab>
                        </TabList>
                        <TabPanel >
                            <Toys toys={toys} ></Toys>
                        </TabPanel>
                        <TabPanel >
                            <Toys toys={toys} ></Toys>
                        </TabPanel>
                        <TabPanel >
                            <Toys toys={toys} ></Toys>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

export default Catagory;