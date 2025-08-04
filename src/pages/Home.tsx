import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <p style={{ marginBottom: "2rem" }}>
        I’m a versatile developer with a broad interest in technology. <br></br>
        Over the years, I’ve explored a wide range of tech-related projects — 
        from scripting tools that automate daily tasks to creating small applications, 
        experimenting with game development, and working with 3D modeling and printing. <br></br> 
        I enjoy learning new frameworks and tools, and I’m especially drawn to building 
        solutions that make complex systems more efficient or user-friendly. 
        Many of my past projects are available on the Projects page.
      </p>
      <button className="center-button" onClick={() => navigate("/projects")}>
        View My Projects
      </button>
      <p>
        Education vise I've obtained a Vocational Certificate as an Data
        Electronics Technician in 2018, and an Bachelor's degree in Information
        Technology in 2025.
      </p>
    </div>
  );
}
