import { ProjectDropdown } from "../components/ProjectDropdown";

// image imports
import placeHolderImg from "../assets/placeholder_img.png";
import frequencyImg1 from "../assets/projects/frequency/createGame.png";
import frequencyImg2 from "../assets/projects/frequency/game1.png";
import frequencyImg3 from "../assets/projects/frequency/game2.png";
import frequencyImg4 from "../assets/projects/frequency/gameSettings.png";
import frequencyImg5 from "../assets/projects/frequency/globalSettings.png";
import frequencyImg6 from "../assets/projects/frequency/homepage.png";

import robotArmImg1 from "../assets/projects/robotArm/robotArm.png";

import solarSysImg1 from "../assets/projects/solarSys/main.png";
import solarSysImg2 from "../assets/projects/solarSys/moon.png";

import rayTracingImg1 from "../assets/projects/rayTracing/v1.png";
import rayTracingImg2 from "../assets/projects/rayTracing/v2.png";

import ballGameImg1 from "../assets/projects/ballGame/ballGame.png";

import PrintImg1 from "../assets/projects/3DPrints/plate2.png";
import PrintImg2 from "../assets/projects/3DPrints/mount3.png";
import PrintImg3 from "../assets/projects/3DPrints/Measurer.png";

import marchingImg1 from "../assets/projects/marchingAlgorithms/circle.png";
import marchingImg2 from "../assets/projects/marchingAlgorithms/CT_scan.png";
import marchingImg3 from "../assets/projects/marchingAlgorithms/meshLab.png";
import marchingImg4 from "../assets/projects/marchingAlgorithms/head.png";

import GameImg1 from "../assets/projects/2DGame/img.png";

