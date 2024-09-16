import { ImageProps } from "../../types";
import Image from "next/image";
import Link from "next/link";

interface ExpandingCardProps extends ImageProps {
  index: number;
}

export default function ExpandingCard({
  title,
  src,
  origin,
  index,
}: ExpandingCardProps) {
  return (
    <label className="relative h-3/4 min-h-[360px] w-16 has-[input:checked]:w-full ease-in-out duration-500">
      <Image
        key={src}
        src={src}
        alt={title}
        fill
        sizes="360px"
        className="object-cover rounded-[32px]"
      />
      <Link
        href={origin}
        className="hidden has-[+input:checked]:inline absolute bottom-2 left-2 bg-black/20 p-2 rounded-[24px] shadow-[0_0_4px_4px_rgba(0,0,0,0.2)]
"
      >
        <span className="text-white text-2xl">{title}</span>
      </Link>
      <input
        type="radio"
        className="hidden"
        name="image"
        defaultChecked={index == 0}
      />
    </label>
  );
}
