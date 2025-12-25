import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css"; // add this file (next step)

// import backgrounds/images from src/assets (hashed-safe for GH Pages)
import frequencyBg from "../assets/Backgrounds/notes.jpg";
import frequency1 from "../assets/projects/frequency/createGame.png";
import frequency2 from "../assets/projects/frequency/game1.png";
import frequency3 from "../assets/projects/frequency/game2.png";
import frequency4 from "../assets/projects/frequency/gameSettings.png";
import frequency5 from "../assets/projects/frequency/globalSettings.png";
import frequency6 from "../assets/projects/frequency/homepage.png";

import arBg from "../assets/Backgrounds/3DPrinting.jpg";
import ar1 from "../assets/projects/AR/balloon1.jpeg";
import ar2 from "../assets/projects/AR/furniture1.jpeg";
import ar3 from "../assets/projects/AR/furniture2.jpeg";
import ar4 from "../assets/projects/AR/portal1.jpeg";
import ar5 from "../assets/projects/AR/portal2.jpeg";
import ar6 from "../assets/projects/AR/portal3.jpeg";

import gwBg from "../assets/Backgrounds/NET.jpg";
import gw1 from "../assets/projects/GW2GameLink/GW2.png";

import solarBg from "../assets/Backgrounds/galaxy.jpg";
import solar1 from "../assets/projects/solarSys/main.png";
import solar2 from "../assets/projects/solarSys/moon.png";

import rayTracingBg from "../assets/Backgrounds/unity.jpg";
import rayTracing1 from "../assets/projects/rayTracing/v1.png";
import rayTracing2 from "../assets/projects/rayTracing/v2.png";

import ballGameBg from "../assets/Backgrounds/openGL.jpg";
import ballGame1 from "../assets/projects/ballGame/ballGame.png";

import marchingBg from "../assets/Backgrounds/terrain.jpg";
import marching1 from "../assets/projects/marchingAlgorithms/circle.png";
import marching2 from "../assets/projects/marchingAlgorithms/CT_scan.png";
import marching3 from "../assets/projects/marchingAlgorithms/meshLab.png";
import marching4 from "../assets/projects/marchingAlgorithms/head.png";

import MVGameBg from "../assets/Backgrounds/RPGMaker.jpg";
import MVGame1 from "../assets/projects/2DGame/img.png";

import dotNetBg from "../assets/Backgrounds/NET.jpg";
import WPF1 from "../assets/projects/HotelSystem/WPF.png";
import Razor1 from "../assets/projects/HotelSystem/RazorHome.png";
import Razor2 from "../assets/projects/HotelSystem/RazorMaintenance.png";
import Razor3 from "../assets/projects/HotelSystem/RazorRoomService.png";
import Razor4 from "../assets/projects/HotelSystem/RazorCleaning.png";
import ASP1 from "../assets/projects/HotelSystem/ASPHome.png";
import ASP2 from "../assets/projects/HotelSystem/ASPRegister.png";
import ASP3 from "../assets/projects/HotelSystem/ASPLogin.png";
import ASP4 from "../assets/projects/HotelSystem/ASPRooms.png";
import ASP5 from "../assets/projects/HotelSystem/ASPRoomsFilter.png";
import ASP6 from "../assets/projects/HotelSystem/ASPBooking.png";
import ASP7 from "../assets/projects/HotelSystem/ASPReservation.png";

import websiteBg from "../assets/hero.png";
import website1 from "../assets/hero.png";

type ProjectButton = {
  label: string;
  url: string;
  disabled?: boolean;
};

type Project = {
  title: string;
  bg: string; // background image
  images: string[]; // gallery images
  whatIsIt: string;
  whatDidIDo: string;
  frameworks: string[]; // later replace with icons
  buttons?: ProjectButton[];
};

