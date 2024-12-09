import MediaHeader from './MediaHeader'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='fixed xl:top-0 xl:-right-2 w-screen z-50 '>
            <MediaHeader />
            <Navbar className='max-w-7xl xl:mx-auto mx-5 rounded-b-xl' />
        </div>
    )
}

export default Header