export default async function Day04() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <form className="p-2 w-fit bg-foreground flex">
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          className="w-0 has-[+label>input:checked]:w-48 has-[+label>input:checked]:mr-2 border-b-2 border-b-gray-500 bg-foreground text-background transition-all duration-300"
        />
        <label>
          🔎
          <input type="checkbox" hidden />
        </label>
      </form>
    </main>
  );
}
