import { useState } from "react";

interface ProjectDropdownProps {
  title: string;
  children: React.ReactNode;
  images?: string[];
}

export function ProjectDropdown({
  title,
  children,
  images,
}: ProjectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        margin: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#222",
        color: "#fff",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "#333",
          color: "#FF69B4",
          textAlign: "left",
          fontSize: "1.1rem",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div style={{ padding: "1rem", backgroundColor: "#111" }}>
          {children}
          {images && images.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem",
                justifyContent: "center",
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`project image ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