export function Projects() {
  return (
    <div
      style={{
        display: "block",
        padding: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div style={{ width: "100%", marginBottom: "2rem" }}>
        <h2>
          This Project page doesn't have every project I've worked on, it just
          has what I feel has enough work put into it to be presentable to
          others. A few of my projects are made in a very confusing way since I
          never planned on releasing them thus not needing to make them
          understandable to anyone besides myself ;)
        </h2>
        <p style={{ color: "red" }}>
          I'll add better descriptions/info to the projects once I got some more
          time.
        </p>
      </div>

      <ProjectDropdown
        title="Frequency controller for tone-based games"
        images={[
          frequencyImg6,
          frequencyImg2,
          frequencyImg4,
          frequencyImg1,
          frequencyImg3,
          frequencyImg5,
        ]}
      >
        <h2>what is it?</h2>
        <p>
          proof of concept project done for Styreportalen that aims to use
          frequencies to use real music instruments as the controller in games
          to enthuse users to learn instruments via gamification. this project
          can be compared to for example Rocksmith, but with the addition that
          the frequency library made by us takes into consideration that
          different instruments have different frequencies to achieve the same
          note, which Rockmsith and existing solutions do not do as they only
          focus on 1-3 instruments.
        </p>
        <h2>what did I do?</h2>
        <p>
          I mainly worked on the front-end aspects and design of the entire
          project including UML models, prototypes, wireframes, etc. I also
          assisted the other team members with problems they had a hard time
          resolving.
        </p>
        <h2>Main frameworks & languages</h2>
        <p>React, React Native, Typescript, Javascript, Svelte, Java.</p>

        <button
          onClick={() =>
            window.open(
              "https://tutti-game-development-preview.web.app/games",
              "_blank"
            )
          }
        >
          Demo: Frequency Controller{" "}
        </button>
        <p style={{ color: "red" }}>
          this link or some aspects of the page might brake as the firebase DB
          used was for testing purposes and will eventually be removed
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Robot Arm" images={[robotArmImg1]}>
        <h2>what is it? </h2>
        <p>
          Basic visual with sliders to transform shapes connected with joints
          using OpenGL.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>I did the entire project based on skeleton code. </p>
        <h2>Main Languages</h2>
        <p> html, javascript. </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/178AoBPiYopZs9Blk03kEswoB3GvNja25",
              "_blank"
            )
          }
        >
          Code: Robot Arm
        </button>
      </ProjectDropdown>
      <ProjectDropdown
        title="Solar System"
        images={[solarSysImg1, solarSysImg2]}
      >
        <h2>what is it? </h2>
        <p>
          A not-to-scale version of our solar system with a basic rotation
          equation for the planets to rotate and also spin around the sun using
          OpenGL. it uses heightmap and bump maps to give a more textured look
          to the planets. and there was an attempt to add a GLB ship model, but
          the angle and rotation of the ship is static, so it only moves with
          the camera but doesn't transform otherwise.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>
          Skeleton code for the sun, earth, and parts of the skybox were already
          in place, as well as the camera. and the ship model was made and added
          by another team member. the rest was added in and done by me.{" "}
        </p>
        <button
          onClick={() =>
            window.open(
              "https://github.com/671432/Oblig6?tab=readme-ov-file",
              "_blank"
            )
          }
        >
          Code: Solar System
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://671432.github.io/Oblig6/PlanetJumper/index.html",
              "_blank"
            )
          }
        >
          Demo: Solar System
        </button>
      </ProjectDropdown>
      <ProjectDropdown
        title="Ray Tracing"
        images={[rayTracingImg1, rayTracingImg2]}
      >
        <h2>what is it? </h2>
        <p>
          In this project I simply followed the Ray Tracing in One Weekend book
          up to chapter 12 using unity and doing everything in HLSL. Personally
          I find V1 (image with darker colors) to look better, but the ray
          tracing is not properly done in some areas, hence why there is a V2.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>Everything. </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1uRlPUOx3fyZresdcVmTeF3e11Jh0dCBn",
              "_blank"
            )
          }
        >
          Code: V1
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1mXZiGEAGNbB74DBQvkwOuhibt-9arA3B",
              "_blank"
            )
          }
        >
          Code: V2
        </button>
      </ProjectDropdown>
      <ProjectDropdown title="Ball Game" images={[ballGameImg1]}>
        <h2>what is it? </h2>
        <p>
          The first "bigger" OpenGL projects I did where the player can control
          a ball to try and avoid hitting the oncoming cubes.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>
          A lot of the basics were already in place, I mainly just added the
          ball, textures, changed the cube spawn and movement, added the red
          "fog", made my own repeating road texture, and added the collision
          detection and game over screen.{" "}
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1wKW3-uPNcFQt37gRndr-63n3cad8lUUg",
              "_blank"
            )
          }
        >
          code: Ball Game
        </button>
      </ProjectDropdown>
      <ProjectDropdown
        title="3D Prints"
        images={[PrintImg1, PrintImg2, PrintImg3]}
      >
        <h2>what is it? </h2>
        <p>
          these are my own designed 3D print files for some parts I needed or
          was requested to make by family and/or friends.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>
          I designed, tested, and refined 3D prints. a E-Scooter number plate
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
          details so it only looks good as a model and not in real life.{" "}
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1C8dnSkuzD6973Ge7iLs4Gq8533ty9Je8",
              "_blank"
            )
          }
        >
          3D files
        </button>
      </ProjectDropdown>
      <ProjectDropdown
        title="Marching Algorithms and CT-Scan"
        images={[marchingImg1, marchingImg2, marchingImg3, marchingImg4]}
      >
        <h2> what is it? </h2>
        <p>
          A "series" of projects, started with the simple 2D visuals (2D view)
          to understand the differences between marching squares and marching
          tetrahedrons. continuing to the next project (Ball.obj) to create and
          save a 3DD .obj file of a sphere. lastly ending with the CT-Scan
          project which takes about 2-3 minutes to create and save a 3D .obj
          file of the combined CT-scans.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>
          I was provided with the skeleton code for the 2D view project which
          already had the quad used as a canvas, and the toggle, sliders, and
          buttons that were not hooked up to anything yet. Everything after
          this, was done by me.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1C0ocnUCBqQNLMuHyn5a-q3vlEmFp8LAZ",
              "_blank"
            )
          }
        >
          code: 2D view
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1eVFnQcxIYxt_uLcMqDyGTLjBNRdpSykt",
              "_blank"
            )
          }
        >
          code: Ball.obj{" "}
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1XJSGBV0DkkJT5IlVh9a4wN5zOe8peZkz",
              "_blank"
            )
          }
        >
          code: CT-Scan{" "}
        </button>
      </ProjectDropdown>
      <ProjectDropdown title="Hotel System" images={[placeHolderImg]}>
        <h2>what is it? </h2>
        <p>
          Visual Studio. 3 projects: ASP for Customer project, Razor for Service
          staff, WPF for Front Desk.
        </p>
        <h2>what did I do?</h2>
        <p>
          This was a 3-man project and I did the front-end for all 3 projects,
          as well as doing the WPF project on my own, and about half of the ASP
          project.
        </p>
        <p>Frameworks & Languages: Visual Studio, ASP, Razor, WPF, C++ </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1O-JuKsVDMPQ0uEXZ684b8YtkIsNYc1kK",
              "_blank"
            )
          }
        >
          code: Hotel System
        </button>
      </ProjectDropdown>
      <ProjectDropdown title="Traffic Light" images={[placeHolderImg]}>
        <h2> what is it? </h2>
        <p>
          in Visual Studio. 2D visualization of an intersection, using bitmaps.{" "}
        </p>
        <h2>what did I do? </h2>
        <p>
          I worked closely with my group member to create the entire project,
          focusing on how to make the bitmap work and designing the basic
          crossroad. There should still be a hidden "easter egg" in the code,
          which is a school buss designed with basic shapes, however we lost the
          time to be able to finetune the logic for the shapes to properly move
          together hence why the bus is not being used in the final product.{" "}
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1TDLuwZmHj5PAbwTrZKUhe0_s1vUB1VHi",
              "_blank"
            )
          }
        >
          code: Traffic Light
        </button>
      </ProjectDropdown>
      <ProjectDropdown title="2D Game Project" images={[GameImg1]}>
        <h2>what is it? </h2>
        <p>My first proper attempt at a 2D game using RPG maker MV</p>
        <h2>what did I do? </h2>
        <p>
          I created the game from scratch, everything besides the sprites is
          done by me including the short story.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1NNmQFwaYJloDhi_TAK9NpUq3fTPliGOG",
              "_blank"
            )
          }
        >
          short demo: Girl in the Forest
        </button>
      </ProjectDropdown>
      <ProjectDropdown title="Portfolio Website">
        <p>
          last but not least, this website. the entire website to show of my
          projects and myself was done by me, I started using google sites to
          make a basic website using the drag and drop feature to place
          elements, and when that was up, I started re-creating that basic
          version properly using typescript. my experiance with typescript is
          and was somewhat limited, but I used this as a learning experiance.
        </p>
        <button
          onClick={() =>
            window.open("https://github.com/671432/JustMe", "_blank")
          }
        >
          Code: Portfolio Website
        </button>
      </ProjectDropdown>
    </div>
  );
}
