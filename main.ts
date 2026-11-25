// One-Line Office Joke: 24-Hour Sprint
// Entry program: writes a single-line joke about office life to
// /output/entry.txt (the grader's gate: 1-200 characters, UTF-8,
// not only whitespace, a single line).
//
// The joke: a labelled lunch stolen from the office fridge, and the
// thief answers in the office's own language.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I put my name on my lunch in the office fridge; someone ate it anyway and left a note: 'Great sandwich — let's circle back.'";

// Self-gate: mirror the competition gate before writing, so the entry
// can never be invalid. The gate requires 1-200 characters of UTF-8
// text, not only whitespace, on a single line.
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  throw new Error(`joke is ${length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke is only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
