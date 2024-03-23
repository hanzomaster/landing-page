"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { settings } from "@/config/settings";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/links";
import Link from "next/link";
import { useEffect, useState } from "react";
import Profile from "../profile";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <header className="sticky top-0 z-20 select-none bg-background/90 backdrop-blur">
      <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/" onClick={handleClick}>
              <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
                {siteConfig.name}
              </h1>
            </Link>
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <div className="mt-[0.125rem] ">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border p-4 md:static md:block md:items-center md:border-none md:p-0 ${
            navbar ? "block bg-background" : "hidden"
          }`}
          style={{ width: "100%", maxWidth: "20rem" }}
        >
          <ul className="flex flex-col items-center justify-between space-y-4 text-primary opacity-60 md:flex-row md:space-x-6 md:space-y-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link
                  className="hover:underline"
                  href={link.path}
                  onClick={handleClick}
                >
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          {settings.themeToggleEnabled && (
            <div className="mt-[0.125rem] hidden md:block">
              <ModeToggle />
            </div>
          )}
          <Profile />
        </div>
      </nav>
    </header>
  );
}
