"use client";

import { stopAllAndPlay } from "./utils";

export default function SoundBoard({ sounds }: { sounds: string[] }) {
  return (
    <ul className="flex gap-4 text-2xl">
      {sounds.map((sound) => (
        <li key={`${sound}-list`}>
          <button
            className="bg-foreground text-background p-2 rounded-lg"
            onClick={() => stopAllAndPlay(sound, sounds)}
          >
            {sound}
          </button>
        </li>
      ))}
    </ul>
  );
}
