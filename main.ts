import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const lines: string[] = [
  "One meteor crossed the field, then another,",
  "then a third, the dark thinning above him.",
  "Warm grass held the day under his back.",
  "He counted seven, then five, then three — the gaps",
  "grew wide, the Milky Way turning above him.",
  "He stood steady, the sky still turning above him.",
];

function buildText(): string {
  return [...lines, ""].join("\n");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = buildText();
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${outPath}`);
}

main();
