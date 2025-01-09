import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const redoStep = () => {
        setStep(1);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="relative min-h-screen flex">
            <div className="container max-w-screen-xl mx-auto my-auto relative flex flex-col w-4/5">
                <div className="text-4xl font-BG  whitespace-pre-line text-center tracking-tighter">
                    SignUp
                </div>
                <form onSubmit={handleSubmit} className=" md:w-4/5 mx-auto">
                    {step === 1 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-5">
                            <div className="text-base font-light text-center  ">
                                Step 1/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-1/3"></div>
                            </div>
                            <div className="mt-6 mb-6 text-3xl  text-center">
                                Te dhenat e perdoruesit
                            </div>

                            <div className='space-y-3'>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Llohi i perdoruesit</label>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <input type="radio" id="huey" name="drone" value="business" />
                                            <label htmlFor="business">Business</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="huey" name="drone" value="person" />
                                            <label htmlFor="person">Person</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Shteti</label>
                                    <div className="w-full">
                                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="" disabled selected hidden>
                                                ...
                                            </option>
                                            <optgroup label="...">
                                                <option value="value">Value</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Emri i biznesit</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Aktiviteti i biznensit</label>
                                    <div className="w-full">
                                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="" disabled selected hidden>
                                                ...
                                            </option>
                                            <optgroup label="...">
                                                <option value="value">Value</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Numri i biznesit</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Numri i TVSH</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Qyteti</label>
                                    <div className="w-full">
                                        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="" disabled selected hidden>
                                                ...
                                            </option>
                                            <optgroup label="...">
                                                <option value="value">Value</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Adresa</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Kodi postal</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" onClick={nextStep} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 2/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-2/3"></div>
                            </div>
                            <div className="mt-12 mb-10 text-3xl  text-center">
                                Te dhenat e personit pergjegjes
                            </div>
                            <div className='space-y-4'>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Numri personal</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Emri</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Mbiemri</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>

                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Telefoni</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="text-base font-light text-center  ">
                                Step 3/3
                            </div>
                            <div className="mt-4 w-full h-2" style={{ backgroundColor: '#e0cfc8' }}>
                                <div className="h-full bg-black rounded-3xl w-3/3"></div>
                            </div>
                            <div className="mt-12 mb-10 text-3xl  text-center">
                                Te dhendat e llogarise
                            </div>
                            <div className='space-y-4'>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>E-mail</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Konfirmo email-in</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Fjalekalimi</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'>Konfirmo fjalekalimin</label>
                                    <input placeholder='' className='col-span-2 py-2 rounded-md border' />
                                </div>
                                <div className='grid grid-cols-3 items-center gap-4'>
                                    <label className='col-span-1 text-right'></label>
                                    <div className="space-y-4 col-span-2">
                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="mt-1 h-5 w-5 border-gray-300 rounded text-red-600 focus:ring-red-500"
                                            />
                                            <label htmlFor="terms" className="ml-3 text-gray-800 text-sm">
                                                <span className="text-red-600">*</span> Unë e kam lexuar, kuptuar dhe
                                                i pranoj në tërësi{" "}
                                                <Link
                                                    to="/"
                                                    className="text-red-600 font-semibold hover:underline"
                                                >
                                                    "Kushtet e Përgjithshme"
                                                </Link>
                                                .
                                            </label>
                                        </div>
                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                className="mt-1 h-5 w-5 border-gray-300 rounded text-red-600 focus:ring-red-500"
                                            />
                                            <label htmlFor="privacy" className="ml-3 text-gray-800 text-sm">
                                                <span className="text-red-600">*</span> Unë e kam lexuar, kuptuar dhe
                                                e pranoj{" "}
                                                <Link
                                                    to="/"
                                                    className="text-red-600 font-semibold hover:underline"
                                                >
                                                    "Politikën e Privatësisë"
                                                </Link>
                                                .
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-center mt-12">

                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="button" onClick={nextStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-3/5 mx-auto py-12">
                            <div className="mt-12 text-base  text-center">
                                Your submission has been received! We will aim to get back to you within 3 working days.
                            </div>
                            <div>
                                <div className="flex justify-center mt-12">
                                    <button type="button" onClick={redoStep} className=" bg-black text-white font-bold py-2 px-4 rounded">
                                        Redo the planner
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </form>
            </div>
        </div>

    )
}

export default SignupForm