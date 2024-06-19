import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">DK STORE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Men
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" aria-current="page">
            Women
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Kids
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