const projects: Project[] = [
  {
    title: "Frequency controller for tone-based games",
    bg: frequencyBg,
    images: [
      frequency1,
      frequency2,
      frequency3,
      frequency4,
      frequency5,
      frequency6,
    ],
    whatIsIt: `
    NOTE: BUTTON DISABLED DUE TO LOGGIN ISSUES.  
    proof of concept project done for Styreportalen that aims to use
          frequencies to use real music instruments as the controller in games
          to enthuse users to learn instruments via gamification. this project
          can be compared to for example Rocksmith, but with the addition that
          the frequency library made by us takes into consideration that
          different instruments have different frequencies to achieve the same
          note, which Rockmsith and existing solutions do not do as they only
          focus on 1-3 instruments.
    `,
    whatDidIDo: `
      I mainly worked on the front-end aspects and design of the entire
          project including UML models, prototypes, wireframes, etc. I also
          assisted the other team members with problems they had a hard time
          resolving.
    `,
    frameworks: [
      "React",
      "React Native",
      "Typescript",
      "Javascript",
      "Svelte",
      "Java",
    ],
    buttons: [
      {
        label: "Demo: Frequency Controller",
        url: "https://tutti-game-development-preview.web.app/games",
        disabled: true,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "AR Projects",
    bg: arBg,
    images: [ar1, ar2, ar3, ar4, ar5, ar6],
    whatIsIt: `
      3 Seperate Projects to see how AR development would look like. each project has been uploaded as both the Unity project, and also as an APK (link found in repos description).
    `,
    whatDidIDo: `
      initially following a course, but also experimenting with a few aspects and applying the courses somewhat outdated information, to todays versions of the tools.
    `,
    frameworks: ["C#", "HTML", "HLSL", "Unity"],
    buttons: [
      {
        label: "Code: Balloon Game",
        url: "https://github.com/671432/AR_BalloonGame",
        disabled: false,
      },
      {
        label: "Code: Furniture App",
        url: "https://github.com/671432/AR_FurnitureApp",
        disabled: false,
      },
      {
        label: "Code: Portal",
        url: "https://github.com/671432/AR_Portal",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "GW2 Game Link Combiner",
    bg: gwBg,
    images: [gw1],
    whatIsIt: `
      just for funs and giggles; a tool that can combine in-game item names and look like a real item in the chat.

      Players can find item links/IDs via the GW2 wiki, copy it into the tool, and it automatically gives back the new game link with a mostly accurate preview of how it will be in-game using the GW2 API.
    `,
    whatDidIDo: `
      I found an older version of the algorythm posted on a forum (the source is in the Repos description), and re-created that basic version with some more styling elements aswell as turning the original HTML version, into a Typescript version.
    `,
    frameworks: ["Typescript", "CSS"],
    buttons: [
      {
        label: "Demo: Link Combiner",
        url: "https://671432.github.io/GW2gameLinkCombiner/",
        disabled: false,
      },
      {
        label: "Code: Link Combiner",
        url: "https://github.com/671432/GW2gameLinkCombiner",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Solar System",
    bg: solarBg,
    images: [solar1, solar2],
    whatIsIt: `
      A not-to-scale version of our solar system with a basic rotation
          equation for the planets to rotate and also spin around the sun using
          OpenGL. it uses heightmap and bump maps to give a more textured look
          to the planets. and there was an attempt to add a GLB ship model, but
          the angle and rotation of the ship is static, so it only moves with
          the camera but doesn't transform otherwise.
    `,
    whatDidIDo: `
      I built upon the existing foundation (skeleton code for the sun, Earth, skybox, and camera),
      enhancing and expanding the scene. While the ship model was contributed by a teammate, I implemented the remaining elements and brought the environment to life.
    `,
    frameworks: ["OpenGL", "Javascript"],
    buttons: [
      {
        label: "Demo: Solar System",
        url: "https://671432.github.io/SolarSystem/PlanetJumper/index.html",
        disabled: false,
      },
      {
        label: "Code: Solar System",
        url: "https://github.com/671432/SolarSystem",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Ray Tracing",
    bg: rayTracingBg,
    images: [rayTracing1, rayTracing2],
    whatIsIt: `
  This project is a hands-on implementation of the "Ray Tracing in One Weekend" book, up to chapter 12, recreated entirely in Unity using HLSL shaders. 
  The goal was to explore realistic light behavior, reflections, and material shading through ray tracing.
  Version 1 (with darker colors) is my preferred aesthetic, but Version 2 improves correctness in areas where the ray tracing calculations were initially inaccurate.
`,
    whatDidIDo: `
  I implemented all aspects of the project from scratch, including: custom HLSL shaders for ray tracing, implementing material interactions, 
  reflections, and basic lighting, debugging and optimizing the rendering pipeline in Unity, comparing and refining visuals between V1 and V2 to balance aesthetics and physical correctness, 
  managing the scene setup, camera, and object placement to fully showcase the ray-traced environment.
`,
    frameworks: ["Unity", "hlsl"],
    buttons: [
      {
        label: "Code: RayTracing",
        url: "https://github.com/671432/RayTracing",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Ball Game",
    bg: ballGameBg,
    images: [ballGame1],
    whatIsIt: `
      One of my first OpenGL projects: a simple but fast-paced game 
  where the player controls a ball and tries to dodge oncoming cubes. 
  The focus was on building game mechanics and experimenting with rendering 
  techniques like textures, fog, and collision detection.
    `,
    whatDidIDo: `
        While the project provided a basic OpenGL framework, I implemented most of the 
  actual gameplay features, including: Adding and controlling the player ball, creating custom textures (like a repeating road pattern), 
  implementing randomized cube spawning and movement logic, designing and coding the red "fog" visual effect, writing collision detection and building the game-over screen. 
  This project helped me gain hands-on experience with OpenGL, graphics programming basics, and the structure of interactive rendering pipelines.
    `,
    frameworks: ["OpenGL", "HTML", "Javascript"],
    buttons: [
      {
        label: "code: Ball Game",
        url: "https://github.com/671432/BallGame",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Marching Algorithms and CT-Scan",
    bg: marchingBg,
    images: [marching1, marching2, marching3, marching4],
    whatIsIt: `
      This was a small series of projects exploring volume visualization and 3D modeling. 
  It began with a 2D visualization to study the differences between marching squares 
  and marching tetrahedrons, then moved on to generating and exporting a 3D sphere 
  as a .obj file, and finally culminated in a CT-scan reconstruction project that 
  combined multiple scans into a single 3D .obj file, a process that takes about 
  2–3 minutes to complete.
    `,
    whatDidIDo: `
      For the 2D visualization project, I was given skeleton code that included a 
  simple quad canvas along with unconnected toggles, sliders, and buttons. 
  I implemented all the functionality beyond this starting point, handling 
  the logic, interactivity, and progression into the later 3D projects.
    `,
    frameworks: ["Unity", "C#"],
    buttons: [
      {
        label: "code: 2D view",
        url: "https://github.com/671432/MarshingSquares",
        disabled: false,
      },
      {
        label: "code: Ball.obj",
        url: "https://github.com/671432/3D_Sphere_Object",
        disabled: false,
      },
      {
        label: "code: CT-Scan",
        url: "https://github.com/671432/Generate_CT_Scan",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "2D Game Project",
    bg: MVGameBg,
    images: [MVGame1],
    whatIsIt: `
      My first proper attempt at a 2D game using RPG maker MV
    `,
    whatDidIDo: `
      I created the game from scratch, everything besides the sprites is
          done by me including the short story.
    `,
    frameworks: ["RPG Maker MV", "Javascript"],
    buttons: [
      {
        label: "short demo: Girl in the Forest",
        url: "https://drive.google.com/drive/folders/1NNmQFwaYJloDhi_TAK9NpUq3fTPliGOG",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Hotel System",
    bg: dotNetBg,
    images: [
      WPF1,
      Razor1,
      Razor2,
      Razor3,
      Razor4,
      ASP1,
      ASP2,
      ASP3,
      ASP4,
      ASP5,
      ASP6,
      ASP7,
    ],
    whatIsIt: `
      A collection of three .NET applications built for different user roles: 
  an ASP.NET project for managing customer interactions, a Razor-based 
  system for service staff, and a WPF desktop client designed for the 
  front desk.
    `,
    whatDidIDo: `
      This was a team project with three members, where I handled the front-end 
  development across all applications to ensure a consistent and user-friendly 
  experience. In addition, I was fully responsible for the ASP.NET project 
  and contributed roughly half of the implementation on the WPF application.
    `,
    frameworks: ["Visual Studio", "ASP", "Razor", "WPF", "C#"],
    buttons: [
      {
        label: "code: Hotel System",
        url: "https://github.com/671432/HotelSystem",
        disabled: false,
      },
    ],
  },
  /* === Next Project ===*/
  {
    title: "Portfolio Website",
    bg: websiteBg,
    images: [website1],
    whatIsIt: `
    now, this isn't everything, but it is everything I'll put on this website, 
      this website that I made to show of my projects. I started using google sites to
          make a basic website using the drag and drop feature to place
          elements, and when that was up, I started re-creating that basic
          version properly using typescript.
    `,
    whatDidIDo: `
      Everything 
    `,
    frameworks: ["React", "Typescript", "CSS"],
    buttons: [
      {
        label: "Code: Portfolio Website",
        url: "https://github.com/671432/JustMe",
        disabled: false,
      },
    ],
  },
];

function ProjectGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1150;

  const next = () => setIndex((i) => (i + (isMobile ? 1 : 2)) % images.length);
  const prev = () =>
    setIndex((i) => (i - (isMobile ? 1 : 2) + images.length) % images.length);

  const visibleCount = isMobile ? 1 : 2; // show 1 image on mobile, 2 on desktop
  const visibleImages = images.slice(index, index + visibleCount);

  return (
    <div className="project-gallery">
      <div className="images">
        {visibleImages.map((img) => (
          <motion.img
            key={img}
            src={img}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>

      <div className="gallery-footer">
        <div className="indicators">
          {images.map((_, i) => {
            const isActive = i >= index && i < index + visibleCount;
            return (
              <span key={i} className={`dot ${isActive ? "active" : ""}`} />
            );
          })}
        </div>

        {images.length > visibleCount && (
          <div className="controls">
            <button onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectSection({ project }: { project: Project }) {
  return (
    <motion.section
      className="project-section snap"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.6)), url(${project.bg})`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-inner">
        <h2>{project.title}</h2>
        <h3>What is it?</h3>
        <p>{project.whatIsIt}</p>

        <h3>What did I do?</h3>
        <p>{project.whatDidIDo}</p>

        <h3>Main frameworks & languages</h3>
        <ul className="project-frameworks">
          {project.frameworks.map((fw, j) => (
            <li key={j}>{fw}</li>
          ))}
        </ul>

        {project.buttons && (
          <div className="buttons">
            {project.buttons.map((btn, j) => (
              <button
                key={j}
                disabled={btn.disabled}
                onClick={() => window.open(btn.url, "_blank")}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
        <ProjectGallery images={project.images} />
      </div>
    </motion.section>
  );
}

export function Projects() {
  return (
    <div className="projects-root">
      {/* Hero for Projects page */}
      <section className="snap">
        <div className="hero-section">
          <h1>Projects</h1>
        </div>
      </section>

      {projects.map((p, i) => (
        <ProjectSection key={i} project={p} />
      ))}
    </div>
  );
}
