import Image from "next/image";
import Link from "next/link";
import NavButton from "../NavButton";

export default function Article() {
  return (
    <article className="px-12 py-24 flex flex-col w-screen gap-2 bg-background origin-top-left has-[:checked]:-rotate-12 ease-in-out duration-300 z-10">
      <h1 className="text-4xl font-bold">Day 03</h1>
      <h2 className="text-sm italic">Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
        dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
        maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
        veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
        Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
        sint nam quas dolor dignissimos in error placeat quae temporibus minus
        optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
        Ducimus consequuntur perferendis consequatur nobis exercitationem
        molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
      </p>
      <Link
        href="https://unsplash.com/photos/nhHx-_zsesc"
        className="relative w-full aspect-square"
      >
        <Image
          src="https://images.unsplash.com/photo-1610112645245-36020fc0e128"
          alt="Brown puppy"
          fill
          sizes="100vw"
          className="absolute object-cover"
        />
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
        dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
        maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
        veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
        Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
        sint nam quas dolor dignissimos in error placeat quae temporibus minus
        optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
        Ducimus consequuntur perferendis consequatur nobis exercitationem
        molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
      </p>
      <NavButton />
    </article>
  );
}
