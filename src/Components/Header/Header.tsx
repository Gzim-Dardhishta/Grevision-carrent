import MediaHeader from './MediaHeader'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='fixed top-0 right-0 w-screen z-50'>
            <MediaHeader />
            <Navbar />
        </div>
    )
}

export default Header