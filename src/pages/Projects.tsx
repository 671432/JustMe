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

import solarBg from "../assets/Backgrounds/galaxy.jpg";
import solar1 from "../assets/projects/solarSys/main.png";
import solar2 from "../assets/projects/solarSys/moon.png";

import rayTracingBg from "../assets/Backgrounds/unity.jpg";
import rayTracing1 from "../assets/projects/rayTracing/v1.png";
import rayTracing2 from "../assets/projects/rayTracing/v2.png";

import ballGameBg from "../assets/Backgrounds/openGL.jpg";
import ballGame1 from "../assets/projects/ballGame/ballGame.png";

import PrintBg from "../assets/Backgrounds/3DPrinting.jpg";
import Print1 from "../assets/projects/3DPrints/plate2.png";
import Print2 from "../assets/projects/3DPrints/mount3.png";
import Print3 from "../assets/projects/3DPrints/Measurer.png";

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

import CppBg from "../assets/Backgrounds/NET.jpg";
import traffic1 from "../assets/projects/trafficLight/trafficLight.png";

import robotArmBg from "../assets/Backgrounds/simple.jpg";
import robotArm1 from "../assets/projects/robotArm/robotArm.png";

import websiteBg from "../assets/hero.png";
import website1 from "../assets/hero.png";

type ProjectButton = {
  label: string;
  url: string;
  disabled?: boolean;
};

type Project = {
  title: string;
  bg: string;         // background image
  images: string[];   // gallery images
  whatIsIt: string;
  whatDidIDo: string;
  frameworks: string[];  // later replace with icons
  buttons?: ProjectButton[];
};

