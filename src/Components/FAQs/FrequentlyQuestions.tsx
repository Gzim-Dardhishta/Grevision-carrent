import photo from '../../assets/video.jpg'
import { FaCheck } from "react-icons/fa6";
import { Button } from '../ui/button';

const FrequentlyQuestions = () => {
  return (
    <div className='grid grid-cols-10 mt-28'>

      <div className='col-span-6 bg-slate-100'>
        <div className='w-1/2 mx-auto space-y-12 py-12'>
          <div className='text-red-700 border-b w-fit border-red-700 pb-1 uppercase font-medium text-lg'>Trusted Car Delaer Service</div>
          <h4 className='text-5xl font-semibold'>Frequently Questions & Asking Zone..</h4>

          <div className='text-gray-500'>For 15 years, we raising the standard of used car retailing with we raising the standard of used car ret one of the most innovative and reliable</div>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='text-lg'>we are the best car provider agency with great service</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='text-lg'>we are the best car provider agency with great service</div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-red-700 text-white p-2 rounded-full'><FaCheck /></div>
              <div className='text-lg'>we are the best car provider agency with great service</div>
            </div>
          </div>

          <div>
            <Button className='bg-red-700 px-8 py-6 text-lg'>Get Started</Button>
          </div>
        </div>
      </div>

      <div className='col-span-4'>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default FrequentlyQuestions