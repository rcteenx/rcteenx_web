import {
  bookmark,
  clipboard,
  fylo,
  instagram_ui_clone,
  loopstudios,
  shortly,
  tesla_ui_clone,
  testimonial,
  webees_tech,
} from "@/public/assets/calismalar/tutorials";
import {
  emailSubscribe,
  imageGallery,
  loginModal,
  pricingCards,
  productModal,
} from "@/public/assets/calismalar/webparts";

export const tutorials = [
  {
    id: 1,
    title: "Responsive Websites built with Tailwind CSS Framework",
    desc: "Tailwind Css framework temel alınarak hazırlanmış sayfalar.",
    folder: "tailwind",
    works: [
      { id: 1, folder: "bookmark", image: bookmark, label: "Bookmark" },
      { id: 2, folder: "clipboard", image: clipboard, label: "Clipboard" },
      { id: 3, folder: "fylo", image: fylo, label: "Fylo" },
      {
        id: 4,
        folder: "instagram_ui_clone",
        image: instagram_ui_clone,
        label: "Instagram Ui Clone",
      },
      {
        id: 5,
        folder: "loopstudios",
        image: loopstudios,
        label: "Loopstudios",
      },
      { id: 6, folder: "shortly", image: shortly, label: "Shortly" },
      {
        id: 7,
        folder: "tesla_ui_clone",
        image: tesla_ui_clone,
        label: "Tesla Ui Clone",
      },
      {
        id: 8,
        folder: "testimonial",
        image: testimonial,
        label: "Testimonial",
      },
      {
        id: 9,
        folder: "webees-tech",
        image: webees_tech,
        label: "Webees Tech",
      },
    ],
  },
  {
    id: 2,
    title: "UI components built with Tailwind CSS Framework",
    desc: "Tailwind Css framework temel alınarak hazırlanmış web parçacıkları.",
    folder: "web-parts",
    works: [
      {
        id: 1,
        folder: "email-subscribe",
        image: emailSubscribe,
        label: "Email subscribe",
      },
      {
        id: 2,
        folder: "image-gallery",
        image: imageGallery,
        label: "Image gallery",
      },
      { id: 3, folder: "login-modal", image: loginModal, label: "Login modal" },
      {
        id: 4,
        folder: "pricing-cards",
        image: pricingCards,
        label: "Pricing cards",
      },
      {
        id: 6,
        folder: "product-modal",
        image: productModal,
        label: "Product modal",
      },
    ],
  },
];
