import { KeyCode } from "../../types";

export const preprocessEvent =
  (cb: (codes: KeyCode) => void) => (event: KeyboardEvent) => {
    event.preventDefault();
    cb({
      _key: event.key === " " ? "Space" : event.key,
      keyCode: event.keyCode,
      code: event.code,
    });
  };
