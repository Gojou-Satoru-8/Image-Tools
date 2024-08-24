import { useState } from "react";
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
            <NavLink color="foreground" to="/">
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink color="foreground" to="/image-tools">
              Image Tools
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink to="/about" aria-current="page">
              About
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="pt-4">
          <NavbarMenuItem>
            <NavLink className="w-full" to="/" size="lg">
              Home
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink className="w-full" to="/image-tools" size="lg">
              Image Tools
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink className="w-full" to="/about" size="lg">
              About
            </NavLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