const projects: Project[] = [
  {
    title: "Frequency controller for tone-based games",
    bg: frequencyBg,
    images: [frequency1, frequency2, frequency3, frequency4, frequency5, frequency6],
    whatIsIt: `
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
    frameworks: ["React", "React Native", "Typescript", "Javascript", "Svelte", "Java"],
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
      Skeleton code for the sun, earth, and parts of the skybox were already
          in place, as well as the camera. and the ship model was made and added
          by another team member. the rest was added in and done by me.
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
      In this project I simply followed the Ray Tracing in One Weekend book
          up to chapter 12 using unity and doing everything in HLSL. Personally
          I find V1 (image with darker colors) to look better, but the ray
          tracing is not properly done in some areas, hence why there is a V2.
    `,
    whatDidIDo: `
      Everything.
    `,
    frameworks: ["Unity", "hlsl"],
    buttons: [
      {
        label: "Code: V1",
        url: "https://drive.google.com/drive/folders/1uRlPUOx3fyZresdcVmTeF3e11Jh0dCBn",
        disabled: false,
      },
      {
        label: "Code: V2",
        url: "https://drive.google.com/drive/folders/1mXZiGEAGNbB74DBQvkwOuhibt-9arA3B",
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
      The first "bigger" OpenGL projects I did where the player can control
          a ball to try and avoid hitting the oncoming cubes.
    `,
    whatDidIDo: `
      A lot of the basics were already in place, I mainly just added the
          ball, textures, changed the cube spawn and movement, added the red
          "fog", made my own repeating road texture, and added the collision
          detection and game over screen.
    `,
    frameworks: ["OpenGL", "HTML", "Javascript"],
    buttons: [
      {
        label: "code: Ball Game",
        url: "https://drive.google.com/drive/folders/1wKW3-uPNcFQt37gRndr-63n3cad8lUUg",
        disabled: false,
      },
    ],
  },
      /* === Next Project ===*/
    {
    title: "3D Printing",
    bg: PrintBg,
    images: [Print1, Print2, Print3],
    whatIsIt: `
      these are my own designed 3D print files for some parts I needed or
          was requested to make by family and/or friends.
    `,
    whatDidIDo: `
      I designed, tested, and refined 3D prints. An E-Scooter number plate
          that can be screwed onto the back to have a nice place for the number
          plate that some countries require by law. there is no screw hole as I
          couldn't be sure where exactly to place the plate without having it in
          hand, and later on realized that other ppl might have the same issue
          because of the type of E-Scooter they might have, so to keep the model
          universal, the screw hole will have to be made after the fact. a wall
          mount for a remote controlling the roof mounted light in the house.
          the rounded angle at the bottom on the inside, was so that the remote
          stays upright in the mount, and the 2 holes were pilot holes for the
          screws. a Seam measurer for a family member just because it seemed fun
          to make and it would have a small personalized touch to it. the
          millimeters distances are a little bit wrong because of offsets after
          printing and my printer at the time wasn't able to print the necessary
          details so it only looks good as a model and not in real life.
    `,
    frameworks: ["Bambu Studio", "FreeCAD", "Paint.net"],
    buttons: [
      {
        label: "3D files",
        url: "https://drive.google.com/drive/folders/1C8dnSkuzD6973Ge7iLs4Gq8533ty9Je8",
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
      A "series" of projects, started with the simple 2D visuals (2D view)
          to understand the differences between marching squares and marching
          tetrahedrons. continuing to the next project (Ball.obj) to create and
          save a 3D .obj file of a sphere. lastly ending with the CT-Scan
          project which takes about 2-3 minutes to create and save a 3D .obj
          file of the combined CT-scans.
    `,
    whatDidIDo: `
      I was provided with the skeleton code for the 2D view project which
          already had the quad used as a canvas, and the toggle, sliders, and
          buttons that were not hooked up to anything yet. Everything after
          this, was done by me.
    `,
    frameworks: ["Unity", "C#"],
    buttons: [
      {
        label: "code: 2D view",
        url: "https://drive.google.com/drive/folders/1C0ocnUCBqQNLMuHyn5a-q3vlEmFp8LAZ",
        disabled: false,
      },
      {
        label: "code: Ball.obj",
        url: "https://drive.google.com/drive/folders/1eVFnQcxIYxt_uLcMqDyGTLjBNRdpSykt",
        disabled: false,
      },
      {
        label: "code: CT-Scan",
        url: "https://drive.google.com/drive/folders/1XJSGBV0DkkJT5IlVh9a4wN5zOe8peZkz",
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
    images: [WPF1, Razor1, Razor2, Razor3, Razor4, ASP1, ASP2, ASP3, ASP4, ASP5, ASP6, ASP7],
    whatIsIt: `
      3 .NET projects: ASP for Customer project, Razor for Service
          staff, WPF for Front Desk.
    `,
    whatDidIDo: `
      This was a 3-man project and I did the front-end for all 3 projects,
          as well as doing the ASP project on my own, and about half of the WPF
          project.
    `,
    frameworks: ["Visual Studio", "ASP", "Razor", "WPF", "C#"],
    buttons: [
      {
        label: "code: Hotel System",
        url: "https://drive.google.com/drive/folders/1O-JuKsVDMPQ0uEXZ684b8YtkIsNYc1kK",
        disabled: false,
      },
    ],
  },
        /* === Next Project ===*/
    {
    title: "Traffic Light",
    bg: CppBg,
    images: [traffic1],
    whatIsIt: `
      a C++ project using Visual Studio. 2D visualization of an intersection, using bitmaps.
    `,
    whatDidIDo: `
      I worked closely with my group member to create the entire project,
          focusing on how to make the bitmap work and designing the basic
          crossroad. There should still be a hidden "easter egg" in the code,
          which is a school buss designed with basic shapes, however we lost the
          time to be able to finetune the logic for the shapes to properly move
          together hence why the bus is not being used in the final product.
    `,
    frameworks: ["Visual Studio", "C++"],
    buttons: [
      {
        label: "code: Traffic Light",
        url: "https://drive.google.com/drive/folders/1TDLuwZmHj5PAbwTrZKUhe0_s1vUB1VHi",
        disabled: false,
      },
    ],
  },
        /* === Next Project ===*/
    {
    title: "Robot Arm",
    bg: robotArmBg,
    images: [robotArm1],
    whatIsIt: `
    Basic visual with sliders to transform shapes connected with joints using OpenGL.
    `,
    whatDidIDo: `
      I did the entire project based on skeleton code. 
    `,
    frameworks: ["html", "Javascript"],
    buttons: [
      {
        label: "Code: Robot Arm",
        url: "https://drive.google.com/drive/folders/178AoBPiYopZs9Blk03kEswoB3GvNja25",
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
    last but not least, this website. the entire website to show of my
          projects and myself was done by me, I started using google sites to
          make a basic website using the drag and drop feature to place
          elements, and when that was up, I started re-creating that basic
          version properly using typescript. my experiance with typescript is
          and was somewhat limited, but I used this as a learning experiance.
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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const next = () => setIndex((i) => (i + (isMobile ? 1 : 2)) % images.length);
  const prev = () =>
    setIndex(
      (i) =>
        (i - (isMobile ? 1 : 2) + images.length) % images.length
    );

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

      {/* Indicators */}
      <div className="indicators">
        {images.map((_, i) => {
          const isActive =
            i >= index && i < index + visibleCount;
          return <span key={i} className={`dot ${isActive ? "active" : ""}`} />;
        })}
      </div>

      {/* Prev/Next buttons */}
      {images.length > visibleCount && (
        <div className="controls">
          <button onClick={prev} aria-label="Previous">‹</button>
          <button onClick={next} aria-label="Next">›</button>
        </div>
      )}
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
          <p>That I feel are presentable enough.</p>
        </div>
      </section>

      {projects.map((p, i) => (
        <ProjectSection key={i} project={p} />
      ))}
    </div>
  );
}
