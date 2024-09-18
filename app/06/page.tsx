import Cards from "./components/Cards";

const cards = 10;

export default async function Day06() {
  return (
    <main className="h-screen">
      <Cards length={cards} />
    </main>
  );
}
