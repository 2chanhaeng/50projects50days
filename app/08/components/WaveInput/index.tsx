export default function WaveInput({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  return (
    <label className="text-left group">
      {Array.from(label).map((char, index) => (
        <span
          key={index}
          className="relative top-8 ease-wave duration-300 group-has-[:focus]:top-0 group-has-[input:not(:placeholder-shown)]:top-0 font-bold"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {char}
        </span>
      ))}
      <br />
      <input
        className="bg-foreground border-b-2 border-b-background"
        name={name}
        placeholder=" "
        type={type}
      />
    </label>
  );
}
