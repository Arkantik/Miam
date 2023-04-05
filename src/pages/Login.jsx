import Navbar from "/src/components/Navbar.jsx";
import LoginCard from "../components/LoginCard";

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Available height to be changed depending on the height of the navbar */}
      <div className="h-[calc(100vh-68px)] flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
