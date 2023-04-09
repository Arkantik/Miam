import RegisterCard from "../components/RegisterCard";

export default function Register() {
  return (
    <div className="min-h-screen">
      {/* Available height to be changed depending on the height of the navbar */}
      <div className="h-[calc(100vh-68px)] flex justify-center items-center">
        <RegisterCard />
      </div>
    </div>
  );
}
