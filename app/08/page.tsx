import WaveButton from "./components/WaveButton";
import WaveInput from "./components/WaveInput";

export default async function Day08() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <form className="p-8 rounded-xl flex flex-col justify-center gap-8 items-stretch bg-foreground text-background text-4xl">
        <h1 className="text-6xl font-bold">Login</h1>
        <WaveInput name="email" label="Email" type="email" />
        <WaveInput name="password" label="Password" type="password" />
        <WaveButton content="Submit" />
      </form>
    </main>
  );
}
