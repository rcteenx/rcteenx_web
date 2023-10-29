import Logo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/Nav";

export default function HeaderIndex() {
  return (
    // md:justify-between
    <header className="container mx-auto container-p flex items-center">
      <Logo />
      <Nav />
    </header>
  );
}
