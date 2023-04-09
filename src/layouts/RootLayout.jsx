import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-lightmode dark:bg-darkmode text-dark dark:text-neutral">
      <header>
        <nav className="sticky bg-dark flex justify-between items-center px-8 py-2.5">
          <Navbar />
        </nav>
      </header>

      <main className="md:px-6">
        <Outlet />
      </main>
    </div>
  );
}
