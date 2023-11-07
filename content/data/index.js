import {
  customer1,
  customer2,
  web1,
  web2,
  web3,
  web4,
  img7,
} from "@/public/assets/images";

export const navLinksHome = [
  { href: "#rcteenx", label: "rcteenx" },
  { href: "#services", label: "Hedefler" },
  { href: "#about", label: "Hakkımda" },
  { href: "#footer", label: "İletişim" },
];

export const navLinksStatic = [
  { id: "1", href: "#rcteenx", label: "rcteenx" },
  // { href: "cv/index.html", label: "CV" },
  // { href: "cv", label: "CV" },
  { id: "2", href: "bio", label: "Bio" },
  { id: "3", href: "portfolio", label: "Portfolio" },
  { id: "4", href: "freelance", label: "Freelance" },
];

export const contHero = {
  coral1: "Front-End Web Developer",
  coral2: "& E-commerce Consultant",
  fline: "Dijital Varlığınız* Nedir?",
  span: "ve Nasıl Geliştirilir",
  desc: "Stratejik hedefler doğrultusunda, bilinçli olarak yapılandırılmamış dijital kaynaklar, telafisi zor olan fırsat kayıplarına neden oluyor.",
  btn1: "İletişim",
  btn2: "CV",
  info: 'Web sayfalarınız, arama motoru, sosyal medya ve diğer platformlar aracılığıyla online ortamda yaratlan izlenimlerin bütünlüğü "dijtial varlık"ımızı oluşturur.',
  quote:
    "Ziyaretçilerinizin yüzde kaçı sizinle temas kuruyor ve müşteriniz oluyor?",
};

export const contBioHero = {
  coral1: "Front-End Web Developer",
  coral2: "& E-commerce Consultant",
  fline: "Front-End Developer",
  span: "TOOL BOX",
  desc: "Hedefler doğrultusunda bilinçli olarak yapılandırılmamış web sayfaları, dijital dünyada fırsat kayıplarına neden oluyor",
  btn1: "Bize Ulaşın",
  btn2: "Bilgi Al",
  quoteTitle: "<h1>Hello World!</h1>",
  quote:
    "This is a front-end web developer from Turkey. Thanks to modern frameworks such as Next JS and Tailwind CSS, it is fun & fast to build & maintain web applications. Let's build something together.",
};

export const statistics = [
  { id: 1, value: "250 k+", label: "Ziyaretçi" },
  { id: 2, value: "10 k+", label: "Teklif" },
  { id: 3, value: "1 k+", label: "Müşteri" },
];

export const statisticsFreelance = [
  { id: 1, value: "250 k+", label: "Ziyaretçi" },
  { id: 2, value: "10 k+", label: "Teklif" },
  { id: 3, value: "1 k+", label: "Müşteri" },
];

export const contFreelanceHero = {
  coral1: "Front-End Web Developer",
  coral2: "& E-commerce Consultant",
  fline: "Dijital Varlığınızı",
  span: "Birlikte Geliştirelim",
  sline: "Uygun mu?",
  quoteEn1: "A lot of times, people don't know what they want",
  quoteEn2: "until you show it to them. *",
  from: "Steve Jobs",
  btn1: "İletişim",
  btn2: "Bilgi Al",
  info: "Çoğu zaman insanlar ne istediklerini bilmiyor, siz onlara gösterene kadar.",
  quote:
    "Markanıza uygun stratejik hedeflerinizi belirleyin, dijital dünyada hedeflerinize ulaşmak için çalışmaları birlikte planlayalım.",
};

export const contAbout = {
  preSpan: "İşinizin Gereği",
  span1: "Destek",
  span2: "& Bakım",
  postSpan: "Hizmeti Sunuyoruz",
  desc1:
    "Pek çok amaçla kullanılan web sitesi, oldukça sık güncellenmek ve değiştirilmek zorunda. İşin gereği ve hedeflerin tutması için yapılması gereken bu düzenlemelerin sağlıklı olması için framework (çerçeve) ihtiyacı ortaya çıkmıştır.",
  desc2:
    "Eğer belirli bir framework üzerine kurulu olmayan bir sistem kullanıyorsanız, bir süre sonra düzenlemeleriniz sıkıntı yaratmaya başlar.",
  btn: "Detayları incele",
};

