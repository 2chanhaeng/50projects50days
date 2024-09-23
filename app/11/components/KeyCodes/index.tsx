"use client";

import { useEffect, useState } from "react";
import { KeyCode } from "../../types";
import { preprocessEvent } from "./utils";
import { Codes } from "../Codes";

export default function ShowCodes() {
  const [codes, setKeyCode] = useState<KeyCode | null>(null);
  useEffect(() => addEventListener("keydown", preprocessEvent(setKeyCode)), []);
  return (
    <article className="text-2xl">
      {codes ? <Codes {...codes} /> : <Init />}
    </article>
  );
}

function Init() {
  return <h1>Press any key to get the keyCode</h1>;
}
