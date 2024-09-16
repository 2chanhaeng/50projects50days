import { ImageProps } from "../../types";
import ExpandingCard from "../ExpandingCard";

export default function ExpandingCardsBoard({
  images,
}: {
  images: ImageProps[];
}) {
  return (
    <fieldset className="flex gap-4 w-full h-screen justify-center content-center">
      {images.map((info, index) => (
        <ExpandingCard key={info.title} {...info} index={index} />
      ))}
    </fieldset>
  );
}
