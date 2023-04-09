import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center space-y-4 text-base text-center">
      <div className="flex items-center justify-center gap-4 w-full">
        <p className="text-[100px] md:text-[200px]">4</p>
        <img
          className="max-w-[125px] md:max-w-[400px]"
          src="./public/assets/img/404.png"
          alt="404 error image"
        />
        <p className="text-[100px] md:text-[200px]">4</p>
      </div>
      <div>
        <h2 className="text-xl text-center mb-4">Oops page not found!</h2>
        <p className=" mb-4">The page you are looking for is missing</p>
      </div>
      <Link
        to={`/`}
        className="text-white py-2 px-5 bg-primary hover:bg-accent rounded-3xl"
      >
        Go back to Home
      </Link>
    </section>
  );
}
