import Card from "../Card";

export default function Cards({ length }: { length: number }) {
  return (
    <section className="w-full flex flex-col gap-4 items-center overflow-x-hidden">
      {Array.from({ length }, (_, i) => (
        <Card key={i} isLeft={i % 2 === 1} />
      ))}
    </section>
  );
}
