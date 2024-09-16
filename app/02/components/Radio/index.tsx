export default function Radio({ checked }: { checked: boolean }) {
  return (
    <label className="absolute cursor-pointer bottom-1/4 text-white bg-blue-500 font-bold after:rounded-lg [&:has(input:checked)+*+*+*+label]:p-2 [&:has(input:checked)+*+*+*+label]:rounded-xl has-[+*+*+*+label>input:checked]:p-2 has-[+*+*+*+label>input:checked]:rounded-xl has-[+*+*+*+label>input:checked]:before:content-['<_prev'] has-[+*+*+*+label>input:checked]:left-1/4 [&:has(input:checked)+*+*+*+label]:after:content-['next_>'] [&:has(input:checked)+*+*+*+label]:right-1/4">
      <input type="radio" name="progress" defaultChecked={checked} hidden />
    </label>
  );
}
