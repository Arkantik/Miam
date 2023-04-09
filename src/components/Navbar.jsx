import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="logo-wrapper">
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
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/planner`}
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/recipes`}
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/pantry`}
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Pantry
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/groceries`}
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
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

        <ul className="ml-2.5 hidden md:flex md:items-center md:gap-[clamp(1rem,1.8vw,1.5rem)]">
          <li className="md:flex">
            <button>
              <img
                className="max-w-md"
                src="/assets/icon/notification-0.svg"
                alt="notifications"
                width="19"
                height="20"
              />
            </button>
          </li>
          <li className="md:flex">
            <button>
              <img
                className="max-w-md"
                src="/assets/icon/options.svg"
                alt="settings"
                width="18"
                height="20"
              />
            </button>
          </li>
          <li className="md:flex">
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
          </li>
        </ul>
      </div>
    </>
  );
}
