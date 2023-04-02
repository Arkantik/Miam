const Navbar = () => (

  <header>
    <nav className="sticky bg-dark flex justify-between items-center px-8 py-2.5">
      <div>
        <a href="#">
          <img src="/assets/icon/logo-miam.svg" alt="Logo Miam" width="92" height="48"/>
        </a>
      </div>

      <div className="flex gap-8">
        
        <ul className="hidden md:flex items-center gap-8 text-neutral text-base">
          <li className="nav"><a href="#">Home</a></li>
          <li className="nav"><a href="#">Planner</a></li>
          <li className="isActive nav"><a href="#">Recipes</a></li>
          <li className="nav"><a href="#">Pantry</a></li>
          <li className="nav"><a href="#">Groceries</a></li>
        </ul>

        <button className="md:hidden">
            <img src="/assets/icon/mobile-menu.svg" alt="mobile-menu" width="38" height="30"/>
        </button>

        <div className="ml-2.5 hidden md:flex gap-6">
          <button>
            <img src="/assets/icon/notification-0.svg" alt="notifications" width="19" height="20"/>
          </button>

          <button>
            <img src="/assets/icon/options.svg" alt="settings" width="18" height="20"/>
          </button>
          
          <button>
            <img src="/assets/icon/disconnect.svg" alt="disconnect" width="20" height="20"/>
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;