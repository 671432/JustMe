import GitHubIcon from "../assets/icons/github.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import DriveIcon from "../assets/icons/googledrive.svg";

interface Social {
  name: string;
  url: string;
  Icon: string;
}

export function Socials() {
  const socials: Social[] = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@MasterRaxer",
      Icon: YouTubeIcon,
    },
    { name: "GitHub", url: "https://github.com/671432", Icon: GitHubIcon },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/justinschuttpelz/",
      Icon: LinkedInIcon,
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/drive/folders/1zZI04zJPrZsZ3K5ZrfB1g8dGby12mlxN",
      Icon: DriveIcon,
    },
  ];

  return (
    <div className="page-container">
      <div className="container social-container">
        {socials.map(({ name, url, Icon }) => (
          <div key={name} className="social-item">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
              title={url}
            >
              <img src={Icon} alt={name} className="icon" />
            </a>
            <span className="label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
