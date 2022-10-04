const title = 'Basic Privacy — Is a fundamental human right.';
const description =
  "Basic Privacy offers a curated list of 'Privacy Focused' tools that help you take back control of your data and privacy. Instead of using Google, consider switching to DuckDuckGo. Afraid that your ISP is selling your data to advertisers? Use a VPN.";

const SEO = {
  title,
  description,
  canonical: 'https://basicprivacy.org',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://basicprivacy.org',
    title,
    description,
    images: [
      {
        url: 'https://basicprivacy.org/img/social_image.png',
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@gsigurdarson',
    site: '@gsigurdarson',
    cardType: 'summary_large_image',
  },
};

export default SEO;
