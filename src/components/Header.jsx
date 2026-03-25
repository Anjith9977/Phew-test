import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router";


function Header() {
  const [open, setOpen] = useState(false);

  return (

    <header className="bg-[#121618] text-white px-6 py-4">
      <div className="flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-wide">
          DEEPNETSOFT
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-[#C5A059]">HOME</a>
          <a href="#" className="hover:text-[#C5A059]">MENU</a>
          <a href="#" className="hover:text-[#C5A059]">MAKE A RESERVATION</a>
          <a href="#" className="hover:text-[#C5A059]">CONTACT US</a>
          <Link to="/add">
            <button className="bg-[#C5A059] px-4 py-2 text-black rounded">
              Add Menu
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden text-sm">
          <a href="#" className="hover:text-[#C5A059]">HOME</a>
          <a href="#" className="hover:text-[#C5A059]">MENU</a>
          <a href="#" className="hover:text-[#C5A059]">CONTACT</a>
        </div>
      )}
    </header>
  );
}

export default Header;