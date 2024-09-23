import { Joke } from "../../types";

export default function JokeDetails({ setup, punchline }: Joke) {
  return (
    <details className="text-2xl border rounded-t-3xl open:rounded-3xl divide-y">
      <summary className="p-4">{setup}</summary>
      <p className="p-4">{punchline}</p>
    </details>
  );
}
