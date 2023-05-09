import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-116px)] flex-col items-center justify-center space-y-4 text-center text-base">
      <div className="flex w-full items-center justify-center gap-4">
        <p className="text-[100px] md:text-[200px]">4</p>
        <img
          className="max-w-[125px] md:max-w-[400px]"
          src="../assets/img/404.png"
          alt="404 error image"
        />
        <p className="text-[100px] md:text-[200px]">4</p>
      </div>
      <div>
        <h2 className="mb-4 text-center text-xl">Oops page not found!</h2>
        <p className=" mb-4">The page you are looking for is missing</p>
      </div>
      <Link
        to={`/`}
        className="rounded-3xl bg-primary px-5 py-2 text-white hover:bg-accent"
      >
        Go back to Home
      </Link>
    </section>
  );
}
