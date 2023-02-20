import clsx from "clsx";
import { useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about-us" },
  ].map(({ name, href }) => (
    <li>
      <a href={href} className="whitespace-nowrap">
        {name}
      </a>
    </li>
  ));
  return (
    <nav className="px-4">
      <ul>
        <li>
          <a href="/">
            <img src="/favicon.svg" alt="logo" id="logo" />
          </a>
        </li>
      </ul>
      <button
        className={clsx(
          "w-fit focus:shadow-none hamburger hamburger--collapse",
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
      {isActive && <ul>{links}</ul>}
    </nav>
  );
}
