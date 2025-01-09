import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const LoginForm = ({ setIsOpen }: { setIsOpen: (state: boolean) => void }) => {
    return (
        <div className="p-10 rounded-lg bg-white w-[500px] py-14">
            <div className="flex justify-between items-center mb-8">
                <h4 className="text-3xl font-semibold">Login</h4>
                <div onClick={() => setIsOpen(false)} className="cursor-pointer"><HiMiniXMark size={28} /></div>
            </div>

            <form action="" className="space-y-5">
                <div>
                    <label htmlFor="" className="font-medium">Account</label>
                    <input className="p-3 rounded-md w-full border mt-2" placeholder="Email or user name" />
                </div>

                <div>
                    <label htmlFor="" className="font-medium">Password</label>
                    <input className="p-3 rounded-md w-full border mt-2" placeholder="Your password" />
                </div>

                <div className="text-right">Forgot Password</div>

                <button className="w-full py-4 text-white bg-red-700 text-lg">Login</button>

                <div className="text-gray-500 mt-3 text-center">Don’t you have an account? <Link className="text-gray-900" to={'/'}>Register</Link></div>
            </form>

        </div>
    )
}

export default LoginForm