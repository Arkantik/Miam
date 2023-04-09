import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex flex-col justify-center items-center space-y-4 text-base text-dark">
      <div className="flex items-center gap-4">
        <p className="text-[150px] md:text-[250px] text-dark">4</p> 
        <img className ="w-[150px] md:w-[400px]" src="./public/assets/img/404.png" alt="404 error image"/>
        <p className="text-[150px] md:text-[250px] text-dark">4</p>
      </div> 
      <div>
        <h2 className="text-xl text-center">Oops Page not found!</h2>
        <p>The page you are looking for is missing</p>
      </div>
      <Link to={`/`} className="text-white py-2 px-5 bg-primary hover:bg-accent rounded-3xl">
        Go back to Home
      </Link>
    </div>
  );
}
