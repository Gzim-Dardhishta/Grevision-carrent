import MediaHeader from './MediaHeader'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='fixed top-0 right-0 w-screen z-50'>
            <MediaHeader />
            <Navbar className='xl:mx-20 mx-10 rounded-b-xl' />
        </div>
    )
}

export default Header