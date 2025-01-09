
const ContactUs = () => {
    return (
        <div className='flex md:flex-row flex-col gap-10 max-w-7xl xl:px-0 mx-5 xl:mx-auto my-16'>
            <div className="md:w-1/3 w-full">
                <div className="bg-white rounded-lg shadow-xl p-10 py-12 w-full">
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
                                className="w-full bg-red-700 text-white hover:bg-[#1b1b1b] ease-in duration-300 py-4 rounded-none mt-4 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='md:w-2/3'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74
                    .30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c
                    24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1732988152005!5m2!1sen!2s"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    )
}

export default ContactUs