import { footerLogo } from "@/public/assets/images";
import { socialMedia } from "@/content/data";

const FooterInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:items-start">
      <a href="/">
        <img
          src={footerLogo.src}
          alt="logo"
          className="m-0 p-2 h-28 w-28 border-2 border-gray rounded-full"
        />
      </a>
      <p className="mt-6 text-base text-center sm:text-left leading-7 font-montserrat text-white-400 sm:max-w-sm">
        Her firmanın kendini göstereceği kaliteli bir siteye hakkı vardır. Sizin
        için en doğru tasarımı birlikte geliştirelim. Müşterileriniz için...
      </p>
      <div className="flex items-center gap-5 mt-4">
        {socialMedia.map((icon) => (
          <div
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            key={icon.alt}
          >
            <img src={icon.src.src} alt={icon.alt} width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
