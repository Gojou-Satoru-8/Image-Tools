import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import ViteLogo from "/vite.svg";
import NavbarImage from "../assets/navbar_image.png";

const navitems = [
  { name: "Home", path: "/" },
  { name: "Image Tools", path: "/image-tools" },
  { name: "About", path: "/about" },
];

const Header = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  //   console.log(location);
  const currentPath = location.pathname;
  // console.log(isMenuOpen);

  return (
    <header className="pt-4">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="w-[95%] sm:w-4/5 m-auto rounded-xl bg-black text-white dark:bg-gray-900"
      >
        <NavbarContent className="justify-center gap-0">
          {/* NOTE: NavbarContent already has flex applied with gap-4, so overriding that with gap-0 */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex justify-center gap-2 sm:justify-start">
            <img src={NavbarImage} alt="" srcSet="" width={30} height={30} />
            <p className="font-bold text-inherit">Image Tools</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 justify-end" justify="center">
          {navitems.map(({ name, path }) => (
            <NavbarItem key={name} className="hover:text-teal-400">
              <NavLink
                color="foreground"
                to={path}
                className={currentPath === path ? "active-tab" : ""}
              >
                {name}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu className="pt-12">
          {navitems.map(({ name, path }) => (
            <NavbarMenuItem key={name} className="hover:text-teal-400">
              <NavLink
                className={`w-full ${currentPath === path ? "active-tab" : ""}`}
                to={path}
                size="lg"
              >
                {name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
