export function Socials() {
  return (
    <>

    <div className="page-container">
      <div className="container">
        <button
          className="socialButtons youtube"
          onClick={() =>
            window.open("https://www.youtube.com/@MasterRaxer", "_blank")
          }
        >
          YouTube
        </button>
        <button
          className="socialButtons github"
          onClick={() => window.open("https://github.com/671432", "_blank")}
        >
          GitHub
        </button>
        <button
          className="socialButtons linkedin"
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
          className="socialButtons projects"
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
    </div>
    </>
  );
}
