import { useEffect, useState } from "react";
import { Joke } from "./types";

export const useJoke = () => {
  const [joke, setJoke] = useState<Joke>(INIT_JOKE);
  useEffect(() => {
    fetchJoke().then(setJoke);
  }, []);
  const refresh = () => fetchJoke().then(setJoke);
  return { ...joke, refresh };
};

export const fetchJoke = async () =>
  await fetch(JOKE_API_URL)
    .then((res) => res.json())
    .then((res) => res[0]);

const INIT_JOKE = { setup: "Loading...", punchline: "Hold up!" };

const JOKE_API_URL =
  "https://official-joke-api.appspot.com/jokes/programming/random";
