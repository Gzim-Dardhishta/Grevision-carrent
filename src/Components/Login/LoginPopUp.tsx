import LoginForm from './LoginForm'

const LoginPopUp = ({ setIsOpen }: { setIsOpen: (state: boolean) => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <LoginForm setIsOpen={setIsOpen} />
        </div>
    )
}

export default LoginPopUp