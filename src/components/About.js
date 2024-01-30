import React from "react";
import AboutImg from "../assets/about-img.png";

import {
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";
const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Amit Kumar Yadav. I am currently in final year of my
            Btech in Computer Science Engineering.
          </p>
          <p className="pb-5">
            I am proficient in problem solving having skills in
            C++,Javascript,ReactJs,HTML,CSS.
          </p>

          <p>
            I have solved around 1600+ questions across coding platforms like
            Leetcode,Codeforces,Codechef,GeeksForGeeks
          </p>

          <p className="pb-5">
            I have achieved multiple times top 5% ranks across programming
            contests held on multiple platforms
          </p>
        </div>

        <div className="about-img">
          <img
            src="https://cdn.codechef.com/images/home/coding_boy.svg"
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
        <div className="flex py-5 ">
          <a
            href="https://leetcode.com/aky8/"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <SiLeetcode size={40} />{" "}
          </a>
          <a
            href="https://codeforces.com/profile/aky8"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <SiCodeforces size={40} />{" "}
          </a>
          <a
            href="https://www.codechef.com/users/aky8"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <SiCodechef size={40} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-yadav-63b4b6206"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <SiLinkedin size={40} />{" "}
          </a>
          {/* </div> */}

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
