import { FaDesktop } from "react-icons/fa";

const portfolio = [
  //0)SYSONE
  {
    type: "WEBAPP",
    video: "/sysone.m4v",
    videoType:"landscape",
    date:"ONGOING",
    title: {es: "1. INSURANCE CLOUD SOLUTION",},
    desc: {es: "Diseño y desarollo la interfaz para sistema de back office de empresas aseguradoras. Arquitectura de micro front ends",},
  },
   ///1)RENOVAPP
  {
  type: "WEBAPP + PWA",
  videoType:"landscape",
  date:"ENERO 2022",
  video: "/Renovapp-1.m4v",
  title: {es: "2. SISTEMA DE GESTION DE PEDIDOS",},
  desc: {es: "Desarollo integral de sistema de gestion de pedidos para distribuidores mayoristas.  ",},
},
///2)HSR ABOGADOS
{
  type: "WEB DESIGN",
  video: "/HSR_desktop.m4v",
  date: "OCT 2021",
  videoType:"landscape",
  title: {es: "3. WEB INSTITUCIONAL PARA ESTUDIO DE ABOGADOS",},
  desc: {es: "Web Institucional para firma de abogados. ",},
},

//5)RENOVA
{
  type: "WEB DESIGN",
  video: "/renova.m4v",
  date:"NOV 2020",
  title: {es: "4. APLICACION WEB PARA DISTRIBUIDORA DE AUTOPARTES",},
  desc: {es: "A partir de un sistema de gestión en SQL, se hizo una conexión via Node.js, generando una vista web para mostrar precios y stock de manera dinámica",},
},

///6)ELFUERTE
{
  type: "WEBAPP",
  video: "/queHacemosHoy.m4v",
  date:"DIC 2020",
  title: {es: "5. WEB PARA MAYORISTA DE ALIMENTOS ",},
  desc: {es: "Se diseno una pagina web, y se desarollo un sistema de lista de precios acoplados a una planilla de calculo",},
},
 ///7)LA GALERA
{
  type: "WEBAPP",
  date:"ENERO 2022",
  video: "/queHacemosHoy.m4v",
  title: {es: "6. ECOMMERCE PARA EMPRENDIMIENTO DE COMIDA",},
  desc: { es: "Diseño centrado en el usuario que permite agregar y quitar productos de manera dinamica, y poder visualizar promociones de manera efectiva",},
},

//3)GREEN HAB
{
  type: "PROTOTYPE",
  video: "greenHab",
  date:"ENERO 2022",
  title: {es: "7. WEBAPP PARA EMPRENDIMIENTO DE HIDROPONIA",},
  desc: {es: "Web comercial para librería. Se armaron secciones de ofertas de productos puntuales para diferentes tipos de clientes",},
},
  //8)QUE HACEMOS HOY
{
  type: "PROTOTYPE",
  date:"ENERO 2022",
  video: "queHacemosHoy",
  title: {es: "8. APPLICACION DE EVENTOS CULTURALES",},
  desc: {es: "Prototipo funcional de apliación de información de eventos culturales",
  },
},
];




