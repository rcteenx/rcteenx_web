import HeaderLogo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/static/Nav";

export default function HeaderStaticIndex() {
  return (
    // md:justify-between
    <header className="container mx-auto container-p flex items-center">
      <HeaderLogo />
      <Nav />
    </header>
  );
}
