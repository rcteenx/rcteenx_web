import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/public/assets/icons";
import {
  bigImg1,
  bigImg2,
  bigImg3,
  customer1,
  customer2,
  img4,
  img5,
  img6,
  img7,
  thumbnailImg1,
  thumbnailImg2,
  thumbnailImg3,
} from "@/public/assets/images";

export const navLinks = [
  { href: "#popular", label: "Popüler" },
  { href: "#about-us", label: "Hakkımızda" },
  { href: "#contact-us", label: "İletişim" },
];

export const contHero = {
  coral: "Akılcı Hazır Site Konsepti",
  fline: "Sizin Hedeflerinize",
  span: "Çalışan",
  sline: "Site",
  desc: "Belirli bir amaç için optimize edilmemiş siteler, fırsat kayıplarına neden oluyor",
};

export const imgs = [
  {
    thumbnail: thumbnailImg1,
    bigImg: bigImg1,
  },
  {
    thumbnail: thumbnailImg2,
    bigImg: bigImg2,
  },
  {
    thumbnail: thumbnailImg3,
    bigImg: bigImg3,
  },
];

export const statistics = [
  { value: "250k+", label: "Ziyaretçi" },
  { value: "500+", label: "Teklif" },
  { value: "1k+", label: "Müşteri" },
];

export const contProd = {
  preSpan: "İşinize",
  span: "Özel",
  postSpan: "Sayfa Önerileri",
  desc: "Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value",
};
export const products = [
  {
    imgURL: img4,
    rating: 4.3,
    name: "Tek Sayfa Tasarım",
    price: "$250",
  },
  {
    imgURL: img5,
    rating: 4.5,
    name: "Mini Site",
    price: "$350",
  },
  {
    imgURL: img6,
    rating: 4.8,
    name: "Blog",
    price: "$500",
  },
  {
    imgURL: img7,
    rating: 4.9,
    name: "Kurumsal",
    price: "$1,000",
  },
];

export const contAbout = {
  preSpan: "İşinizin Gereği",
  span1: "Süper",
  span2: "Kaliteli",
  postSpan: "Hizmeti Sunuyoruz",
  desc1:
    "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.",
  desc2: "Our dedication to detail and excellence ensures your satisfaction",
};
export const services = [
  {
    imgURL: truckFast,
    label: "Hızlı Kurulum",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Uyumlu Tasarım",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Performans Odaklı",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
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
    title: "Ürünler",
    links: [
      { name: "Hazır Site", link: "/" },
      { name: "Hazır Site 2", link: "/" },
      { name: "Hazır Site 3 ", link: "/" },
      { name: "Hazır Site 4", link: "/" },
      { name: "Hazır Site 5", link: "/" },
    ],
  },
  {
    title: "Temel Bilgiler",
    links: [
      { name: "Hakkımızda", link: "/" },
      { name: "Sık Sorulan Sorular", link: "/" },
      { name: "Tasarım Süreci", link: "/" },
      { name: "100% Garanti", link: "/" },
      { name: "Ödeme", link: "/" },
    ],
  },
  {
    title: "Bize Ulaşın",
    links: [
      { name: "rcteenx@gmail.com", link: "mailto:rcteenx@gmail.com" },
      { name: "0 (544) 308 74 02", link: "tel:05443087402" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
