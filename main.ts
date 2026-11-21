import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines: string[] = [
  "One meteor crossed the field, then another,",
  "then another, and the dark above thinned.",
  "The grass held the day's warmth under his back.",
  "He counted seven, eight, nine, and the count",
  "grew slow, the gaps wide, the Milky Way turning.",
  "He stood, dusted his coat, and the field stayed.",
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
