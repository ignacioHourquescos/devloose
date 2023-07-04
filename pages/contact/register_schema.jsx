const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const createNotionPage = async (notionData) => {
  const response = await notion.pages.create(notionData);
  return response;
};

module.exports = {
  createNotionPage,
  notion
};
