import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/public/assets/icons";
import {
  customer1,
  customer2,
  web1,
  web2,
  web3,
  web4,
  img7,
} from "@/public/assets/images";

export const navLinks = [
  { href: "#rcteenx", label: "rcteenx" },
  { href: "#services", label: "Hedefler" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#contact", label: "İletişim" },
];

export const contHero = {
  coral1: "Front-End Web Developer",
  coral2: "& E-commerce Consultant",
  fline: "Dijital Varlıklarınız",
  span: "Hedefinize",
  sline: "Uygun mu?",
  desc: "Hedefler doğrultusunda bilinçli olarak yapılandırılmamış web sayfaları, dijital dünyada fırsat kayıplarına neden oluyor",
  btn1: "Bize Ulaşın",
  btn2: "Bilgi Al",
};

export const statistics = [
  { id: 1, value: "250 k+", label: "Ziyaretçi" },
  { id: 2, value: "10 k+", label: "Teklif" },
  { id: 3, value: "1 k+", label: "Müşteri" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "1- Ziyaretçi",
    subtext:
      "Web siteni aylık ortalama kaç kişi ziyaret ediyor, hangi kanallardan geliyor?",
  },
  {
    imgURL: shieldTick,
    label: "2- Etkileşim",
    subtext:
      "Ziyaretçilerin sitenizde kalış süresi ve ortalama sayfa dolaşma sayısı?",
  },
  {
    imgURL: support,
    label: "3- Müşteri",
    subtext:
      "Dijital kaynaklardan size ulaşan kaç kişi, para kazandıran müşteriye dönüşüyor?",
  },
];

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
    price: "$250",
  },
  {
    imgURL: web2,
    rating: 4.5,
    name: "Mini Site",
    price: "$350",
  },
  {
    imgURL: web3,
    rating: 4.8,
    name: "Blog",
    price: "$500",
  },
  {
    imgURL: web4,
    rating: 4.9,
    name: "Kurumsal",
    price: "$1,000",
  },
];

export const contOffer = {
  span: "Özel",
  postSpan: "Teklif",
  desc1: "Sınırlı bir süre geçerli, çok özel teklifimiz aşağıdadır.",
  desc2:
    "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
  btn1: "Teklif iste",
  btn2: "Bilgi al",
};

export const contReview = {
  span1: "Müşterilerimiz",
  postSpan: "Ne Diyor?",
  desc1:
    "Müşterilerimizin ürün ve hizmetlerimiz hakkındaki yorumları, birlitke yapacağımız çalışmalara yol gösterebilir",
};
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
