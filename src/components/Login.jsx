const Login = () => (

    <div className="text-dark bg-neutral50 blur-none rounded-3xl w-[300px] px-12 py-8">
        <div className="flex-col space-y-2">
            <h2 className="flex justify-center text-xl">Login</h2>
            <form className="space-y-2">
                <div>
                    <label for="email" className="text-base text-dark">Email</label>
                    <input type="email" className="w-full bg-white border rounded-md border-gray-300 focus:border-primary text-xs outline-none text-dark25 leading-5 py-1 px-3 transition-colors duration-200 ease-in-out"/>
                </div>
                <div>
                    <label for="password" className="text-base text-dark">Password</label>
                    <div className="flex items-center">
                        <input type="password" className="w-full bg-white border rounded-md border-gray-300 focus:border-primary text-xs outline-none text-dark25 leading-5 py-1 px-3 transition-colors duration-200 ease-in-out"/>
                        <img className="absolute right-16" src='/public/assets/icon/pass-show.svg'/>
                    </div>
                    <label className="text-xs"><a href="#">Forgot password?</a></label>
                </div>
                <button className="text-white py-2 px-5 w-full bg-primary hover:bg-accent rounded">Sign in</button>
            </form>
            <p className="flex justify-center text-xs">Or continue with</p>
            <div className="flex justify-center">
                <button className="flex items-center justify-center rounded-3xl px-5 py-2.5 w-20 bg-white">
                    <img src="public/assets/icon/google.svg"/>
                </button>
            </div>
            <p className="flex justify-center text-xs">Don't have an account yet?</p>
            <a href="#"><p className="flex justify-center text-xs font-semibold">Register here!</p></a>
        </div>
    </div>

)


export default Login;