import { Client } from "@notionhq/client";
import styled from "styled-components";

import Card from "../components/card/card";

//Styled components
const Main = styled.main`
  width: 100%;
  padding: 144px 24px;

  @media (max-width: 992px) {
    padding: 48px 24px;
  }
`;

export default function Home({ resources }) {
  return (
    <Main>
      <Card resources={resources} />
    </Main>
  );
}

export async function getStaticProps() {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals: "Public",
      },
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
      resources: response.results,
    },

    revalidate: 1,
  };
}
