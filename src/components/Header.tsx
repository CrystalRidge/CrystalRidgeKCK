import clsx from "clsx";
import { useEffect, useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ].map(({ name, href }) => (
    <li className="max-sm:w-full max-sm:h-full max-sm:p-0" key={name}>
      <a
        href={href}
        className={clsx(
          pathname === href && "underline hover:underline",
          "whitespace-nowrap max-sm:w-full max-sm:h-full max-sm:px-2 max-sm:py-4 max-sm:text-center max-sm:m-0 max-sm:rounded-none"
        )}
      >
        {name}
      </a>
    </li>
  ));
  return (
    <nav className="px-4 relative bg-white z-10 shadow-sm">
      <ul>
        <li>
          <a href="/">
            <img src="/full-logo.svg" alt="logo" id="logo" />
          </a>
        </li>
      </ul>
      <button
        className={clsx(
          "sm:!hidden w-fit focus:shadow-none hamburger hamburger--squeeze",
          {
            "is-active": isActive,
          }
        )}
        onClick={() => setIsActive((isActive) => !isActive)}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul
        className={clsx([
          { "max-sm:hidden": !isActive },
          "max-sm:absolute max-sm:flex max-sm:flex-col max-sm:w-full",
          "max-sm:left-0 max-sm:top-full max-sm:bg-white max-sm:z-10",
        ])}
      >
        {links}
      </ul>
    </nav>
  );
}
