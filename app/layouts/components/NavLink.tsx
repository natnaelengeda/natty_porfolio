"use client";

/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.

*/

import { usePathname } from "next/navigation";
import Link from "next/link";

interface props {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  props?: any;
}

const NavLink: React.FC<props> = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const active = " font-bold";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;