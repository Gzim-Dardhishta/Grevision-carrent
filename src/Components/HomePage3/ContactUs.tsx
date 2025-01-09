const ContactUs = () => {
    return (
        <div className="h-[700px] bg-parallax2 bg-center bg-cover bg-fixed xl:mx-20 mx-10 rounded-3xl flex md:flex-row flex-col justify-between items-center px-10 mt-32 relative">

            <div className=" flex items-center justify-center relative">
                <h1 className="text-white uppercase text-center xl:text-[120px] lg:text-[80px] text-[50px] font-extrabold leading-[140px] w-full">
                    BUY A CAR TODAY
                    <span className="absolute top-[4%] left-[1%] text-white uppercase text-center xl:text-[120px] lg:text-[80px] text-[50px] font-extrabold leading-[140px] opacity-90 w-full text-stroke text-fill-transparent">
                        BUY A CAR TODAY
                    </span>
                </h1>
            </div>

            <div className="md:w-1/2 flex items-center justify-center float-right ">
                <div className="bg-white shadow-lg p-10 py-12 w-full">
                    <h2 className="text-4xl font-medium text-gray-800 mb-2">Contact Us Today</h2>
                    <p className="text-gray-500 mb-6 mt-6">
                        Your email address will not be published.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="sr-only">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name here"
                                className="w-full border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                className="w-full border-b border-gray-300 py-3 px-2 text-gray-800 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <input
                                type="text"
                                id="text"
                                placeholder="Write a message"
                                className="w-full border-b border-gray-300 py-10 px-2 text-gray-800 focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-red-700 p-5 rounded-lg text-white hover:bg-[#1d1c1c] duration-300 ease-in px-10 text-lg w-full"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs