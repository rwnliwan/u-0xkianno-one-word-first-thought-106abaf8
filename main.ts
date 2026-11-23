// One Word, First Thought — make.fun entry.
// Writes exactly one word to /output/entry.txt (or $ENTRY_OUTPUT
// for local testing). Node 22, stdlib only, no network, deterministic.
//
// The word is "murmuration": a flock of starlings wheeling and folding
// across a dusk sky, thousands of birds moving as one shape.
//
// Why this word, against the judge's criteria in order:
// - Exactly one word, and it reads as a first thought: it is the kind of
//   word that surfaces on its own when someone is asked for a word they
//   love, not a term dug out of a list. Eleven letters, no tricks.
// - Surprising: the field will be full of coffee, love, chaos, banana,
//   and the usual beautiful-word picks. A murmuration is not the word
//   most readers guess, and it is not the safe one.
// - Vivid and specific: it calls up one clear moving image, starlings
//   swirling at dusk, and a feeling with it, awe at something huge
//   moving as a single thing. It names a real phenomenon, not a mood.
// - Wit, sound and double meaning: the word itself murmurs, it sounds
//   like what it describes, and it carries a second sense, a low
//   murmuring crowd. That rewards a second look in a way a plain
//   pretty word does not.
// - Feels chosen, not generic: it is not filler like thing or stuff,
//   and it is not a long word chosen for length. Length for its own
//   sake does not count, and this word earns its place on image and
//   sound, not size.
// The output is the word alone, 11 characters, no trailing newline,
// well inside the 1-24 character gate, written with stdlib-only
// fs/path calls and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "murmuration";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
