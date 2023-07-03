const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: "821ee12ae6bc48f2b061d0e3037f32ca"
    },
    properties: {
      name: {
        title: [
          {
            text: {
              content: "Santiago Valdez"
            }
          }
        ]
      },
      profile: {
        select: {
          name: "Emprendedor"
        }
      },
      status: {
        select: {
          name: "ideation"
        }
      },
      mail: {
        rich_text: [
          {
            text: {
              content: "santiagovaldez@gmail.com"
            }
          }
        ]
      },
      phone: {
        rich_text: [
          {
            text: {
              content: "11657382949"
            }
          }
        ]
      },
      message: {
        rich_text: [
          {
            text: {
              content: "Trabajo en la industria vitivinícola. Estamos intentando mejorar los procesos para poder obtener un mejor rendimiento. Tenemos que hacer una integración del sistema actual."
            }
          }
        ]
      }
    }
  });
})();
