"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links array
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

// Navigation component
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-6">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
