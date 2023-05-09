import { NavLink } from "react-router-dom";

export default function LoginCard() {
  return (
    <div className="w-[300px] rounded-3xl bg-neutral50/30 px-12 py-8 text-dark">
      <div className="flex-col space-y-2">
        <h2 className="flex justify-center text-xl">Login</h2>

        <form className="space-y-2">
          <div>
            <label htmlFor="email" className="text-base text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-xs leading-5 text-dark25 outline-none transition-colors duration-300 ease-in-out placeholder:font-light placeholder:text-dark25 focus:border-primary"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-base text-dark">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type="Password"
                placeholder="Password"
                className="w-full rounded-md border border-gray-300 bg-white py-1 pl-3 pr-9 text-xs leading-5 text-dark25 outline-none duration-300 ease-in-out placeholder:font-light placeholder:text-dark25 focus:border-primary"
                id="password"
              />
              <img
                className="absolute right-3"
                src="../assets/icon/pass-show.svg"
                alt="show password icon"
              />
            </div>
            <label className="text-xs">
              <a href="#">Forgot password?</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary px-5 py-2 text-white hover:bg-accent"
          >
            Sign in
          </button>
        </form>
        <p className="relative flex justify-center text-xs">
          <span className="line-login-before"></span>
          Or continue with
          <span className="line-login-after"></span>
        </p>
        <div className="flex justify-center">
          <button className="flex w-20 items-center justify-center rounded-3xl bg-white px-5 py-2.5 ring-1 ring-transparent duration-300 ease-in-out hover:ring-accent">
            <img src="../assets/icon/google.svg" alt="Google login button" />
          </button>
        </div>
        <p className="flex justify-center text-xs">
          Don't have an account yet?
        </p>
        <NavLink to={`/register`}>
          <p className="flex justify-center text-xs font-semibold">
            Register here!
          </p>
        </NavLink>
      </div>
    </div>
  );
}
