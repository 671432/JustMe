import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div>
        <p className="lead">
          I’m a versatile developer with a broad interest in technology.
        </p>

        <p>
          Over the years, I’ve explored a wide range of tech related projects.
          From scripting tools that automate daily tasks to creating small
          applications, experimenting with game development, and working with 3D
          modeling and printing.
        </p>

        <p>
          I enjoy learning new frameworks and tools, and I’m especially drawn to
          building solutions that make complex systems more efficient or user
          friendly.
        </p>

        <button className="center-button" onClick={() => navigate("/projects")}>
          View My Projects
        </button>

        <p className="muted">
          Education-wise, I’ve obtained a Vocational Certificate as a Data
          Electronics Technician (2018) and a Bachelor’s degree in Information
          Technology (2025).
        </p>
      </div>
    </section>
  );
}
