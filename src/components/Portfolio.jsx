import React from "react";
import air from "../assets/portfolio/air character final.png";
import concept from "../assets/portfolio/concept soldier and farm oy.jpg";
import expression from "../assets/portfolio/expression chart.png";
import kristen from "../assets/portfolio/kristien portrait.png";
import tiger from "../assets/portfolio/tiger.jpg";
import vegetable from "../assets/portfolio/vegetable house.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: air,
      name: 'Air Character',
    },
    {
      id: 2,
      src: concept,
      name: 'Concept Soldier and Farm',
    },
    {
      id: 3,
      src: expression,
      name: 'Expression Chart',
    },
    {
      id: 4,
      src: kristen,
      name: 'Kristen Portrait',
    },
    {
      id: 5,
      src: tiger,
      name: 'Tiger',
    },
    {
      id: 6,
      src: vegetable,
      name: 'Vegetable House',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-white w-full text-black md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt={name}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <p className="w-full px-6 py-3 m-4 text-center">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-40"></div>
    </div>
  );
};

export default Portfolio;
