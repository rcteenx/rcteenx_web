import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const Logo = () => {
  return (
    <Link id="rcteenx" href="/" className="relative">
      <div className="absolute top-2 md:top-3 w-10 md:w-16 xl:w-24 z-50">
        <img
          src={smd.siteLogo}
          alt={smd.title}
          className="p-0.5 border border-gray rounded-full"
        />
      </div>
    </Link>
  );
};

export default Logo;
