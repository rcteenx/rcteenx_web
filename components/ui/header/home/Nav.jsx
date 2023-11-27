import Link from "next/link";

import { navLinksHome } from "@/content/data";

export default function HeaderHomeNav() {
  return (
    <div>
      {/* Large Screen */}
      <nav className="fixed py-2 px-4 border border-solid border-dark rounded-full font-thin text-xs md:text-base bg-white bg-opacity-40  top-2 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-10">
        <ul className="flex justify-center items-center space-x-4">
          {navLinksHome.map((n) => (
            <li
              key={n.href}
              className="first:text-coral-red border-b border-b-white hover:border-b-coral-red"
            >
              <Link href={`/${n.href}`}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
