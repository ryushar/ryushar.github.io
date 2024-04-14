import Link from "next/link";
import { useMemo } from "react";

const NAV_ITEMS = {
  "/": "home",
  "/blog": "blog",
};

const NavItem = (params: { path: string; name: string }) => {
  const { path, name } = params;

  return (
    <Link
      href={path}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const navItems = useMemo(() => {
    const entries = Object.entries(NAV_ITEMS);
    return entries.map(([path, name]) => (
      <NavItem key={path} path={path} name={name} />
    ));
  }, []);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">{navItems}</div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
