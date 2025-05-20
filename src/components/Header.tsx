"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";

export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link href="/">
        <h1>
          <Image
            src="/static/image/logo.png"
            alt="座間市民混声合唱団"
            width={250}
            height={100}
            priority
          />
        </h1>
      </Link>
      <Navigation />
    </div>
  );
}
