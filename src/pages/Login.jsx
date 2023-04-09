import LoginCard from "../components/LoginCard";

export default function Login() {
  return (
    <div className="min-h-screen">
      {/* Available height to be changed depending on the height of the navbar */}
      <div className="h-[calc(100vh-68px)] flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
}
