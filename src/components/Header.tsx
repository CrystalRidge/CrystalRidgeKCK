import clsx from "clsx";
import { useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false);
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
        className={clsx("w-fit hamburger hamburger--collapse", {
          "is-active": isActive,
        })}
        onClick={() => setIsActive((isActive) => !isActive)}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul>
        <li>
          <a href="/" className="whitespace-nowrap">
            Home
          </a>
        </li>
        <li>
          <a href="/roadmap" className="whitespace-nowrap">
            Roadmap
          </a>
        </li>
        <li>
          <a href="/gallery" className="whitespace-nowrap">
            Gallery
          </a>
        </li>
        <li>
          <a href="/about-us" className="whitespace-nowrap">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
