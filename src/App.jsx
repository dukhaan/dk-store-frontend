import React from "react";
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, navbar} from "@nextui-org/react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import CardPage from "./Components/CardPage";
import HomeCarousel from "./Components/HomeCarousel";

export default function App() {
  return (
    <>
      <Navigation />
      <HomeCarousel />
      <CardPage />
      <CardPage />
      <CardPage />

      {/* <HomeCarousel/> */}
      <Footer />
    </>
  );
}
