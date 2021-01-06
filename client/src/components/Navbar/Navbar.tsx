import { useState } from "react";

import { Link } from "react-router-dom";
import { Menu, Contrast } from "@styled-icons/ionicons-solid";

import Logo from "components/Logo";

// import logo from "assets/hat_trans.png";

const Navbar: React.FC = () => {
  const [dark, SetDark] = useState(true);

  const toggleDark = () => {
    SetDark(!dark);
    const html = document.querySelector("html");

    if (html) {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        html.style.backgroundColor = "white";
      } else {
        html.classList.add("dark");
        html.style.backgroundColor = "black";
      }
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="flex sm:justify-between">
        <div className="flex flex-row justify-between w-full">
          <Link to="/">
            {/* <img src={logo} alt="" className="h-12 m-2" /> */}
            <Logo className="fill-current dark:text-white m-2" size={50} />
          </Link>

          <div className="sm:hidden flex h-full justify-center items-center ">
            <Menu size={35} className="cursor-pointer" />
          </div>
        </div>
        <ul className="hidden sm:flex sm:flex-row items-center">
          <li className="pr-5 hover:underline font-bold">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="pr-5 hover:underline font-bold">
            <Link to="/supplies">Supplies</Link>
          </li>
          <li className="pr-5 hover:underline font-bold">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="pr-5">
            <Contrast
              size={25}
              className="cursor-pointer"
              onClick={toggleDark}
            />
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
