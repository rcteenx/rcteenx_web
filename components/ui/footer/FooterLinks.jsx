import { footerLinks } from "@/content/data/constants";

const FooterLinks = () => {
  return (
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
            {section.title}
          </h4>
          <ul>
            {section.links.map((link) => (
              <li
                className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                key={link.name}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
