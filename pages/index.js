import { Client } from "@notionhq/client";
import styled from "styled-components";

import Hero from "../components/hero";
import Section from "../components/toolSection";
import Navigator from "../components/navigator";

//Styled components
const Main = styled.main`
  width: 100%;
  padding: 144px 24px;

  @media (max-width: 992px) {
    padding: 48px 24px;
  }
`;

export default function Home({
  vpn,
  browser,
  email,
  messenger,
  dns,
  search,
  vpnArticles,
  browserArticles,
  emailArticles,
  messengerArticles,
  dnsArticles,
  SearchArticles,
}) {
  return (
    <>
      <Hero />
      <Navigator />
      <Main>
        <Section
          id="VPN"
          title="Use a VPN"
          description={`A VPN, or virtual private network, is a tool to secure your internet connection. It makes sure that the data you are sending and receiving is encrypted, preventing your ISP or any malicious actor from seeing what you do.

        You should use a VPN provider that you trust to not harvest and re-sell your data. The best VPNs often charge a monthly subscription - this is a good thing because it means their business model is not reliant upon reselling your data to advertisers.`}
          tools={vpn}
          articles={vpnArticles}
        />
        <Section
          id="Browser"
          title="Use a secure browser"
          description="You should use a web browser that protects you from tracking, fingerprinting, and unwanted advertisements. *Modern browsers have made it simple to transfer your bookmarks and preferences in order to reduce switching pains.*"
          tools={browser}
          articles={browserArticles}
        />
        <Section
          id="Email"
          title="Use a secure email provider"
          description="Email providers like Google & Yahoo might seem easy because they are free. In reality they make money by reading your email, taking your data and sell it to companies that can target you with ads. You should use an email provider that doesn’t read your email or gather data about your conversations to target you."
          tools={email}
          articles={emailArticles}
        />
        <Section
          id="Messenger"
          title="Use a secure messenger"
          description="When sharing sensitive information over chat, you should be using a secure, end-to-end encrypted messaging service. End-to-end encryption ensures that only you and your intended recipient are able to view messages."
          tools={messenger}
          articles={messengerArticles}
        />
        <Section
          id="DNS"
          title="Secure your DNS"
          description={`First, DNS, or domain name system, is the system that acts like a sort of phone book on the Internet. Instead of having to remember a numerical IP address, such as 76.76.21.21, you can type myprivacy.is to go to our website. There is a huge directory that records the correspondence between these numerical addresses and domain names to facilitate Internet usage, and to make it easy to move a domain from one server to another.

        In addition, some ISPs may record the metadata of your Internet activity, or the requests you make: the websites you visit, the servers you connect to, and more.`}
          tools={dns}
          articles={dnsArticles}
        />
        <Section
          id="Search"
          title="Privacy-first search engine"
          description="You should use a search engine that protects you from tracking, fingerprinting, and unwanted advertisements. DuckDuckGo is a privacy-first search engine that does not store your search history, has strict location and personalization permissions, and publishes regular content teaching people how to be safer on the web."
          tools={search}
          articles={SearchArticles}
        />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const vpn = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "VPN",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const browser = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Browser",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const email = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Email",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const messenger = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Conversation",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const dns = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "DNS",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const search = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Search",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  //Articles
  const vpnArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "VPN",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const browserArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Browser",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const emailArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Email",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const messengerArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Messenger",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const dnsArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "DNS",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  const SearchArticles = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES,
    filter: {
      and: [
        {
          property: "Live",
          select: {
            equals: "Yes",
          },
        },
        {
          property: "Type",
          select: {
            equals: "Search",
          },
        },
      ],
    },

    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  });

  return {
    props: {
      vpn: vpn.results,
      browser: browser.results,
      email: email.results,
      messenger: messenger.results,
      dns: dns.results,
      search: search.results,
      vpnArticles: vpnArticles.results,
      browserArticles: browserArticles.results,
      emailArticles: emailArticles.results,
      messengerArticles: messengerArticles.results,
      dnsArticles: dnsArticles.results,
      SearchArticles: SearchArticles.results,
    },

    revalidate: 1,
  };
}
