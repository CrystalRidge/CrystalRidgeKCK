import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [pathname, setPathname] = useState<string>();

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileDropdownMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const handleOffClick = useCallback(function (e: MouseEvent) {
    if (!e.target || !hamburgerRef.current || !mobileDropdownMenuRef.current)
      return;

    const target = e.target as Node;

    if (
      !hamburgerRef.current.contains(target) &&
      !mobileDropdownMenuRef.current.contains(target)
    ) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOffClick);

    return () => {
      document.removeEventListener("click", handleOffClick);
    };
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ].map(({ name, href }) => (
    <li className="max-sm:w-full max-sm:h-full max-sm:p-0" key={name}>
      <a
        href={href}
        className={clsx(
          pathname === href ? "text-blue-600" : "text-gray-600",
          "font-semibold whitespace-nowrap max-sm:w-full max-sm:h-full max-sm:px-2 max-sm:py-4 max-sm:text-center max-sm:m-0 max-sm:rounded-none"
        )}
      >
        {name}
      </a>
    </li>
  ));
  return (
    <nav className="px-10 relative bg-white z-10 shadow-sm">
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
        ref={hamburgerRef}
        onClick={() => setIsActive((isActive) => !isActive)}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul
        ref={mobileDropdownMenuRef}
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
