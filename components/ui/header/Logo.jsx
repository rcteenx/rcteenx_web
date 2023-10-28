import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const Logo = () => {
  return (
    <Link href="/" className="relative">
      <div className="absolute top-1 left-1 w-24 xl:w-32 z-50">
        <img
          id="logo"
          src={smd.siteLogo}
          alt={smd.title}
          className="rounded-full p-1 border border-gray"
        />
      </div>
    </Link>
  );
};

export default Logo;
