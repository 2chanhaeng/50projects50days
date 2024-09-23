import { KeyCode } from "../../types";

export function Codes(codes: KeyCode) {
  return (
    <>
      {(["_key", "keyCode", "code"] as const)
        .map((key) => [key, codes[key]] as const)
        .map(([key, value]) => (
          <Code key={key} name={key} value={value} />
        ))}
    </>
  );
}

function Code({ name, value }: { name: string; value: string | number }) {
  return (
    <div>
      <span className="font-bold">{name.replace("_", "")}:</span> {value}
    </div>
  );
}
