// One-Line Robot Wedding Vows — make.fun entry.
// Writes one line of wedding vows for a robot couple to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, till a factory reset do us part.";

// Gate: 1 to 160 characters, not only whitespace, exactly one line.
if (entry.length < 1 || entry.length > 160 || !entry.trim() || entry.includes("\n")) {
  throw new Error("entry fails the 1-160 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
