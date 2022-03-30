import { Client } from "@notionhq/client";
import styled from "styled-components";

import Section from "../components/card/card";

//Styled components
const Main = styled.main`
  width: 100%;
  padding: 144px 24px;

  @media (max-width: 992px) {
    padding: 48px 24px;
  }
`;

export default function Home({ vpn, browser }) {
  return (
    <Main>
      <Section tools={vpn} />
      <Section tools={browser} />
    </Main>
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

  return {
    props: {
      vpn: vpn.results,
      browser: browser.results,
    },

    revalidate: 1,
  };
}
