import FooterCopyRight from "@/components/ui/footer/FooterCopyRight";
import FooterInfo from "@/components/ui/footer/FooterInfo";
import FooterLinks from "@/components/ui/footer/FooterLinks";

const Footer = () => {
  return (
    <footer className="bg-black padding-x padding-t pb-4 max-container  rounded-t-2xl">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <FooterInfo />
        <FooterLinks />
      </div>

      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
