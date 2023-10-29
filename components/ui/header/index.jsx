import Logo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/Nav";

export default function HeaderIndex() {
  return (
    // md:justify-between
    <header className="w-full px-5 sm:px-10  flex items-center justify-between max-container">
      <Logo />
      <Nav />
    </header>
  );
}
