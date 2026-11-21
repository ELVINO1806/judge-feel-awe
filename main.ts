import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines: string[] = [
  "One meteor crossed the field, then another,",
  "then a third, the dark thinning above him.",
  "Warm grass held the day under his back.",
  "He counted seven, then five, then three — the gaps",
  "grew wide, the Milky Way turning above him.",
  "He stood steady, the sky still turning above him.",
];

function buildText(): string {
  return lines.join("\n");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildText(), "utf8");
}

main();
