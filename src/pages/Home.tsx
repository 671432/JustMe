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
        I enjoy a bit of everything and have tried my hands at almost everything
        tech related, frequently revisiting cheat tables/trainers with point
        maps, dabbling in basic modding, writing scripts to automate repetitive
        tasks, trying my hands at game making, 3D printing, creating some
        smaller programs, and more that can be seen in my Projects page.
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
