import Link from "next/link";
import Logo from "@/components/header/Logo";
import Nav from "@/components/header/Nav";
import Social from "@/components/header/Social";

export default function HeaderIndex() {
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <Nav />
      <Social />
    </header>
  );
}
