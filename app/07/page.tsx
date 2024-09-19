import Link from "next/link";

export default async function Day07() {
  return (
    <main className="h-screen flex content-stretch text-white">
      {items.map(({ name, url, color, image }, index) => (
        <section
          key={index}
          className={
            `flex-1 hover:[flex-grow:2] ease-in-out duration-300 ` //+ image
          }
          style={{ backgroundImage: image }}
        >
          <article
            className={
              color +
              " h-screen flex flex-col gap-4 justify-center items-center"
            }
          >
            <h1 className="font-extrabold text-4xl p-2">{name}</h1>
            <Link
              className="border-4 border-white h-16 w-48 text-center content-center font-bold"
              href={url}
            >
              BUY NOW
            </Link>
          </article>
        </section>
      ))}
    </main>
  );
}

const items = [
  {
    name: "Samsung Galaxy S24 Ultra",
    url: "https://www.samsung.com/sec/smartphones/galaxy-s24-ultra/",
    color: "bg-blue-500",
    image: "url('https://chomu.dev/50projects50days/galaxy-s24-ultra.jpg')",
  },
  {
    name: "Apple iPhone 16 Pro",
    url: "https://www.apple.com/iphone-16-pro/",
    color: "bg-gray-500",
    image: "url('https://chomu.dev/50projects50days/iphone-16-pro.jpg')",
  },
];
