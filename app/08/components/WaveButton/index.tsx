export default function WaveButton({ content }: { content: string }) {
  return (
    <button className="bg-background text-foreground p-2 rounded-lg group">
      {Array.from(content).map((char, index) => (
        <span
          key={index}
          className="relative ease-wave duration-300 group-hover:font-bold"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {char}
        </span>
      ))}
    </button>
  );
}
