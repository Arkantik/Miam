import { NavLink } from "react-router-dom";

export default function RegisterCard() {
  return (
    <div className="text-dark bg-neutral50 blur-none rounded-3xl w-[300px] px-12 py-8">
      {/*Will need to blur or remove it*/}
      <div className="flex-col space-y-2">
        <h2 className="flex justify-center text-xl">Register</h2>
        <form className="space-y-2">
          <div>
            <label for="email" className="text-base text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="placeholder:text-dark25 placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-primary text-xs outline-none text-dark25 leading-5 py-1 px-3 transition-colors duration-300 ease-in-out"
            />
          </div>
          <div>
            <label for="password" className="text-base text-dark">
              Password
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="placeholder:text-dark25 placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-primary text-xs outline-none text-dark25 leading-5 py-1 pl-3 pr-9 duration-300 ease-in-out"
                />
                <img
                  className="absolute right-16"
                  src="/public/assets/icon/pass-show.svg"
                  alt="show password icon"
                />{" "}
                {/*Will need to fix the eye icon*/}
              </div>
              <div className="flex items-center ">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="placeholder:text-dark25 placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-primary text-xs outline-none text-dark25 leading-5 py-1 pl-3 pr-9 duration-300 ease-in-out"
                />
                <img
                  className="absolute right-16"
                  src="/public/assets/icon/pass-show.svg"
                  alt="show password icon"
                />{" "}
                {/*Will need to fix the eye icon*/}
              </div>
            </div>
          </div>
          <button className="text-white py-2 px-5 w-full bg-primary hover:bg-accent rounded">
            Create account
          </button>
        </form>
        <p className="relative flex justify-center text-xs">
          <span class="line-login-before"></span>
          Or continue with
          <span class="line-login-after"></span>
        </p>
        <div className="flex justify-center">
          <button className="flex items-center justify-center rounded-3xl px-5 py-2.5 w-20 bg-white ring-1 ring-transparent hover:ring-accent duration-300 ease-in-out">
            <img
              src="public/assets/icon/google.svg"
              alt="Google login button"
            />
          </button>
        </div>
        <p className="flex justify-center text-xs">Already have an account?</p>
        <NavLink to={`/login`}>
          <p className="flex justify-center text-xs font-semibold">Sign in!</p>
        </NavLink>
      </div>
    </div>
  );
}