export const contProd = {
  preSpan: "Hedefinize",
  span: "Özel",
  postSpan: "Sayfa Türleri",
  desc: "Hedefinize uygun alternatif web sayfa türleri ve başlangıç fiyatları aşağıda belirtilmiştir.",
};
export const products = [
  {
    imgURL: web1,
    rating: 4.3,
    name: "Tek Sayfa",
    price: "$500",
    priceCampaign: "$250",
  },
  {
    imgURL: web2,
    rating: 4.5,
    name: "Mini Site",
    price: "$700",
    priceCampaign: "$350",
  },
  {
    imgURL: web3,
    rating: 4.8,
    name: "Blog",
    price: "$1,000",
    priceCampaign: "$500",
  },
  {
    imgURL: web4,
    rating: 4.9,
    name: "Kurumsal",
    price: "$2,000",
    priceCampaign: "$1,000",
  },
];

export const contOffer = {
  span: "%50",
  postSpan: "İndirim",
  desc1: "2023 yılının sonuna kadar geçerli, özel teklifimiz:",
  desc2: "Vereceğiniz siparişlerde 50% indirim.",
  btn1: "Teklif iste",
  btn2: "Bilgi al",
};

export const contReview = {
  span1: "Müşterilerimiz",
  postSpan: "Ne Diyor?",
  desc1:
    "Müşterilerimizin ürün ve hizmetlerimiz hakkındaki yorumları, birlitke yapacağımız çalışmalara yol gösterebilir",
};
export const reviewsX = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
export const footerLinks = [
  {
    title: "Tutorials",
    links: [
      { name: "Bookmark", link: "/tutorials/tailwind/bookmark/index.html" },
      { name: "Clipboard", link: "/tutorials/tailwind/clipboard/index.html" },
      { name: "Fylo", link: "/tutorials/tailwind/fylo/index.html" },
      {
        name: "Instagram UI Clone",
        link: "/tutorials/tailwind/instagram_ui_clone/index.html",
      },
      {
        name: "Loopstudios",
        link: "/tutorials/tailwind/loopstudios/index.html",
      },
      {
        name: "Shortly",
        link: "/tutorials/tailwind/shortly/index.html",
      },
      {
        name: "Tesla UI Clone",
        link: "/tutorials/tailwind/tesla_ui_clone/index.html",
      },
      {
        name: "Testimonial",
        link: "/tutorials/tailwind/testimonial/index.html",
      },
      {
        name: "Webees",
        link: "/tutorials/tailwind/webees-tech/index.html",
      },
    ],
  },
  {
    title: "Components",
    links: [
      {
        name: "Subscribe Email",
        link: "tutorials/web-parts/email-subscribe/index.html",
      },
      {
        name: "Image Gallery",
        link: "/tutorials/web-parts/image-gallery/index.html",
      },
      {
        name: "Login Modal",
        link: "/tutorials/web-parts/login-modal/index.html",
      },
      {
        name: "Pricing Cards",
        link: "/tutorials/web-parts/pricing-cards/index.html",
      },
      {
        name: "Product Modal",
        link: "/tutorials/web-parts/product-modal/index.html",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "rcteenx@gmail.com", link: "mailto:rcteenx@gmail.com" },
      { name: "+90 (544) 308 74 02", link: "tel:+905443087402" },
    ],
  },
];

export const socialMedia = [
  // { src: instagram, alt: "instagram logo" },
  {
    svgSlug: "github",
    alt: "github logo",
    link: "https://github.com/rcteenx",
  },
  {
    svgSlug: "linkedin",
    alt: "linkedin logo",
    link: "https://www.linkedin.com/in/rcteenx",
  },
  {
    svgSlug: "twitter",
    alt: "twitter logo",
    link: "https://twitter.com/rcteenx",
  },
];

export const skillBar = [
  { id: 1, label: "Javascript - React & Next", percent: "85" },
  { id: 1, label: "Tailwind CSS", percent: "90" },
  { id: 1, label: "HTML & CSS", percent: "95" },
  { id: 1, label: "Semantic Web & SEO", percent: "90" },
  { id: 1, label: "UI & UX Design", percent: "80" },
  { id: 1, label: "Business Logic", percent: "95" },
  { id: 1, label: "Algorithmic & Critical Thinking", percent: "90" },
  { id: 1, label: "Problem Solving & Communication", percent: "85" },
  { id: 1, label: "Time Management & Teamwork", percent: "80" },
  { id: 1, label: "Turkish", percent: "100" },
  { id: 1, label: "English", percent: "90" },
  // { id: 1, label: "German", percent: "45" },
];
