import Link from "next/link";

export default function Nav({
  menuItems,
}: {
  menuItems: { title: string; href: string }[];
}) {
  return (
    <nav className="fixed bottom-0 left-0 flex flex-col text-background p-4 gap-2 font-sans font-bold text-xl">
      {menuItems.map(({ href, title }, index) => (
        <Link
          href={href}
          key={href}
          style={{
            paddingLeft: `${index * 4}px`,
          }}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
