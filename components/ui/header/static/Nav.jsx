import Link from "next/link";

import { navLinksStatic } from "@/content/data";

export default function HeaderStaticNav({ id }) {
  return (
    <div>
      {/* Large Screen */}
      <nav className="fixed py-2 px-6 border border-solid border-dark rounded-full font-thin text-xs md:text-base bg-white bg-opacity-40  top-2 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-10">
        <ul className="flex justify-center items-center space-x-4">
          {navLinksStatic.map((n) => (
            <li
              key={n.id}
              className={`border-b border-b-white hover:border-b-coral-red ${
                id === n.id ? "text-coral-red" : "2"
              } `}
            >
              <a href={`/${n.href}`}>{n.label}</a>
              {/* We have problem at script next links!
              <Link href={`/${n.href + process.env.file_ext}`}>{n.label}</Link>
               */}
              {/* <a href={`/${n.href + process.env.file_ext}`}>{n.label}</a> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
