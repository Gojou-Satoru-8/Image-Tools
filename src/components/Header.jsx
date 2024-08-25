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
const Header = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  //   console.log(location);
  const path = location.pathname;
  // console.log(isMenuOpen);

  return (
    <header className="pt-4">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="w-[95%] sm:w-4/5 m-auto rounded-xl bg-black text-white dark:bg-gray-900"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex justify-center sm:justify-start">
            <img src={ViteLogo} alt="" srcSet="" />
            <p className="font-bold text-inherit">Image Tools</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 justify-end" justify="center">
          <NavbarItem>
            <NavLink color="foreground" to="/" className={path === "/" ? "active-tab" : ""}>
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              color="foreground"
              to="/image-tools"
              className={path === "/image-tools" ? "active-tab" : ""}
            >
              Image Tools
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/about" className={path === "/about" ? "active-tab" : ""}>
              About
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="pt-12">
          <NavbarMenuItem>
            <NavLink className={`w-full ${path === "/" ? "active-tab" : ""}`} to="/" size="lg">
              Home
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink
              className={`w-full ${path === "/image-tools" ? "active-tab" : ""}`}
              to="/image-tools"
              size="lg"
            >
              Image Tools
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink
              className={`w-full ${path === "/about" ? "active-tab" : ""}`}
              to="/about"
              size="lg"
            >
              About
            </NavLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
