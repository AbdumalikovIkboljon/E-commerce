import Icon from "@/components/Icon";
import {
  classicMonochromeShirt,
  monochromaticWardrobeShirt,
  essentialNeutralsShirt,
  utraanetBlackShirt,
  elegantEbonyShirt,
  sleekAndCozyBlackSweater,
  rawBlackTeesShirt,
  mockupBlackShirt
} from "../../public/index";

export const services = [
  {
    id: 1,
    icon: (
      <Icon
        name="delivery"
        color="transparent"
        currentColor="black"
        size="w-6 h-6"
      />
    ),
    title: "Free shipping",
    description:
      "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    id: 2,
    icon: (
      <Icon
        name="starBadge"
        color="transparent"
        currentColor="black"
        size="w-6 h-6"
      />
    ),
    title: "Satisfaction Guarantee",
    description:
      "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
  },
  {
    id: 3,
    icon: (
      <Icon
        name="shieldCheck"
        color="transparent"
        currentColor="black"
        size="w-6 h-6"
      />
    ),
    title: "Secure Payment",
    description:
      "Your security is our priority. Your payments are secure with us.",
  },
];

export const bestSelling = [
  {
    id: 1,
    image: classicMonochromeShirt,
    name: "Classic Monochrome Tees",
    inStock: true,
    price: 35.0,
  },
  {
    id: 2,
    image: monochromaticWardrobeShirt,
    name: "Monochromatic Wardrobe",
    inStock: true,
    price: 27.0,
  },
  {
    id: 3,
    image: essentialNeutralsShirt,
    name: "Essential Neutrals",
    inStock: true,
    price: 22.0,
  },
  {
    id: 4,
    image: utraanetBlackShirt,
    name: "UTRAANET Black",
    inStock: true,
    price: 43.0,
  },
];

export const products = {
  featured: [
    {
      id: 1,
      name: "Elegant Ebony Sweatshirts",
      price: 35.0,
      inStock: true,
      image: elegantEbonyShirt,
    },
    {
      id: 2,
      name: "Sleek and Cozy Black",
      price: 57.0,
      inStock: true,
      image: sleekAndCozyBlackSweater,
    },
    {
      id: 3,
      name: "Raw Black Tees",
      price: 19.0,
      inStock: true,
      image: rawBlackTeesShirt,
    },
    {
      id: 4,
      name: "MOCKUP Black",
      price: 30.0,
      inStock: true,
      image: mockupBlackShirt,
    },
  ],
  latest: [
    // Add your latest products here with the same structure
    {
      id: 5,
      name: "New Collection Tee",
      price: 25.0,
      inStock: true,
      image: classicMonochromeShirt,
    },
    {
      id: 6,
      name: "Latest Style Hoodie",
      price: 60.0,
      inStock: true,
      image: sleekAndCozyBlackSweater,
    },
  ],
};

export const footerLinks = [
  {
    id: 1,
    title: "Support",
    links: [
      {
        id: 1,
        title: "FAQ",
        url: "/",
      },
      {
        id: 2,
        title: "Terms of use",
        url: "/",
      },
      {
        id: 3,
        title: "Privacy Policy",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      {
        id: 1,
        title: "About us",
        url: "/",
      },
      {
        id: 2,
        title: "Contact",
        url: "/",
      },
      {
        id: 3,
        title: "Careers",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Shop",
    links: [
      {
        id: 1,
        title: "My account",
        url: "/",
      },
      {
        id: 2,
        title: "Checkout",
        url: "/",
      },
      {
        id: 3,
        title: "Cart",
        url: "/",
      },
    ],
  },
];
