import { readFileSync } from "node:fs";

const profile = readFileSync("profile/README.md", "utf8");

const required = [
  "Harshitha Chittapragada",
  "Founder",
  "https://harshitha.dev",
  "https://www.linkedin.com/in/chittapragadaharshitha/",
];

const forbidden = ["Harshith Vaddiparthy"];
const missing = required.filter((value) => !profile.includes(value));
const stale = forbidden.filter((value) => profile.includes(value));

if (missing.length || stale.length) {
  if (missing.length) console.error(`Missing founder profile content: ${missing.join(", ")}`);
  if (stale.length) console.error(`Stale founder content: ${stale.join(", ")}`);
  process.exit(1);
}

console.log("Agent Mag founder profile contract passed.");
