import FooterCopyRight from "@/components/ui/footer/FooterCopyRight";
import FooterInfo from "@/components/ui/footer/FooterInfo";
import FooterLinks from "@/components/ui/footer/FooterLinks";

const Footer = () => {
  return (
    <footer className="container mx-auto container-p bg-black sm:rounded-t-2xl">
      <div className="px-2 pt-12 flex justify-between items-start gap-12 flex-wrap max-lg:flex-col">
        <FooterInfo />
        <FooterLinks />
      </div>

      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
