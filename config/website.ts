import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const links = {
  twitter: "https://twitter.com/mguerdoul",
  linkedin: "https://www.linkedin.com/in/mahmoudguerdoul",
  discord: "",
  authorsWebsite: "https://guerdoul.com",
  authorsGitHub: "https://github.com/guerdoul-jsx",
  openGraphImage: "https://guerdoul.com/images/opengraph-image.png",
};

export const siteConfig = {
  name: "Mahmoud Guerdoul | Portfolio",
  description:
    "A simple and elegant portfolio website showcasing my skills and projects",
  links,
  url: "https://guerdoul.com",
  ogImage: links.openGraphImage,
  author: "mahmoudguerdoul",
  address: "Ait Ourir Marrakech - Marrakech-safi, MA 42050",
  metadataBase: new URL("https://guerdoul.com"),
  keywords: [
    "guerdoul",
    "Mahmoud Guerdoul",
    "Guerdoul Projects",
    "mg guerdoul",
  ],
};

export const metaObject = (
  title?: string,
  description?: string,
  openGraph?: OpenGraph
): Metadata => {
  return {
    title: title ? `${title} - Guerdoul` : siteConfig.name,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Guerdoul` : title,
      description: description ? description : siteConfig.description,
      url: "https://guerdoul.com",
      siteName: "Mahmoud Guerdoul Portfolio",
      images: {
        url: "https://guerdoul.com/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
