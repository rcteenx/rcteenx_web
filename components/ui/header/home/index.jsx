import Logo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/home/Nav";

export default function HeaderHomeIndex() {
  return (
    // md:justify-between
    <header className="container mx-auto container-p flex items-center">
      <Logo />
      <Nav />
    </header>
  );
}
