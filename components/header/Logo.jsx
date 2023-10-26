import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={`/${"index" + process.env.file_ext}`}
      className="flex items-center text-dark dark:text-light"
    >
      <div className="w-12 md:w-16 overflow-hidden">
        <img
          id="logo"
          src="/logo.png"
          alt="Logo - H12 Egzersizleri"
          className="w-12 h-12"
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        H12 EGZERSİZLERİ
      </span>
    </Link>
  );
};

export default Logo;
