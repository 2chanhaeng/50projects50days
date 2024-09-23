import SoundBoard from "./components/SoundBoard";
import { sounds } from "./lib";

export default async function Day09() {
  return (
    <main className="flex justify-center items-center h-screen">
      {sounds.map((sound) => (
        <audio src={`sounds/${sound}.mp3`} key={`${sound}-file`} id={sound} />
      ))}
      <SoundBoard sounds={sounds} />
    </main>
  );
}
