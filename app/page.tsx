import path from "path";
import Link from "next/link";
import { getChildrenPages } from "./lib";

export default function Home() {
  const rootDir = path.join(process.cwd(), "app");
  const pages = getChildrenPages(rootDir);

  return (
    <main>
      <ul>
        {pages.map((subPage) => (
          <li key={subPage}>
            <Link href={`/${subPage}`}>{subPage}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
