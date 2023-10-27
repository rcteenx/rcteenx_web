import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-12 md:w-16 overflow-hidden">
        <img
          id="logo"
          src="/logo.png"
          alt="Logo - H12 Çalışmaları"
          className="w-12 h-12"
        />
      </div>
      <span className="font-bold text-lg md:text-xl">H12 EGZERSİZLERİ</span>
    </Link>
  );
};

export default Logo;
