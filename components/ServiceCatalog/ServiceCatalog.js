import React from "react";
import { Styled } from "./styles.js";
import CardService from "./CardService/CardService.js";

const ServiceCatalog = (props) => {
  return (
    <Styled.Inner>
      {services.map((element, idx) => (
        <>
          <CardService
            key={idx}
            title={element.title}
            description={element.description}
            doodle={element.doodle}
            number={element.number}
          ></CardService>
        </>
      ))}
    </Styled.Inner>
  );
};

export default ServiceCatalog;

const services = [
  // {
  // 	title: "Innovation Booster",
  // 	doodle: "/service1.png",
  // 	description:
  // 		"Propel your product ideas and business models to new heights with cutting-edge business experiments and design thinking methodologies,empowering your organization to soar with innovation.",
  // },
  {
    title: "MVP Launchpad",
    number: "1",
    doodle: "/service1_doodle.png",
    description:
      "We help you launch successful MVPs by understanding the problems your customers face, creating valuable solutions, designing visually appealing products, and developing prototypes that meet user needs and business goals.",
  },
  {
    title: "Software Development",
    number: "2",
    doodle: "/service2_doodle.png",
    description:
      "We help improve your software by making it easier to use, adding useful features, and planning for success. This boosts performance, makes users happy, and drives business growth.",
  },
  {
    title: "web design",
    number: "2",
    doodle: "/service3_doodle.png",
    description:
      "Create captivating and functional websites with our web design service. We combine creativity and expertise to deliver seamless user experiences. From intuitive navigation to responsive layouts, we bring your vision to life.",
  },
  //   {
  //     title: "",
  //     number: "3",
  //     doodle: "/service4.png",
  //     description:
  //       "Unlock the Full Potential of Your Project Acceleration with Our Expert Staff Augmentation Solutions. Assemble Your Customized Crew of Highly Skilled and Experienced Professionals to Drive Your Business Goals to New Heights of Success.",
  //   },
];