const portfolio2 = [
    //0)SYSONE
    {
      link: "https://www.mayoristaelfuerte.com",
      type: "PROTOTYPE",
      video: "/sysone.m4v",
      videoType:"landscape",
      client: "SYSONE",
      date:"ONGOING",
      color:"#FF6700",
      title: {
        es: "APLICACIÓN WEB PARA ASEGURADORAS",
        en: "ASSURANCE APP",
        pt: "APLICACIÓN WEB PARA ASEGURADORAS",
      },
      desc: {
        es: "Se desarollo la interfaz para sistema de back office de emrpesas aseguradoras",
        en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
        pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos",
      },
    },


   	///1)RENOVAPP
	{
		link: "https://www.mayoristaelfuerte.com",
		type: "WEBAPP + PWA",
    color:"#C4CB57",
    videoType:"landscape",
    date:"ENERO 2022",
		video: "/Renovapp-1.m4v",
		title: {
			es: "SISTEMA DE GESTION DE PEDIDOS",
			en: "WHOLESALER MANAGEMENT SYSTEM",
			pt: "Mayorista El Fuerte",
		},
		desc: {
			es: "Se desarollo un sistema de gestion de pedidos con estadisticas de ventes y manejo de mercaderia faltatne ",
			en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
			pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos",
		},
	},
	///2)HSR ABOGADOS
	{
      link: "https://www.hsrabogados.com",
		video: "/HSR_desktop.m4v",
		type: "WEB DESIGN",
    date: "OCT 2021",
    videoType:"landscape",
		title: {
			es: "WEB INSTITUCIONAL PARA ESTUDIO DE ABOGADOS",
			en: "Mayorista El Fuerte",
		},
		desc: {
			es: "Web Institucional para firma de abogados. ",
			en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
			pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos",
		},
	},


	//4)CAMARA
	// {
	// 	type: "WEB DESIGN",
	// 	link: "https://camaraquilmes.netlify.app",
	// 	video: "/queHacemosHoy.m4v",
	// 	title: {
	// 		es: "WEB INSTITUCIONAL PARA CAMARA GASTRONOMICA ",
	// 		en: "Gastronomic Chamber ",
	// 		pt: "Câmara Gastronomica ",
	// 	},
	// 	desc: {
	// 		es: "Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de compartir información para mejorar la competitividad del sector",
	// 		en: "First phase of a long term plan which seekes to group gastonomic agents which share information in order to improve competitiveness",
	// 		pt: "Primeira etapa do projeto que reúne agentes gastronômicos com o objetivo de compartilhar informações para melhorar a competitividade do setor",
	// 	},
	// },

	//5)RENOVA
	{
		type: "WEB DESIGN",
		video: "/renova.m4v",
		link: "https://listasrenova.netlify.app/views/html/indexofertas.html",
    date:"NOV 2020",
		title: {
			es: "APLICACION WEB PARA DISTRIBUIDORA DE AUTOPARTES",
			en: "Car Wholesaler",
			pt: "Distribuidor autopeças",
		},
		desc: {
			es: "A partir de un sistema de gestión en SQL, se hizo una conexión via Node.js, generando una vista web para mostrar precios y stock de manera dinámica",
			en: "Web view for ERP software based on SQL. Using Node.js a friendly interface was built for clients to access key information",
			pt: "A partir de um sistema de gestão em SQL, se fez uma conexão via Node.js, gerando uma vista web para mostrar preços e estoque de forma dinâmica",
		},
	},

	///6)ELFUERTE
	{
		type: "WEB DESIGN",
		link: "https://www.mayoristaelfuerte.com",
		video: "/queHacemosHoy.m4v",
    date:"DIC 2020",
		title: {
			es: "WEB PARA MAYORISTA DE ALIMENTOS ",
			en: "Mayorista El Fuerte",
			pt: "Mayorista El Fuerte",
		},
		desc: {
			es: "Se diseno una pagina web, y se desarollo un sistema de lista de precios acoplados a una planilla de calculo",
			en: "WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
			pt: "Disenho web para atacadista de produtos naturais. Foco em lista de precos",
		},
	},
   ///7)LA GALERA
	{
		link: "https://lagalera.netlify.app",
		type: "E COMMERCE",
    date:"ENERO 2022",
		video: "/queHacemosHoy.m4v",
		title: {
			es: "ECOMMERCE PARA EMPRENDIMIENTO DE COMIDA",
			en: "La Galera Market",
			pt: "La Galera Market",
		},
		desc: {
			es: "Diseño centrado en el usuario que permite agregar y quitar productos de manera dinamica, y poder visualizar promociones de manera efectiva",
			en: "User-centered desgin which allows to add or elminate products from cart, and clearly visualize specific promotions ",
			pt: "Disenho centrado no usuario que permite adicionar e remover produtos de forma dinâmica, e poder visualizar as promoções de forma eficaz",
		},
	},

   	//3)GREEN HAB
	{

		type: "PROTOTYPE",
		video: "greenHab",
    date:"ENERO 2022",
		title: {
			es: "WEBAPP PARA EMPRENDIMIENTO DE HIDROPONIA",
			en: "Office supplies Wholesaler",
			pt: "Livrería de atacado ",
		},
		desc: {
			es: "Web comercial para librería. Se armaron secciones de ofertas de productos puntuales para diferentes tipos de clientes",
			en: "Commercial web for office supplies company. Specific section were designed for different tpo of clients",
			pt: "Site comercial para livraría. Seções de ofertas de produtos específicos foram disenhadas para diferentes tipos de clientes",
		},
	},
  	//8)QUE HACEMOS HOY
	{
		link: "https://www.behance.net/gallery/96068307/QueHacemosHoy",
		type: "PROTOTYPE",
    date:"ENERO 2022",
		video: "queHacemosHoy",
		title: {
			es: "APPLICACION DE EVENTOS CULTURALES",
			en: "CULTURAL EVENTS APP",
			pt: "Que Hacemos Hoy",
		},
		desc: {
			es: "Prototipo funcional de apliación de información de eventos culturales",
			en: "App prototype for cultural events and gatherings",
			pt: "Showroom virtual de produtos regionais. O foco foi feito na estética da apresentação do produto, marca e branding",
		},
	},
];

export default portfolio;
