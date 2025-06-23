import { ProjectDropdown } from "../components/ProjectDropdown";
import img1 from "../assets/hero.png";
import img2 from "../assets/react.svg";
import img3 from "/public/logo.jpg";

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
        <p style={{ color: "red" }}>
          TODO: change "link: name" into a button for every project.
        </p>
        <p style={{ color: "red" }}>
          TODO: copy project images into the project and use them.
        </p>
      </div>

      <ProjectDropdown
        title="Frequency controller for tone-based games"
        images={[img1, img2, img3]}
      >
        <p>
          what is it? proof of concept project done for Styreportalen that aims
          to use frequencies to use real music instruments as the controller in
          games to enthuse users to learn instruments via gamification. this
          project can be compared to for example Rocksmith, but with the
          addition that the frequency library made by us takes into
          consideration that different instruments have different frequencies to
          achieve the same note, which Rockmsith and existing solutions do not
          do as they only focus on 1-3 instruments. what did I do? I mainly
          worked on the front-end aspects and design of the entire project
          including UML models, prototypes, wireframes, etc. I also assisted the
          other team members with problems they had a hard time resolving. Main
          frameworks & languages:React, React Native, Typescript, Javascript,
          Svelte, Java. link: Demo (this link or some aspects of the page might
          brake as the firebase DB used was for testing purposes and will
          eventually be removed).
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Robot Arm">
        <p>
          what is it? Basic visual with sliders to transform shapes connected
          with joints using OpenGL. what did I do? I did the entire project
          based on skeleton code. Main Languages: html, javascript. link: Robot
          Arm Project
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Solar System">
        <p>
          what is it? A not-to-scale version of our solar system with a basic
          rotation equation for the planets to rotate and also spin around the
          sun using OpenGL. it uses heightmap and bump maps to give a more
          textured look to the planets. and there was an attempt to add a GLB
          ship model, but the angle and rotation of the ship is static, so it
          only moves with the camera but doesn't transform otherwise. what did I
          do? Skeleton code for the sun, earth, and parts of the skybox were
          already in place, as well as the camera. and the ship model was made
          and added by another team member. the rest was added in and done by
          me. link: Solar_Code | Solar_Demo
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Ray Tracing">
        <p>
          what is it? In this project I simply followed the Ray Tracing in One
          Weekend book up to chapter 12 using unity and doing everything in
          HLSL. Personally I find V1 (image with darker colors) to look better,
          but the ray tracing is not properly done in some areas, hence why
          there is a V2. what did I do? Everything. link:
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Ball Game">
        <p>
          what is it? The first "bigger" OpenGL projects I did where the player
          can control a ball to try and avoid hitting the oncoming cubes. what
          did I do? A lot of the basics were already in place, I mainly just
          added the ball, textures, changed the cube spawn and movement, added
          the red "fog", made my own repeating road texture, and added the
          collision detection and game over screen. link: Ball_Game
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="3D Prints">
        <p>
          what is it? these are my own designed 3D print files for some parts I
          needed or was requested to make by family and/or friends. what did I
          do? I designed, tested, and refined 3D prints. a E-Scooter number
          plate that can be screwed onto the back to have a nice place for the
          number plate that some countries require by law. there is no screw
          hole as I couldn't be sure where exactly to place the plate without
          having it in hand, and later on realized that other ppl might have the
          same issue because of the type of E-Scooter they might have, so to
          keep the model universal, the screw hole will have to be made after
          the fact. a wall mount for a remote controlling the roof mounted light
          in the house. the rounded angle at the bottom on the inside, was so
          that the remote stays upright in the mount, and the 2 holes were pilot
          holes for the screws. a Seam measurer for a family member just because
          it seemed fun to make and it would have a small personalized touch to
          it. the millimeters distances are a little bit wrong because of
          offsets after printing and my printer at the time wasn't able to print
          the necessary details so it only looks good as a model and not in real
          life. link: 3D files
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Marching Algorithms and CT-Scan">
        <p>
          what is it? A "series" of projects, started with the simple 2D visuals
          (2D view) to understand the differences between marching squares and
          marching tetrahedrons. continuing to the next project (Ball.obj) to
          create and save a 3DD .obj file of a sphere. lastly ending with the
          CT-Scan project which takes about 2-3 minutes to create and save a 3D
          .obj file of the combined CT-scans. what did I do? I was provided with
          the skeleton code for the 2D view project which already had the quad
          used as a canvas, and the toggle, sliders, and buttons that were not
          hooked up to anything yet. Everything after this, was done by me.
          link: Ball.obj | CT-Scan | 2D view
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Hotel System">
        <p>
          what is it? Visual Studio. 3 projects: ASP for Customer project, Razor
          for Service staff, WPF for Front Desk. what did I do? This was a 3-man
          project and I did the front-end for all 3 projects, as well as doing
          the WPF project on my own, and about half of the ASP project.
          Frameworks & Languages: Visual Studio, ASP, Razor, WPF, C++ link:
          Hotel_System
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Traffic Light">
        <p>
          what is it? in Visual Studio. 2D visualization of an intersection,
          using bitmaps what did I do? I worked closely with my group member to
          create the entire project, focusing on how to make the bitmap work and
          designing the basic crossroad. There should still be a hidden "easter
          egg" in the code, which is a school buss designed with basic shapes,
          however we lost the time to be able to finetune the logic for the
          shapes to properly move together hence why the bus is not being used
          in the final product. link: TrafficLight
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="2D Game Project">
        <p>
          what is it? My first proper attempt at a 2D game using RPG maker MV
          what did I do? I created the game from scratch, everything besides the
          sprites is done by me including the short story. link: Girl in the
          Forest
        </p>
      </ProjectDropdown>
      <ProjectDropdown title="Portfolio Website">
        <p>
          last but not least, this website. the entire website to show of my
          projects and myself was done by me, I started using google sites to
          make a basic website using the drag and drop feature to place
          elements, and when that was up, I started re-creating that basic
          version properly using typescript. my experiance with typescript is
          and was somewhat limited, but I used this as a learning experiance
          (I'm pretty sure that it won't take someone that long to see where I
          did simple beinner mistaces if you look through the code hehe).
        </p>
      </ProjectDropdown>
    </div>
  );
}
