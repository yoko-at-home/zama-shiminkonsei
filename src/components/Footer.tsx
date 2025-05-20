import Link from "next/link";
import { navItems } from "./Navigation";

export default function Footer() {
  return (
    <footer>
      <ul id="footermenu">
        {navItems.map(({ href, label }) => (
          <li
            style={{
              listStyle: "none",
              marginRight: "15px",
              whiteSpace: "nowrap",
            }}
            key={href}
          >
            <Link style={{ textDecoration: "none" }} href={href}>
              <span style={{ fontSize: "16px" }}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="copy">
        <small>
          Copyright&copy; <a href="index">座間市民混声合唱団</a> All Rights
          Reserved.
        </small>
      </div>
    </footer>
  );
}
