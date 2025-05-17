import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description:
      "Visualization with D3.js and React with backend in Spring Boot.",
    links: {
      site: "https://github.com/ksm007/EnergyIndependenceVisualization",
      github: "https://github.com/ksm007/EnergyIndependenceVisualization",
    },
    content:
      "From August to December 2024, I developed an interactive full-stack application using Spring Boot and React.js, integrating D3.js to visualize global energy imports, exports, and renewable generation across over 200 countries. The application featured an interactive 3JS-rendered globe and stream graphs for detailed energy trend analysis. I created a scrollable interface with Scrollama that synchronized global energy data with the year, enhancing user interactivity by 40% and ensuring seamless transitions through a linked line chart. Additionally, I implemented a radar chart to succinctly summarize key sustainability metrics, providing users with valuable insights into global energy dynamics.",
  },
  {
    img: project2,
    title: "Project #2",
    description: "Smart Finance tracker with Next.js",
    links: {
      site: "https://ai-finance-tracker-seven.vercel.app/",
      github: "https://github.com/ksm007/ai-finance-tracker",
    },
    content:
      "From October to December 2024, I developed a comprehensive finance platform using React 19, Next.js 15, Tailwind CSS, Supabase, Prisma, Clerk Authentication, Inngest, and Arcjet. The platform allows users to manage accounts, set budgets, and track expenses, leading to a 30% increase in user engagement. I created visual charts and dashboards that enhanced the understanding of financial data, boosting user retention by 25%. Additionally, the platform enables users to set budgets, monitor spending, and receive real-time notifications when approaching budget limits, improving expense tracking efficiency by 40%.",
  },
  {
    img: project3,
    title: "Project #3",
    description: "A Smart Drawing App using React and Gemini API.",
    links: {
      site: "https://github.com/ksm007/draawingApp",
      github: "https://github.com/ksm007/draawingApp",
    },
    content:
      "A drawing application that allows users to draw and find solutions to their problems. This is implemented using Gemini API with image processing. The user can draw on the canvas and the result is displayed in a unique format that is easy to read. This can solve any problem from math to trigonometry to physics and also give explanations to any abstract concept.",
  },
  {
    img: project4,
    title: "Project #4",
    description: "Spotify clone with MERN stack with admin dashboard.",
    links: {
      site: "https://spotify-clone-gi9v.onrender.com/",
      github: "https://github.com/ksm007/Spotify-Clone",
    },
    content:
      "A feature-rich Spotify clone integrated with a real-time chat functionality. Users can browse music, create playlists, and communicate with other users through the chat system. Admin can add, delete, and update songs and playlists. The application is built using the MERN stack and Socket.io for real-time chat. Users can see what other users are listening to in real-time.",
  },
  {
    img: project5,
    title: "Project #5",
    description: "A simple todo app with Angular and Firebase for backend.",
    links: {
      site: "https://angulartodo-ecdd5.web.app/login",
      github: "https://github.com/ksm007/AngularToDo",
    },
    content:
      "This application is a simple todo application that allows users to create, update, and delete tasks. There is user authentication implemented using firebase APIs and various filters for users to view their tasks. Users can also delete already done tasks. It is a web application that is built using Angular and Angular Material.",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>

      {projects.map((project, index) => (
        <Reveal key={project.title}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg transition duration-300"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-color)",
                  }}
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg transition duration-300 flex items-center"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-color)",
                  }}
                >
                  <AiOutlineGithub size={20} className="mr-1" /> Code
                </a>
                <button
                  onClick={() => handleOpenDialog(project)}
                  className="px-4 py-2 rounded-lg transition duration-300"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-color)",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      {selectedProject && (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogOverlay
            style={{
              backgroundColor: "var(--bg-color)",
              opacity: 0.8,
            }}
          />
          <DialogContent
            className="lg:max-w-screen-lg overflow-y-scroll max-h-screen w-full max-w-[560px] p-6 rounded-lg"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            }}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl mb-2">
                {selectedProject.title}
              </DialogTitle>
              <DialogClose onClick={handleCloseDialog} />
            </DialogHeader>

            <div className="p-4">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full object-cover rounded-lg mb-4"
              />
            </div>

            <DialogDescription>
              <p className="font-medium">{selectedProject.content}</p>
            </DialogDescription>

            <DialogFooter className="flex justify-end mt-4">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 rounded-lg transition duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                }}
              >
                Close
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Portfolio;
