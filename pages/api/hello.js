const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
	const response = await notion.pages.create();
	console.log(response);
})();
