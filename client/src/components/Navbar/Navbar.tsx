import { Link } from "react-router-dom";
import { Menu } from "@styled-icons/ionicons-solid";

import logo from "assets/hat_trans.png";

const Navbar: React.FC = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex sm:justify-between">
        <div className="flex flex-row justify-between w-full">
          <Link to="/">
            <img src={logo} alt="" className="h-12 m-2" />
          </Link>

          <div className="sm:hidden flex h-full justify-center items-center ">
            <Menu size={35} className="cursor-pointer" />
          </div>
        </div>
        <ul className="hidden sm:flex sm:flex-row items-center">
          <li className="pr-5 hover:underline">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="pr-5 hover:underline">
            <Link to="/supplies">Supplies</Link>
          </li>
          <li className="pr-5 hover:underline">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
