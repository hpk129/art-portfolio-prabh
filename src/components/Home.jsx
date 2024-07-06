import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-700 via-gray-200 to-white home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            // className="rounded-2xl mx-auto w-2/3 md:w-full"
            className="rounded-2xl mx-auto w-0 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray">
            I'm an Artist 
          </h2>
          <p className="text-gray-00 py-4 max-w-md">
          Hello! I'm Prabhjyot Singh, a passionate storyboard artist with over 2 years of experience in the animation and film industry. Throughout my career, I've had the pleasure of working on a diverse range of projects. I specialize in translating scripts into visual stories, ensuring each frame effectively conveys the emotion and action intended by the narrative. My approach is collaborative and detail-oriented, focusing on understanding the vision of directors and writers to create storyboards that not only meet but exceed expectations. I thrive in dynamic environments and am always eager to tackle new challenges and bring innovative ideas to the table.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
