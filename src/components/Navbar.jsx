import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header>
    <nav className="sticky bg-dark flex justify-between items-center px-8 py-2.5">
      <div>
        <NavLink to={`/`}>
          <img
            className="max-w-md"
            src="/assets/icon/logo-miam.svg"
            alt="Logo Miam"
            width="92"
            height="48"
          />
        </NavLink>
      </div>

      <div className="flex gap-[clamp(0.5rem,2vw,2rem)]">
        <ul className="hidden md:flex items-center gap-[clamp(0.5rem,2vw,2rem)] text-neutral text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navlink is-active" : "navlink"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              to={`/planner`}
              className={({ isActive }) =>
                isActive ? "navlink is-active" : "navlink"
              }
            >
              Planner
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              to={`/recipes`}
              className={({ isActive }) =>
                isActive ? "navlink is-active" : "navlink"
              }
            >
              Recipes
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              to={`/pantry`}
              className={({ isActive }) =>
                isActive ? "navlink is-active" : "navlink"
              }
            >
              Pantry
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              to={`/groceries`}
              className={({ isActive }) =>
                isActive ? "navlink is-active" : "navlink"
              }
            >
              Groceries
            </NavLink>
          </li>
        </ul>

        <button className="md:hidden">
          <img
            src="/assets/icon/mobile-menu.svg"
            alt="mobile-menu"
            width="38"
            height="30"
          />
        </button>

        <div className="ml-2.5 hidden md:flex gap-[clamp(1rem,1.8vw,1.5rem)]">
          <button>
            <img
              className="max-w-md"
              src="/assets/icon/notification-0.svg"
              alt="notifications"
              width="19"
              height="20"
            />
          </button>
          <button>
            <img
              className="max-w-md"
              src="/assets/icon/options.svg"
              alt="settings"
              width="18"
              height="20"
            />
          </button>
          <button>
            <NavLink to={`/login`}>
              <img
                className="max-w-md"
                src="/assets/icon/logged.svg"
                alt="connect"
                width="20"
                height="20"
              />
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
