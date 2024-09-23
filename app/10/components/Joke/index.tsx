"use client";

import JokeDetails from "../JokeDetails";
import { useJoke } from "../../hooks";

export default function Joke() {
  const { setup, punchline, refresh } = useJoke();

  return (
    <div className="mt-48 h-full w-1/2">
      <JokeDetails setup={setup} punchline={punchline} />
      <button
        className="mt-2 py-2 w-full rounded-3xl bg-blue-500 text-2xl text-white"
        onClick={refresh}
      >
        Refresh
      </button>
    </div>
  );
}
