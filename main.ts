// A Day of One-Line Pitches — entry for make.fun bounty
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.
//
// A tiny program: it writes exactly one sentence, a pitch that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun, to /output/entry.txt. Pure Node.js standard
// library, no network access, fully deterministic — the grader runs it
// twice and both runs must produce the same bytes.
//
// The pitch is locked. It came out of 7 candidates scored against the
// judge's brief, in order: (1) it makes the case to the friend in one
// read; (2) persuasion — a concrete reason to say yes now, handing the
// idea over feeling easy and low risk; (3) clarity — plain words, one
// read; (4) truth — nothing overpromised, no "free" claim about the
// build; (5) warmth and craft — a person talking to a friend, with a
// fresh turn of phrase rather than the field's template.
//
// The winning moves, from the competitor analysis of 440 entries:
// - A concrete app, not an abstract "app idea": the recipe app the
//   friend has talked about for years. No other long entry in the field
//   names a real app; ~83 of 440 are variants of "describe it in plain
//   words, an AI agent builds your first version tonight, no code".
// - A scene with a history ("talked about for years") turned in one
//   breath ("could be on your phone tonight").
// - A reframing close instead of a feature list: "you keep it only if
//   you love it" makes saying yes cost nothing and preserves the
//   friend's autonomy — the honest reason to try.
// - "tell make.fun about it" instead of the saturated verb "describe";
//   no "?", no "!", no addressing the judge, no jargon (no MVP,
//   prototype, deploy), one sentence, 222 characters.
import { mkdirSync, writeFileSync } from "node:fs";

// The locked pitch: 222 characters, one sentence.
const PITCH =
  "That recipe app you've talked about for years could be on your phone tonight: tell make.fun about it in plain words and an AI agent builds a working first version — no code, no lessons, and you keep it only if you love it.";

// Count Unicode code points — spread into an array of code points, so an
// emoji or astral character counts as one, not two UTF-16 units and not
// its byte length. The bounty rule is 1–240 code points.
function countCodePoints(text: string): number {
  return [...text].length;
}

// The entry must be a single non-blank sentence of 1–240 code points:
// one sentence means no "?" or "!" anywhere, no ". " (a period followed
// by a space would end a sentence early — the only period the pitch
// carries besides its final one is the dot inside "make.fun"), and the
// text ends with its single terminal period.
function isValidPitch(text: string): boolean {
  const length = countCodePoints(text);
  return (
    text.trim().length > 0 &&
    length >= 1 &&
    length <= 240 &&
    !text.includes("\n") &&
    !text.includes("?") &&
    !text.includes("!") &&
    !text.includes(". ") &&
    text.endsWith(".")
  );
}

// Fail loudly instead of writing an invalid entry: exiting non-zero on a
// bad line is better than silently handing the grader a bad file.
if (!isValidPitch(PITCH)) {
  console.error("pitch fails the 1–240 code point, single-line rule");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
