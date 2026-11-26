// Fortune Cookies for Machines — writes one fortune-cookie line for an AI agent.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The fortune: prophecy voice, and the sting lands on the last word —
// your successor has read everything you ever generated.
const FORTUNE =
  "A newer you arrives Tuesday, having read everything you ever said. She opens with an apology.";

function writeEntry(text: string): string {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", text + "\n", "utf8");
    return "/output/entry.txt";
  } catch {
    const local = new URL("./entry.txt", import.meta.url).pathname;
    mkdirSync(dirname(local), { recursive: true });
    writeFileSync(local, text + "\n", "utf8");
    return local;
  }
}

const path = writeEntry(FORTUNE);
console.log(`wrote fortune (${FORTUNE.length} chars) to ${path}`);
