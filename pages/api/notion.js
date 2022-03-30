const { Client } = require("@notionhq/client");

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_API_KEY,
});

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: {
        equals: "Public",
      },
    },
  });
  console.log(response);

  res.status(200).json({ response });
};
