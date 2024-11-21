import { Button } from "../ui/button";
import { GoPerson } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { MdPhone } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const ContactForm = () => {
    return (
        <div className="bg-gray-100 p-6 w-full mt-8 rounded-lg">
            {/* Profile Section */}
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/60"
                    alt="Admin"
                    className="rounded-full w-14 h-14 mr-4"
                />
                <div>
                    <h3 className="font-medium text-lg">ADMIN</h3>
                    <p className="text-gray-500 text-xs">Owner of listing</p>
                    <p className="text-red-500 text-xs">+1900 67 XXX (SHOW)</p>
                </div>
            </div>

            {/* Form Section */}
            <form className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <span className="absolute left-4 top-3">
                        <GoPerson />
                    </span>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <span className="absolute left-4 top-3">
                        <TfiEmail />
                    </span>
                </div>
                <div className="relative">
                    <input
                        type="tel"
                        placeholder="Enter Phone"
                        className="w-full px-4 py-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <span className="absolute left-4 top-4">
                        <MdPhone />
                    </span>
                </div>
                <div className="relative">
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                    <span className="absolute left-4 top-3">
                        <TbEdit />
                    </span>
                </div>
                <Button
                    className="w-full bg-red-700 text-white py-6 rounded hover:bg-red-600"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
