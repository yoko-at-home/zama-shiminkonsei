import { navItems } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer>
      <ul id="footermenu">
        {navItems.map(({ href, label }) => (
          <li
            key={href}
            style={{
              listStyle: "none",
              margin: "0.5rem 0",
            }}
          >
            <a
              href={href}
              style={{
                color: "#666",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#666" }}>
        © {new Date().getFullYear()} 座間市民混声合唱団
      </p>
    </footer>
  );
}
