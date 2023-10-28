import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-12 mt-2 md:w-16 overflow-hidden">
        <img
          id="logo"
          src={smd.siteLogo}
          alt={smd.title}
          className="w-12 h-12 rounded-full p-1 border border-gray"
        />
      </div>
      <span className="font-bold hidden lg:flex">{smd.title}</span>
    </Link>
  );
};

export default Logo;
