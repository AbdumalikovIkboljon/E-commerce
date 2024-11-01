import Icon from "@/components/Icon";
import { classicMonochromeShirt, monochromaticWardrobeShirt, essentialNeutralsShirt, utraanetBlackShirt } from '../../public/index';


export const services = [
  {
    id: 1,
    icon: <Icon name='delivery' color="transparent" currentColor='black' size="w-6 h-6" />,
    title: "Free shipping",
    description: "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    id: 2,
    icon: <Icon name='starBadge' color="transparent" currentColor='black' size="w-6 h-6" />,
    title: "Satisfaction Guarantee",
    description: "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
  },
  {
    id: 3,
    icon: <Icon name='shieldCheck' color="transparent" currentColor='black' size="w-6 h-6" />,
    title: "Secure Payment",
    description: "Your security is our priority. Your payments are secure with us.",
  },
]

export const bestSelling = [
  {
    id: 1,
    image: classicMonochromeShirt,
    name: 'Classic Monochrome Tees',
    inStock: true,
    price: 35.00,
  },
  {
    id: 2,
    image: monochromaticWardrobeShirt,
    name: 'Monochromatic Wardrobe',
    inStock: true,
    price: 27.00,
  },
  {
    id: 3,
    image: essentialNeutralsShirt,
    name: 'Essential Neutrals',
    inStock: true,
    price: 22.00,
  },
  {
    id: 4,
    image: utraanetBlackShirt,
    name: 'UTRAANET Black',
    inStock: true,
    price: 43.00,
  },
]

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
