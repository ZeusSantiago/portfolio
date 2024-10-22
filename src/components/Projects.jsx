import React from "react";
import ProjectsItem from "./ProjectsItem";
import fortune from "../assets/fortune-codies.png";
import shopsuey from "../assets/shop-suey.png";
import stictactoe from "../assets/stictactoe.png";
import portv1 from "../assets/portfolio-v1.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-teal-800">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque
        repudiandae magni quos. Harum dolor, voluptatibus veritatis molestiae
        praesentium unde?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={portv1} title="Sample App" />
        <ProjectsItem img={shopsuey} title="Sample App" />
        <ProjectsItem img={fortune} title="Sample App" />
        <ProjectsItem img={stictactoe} title="Sample App" />
      </div>
    </div>
  );
};

export default Projects;
