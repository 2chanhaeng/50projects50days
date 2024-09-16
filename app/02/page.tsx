import { joinElements } from "@/lib/utils";
import Divider from "./components/Divider";
import Node from "./components/Node";
import Radio from "./components/Radio";

const NODES = 5;

export default async function Day02() {
  return (
    <main className="h-screen flex justify-center content-center origin-center">
      {joinElements(Divider)(
        Array.from({ length: NODES }).map((_, i) => (
          <>
            <Node value={i + 1} />
            <Radio checked={i === 0} />
          </>
        ))
      )}
    </main>
  );
}
