import Link from "next/link";

import { navLinks } from "@/content/data/constants";

const Nav = () => {
  return (
    <div>
      {/* Large Screen */}
      <nav className="w-max py-2 px-4 border border-solid border-dark rounded-full font-thin bg-white bg-opacity-40 fixed top-2 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-10">
        <ul className="flex justify-center items-center space-x-4">
          {navLinks.map((n) => (
            <li key={n.href} className="first:text-coral-red">
              <Link href={`/${n.href + process.env.file_ext}`}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
