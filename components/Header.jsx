"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav"; // Importing Nav component
import MobileNav from "./MobileNav";

// Header component
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sridharan S <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Placeholder */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
