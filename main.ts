import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "His father carried him across the night field,",
  "five meteors, four, three, two, one, gone.",
  "His cheek stayed warm against a wool coat.",
  "The Milky Way arched wide and held them both.",
  "He was set down gently; his feet found earth.",
  "Above him the stars kept turning in the dark.",
];

function buildText(): string {
  return [...lines, ""].join("\n");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = buildText();
  writeFileSync(join(outDir, "entry.txt"), text, "utf-8");
  console.log(`Wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
