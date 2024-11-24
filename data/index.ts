export const navItems = [
  { name: "Om meg", link: "#about" },
  { name: "Prosjekter", link: "#projects" },
  { name: "Erfaring", link: "#experience" },
  { name: "Kontakt", link: "#contact" },
];

export const technologiesRow1 = [
  {
    quote: "Javascript",
    name: "",
    title: "",
  },
  {
    quote: "Typescript ",
    name: "",
    title: "",
  },
  {
    quote: "React ",
    name: "",
    title: "",
  },
  {
    quote: "Next ",
    name: "",
    title: "",
  },
  {
    quote: "Express ",
    name: "",
    title: "",
  },
  {
    quote: "MongoDB ",
    name: "",
    title: "",
  },
  {
    quote: "Stripe ",
    name: "",
    title: "",
  },
];

export const technologiesRow2 = [
  {
    quote: "CSS",
    name: "",
    title: "",
  },
  {
    quote: "Tailwind",
    name: "",
    title: "",
  },
  {
    quote: "shadcn",
    name: "",
    title: "",
  },
  {
    quote: "Acernity",
    name: "",
    title: "",
  },
  {
    quote: "Three",
    name: "",
    title: "",
  },
  {
    quote: "Framer Motion",
    name: "",
    title: "",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-1 lg:row-span-2 md:col-span-4 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/joakim_profile.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Teknologientusiast med en lidenskap for utvikling.",
    description: "",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 3,
    title: "Om meg",
    description: "",
    className: "lg:col-span-1 lg:row-span-2 md:col-span-5 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Legg meg på LinkedIn",
    description: "",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 6,
  //   title: "",
  //   description: "",
  //   className: "lg:col-span-1 md:col-span-6 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Lege timebooking system",
    des: "En helseplattform som forenkler pasientregistrering, avtaleplanlegging og medisinske journaler, med skjemaer og SMS-varsler.",
    img: "/carepulse.png",
    techList: [
      {
        id: 1,
        name: "React",
        designation: "",
        image: "/react.svg",
      },
      {
        id: 2,
        name: "Next",
        designation: "",
        image: "/next.svg",
      },
      {
        id: 3,
        name: "Tailwind",
        designation: "",
        image: "/tailwind.svg",
      },
      {
        id: 4,
        name: "Typescript",
        designation: "",
        image: "/typescript.svg",
      },
      {
        id: 5,
        name: "Appwrite",
        designation: "",
        image: "/appwrite.svg",
      },
      {
        id: 6,
        name: "Twilio",
        designation: "",
        image: "/twilio.svg",
      },
      {
        id: 7,
        name: "Sentry",
        designation: "",
        image: "/sentry.svg",
      },
    ],
    link: "https://github.com/joakimvu/carepulse",
  },
  {
    id: 2,
    title: "Faktureringssystem",
    des: "Faktureringssystem som kan opprette, sende, samt håndtere betalinger med Stripe.",
    img: "/invoiceapp.png",
    techList: [
      {
        id: 1,
        name: "React",
        designation: "",
        image: "/react.svg",
      },
      {
        id: 2,
        name: "Next",
        designation: "",
        image: "/next.svg",
      },
      {
        id: 3,
        name: "Tailwind",
        designation: "",
        image: "/tailwind.svg",
      },
      {
        id: 4,
        name: "Typescript",
        designation: "",
        image: "/typescript.svg",
      },
      {
        id: 6,
        name: "Clerk",
        designation: "",
        image: "/clerk.svg",
      },
      {
        id: 7,
        name: "Xata",
        designation: "",
        image: "/xata.svg",
      },
      {
        id: 8,
        name: "Stripe",
        designation: "",
        image: "/stripe.svg",
      },
    ],
    link: "https://github.com/joakimvu/invoice-app",
  },
  {
    id: 3,
    title: "Apple Nettside Klone",
    des: "Apple nettside klone som viser iPhone 15 med animasjoner bygget på GSAP",
    img: "/apple_clone.png",
    techList: [
      {
        id: 1,
        name: "React",
        designation: "",
        image: "/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        designation: "",
        image: "/tailwind.svg",
      },
      {
        id: 3,
        name: "Three.JS",
        designation: "",
        image: "/three.svg",
      },
      {
        id: 4,
        name: "GSAP",
        designation: "",
        image: "/gsap.svg",
      },
    ],
    link: "https://apple-website-clone-ruby.vercel.app/",
  },
  {
    id: 4,
    title: "Nettbutikk",
    des: "Nettbutikk med moderne design og animasjoner. Mulighet for å legge til og redigere produkter via Sanity, funksjoner for handlekurv og betaling, samt full Stripe-integrasjon for ekte betalinger.",
    img: "/ecommerce.png",
    techList: [
      {
        id: 1,
        name: "React",
        designation: "",
        image: "/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        designation: "",
        image: "/tailwind.svg",
      },
      {
        id: 3,
        name: "Sanity",
        designation: "",
        image: "/sanity.svg",
      },
      {
        id: 4,
        name: "Stripe",
        designation: "",
        image: "/stripe.svg",
      },
    ],
    link: "https://ecommerce-neon-xi-24.vercel.app/",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Sharepoint Utvikler",
    desc: "Vedlikeholdt intranett og utviklet skreddersydde moduler i SharePoint med SharePoint Framework (SPFx)",
    className: "md:col-span-2",
    thumbnail: "/norconsult.svg",
  },
  {
    id: 2,
    title: "Frontend & AI Modell trener",
    desc: "Designet og utviklet webapplikasjon for Nofima med c# Blazor. Og trent AI modell med Azure Custom Vision for å registrere avvik i laksefilet",
    className: "md:col-span-2",
    thumbnail: "/nofima.svg",
  },
];

export const otherExperience = [
  {
    id: 1,
    title: "Profesjonell Pilleplukker",
    desc: "Plukk og pakk av varer på lager med truck hos Apotek 1",
    className: "md:col-span-2",
    thumbnail: "/apotek1.svg",
  },
  {
    id: 2,
    title: "Iskremsluker",
    desc: "Med å produsere verdens beste iskrem hos Hennig Olsen",
    className: "md:col-span-2",
    thumbnail: "/hennigolsen.svg",
  },
  {
    id: 3,
    title: "Studentenes strykeforsvarer",
    desc: "Studentassistent i 3D Modellering, Grafisk Design og Webapplikasjoner",
    className: "md:col-span-2",
    thumbnail: "/hio.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git_white.svg",
    url: "https://github.com/joakimvu",
  },
  {
    id: 2,
    img: "/link_white.svg",
    url: "https://www.linkedin.com/in/joakimvu/",
  },
];
