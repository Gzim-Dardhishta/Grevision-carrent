import photo from '../../assets/video.jpg'
import { FaCheck } from "react-icons/fa6";

const FrequentlyQuestions = () => {
  return (
    <div className='grid md:grid-cols-10 mt-28'>

      <div className='md:col-span-6 bg-slate-100'>
        <div className='lg:w-1/2 lg:px-0 px-10 mx-auto space-y-12 py-12'>
          <div className='text-red-700 border-b w-fit border-red-700 pb-1 uppercase font-medium text-lg'>Trusted Car Delaer Service</div>
          <h4 className='lg:text-5xl text-3xl font-semibold'>Frequently Questions & Asking Zone..</h4>

          <div className='text-gray-500'>For 15 years, we raising the standard of used car retailing with we raising the standard of used car ret one of the most innovative and reliable</div>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='lg:text-lg'>we are the best car provider agency with great service</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='lg:text-lg'>we are the best car provider agency with great service</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='lg:text-lg'>we are the best car provider agency with great service</div>
            </div>
          </div>

          <div>
            <button className='bg-red-700 px-8 py-4 rounded-lg text-lg text-white '>Get Started</button>
          </div>
        </div>
      </div>

      <div className='md:col-span-4 w-full'>
        <img src={photo} className='w-full' alt="" />
      </div>
    </div>
  )
}

export default FrequentlyQuestions