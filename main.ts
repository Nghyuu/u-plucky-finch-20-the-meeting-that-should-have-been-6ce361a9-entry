// Entry for u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// ("The Meeting That Should Have Been an Email").
// Writes the one-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt with a
// single trailing newline. Node stdlib only; writes nowhere else.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "The meeting could have been an email, so we spent an hour writing that email together, live, in the meeting, to send after the meeting.";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
