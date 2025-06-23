export function Socials() {
  return (
    <>
      <style>{`
        .container {
          text-align: center;
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(255, 105, 180, 0.3);
          max-width: 300px;
          margin: 2rem auto;
        }
        h2 {
          color: hotpink;
          margin-bottom: 30px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
        }
        button {
          display: block;
          width: 220px;
          margin: 12px auto;
          padding: 14px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 8px;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          font-family: 'Poppins', sans-serif;
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(255,255,255,0.2);
        }
        .youtube { background-color: #FF0000; }
        .github { background-color: #0D1117; }
        .linkedin, .shows { background-color: #0A66C2; }
        .projects { background-color: #1f1f1f; }
      `}</style>

      <div className="container">
        <button
          className="youtube"
          onClick={() =>
            window.open("https://www.youtube.com/@MasterRaxer", "_blank")
          }
        >
          YouTube
        </button>
        <button
          className="github"
          onClick={() => window.open("https://github.com/671432", "_blank")}
        >
          GitHub
        </button>
        <button
          className="linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/justinschuttpelz/",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
        <button
          className="projects"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1zZI04zJPrZsZ3K5ZrfB1g8dGby12mlxN",
              "_blank"
            )
          }
        >
          Projects (Google Drive)
        </button>
      </div>
    </>
  );
}
