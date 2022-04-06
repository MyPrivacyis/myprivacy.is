const title = "MyPrivacy — Is a fundamental human right.";
const description =
  "Resource.wtf is a curated list of design related things I find while searching the internet.";

const SEO = {
  title,
  description,
  canonical: "https://resource.wtf",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://resource.wtf",
    title,
    description,
    images: [
      {
        url: "https://resource.wtf/img/social_image.jpg",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@gsigurdarson",
    site: "@gsigurdarson",
    cardType: "summary_large_image",
  },
};

export default SEO;
