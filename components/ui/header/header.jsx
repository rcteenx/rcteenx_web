import Link from "next/link";
import Logo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/Nav";
import Social from "@/components/ui/header/Social";

export default function HeaderIndex() {
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <Nav />
      <Social />
    </header>
  );
}
