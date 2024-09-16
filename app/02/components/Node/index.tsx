export default function Node({ value }: { value: number }) {
  return (
    <span className="size-16 p-2 my-auto rounded-full border-4 border-gray-300 has-[~label>input:checked]:border-blue-500 text-4xl font-bold text-center ease-linear duration-300">
      {value}
    </span>
  );
}
