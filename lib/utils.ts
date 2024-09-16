import { randomUUID } from "crypto";

export const join =
  <T>(divider: T) =>
  <S>(items: S[]) =>
    items
      .reduce((acc, item) => [...acc, divider, item], [] as (T | S)[])
      .slice(1);
export const joinElements =
  <P extends object>(Divider: (props: P) => JSX.Element, props: P = {} as P) =>
  (children: JSX.Element[]) =>
    children
      .reduce(
        (acc: JSX.Element[], child) => [
          ...acc,
          Divider({ key: randomUUID(), ...props }),
          child,
        ],
        [] as JSX.Element[]
      )
      .slice(1);
