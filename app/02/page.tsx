const NODES = 4;

export default async function Day02() {
  return (
    <main className="h-screen flex justify-center content-center">
      {Array.from({ length: NODES }).map((_, i) => (
        <span
          key={i}
          className="size-16 p-2 rounded-full border-4 border-blue-500 text-4xl font-bold text-center"
        >
          {i + 1}
        </span>
      ))}
    </main>
  );
}
