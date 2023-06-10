
const ContactUs = () => {
    return (
        <div>
                    <div className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                        Contact Us
                    </div>
            <div className="hero my-6 shadow-2xl ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="card flex-shrink-0 w-full-smbg-base-100 md:w-[75%]">
                        <div className="p-[2rem]">
                            <h3 className="text-4xl">
                                <span className="test-gray-lite dark:text-[#A6A6A6]">I'm always open to discussing product</span> <br />
                                <span className="font-semibold dark:text-white ">design work or partnerships.</span>
                            </h3>
                            
                            <p className="mt-3 text-black">Please fill Required Fields</p>
                        </div>
                        <div className="card-body">
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;