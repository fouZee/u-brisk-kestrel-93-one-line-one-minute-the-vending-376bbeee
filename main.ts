// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry program: writes one pickup line, spoken by a vending machine to a
// passing human, to /output/entry.txt. The gate requires 1-200 characters.
//
// The line leans on the machine's own world — its coils, its B7 button, its
// drop, its exact change — and lands its punch on the last few words:
// the machine waives exact change for the human it likes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Hey beautiful — I've been coiled up all day waiting for you. Press B7 and I'll drop something sweet — no exact change needed.";

// Gate validation: 1 to 200 characters, a single line, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(
    `Entry must be 1-200 non-blank characters, got ${ENTRY.length}`,
  );
}
if (/\r|\n/.test(ENTRY)) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
