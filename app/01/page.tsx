import { sample } from "@/lib/random";
import { images } from "./lib";
import CardBoard from "./components/ExpandingCardsBoard";

const CARDS = 5;

export default function Day01() {
  return (
    <main className="h-screen flex justify-center content-center">
      <CardBoard images={sample(CARDS)(images)} />
    </main>
  );
}
