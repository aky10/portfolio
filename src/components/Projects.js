import React from "react";
import typingTest from "../assets/typingTest.PNG";
import netflix from "../assets/netflix.PNG";
import getInspirred from "../assets/get-inspirred.png";
import forkify from "../assets/forkify.PNG";

const Projects = () => {
  const projects = [
    {
      img: netflix,
      title: "Netflix",
      desc: " A Netflix-Clone. Built with React, Redux, Tailwind CSS and FireBase ",
      live: "https://aky10.github.io/netflix-clone/",
      code: "https://github.com/aky10/netflix-clone",
    },
    {
      img: forkify,
      title: "forkify",
      desc: "website for food recipes built using html,css,javascript",
      live: "https://food-recipes123.netlify.app/",
      code: "https://github.com/aky10/forkify",
    },
    {
      img: typingTest,
      title: "typing-test",
      desc: "a typing test application to build users typing speed",
      live: "https://aky10.github.io/typing-test/",
      code: "https://github.com/aky10/typing-test",
    },
    // {
    //   img: getInspirred,
    //   title: "get Inspirred",
    //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    //   live: "https://get-inspirred.netlify.app/",
    //   code: "https://github.com/Coderamrin/get-inspired",
    // },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
