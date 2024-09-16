import Article from "./components/Article";
import Nav from "./components/Nav";
import { menuItems } from "./lib";

export default async function Day03() {
  return (
    <main className="bg-foreground min-h-screen">
      <Nav menuItems={menuItems} />
      <Article />
    </main>
  );
}
