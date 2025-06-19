import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#111", color: "#fff", padding: "3rem 2rem" }}>
      <p style={{ marginBottom: "2rem" }}>
        I enjoy a bit of everything and have tried my hands at almost everything
        tech related, frequently revisiting cheat tables/trainers with point
        maps, dabbling in basic modding, writing scripts to automate repetitive
        tasks, trying my hands at game making, 3D printing, creating some
        smaller programs, and more that can be seen in my Projects page.
      </p>
      <button
        style={{
          padding: "0.75rem 1.5rem",
          background: "#fff",
          color: "#111",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
        onClick={() => navigate("/projects")}
      >
        View My Projects
      </button>
      <p>
        Scroll around to learn more about who I am, what I’ve built, and what
        I’m learning next.
      </p>
    </div>
  );
}
